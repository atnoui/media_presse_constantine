import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: if you're deploying to GitHub Pages as a PROJECT site
// (https://<username>.github.io/<repo-name>/), set `base` below to
// "/<repo-name>/" — e.g. base: "/media-presse-constantine/".
//
// If you're deploying to a USER/ORG site (a repo literally named
// "<username>.github.io") or to Vercel/Netlify, leave base as "/".
export default defineConfig({
  plugins: [react()],
  base: "/media_presse_constantine/",
});
