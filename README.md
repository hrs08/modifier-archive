# Modifier Archive

A small React website for cataloguing story modifiers — what each one does,
what it hides, and how it connects to others. Built with React + Vite,
made to be deployed for free on GitHub Pages.

This guide assumes **zero prior experience**. Follow it top to bottom.

---

## 1. What you need before starting

| Tool | What it's for | Check if you have it | Get it |
|---|---|---|---|
| Node.js (v18+) | Runs the project on your computer | `node --version` in a terminal | [nodejs.org](https://nodejs.org) — download the LTS version |
| Git | Sends your code to GitHub | `git --version` in a terminal | [git-scm.com](https://git-scm.com) |
| A GitHub account | Hosts your code and your live site | — | [github.com/join](https://github.com/join) |
| A code editor | Editing the files | — | [VS Code](https://code.visualstudio.com) is the standard choice |

**"A terminal"** means: Command Prompt or PowerShell on Windows, Terminal on
Mac, or your regular terminal on Linux. If a `--version` command prints a
number, that tool is installed. If it says "command not found," install it
from the link before continuing.

---

## 2. Get the project running on your computer

1. Unzip this project folder somewhere you'll remember (e.g. your Desktop).
2. Open a terminal **inside that folder**. (In VS Code: `File → Open Folder`,
   then open a terminal with `` Ctrl+` ``.)
3. Install the project's dependencies — this downloads React, Vite, and
   everything else it needs:
   ```
   npm install
   ```
   This only takes a minute, and you only need to do it once (or again if
   you pull new changes that add a dependency).
4. Start the local development server:
   ```
   npm run dev
   ```
5. Your terminal will print a URL, usually `http://localhost:5173`. Open
   that in your browser — you'll see the site running live. Leave this
   terminal running while you work; every time you save a file, the page
   updates automatically.

Press `Ctrl+C` in the terminal any time to stop the server.

---

## 3. How the project is organized

```
modifier-archive/
├── src/
│   ├── data/
│   │   └── modifiers.js       ← your content lives here
│   ├── components/
│   │   ├── Header.jsx         ← the title bar
│   │   ├── SearchFilter.jsx   ← search box + category chips
│   │   ├── ModifierGrid.jsx   ← lays out the cards
│   │   ├── ModifierCard.jsx   ← a single card
│   │   └── RedactedBlock.jsx  ← the "tap to reveal" hidden-info box
│   ├── App.jsx                ← wires everything together
│   └── index.css              ← all the styling, colors, fonts
├── index.html
├── package.json
└── vite.config.js
```

You will spend most of your time in **`src/data/modifiers.js`**. Everything
else is the machinery that displays it.

---

## 4. Adding your own entries

Open `src/data/modifiers.js`. Each entry looks like this:

```js
{
  id: 7,
  name: 'Your modifier name',
  category: 'core-ability',
  effect: 'What it does, in one or two sentences.',
  hidden: 'The part that is not obvious on a first read.',
  knownBy: ['Character A', 'Character B'],
  connections: ['Regression'], // must match another entry's "name" exactly
}
```

Copy an existing entry, paste it above or below, give it a new `id` (just
count up from the last one), and fill in your own text. Save the file —
your browser tab will update instantly if `npm run dev` is still running.

The category filter chips at the top of the page are generated automatically
from whatever categories appear in your data, so you never have to update
them separately. Reuse a `category` value across entries to group them, or
invent new ones freely.

---

## 5. Changing the look

All colors, fonts, and spacing are defined as variables at the top of
`src/index.css`, under `:root`. For example:

```css
--bg: #14161f;        /* page background */
--accent: #c9a15c;    /* the gold highlight color */
--font-serif: 'Source Serif 4', Georgia, serif;  /* headings */
```

Change a value, save, and every place that uses it updates — you don't need
to hunt through the rest of the file.

---

## 6. Putting it on the internet (GitHub Pages)

1. **Create a new, empty repository on GitHub.** Go to
   [github.com/new](https://github.com/new), name it something like
   `modifier-archive`, and don't initialize it with a README (this project
   already has one). Click **Create repository**.

2. **Connect your local project to it and push your code.** GitHub shows
   you these commands after creating the repo, but here's the gist — run
   this inside your project folder, replacing the URL with the one your
   new repo actually shows you:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/modifier-archive.git
   git push -u origin main
   ```

3. **Set the base path.** Open `vite.config.js` and change:
   ```js
   base: '/REPO_NAME/',
   ```
   to match your actual repository name exactly, including the slashes.
   If your repo is `modifier-archive`, this becomes `base: '/modifier-archive/'`.
   This step is the single most common thing people forget — skipping it
   causes a blank page on the live site (see Troubleshooting).

4. **Deploy:**
   ```
   npm run deploy
   ```
   This builds the site and pushes it to a `gh-pages` branch automatically.

5. **Turn on GitHub Pages.** On GitHub, go to your repo's
   **Settings → Pages**. Under "Build and deployment," set the source
   branch to `gh-pages` and save.

6. Wait about a minute, then visit
   `https://YOUR-USERNAME.github.io/modifier-archive/`. That's your live
   site.

Whenever you want to publish new changes later, just run `npm run deploy`
again — you don't need to repeat the earlier steps.

---

## 7. Troubleshooting

- **`npm: command not found`** — Node.js isn't installed, or your terminal
  needs restarting after installing it.
- **Blank white page on the live GitHub Pages site, but `npm run dev` works
  fine locally** — almost always the `base` path in `vite.config.js` doesn't
  match your repo name. Double-check it, then run `npm run deploy` again.
- **`git push` asks for a password and rejects it`** — GitHub removed
  password logins for this years ago. Either set up an SSH key (search
  "GitHub SSH key setup") or use a Personal Access Token in place of your
  password.
- **Port 5173 already in use** — you likely have another `npm run dev`
  still running in another terminal tab. Close it, or just let Vite pick
  the next free port (it does this automatically).
- **Changes not showing up on the live site** — you edited the files but
  forgot to run `npm run deploy` again. `npm run dev` only updates your
  local preview, not the published site.

---

## 8. A note on content

The entries shipped in `src/data/modifiers.js` are generic placeholders,
written to show the app working — they aren't pulled from any specific
book. As you fill this in with real material, keep in mind this is a
fan-made companion tool: write your own summaries and analysis rather than
copying and pasting original text, especially since this will be public
once deployed.
