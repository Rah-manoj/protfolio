# Shanmugakumar M — Data Analyst Portfolio

A single-page portfolio built with React, TypeScript, and Vite. The page keeps the original layout. Netlify publishes the `build` folder.

## Local preview

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build
npm run preview
```

`npm run build` compiles the site into `dist`, including everything in `public` (the resume, favicon, and `robots.txt`), then copies that output into `build`. Publish `build`. Do not commit `dist`.

## Publish a new Netlify site

1. Push this repository to GitHub.
2. In Netlify, choose **Add new project → Import an existing project** and select the repository.
3. Leave the build settings on the values from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `build`
   - Node version: `22`
4. Deploy.

Do not publish the repository root or `dist`. Netlify publishes `build`. The resume source is `public/assets/Shanmugakumar-M-Resume.pdf`, and the download URL stays `assets/Shanmugakumar-M-Resume.pdf`.
