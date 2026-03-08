# Next.js Static Deployment Contract (S3 + CloudFront)

## Scope

This document defines how the migrated Next.js app is built and deployed while preserving static hosting behavior.

## Build artifact

- Next app path: `apps/next/`
- Public assets source: `static/`
- Public assets target: `apps/next/public/`
- Exported static output: `apps/next/out/`

## Required commands

From repository root:

```bash
npm run next:install
npm run next:build
npm run deploy
```

`next:build` includes asset sync via `next:sync-static` and then runs the Next static build.
`deploy` runs `next:build`, then executes AWS S3 sync and CloudFront invalidation using `S3_BUCKET_NAME` and `CLOUDFRONT_DISTRIBUTION_ID` environment variables.

## Deployment commands (AWS CLI)

Set your target values:

- `S3_BUCKET_NAME` (for example: `danieldev`)
- `CLOUDFRONT_DISTRIBUTION_ID` (for example: `EFIL5MU5HFHL4`)

Deploy:

```bash
aws s3 sync "apps/next/out" "s3://<S3_BUCKET_NAME>" --delete
aws cloudfront create-invalidation --distribution-id "<CLOUDFRONT_DISTRIBUTION_ID>" --paths "/*"
```

## URL behavior parity requirements

- Keep trailing slash behavior for page URLs.
- Keep `/docs/*` downloadable file URLs.
- Keep `/uploads/cv.pdf` rewrite to `/docs/cv.pdf` at edge/web tier.
- Keep `/in/` redirect to LinkedIn URL at edge/web tier.

## Pre-deploy checklist

- `npm test` passes.
- `npm run test:static-assets` passes.
- `npm run next:build` succeeds and generates expected bilingual static routes.
- `apps/next/out/` contains required assets and docs files.
