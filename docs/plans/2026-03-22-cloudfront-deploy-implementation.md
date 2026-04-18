# CloudFront Deploy Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a dedicated, safe-by-default CloudFront deploy mechanism for the Next.js static export, with required env vars and a fillable default env template.

**Architecture:** Move deployment logic to `scripts/deploy/cloudfront-static.mjs`, keep runtime strict (`S3_BUCKET_NAME` and `CLOUDFRONT_DISTRIBUTION_ID` required), keep a compatibility wrapper at the legacy script path, and wire deploy scripts through `package.json`.

**Tech Stack:** Node.js ESM scripts, AWS CLI (`aws s3 sync`, `aws cloudfront create-invalidation`), Node test runner.

---

### Task 1: Add failing tests for deploy behavior

**Files:**

- Create: `tests/deploy/cloudfront-static-deploy.test.mjs`

Steps:

1. Write tests for missing env var validation.
2. Write tests for S3 sync and CloudFront invalidation command args.
3. Write tests for dry-run behavior.
4. Run targeted test and confirm failure.

### Task 2: Implement dedicated deploy script and compatibility shim

**Files:**

- Create: `scripts/deploy/cloudfront-static.mjs`
- Modify: `scripts/parity/deploy-next-static.mjs`

Steps:

1. Implement strict env validation, aws cli preflight, and deploy command execution.
2. Add `--dry-run` support.
3. Keep compatibility by delegating old parity script to the new script.
4. Run targeted test and confirm pass.

### Task 3: Add env template and script wiring

**Files:**

- Create: `.env.deploy.example`
- Modify: `.gitignore`
- Modify: `package.json`

Steps:

1. Add fillable env template with required keys.
2. Ignore local env files while keeping example tracked.
3. Update deploy scripts to use new deploy entrypoint and dry-run variant.

### Task 4: Update documentation

**Files:**

- Modify: `README.md`
- Modify: `docs/migration/README.md`

Steps:

1. Document deploy env and commands in README.
2. Record known production values (`danieldev`, `EFIL5MU5HFHL4`) as documented values only.
3. Update migration deferred item now that deploy mechanism exists.

### Task 5: Verification

Steps:

1. Run `npm test`.
2. Run `npm run next:build`.
3. Run `npm run parity:verify-phase1`.
