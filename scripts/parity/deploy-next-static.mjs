import { spawnSync } from 'node:child_process'

function run(command, args) {
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    shell: process.platform === 'win32',
  })

  if (result.status !== 0) {
    process.exit(result.status || 1)
  }
}

function getRequiredEnv(name) {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

function main() {
  const bucket = getRequiredEnv('S3_BUCKET_NAME')
  const distributionId = getRequiredEnv('CLOUDFRONT_DISTRIBUTION_ID')

  run('aws', ['s3', 'sync', 'out', `s3://${bucket}`, '--delete'])
  run('aws', [
    'cloudfront',
    'create-invalidation',
    '--distribution-id',
    distributionId,
    '--paths',
    '/*',
  ])
}

try {
  main()
} catch (error) {
  process.stderr.write(`${error.message}\n`)
  process.exit(1)
}
