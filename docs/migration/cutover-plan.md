# Gatsby to Next.js Cutover Plan (Phase 1)

## Objective

Switch production hosting from Gatsby output to Next.js static export only after parity gate checks pass.

## Preconditions

- `npm test` passes.
- `npm run next:build` passes.
- `npm run parity:verify-phase1` passes.
- Manual smoke check is completed for key bilingual routes.

## Dry run (staging)

1. Build Next static output from repository root:
   - `npm run next:build`
2. Publish `apps/next/out/` to staging S3 bucket.
3. Validate route behavior and downloadable files:
   - `/`, `/en/`, `/proyectos/`, `/en/projects/`
   - at least one route under `/proyectos/<slug>/` and `/en/projects/<slug>/`
   - `/docs/cv.pdf`
4. Confirm edge behavior in staging:
   - `/in/` redirects to LinkedIn.
   - `/uploads/cv.pdf` rewrites to `/docs/cv.pdf`.

## Production cutover

1. Build and sync assets:
   - `npm run next:build`
2. Deploy static output:
   - `aws s3 sync "apps/next/out" "s3://<S3_BUCKET_NAME>" --delete`
3. Invalidate CloudFront cache:
   - `aws cloudfront create-invalidation --distribution-id "<CLOUDFRONT_DISTRIBUTION_ID>" --paths "/*"`
4. Run post-deploy smoke checks.

## Rollback plan

1. Keep last known good Gatsby build artifact accessible.
2. Re-sync Gatsby artifact to S3 bucket.
3. Invalidate CloudFront cache again.
4. Open incident note with parity gaps found during failed cutover.

## Exit criteria to remove Gatsby

- Phase 1 parity gate remains green across consecutive builds.
- Stakeholder sign-off on route/content/SEO parity.
- Deployment runbook for Next static hosting is confirmed.
