import { spawnSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

export function parseCliArgs(args) {
  let dryRun = false

  for (const arg of args) {
    if (arg === '--dry-run') {
      dryRun = true
      continue
    }

    throw new Error(`Unknown argument: ${arg}`)
  }

  return { dryRun }
}

export function getRequiredEnv(env, name) {
  const value = env[name]
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

export function createDeployPlan({ bucket, distributionId, dryRun }) {
  const syncArgs = ['s3', 'sync', 'out', `s3://${bucket}`, '--delete']
  if (dryRun) {
    syncArgs.push('--dryrun')
  }

  return {
    syncArgs,
    invalidationArgs: dryRun
      ? null
      : [
          'cloudfront',
          'create-invalidation',
          '--distribution-id',
          distributionId,
          '--paths',
          '/*',
        ],
  }
}

function run(command, args) {
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    shell: process.platform === 'win32',
  })

  if (result.status !== 0) {
    process.exit(result.status || 1)
  }
}

function verifyBuildOutputExists() {
  if (!existsSync('out')) {
    throw new Error(
      'Missing static output folder: out/. Run "npm run next:build" before deploy.'
    )
  }
}

function verifyAwsCliIsAvailable() {
  run('aws', ['--version'])
}

export function runCli(args = process.argv.slice(2), env = process.env) {
  const { dryRun } = parseCliArgs(args)
  const bucket = getRequiredEnv(env, 'S3_BUCKET_NAME')
  const distributionId = getRequiredEnv(env, 'CLOUDFRONT_DISTRIBUTION_ID')

  verifyBuildOutputExists()
  verifyAwsCliIsAvailable()

  const plan = createDeployPlan({
    bucket,
    distributionId,
    dryRun,
  })

  run('aws', plan.syncArgs)

  if (plan.invalidationArgs) {
    run('aws', plan.invalidationArgs)
    return
  }

  process.stdout.write('Dry run enabled: skipping CloudFront invalidation.\n')
}

const isDirectRun =
  process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]

if (isDirectRun) {
  try {
    runCli()
  } catch (error) {
    process.stderr.write(`${error.message}\n`)
    process.exit(1)
  }
}
