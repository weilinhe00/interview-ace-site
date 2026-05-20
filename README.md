# Interview ACE — Product Site

A static landing site for **Interview ACE**, an AI-powered career companion. Three pages:

- `index.html` — product overview with hero, feature grid, and showcases
- `ui.html` — full UI gallery, grouped by feature, with a built-in lightbox
- `downloads.html` — resources (PDFs + a link out to the source on GitHub)

## File layout

```
interview-ace-site/
├── index.html
├── ui.html
├── downloads.html
├── styles.css
├── .nojekyll
├── README.md
├── assets/
│   ├── favicon.svg
│   ├── ui/                       # cover / banner art
│   └── screens/                  # 32 UI screenshots
└── downloads/
    ├── InterviewAce-install-manual.pdf       # ~1 MB
    ├── InterviewAce-brochure.pdf             # ~11 MB
    └── InterviewAce-product-intro.pdf        # ~20 MB
```

The unzipped source code lives at **`/Users/te23071/Desktop/InterviewAce-source/`** (contains `AgentGPT-main` and `ecoute-main`). It is no longer bundled into this site — push it to its own GitHub repo and update the URL on the `downloads.html` source card.

## Before you publish

In `downloads.html`, find this line on the "Source code" card and replace the placeholder with your actual GitHub repo URL:

```html
<a class="btn btn-primary" href="https://github.com/your-username/interview-ace" ...>
```

## Deploy to GitHub Pages

1. Create a new repo and push the contents of this folder to `main` (or `gh-pages`).
2. Settings → Pages → Source: that branch, root.
3. Open `https://<your-username>.github.io/<repo>/`.

All files here are well under GitHub's 100 MB single-file limit, so no Git LFS or Releases workaround is needed.

## Local preview

```bash
cd interview-ace-site
python3 -m http.server 8080
# open http://localhost:8080
```
