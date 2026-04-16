import { existsSync, readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'

function run(command, args) {
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    shell: false,
    env: process.env,
  })

  if (result.error) {
    throw result.error
  }

  if (result.status !== 0) {
    process.exit(result.status || 1)
  }
}

function runOptional(command, args) {
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    shell: false,
    env: process.env,
  })

  if (result.error?.code === 'ENOENT') {
    process.stderr.write(
      `Skipping optional command; executable not found: ${command}\n`
    )
    return
  }

  if (result.error) {
    throw result.error
  }
}

function runNpm(args) {
  const npmExecPath = process.env.npm_execpath

  if (npmExecPath) {
    run(process.execPath, [npmExecPath, ...args])
    return
  }

  run('npm', args)
}

function parseEnvFile(content) {
  const env = {}

  for (const rawLine of content.split(/\r?\n/u)) {
    const line = rawLine.trim()

    if (!line || line.startsWith('#')) {
      continue
    }

    const separatorIndex = line.indexOf('=')
    if (separatorIndex <= 0) {
      continue
    }

    const key = line.slice(0, separatorIndex).trim()
    let value = line.slice(separatorIndex + 1).trim()

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }

    env[key] = value
  }

  return env
}

function loadDeployEnv() {
  if (!existsSync('.env.deploy')) {
    throw new Error(
      'Missing .env.deploy. Create it from .env.deploy.example before running deploy:easy.'
    )
  }

  const content = readFileSync('.env.deploy', 'utf8')
  const parsedEnv = parseEnvFile(content)

  for (const [key, value] of Object.entries(parsedEnv)) {
    process.env[key] = value
  }
}

function requireEnv(name) {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

function runNpmScript(scriptName) {
  runNpm(['run', scriptName])
}

function runCli() {
  loadDeployEnv()

  const distributionId = requireEnv('CLOUDFRONT_DISTRIBUTION_ID')
  requireEnv('S3_BUCKET_NAME')

  runNpmScript('test')
  runNpmScript('next:build')
  runNpmScript('parity:verify-phase1')
  runNpmScript('deploy:dry-run')
  runNpmScript('deploy')

  runOptional('aws', [
    'cloudfront',
    'list-invalidations',
    '--distribution-id',
    distributionId,
    '--max-items',
    '3',
  ])
}

try {
  runCli()
} catch (error) {
  process.stderr.write(`${error.message}\n`)
  process.exit(1)
}
