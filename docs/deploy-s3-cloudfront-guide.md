# Deploy Guide (S3 + CloudFront) - Existing Scripted Flow

This project already includes a safe deploy flow that builds the static site, syncs it to S3, and invalidates CloudFront.

- Deploy script: `scripts/deploy/cloudfront-static.mjs`
- NPM commands: `npm run deploy` and `npm run deploy:dry-run`
- Static output: `out/` (from `next build` with static export)

---

## 1) Prerequisites

- Node.js + npm installed
- AWS CLI v2 installed
- AWS authenticated (SSO/profile/access keys)
- IAM permissions:
  - S3: `ListBucket`, `PutObject`, `DeleteObject`
  - CloudFront: `CreateInvalidation`

If AWS CLI v2 is not installed yet, follow AWS official docs:

- Windows: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
- macOS: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
- Linux: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

Quick check after install:

```bash
aws --version
```

---

## 2) Configure deploy target (one-time)

Create local deploy env file from template:

```bash
# Bash
cp .env.deploy.example .env.deploy

# Windows CMD
copy .env.deploy.example .env.deploy
```

The template currently includes known production targets:

- `S3_BUCKET_NAME=danieldev`
- `CLOUDFRONT_DISTRIBUTION_ID=EFIL5MU5HFHL4`

Update only if deploying to another bucket/distribution.

---

## 3) Verify AWS session and target access

```bash
aws sts get-caller-identity
aws s3api head-bucket --bucket danieldev
aws cloudfront get-distribution --id EFIL5MU5HFHL4
```

If these pass, your auth and target access are ready.

---

## 4) Install dependencies

```bash
npm install
```

---

## 5) Load deploy env vars in current shell

```bash
# Bash (exports all vars from .env.deploy)
set -a
source .env.deploy
set +a
```

If your shell reports `source: command not found`, use the POSIX form instead:

```bash
set -a
. .env.deploy
set +a
```

```cmd
:: Cmd.exe (from repository root)
source .env.deploy
```

```powershell
# PowerShell
Get-Content .env.deploy | ForEach-Object {
  if ($_ -match '^(\w+)=(.*)$') {
    [System.Environment]::SetEnvironmentVariable($matches[1], $matches[2], 'Process')
  }
}
```

---

## 6) Run pre-deploy quality checks (recommended)

```bash
npm test
npm run next:build
npm run parity:verify-phase1
```

These checks validate parity and static export stability before deployment.

---

## 7) Dry run first (safe preview)

```bash
npm run deploy:dry-run
```

What this does:

1. Builds static output (`out/`)
2. Previews S3 sync changes
3. Skips CloudFront invalidation in dry-run mode

---

## 8) Deploy to production

```bash
npm run deploy
```

What this does:

1. Builds static output (`out/`)
2. Runs `aws s3 sync out s3://$S3_BUCKET_NAME --delete`
3. Runs CloudFront invalidation: `/*`

---

## 9) Post-deploy verification

- Open:
  - `/` (Spanish default)
  - `/en/` (English route parity)
- Optional AWS checks:

```bash
aws cloudfront list-invalidations --distribution-id EFIL5MU5HFHL4 --max-items 5
aws s3 ls s3://danieldev --recursive
```

---

## Troubleshooting

### Missing env vars

Error:

- `Missing required environment variable: S3_BUCKET_NAME`
- `Missing required environment variable: CLOUDFRONT_DISTRIBUTION_ID`

Fix:

- Ensure `.env.deploy` is loaded in the current shell session.

### Missing static output

Error:

- `Missing static output folder: out/. Run "npm run next:build" before deploy.`

Fix:

- Run `npm run next:build` (or use `npm run deploy`, which already builds first).

### AWS CLI not found / auth failures

Fix:

- Confirm AWS CLI install: `aws --version`
- Re-authenticate (`aws sso login` or profile/credential refresh)
- Re-run access checks from Step 3

### `source: command not found` in Bash-like shells

Fix:

- Use `. .env.deploy` (dot + space) instead of `source .env.deploy`
- Keep `set -a`/`set +a` around load so variables are exported for `npm run deploy`

### `source` is not recognized in Cmd.exe

Fix:

- Run commands from the repository root (where `source.cmd` exists)
- Then run `source .env.deploy`

---

## Daily deploy checklist

1. Pull latest code
2. `npm install` (if dependencies changed)
3. Load `.env.deploy`
4. `npm run deploy:dry-run`
5. `npm run deploy`
6. Verify `/` and `/en/`
