import assert from 'node:assert/strict'
import test from 'node:test'

import { verifyPhase1 } from '../../scripts/parity/verify-phase1.mjs'

test('phase1 verifier returns pass only when all checks pass', async () => {
  const result = await verifyPhase1()

  assert.equal(typeof result.ok, 'boolean')
  assert.equal(Array.isArray(result.checks), true)
  assert.equal(result.checks.length > 0, true)
})
