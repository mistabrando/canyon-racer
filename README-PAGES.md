# GitHub Pages deployment

The project is configured for a repository Pages URL using Vite's project asset base:
`/canyon-racer/`.

Expected repository: `mistabrando/canyon-racer`

Expected URL: `https://mistabrando.github.io/canyon-racer/`

The workflow in `.github/workflows/pages.yml` runs the tests, builds `dist`, uploads the
Pages artifact, and deploys it with the official GitHub Pages Actions flow. Repository
Pages must use **GitHub Actions** as its source.

Local verification:

```sh
npm ci
npm test
npm run build
npm run preview -- --host 127.0.0.1 --port 4173
```

Publishing is blocked until `gh auth login -h github.com` succeeds for `mistabrando`.
