# Valentine Pro

A small Valentine-themed web experience with animated hearts, background music, and multiple surprise pages (memories, love letter, reasons I love you, and a date invite).  
Built as a single-page-style mini site using vanilla HTML, CSS, and JavaScript.

## Structure

- `valentine-pro/index.html` – Landing page (entry to the gift).
- `valentine-pro/menu.html` – Envelope-style menu to other pages.
- `valentine-pro/memories.html` – Polaroid-style photo gallery with popup view.
- `valentine-pro/letter.html` – Typewriter-effect love letter.
- `valentine-pro/love.html` – “Why I love you” reasons list.
- `valentine-pro/date.html` – Date invite page with confetti.
- `css/style.css` – Global Valentine theme (pink gradient, cards, polaroids, responsive layout).
- `js/script.js` – Floating hearts, music controls, gallery popup, letter typing effect.
- `images/` – Photos for the memories page.
- `valentine-pro/music/love.mp3` – Background music (you provide this file).

## How to Run

You can open the site in any modern browser.

### Option 1 – Simple

1. Open the folder `project` in your editor.
2. Use a simple local server (recommended):
   - VS Code: “Live Server” extension → open `valentine-pro/index.html`.
   - Or run a static server (for example, `npx serve .` from the `project` folder).
3. Visit the local URL in your browser and start at `valentine-pro/index.html`.

### Option 2 – Direct file open

You can also double-click `valentine-pro/index.html` and open it directly in the browser, but some browsers handle audio and relative paths differently, so a local server is more reliable.

## Editing via GitHub

If you want to edit this project using GitHub:

1. Create a new GitHub repository.
2. Copy this entire `project` folder into the repo and commit/push.
3. On GitHub:
   - Navigate to a file (for example, `css/style.css` or `valentine-pro/index.html`).
   - Click **Edit** (the pencil icon) to modify it directly in the browser.
   - Commit your changes at the bottom of the page.
4. Pull those changes back to your local machine if needed.

You can also use GitHub Codespaces or GitHub’s web editor (`.` key on the repo page) to get a VS Code-like environment and edit all files online.

## Customizing

- Replace images in `images/` with your own photos (keep the same filenames or update paths in `memories.html`).
- Replace the audio file in `valentine-pro/music/love.mp3` with your own song.
- Edit texts in the HTML files to personalize names, messages, dates, and reasons.