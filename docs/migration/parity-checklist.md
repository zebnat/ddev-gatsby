# Parity Checklist (Phase 1 Gate)

Use this checklist before removing Gatsby implementation.

## Routing

- [ ] All static routes from `src/pages/` exist in Next output.
- [ ] All markdown detail routes from `data/portfolio/**/*.md` exist in Next output.
- [ ] Trailing slash behavior matches current production behavior.
- [ ] `/` and `/en/` language trees are preserved.
- [ ] `/embed/twitch/` and `/en/embed/twitch/` behave as before.

## SEO and metadata

- [ ] Titles match current baseline per page/language.
- [ ] Canonical URLs match current baseline.
- [ ] `hreflang` alternate links match current baseline.
- [ ] HTML `lang` attribute matches page locale.
- [ ] Sitemap includes both language trees and detail pages.

## Content integrity

- [ ] Markdown body rendering parity for project detail pages.
- [ ] Markdown image references resolve correctly.
- [ ] Tags, descriptions, and dates render correctly on list/detail pages.
- [ ] Disabled menu items remain hidden as today.

## Assets and downloadable files

- [ ] Favicon and manifest assets remain available under same URLs.
- [ ] `/docs/*` files are accessible with same paths.
- [ ] `robots.txt` and verification files remain available.

## Infra parity (S3 + CloudFront)

- [ ] Static export artifact is deployable to S3.
- [ ] CloudFront invalidation flow is documented and tested.
- [ ] Redirect `/in/` preserved.
- [ ] Rewrite `/uploads/cv.pdf` preserved.

## Decommission gate

- [ ] Next build/export passes in CI.
- [ ] Manual smoke test passes for key routes in both languages.
- [ ] Route and metadata parity review is signed off.
- [ ] Gatsby dependencies/scripts can be removed safely.
