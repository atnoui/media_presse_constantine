# Media Presse Constantine

A bilingual (FR/AR) landing page + client portal for a digital agency in Constantine, Algeria. Built with React + Vite.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

## Host it on GitHub Pages (free)

1. **Create a new repo on GitHub** — go to github.com → "+" → "New repository". Name it whatever you like, e.g. `media-presse-constantine`. Leave it empty (no README/license), then create it.

2. **Push this project to it.** From inside this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

3. **Match the base path to your repo name.** Open `vite.config.js` and set:
   ```js
   base: "/<your-repo-name>/",
   ```
   (Skip this step only if your repo is named `<your-username>.github.io`.)

4. **Turn on Pages.** On GitHub: repo → Settings → Pages → under "Build and deployment", set Source to **GitHub Actions**.

5. **That's it.** The included workflow (`.github/workflows/deploy.yml`) builds and publishes the site automatically on every push to `main`. Check the "Actions" tab for progress; once it's green, your site is live at:
   ```
   https://<your-username>.github.io/<your-repo-name>/
   ```

## Alternative: Vercel or Netlify

If you'd rather skip the base-path step entirely, import the same GitHub repo into [Vercel](https://vercel.com/new) or [Netlify](https://app.netlify.com/start) — both auto-detect Vite, need zero config, and give you a live URL in under a minute. Push to `main` and it redeploys automatically.

## Notes

- The whole site lives in `src/App.jsx` (your original file) — no other dependencies were added.
- Fonts (Inter, Poppins, Cairo) are loaded from Google Fonts at runtime, no local font files needed.
- The WhatsApp button links to `+213 550 93 19 93` — update the number in `src/App.jsx` if that changes.
