# GitHub Pages deployment

Live: `https://mistabrando.github.io/canyon-racer/`

- Repo: `mistabrando/canyon-racer`, source code on `main`, built site on `gh-pages`.
- Vite uses `base: '/canyon-racer/'` so assets resolve under the project path.
- Pages source: **Deploy from a branch**, branch `gh-pages`, folder `/`.
- GitHub Actions is NOT used (account can't run Actions due to a billing lock), so there is no `.github/workflows/pages.yml`.

Republish after changing the game:

```sh
cd canyon-racer
npm run build
git worktree add /tmp/canyon-pages origin/gh-pages
cp dist/index.html dist/assets /tmp/canyon-pages/ -r
# ensure /tmp/canyon-pages/.nojekyll exists
git -C /tmp/canyon-pages add -A
git -C /tmp/canyon-pages commit -m "Republish"
git -C /tmp/canyon-pages push origin HEAD:gh-pages
git worktree remove --force /tmp/canyon-pages
```
