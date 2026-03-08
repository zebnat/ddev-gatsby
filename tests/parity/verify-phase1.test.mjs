import assert from 'node:assert/strict'
import test from 'node:test'

import { verifyPhase1 } from '../../scripts/parity/verify-phase1.mjs'

test('phase1 verifier returns pass only when all checks pass', async () => {
  const result = await verifyPhase1()

  assert.equal(typeof result.ok, 'boolean')
  assert.equal(Array.isArray(result.checks), true)
  assert.equal(result.checks.length > 0, true)
})

test('phase1 verifier requires decommission readiness document', async () => {
  const result = await verifyPhase1()
  const requiredDocsCheck = result.checks.find(
    (check) => check.id === 'required-docs'
  )

  assert.equal(requiredDocsCheck.ok, true)
  assert.equal(requiredDocsCheck.details.includes('(4 files)'), true)
})
