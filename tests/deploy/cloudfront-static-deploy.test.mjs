import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

import {
  createDeployPlan,
  getRequiredEnv,
  parseCliArgs,
} from '../../scripts/deploy/cloudfront-static.mjs'

test('getRequiredEnv throws when value is missing', () => {
  assert.throws(
    () => getRequiredEnv({}, 'S3_BUCKET_NAME'),
    /Missing required environment variable: S3_BUCKET_NAME/
  )
})

test('getRequiredEnv returns configured value', () => {
  const env = { S3_BUCKET_NAME: 'danieldev' }
  assert.equal(getRequiredEnv(env, 'S3_BUCKET_NAME'), 'danieldev')
})

test('parseCliArgs enables dry run mode', () => {
  assert.equal(parseCliArgs(['--dry-run']).dryRun, true)
  assert.equal(parseCliArgs([]).dryRun, false)
})

test('createDeployPlan returns sync and invalidation commands', () => {
  const plan = createDeployPlan({
    bucket: 'danieldev',
    distributionId: 'EFIL5MU5HFHL4',
    dryRun: false,
  })

  assert.deepEqual(plan.syncArgs, [
    's3',
    'sync',
    'out',
    's3://danieldev',
    '--delete',
  ])
  assert.deepEqual(plan.invalidationArgs, [
    'cloudfront',
    'create-invalidation',
    '--distribution-id',
    'EFIL5MU5HFHL4',
    '--paths',
    '/*',
  ])
})

test('createDeployPlan adds dryrun flag and skips invalidation', () => {
  const plan = createDeployPlan({
    bucket: 'danieldev',
    distributionId: 'EFIL5MU5HFHL4',
    dryRun: true,
  })

  assert.deepEqual(plan.syncArgs, [
    's3',
    'sync',
    'out',
    's3://danieldev',
    '--delete',
    '--dryrun',
  ])
  assert.equal(plan.invalidationArgs, null)
})

test('.env deploy example includes required keys', async () => {
  const file = await readFile(
    new URL('../../.env.deploy.example', import.meta.url),
    'utf8'
  )

  assert.equal(file.includes('S3_BUCKET_NAME='), true)
  assert.equal(file.includes('CLOUDFRONT_DISTRIBUTION_ID='), true)
})

test('package scripts expose deploy:easy command', async () => {
  const packageJson = await readFile(
    new URL('../../package.json', import.meta.url),
    'utf8'
  )

  assert.equal(packageJson.includes('"deploy:easy"'), true)
  assert.equal(
    packageJson.includes('node scripts/deploy/easy-deploy.mjs'),
    true
  )
})

test('easy deploy orchestrator runs checks and deploy flow', async () => {
  const source = await readFile(
    new URL('../../scripts/deploy/easy-deploy.mjs', import.meta.url),
    'utf8'
  )

  assert.equal(source.includes("runNpmScript('test')"), true)
  assert.equal(source.includes("runNpmScript('next:build')"), true)
  assert.equal(source.includes("runNpmScript('parity:verify-phase1')"), true)
  assert.equal(source.includes("runNpmScript('deploy:dry-run')"), true)
  assert.equal(source.includes("runNpmScript('deploy')"), true)
  assert.equal(source.includes('cloudfront'), true)
  assert.equal(source.includes('list-invalidations'), true)
})
