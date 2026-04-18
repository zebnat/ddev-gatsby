# danieldev.es

Personal website built with Next.js static export.

## Stack

- Next.js App Router (static export)
- React 19
- Markdown-driven portfolio content from `data/portfolio/**/*.md`

## Run locally

```bash
npm install
npm run next:build
```

For development:

```bash
npm run next:dev
```

## Verification

```bash
npm test
npm run next:build
npm run parity:verify-phase1
```

## Deploy (S3 + CloudFront)

You need two kinds of configuration to deploy:

- Non-secret deploy target values (safe to document):
  - `S3_BUCKET_NAME=danieldev`
  - `CLOUDFRONT_DISTRIBUTION_ID=EFIL5MU5HFHL4`
- Secret AWS authentication (must stay private):
  - Either an AWS profile/SSO session (`aws sso login` or `aws configure` + `AWS_PROFILE`)
  - Or env credentials (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, optional `AWS_SESSION_TOKEN`)

1. Create a local deploy env file from the template:

```bash
# Bash
cp .env.deploy.example .env.deploy

# Windows CMD
copy .env.deploy.example .env.deploy
```

2. Fill required values in `.env.deploy`:

- `S3_BUCKET_NAME`
- `CLOUDFRONT_DISTRIBUTION_ID`

The template already contains current production values. Change them only if you deploy to another bucket/distribution.

3. Load those env vars in your shell and run deploy:

```bash
# Bash
source .env.deploy
npm run deploy

# Windows PowerShell
Get-Content .env.deploy | ForEach-Object {
  if ($_ -match '^(\w+)=(.*)$') {
    [System.Environment]::SetEnvironmentVariable($matches[1], $matches[2], 'Process')
  }
}
npm run deploy
```

Optional dry run:

```bash
npm run deploy:dry-run
```

If AWS auth is not present, deploy will fail even if bucket and distribution env vars are set.
