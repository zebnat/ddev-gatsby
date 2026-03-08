# Route Inventory (Parity Baseline)

This document is the baseline route inventory for the Gatsby -> Next.js migration.

## Route totals

- Static page routes from `src/pages/**/*.js`: **16**
- Markdown project detail routes from `data/portfolio/**/*.md`: **60**
  - `es`: 30
  - `en`: 30

## Static page routes (source: `src/pages/`)

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
python -c "import pathlib; root=pathlib.Path('src/pages'); routes=[]
for f in sorted(root.rglob('*.js')):
    rel=f.relative_to(root).as_posix()
    if rel=='404.js': route='/404/'
    elif rel=='index.js': route='/'
    elif rel.endswith('/index.js'): route='/' + rel[:-9] + '/'
    else: route='/' + rel[:-3] + '/'
    routes.append(route)
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
