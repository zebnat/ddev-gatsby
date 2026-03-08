# Route Inventory (Parity Baseline)

This document is the baseline route inventory for the Next.js static parity gate.

## Route totals

- Static page routes from `apps/next/app/(site)/**/page.js` (excluding dynamic segments): **16**
- Markdown project detail routes from `data/portfolio/**/*.md`: **60**
  - `es`: 30
  - `en`: 30
- Machine-generated artifact: `docs/migration/baseline-routes.json`

## Static page routes (source: `apps/next/app/(site)/`)

- `/`
- `/404/`
- `/acerca-de-mi/`
- `/tecnologias/`
- `/proyectos/`
- `/estudios-y-empresas/`
- `/articulos/`
- `/contacto/`
- `/directos/`
- `/embed/twitch/`
- `/en/`
- `/en/about-me/`
- `/en/skills/`
- `/en/projects/`
- `/en/streamer/`
- `/en/embed/twitch/`

## Dynamic markdown project routes

Generated from frontmatter `path` in `data/portfolio/**/*.md`.

- Spanish detail pages pattern: `/proyectos/<slug>/`
- English detail pages pattern: `/en/projects/<slug>/`
- Source of truth: each markdown file `path` field (not file name)

## Infrastructure-level URL behavior to preserve

From `docker/nginx.vh.default.conf`:

- Force trailing slash rewrite for non-file URLs.
- Keep redirect `/in/` -> `https://www.linkedin.com/in/daniel-developer-seo/`.
- Keep rewrite `/uploads/cv.pdf` -> `/docs/cv.pdf`.

These rewrites must be preserved in final CloudFront/S3 behavior.

## Inventory regeneration commands

Use these commands to refresh route inventory counts when content changes.

```bash
node scripts/parity/extract-routes.mjs

python -c "import pathlib; root=pathlib.Path('apps/next/app/(site)'); routes=[]
for f in sorted(root.rglob('page.js')):
    rel=f.relative_to(root).as_posix().replace('/page.js','')
    parts=[p for p in rel.split('/') if p and not p.startswith('(')]
    if any(p.startswith('[') for p in parts):
        continue
    route='/' if not parts else '/' + '/'.join(parts) + '/'
    routes.append(route)
routes.append('/404/')
print('static_pages',len(routes))"

python -c "import pathlib,re,collections; root=pathlib.Path('data/portfolio');
rx_path=re.compile(r'^path:\s*[\"\']([^\"\']+)[\"\']\s*$'); rx_lang=re.compile(r'^lang:\s*[\"\']([^\"\']+)[\"\']\s*$');
langs=collections.Counter(); total=0
for f in sorted(root.rglob('*.md')):
    p=None; l=None
    for line in f.read_text(encoding='utf-8').splitlines()[:60]:
        s=line.strip(); m=rx_path.match(s); m2=rx_lang.match(s)
        if m and p is None: p=m.group(1)
        if m2 and l is None: l=m2.group(1)
    if p and l: total += 1; langs[l] += 1
print('markdown_routes',total,'langs',dict(langs))"
```
