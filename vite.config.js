import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ IMPORTANT: change 'REPO_NAME' below to match your actual GitHub repo name.
// Example: if your repo URL is github.com/yourname/modifier-archive,
// then base should be '/modifier-archive/'
// If you're not sure yet, leave it as '/REPO_NAME/' and fix it before deploying —
// the README explains exactly when and how.
export default defineConfig({
  plugins: [react()],
  base: '/REPO_NAME/',
})
