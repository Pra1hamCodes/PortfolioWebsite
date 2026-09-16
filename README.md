<div align="center">

<img src="PHOTO.png" alt="Prathmesh Pandey" width="132" />

# Prathmesh Pandey Portfolio

### A personal portfolio that boots like a computer and reads like a story.

An interactive Windows XP-inspired desktop for exploring Prathmesh Pandey's work in data, AI, web development, engineering, and business problem-solving.

<a href="https://portfolio-website1-0-coral.vercel.app/">Live Portfolio</a> · <a href="https://github.com/Pra1hamCodes/PortfolioWebsite">Source Code</a> · <a href="https://linkedin.com/in/prathmesh-pandey1103/">LinkedIn</a>

</div>

<br>

> **Portfolio Edition:** a static, dependency-free web experience that turns a resume into an explorable desktop.

## At A Glance

| | Details |
| --- | --- |
| **Role** | Computer Engineering graduate and analytics builder |
| **Focus** | Data engineering, analytics, machine learning, and business thinking |
| **Location** | Mumbai, Maharashtra |
| **Format** | Responsive single-page static website |
| **Interface** | Windows XP-inspired desktop UI with an authentic two-pane Start menu |
| **Dependencies** | None required at runtime |

## What Makes It Different

This is more than a collection of project cards. The portfolio is designed as a small operating system:

```text
                    PRATHMESH PORTFOLIO EDITION
                               |
             +-----------------+------------------+
             |                                    |
        START MENU                         DESKTOP SHELL
             |                                    |
   +---------+----------+             +-----------+-----------+
   |                    |             |           |           |
 About / Skills      Resume       Projects    Network    Contact
   |                    |             |           |           |
   +--------------------+-------------+-----------+-----------+
                               |
                         TASKBAR WINDOWS
```

The result is deliberately nostalgic, but the content is current: projects, technical skills, achievements, education, courses, professional links, resume, and contact details are all available from the desktop.

## Explore The Desktop

| Desktop item | What it contains |
| --- | --- |
| **About This Portfolio** | Personal profile, education, focus areas, and the thinking behind the interface |
| **My Projects** | A curated set of analytics, AI, web, and engineering builds with source links |
| **Skills** | Programming, visualization, machine learning, databases, web, and business tools |
| **Achievements** | Innovation challenges, robotics, research, hackathons, and competitions |
| **Co-Curricular & Courses** | Leadership, campus committees, training, and learning beyond the classroom |
| **Network** | LinkedIn, GitHub, LeetCode, and HackerRank profiles |
| **Resume** | Opens the current hosted PDF resume |
| **Contact Me** | Email, phone, social links, and a direct way to connect |
| **Recycle Bin** | Retired concepts and lessons from earlier iterations |
| **Portfolio Explorer** | Search, project comparison, skill mapping, journey timeline, portfolio sharing, and persistent guestbook |

## Interaction Highlights

- **Boot screen:** enter the portfolio through a Windows XP-style startup sequence or skip it.
- **Desktop icons:** single-click to select and double-click to open a section.
- **Windows:** drag by the title bar, minimize to the taskbar, maximize, restore, or close.
- **Start menu:** use the XP-style blue user banner, Programs pane, Places pane, All Programs cue, and Log Off control to navigate quickly.
- **Taskbar:** switch between open windows and access quick-launch actions.
- **Context menu:** refresh icons, arrange them by name, change the view, or create a shortcut.
- **Responsive mode:** the desktop and windows adapt for smaller touch screens.
- **Accessibility details:** semantic labels, visible focus states, external links, and reduced-motion support are included.

### Portfolio Explorer

The **Portfolio Explorer** keeps the extra functionality in one focused utility window instead of adding many separate windows. Its tabs provide:

- Portfolio file search across projects and skills
- Side-by-side project comparison
- Skill-to-project relationship mapping
- **My Journey**, from engineering education through research, competitions, leadership, and current opportunities
- A single portfolio sharing panel with QR code and direct website link
- A persistent guestbook whose notes are stored in browser `localStorage`

## Built With

| Layer | Implementation |
| --- | --- |
| **Markup** | Semantic HTML5 desktop shell and portfolio content |
| **Behavior** | Vanilla JavaScript for windows, menus, icons, clock, dialogs, and desktop state |
| **Styling** | CSS3 with XP-inspired controls, animations, custom layouts, and responsive breakpoints |
| **Typography** | Local MS Sans Serif-style fonts from the included XP.css assets |
| **Assets** | Local profile image, wallpaper, desktop icons, fonts, and UI sprites |
| **Runtime** | Static files only; no framework, bundler, database, or API is required |

## Project Structure

```text
.
├── index.html                    # Main page and desktop shell
├── scripts/
│   └── app.js                    # Desktop behavior and portfolio content
├── styles/
│   └── xp.css                    # Theme, layouts, animations, and responsive styles
├── PHOTO.png                     # Profile image used in the About window
├── win xp for tags.jpg           # Desktop wallpaper
├── windows-xp-desktop/           # Windows XP desktop icon assets
├── XP.css-main/                  # Local XP.css source, fonts, and UI sprites
└── Windows-XP-UI-Kit-main/       # Design reference assets
```

## Run Locally

There is no build step. Open the project root in a browser or serve it through a local HTTP server. A local server is recommended so every image, font, and icon path behaves consistently.

### VS Code Live Server

1. Open this folder in VS Code.
2. Install the **Live Server** extension if needed.
3. Open `index.html` and choose **Open with Live Server**.

### Python HTTP Server

From the project root:

```bash
python -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in your browser.

### Node.js Static Server

Use any static server from the project root and open the URL it provides. No `npm install`, build command, or environment variable is needed for this website.

## Customization Guide

### Update portfolio content

Most content lives in [`scripts/app.js`](scripts/app.js):

- Update the `pages` object for section titles and compact page content.
- Edit templates such as `projectMarkup`, `skillsMarkup`, and `achievementMarkup` for larger sections.
- Update the `icons` array to add, remove, rename, or reorder desktop shortcuts.
- Replace LinkedIn, GitHub, coding profile, email, phone, and resume URLs wherever they appear.

### Update the visual system

Most styling lives in [`styles/xp.css`](styles/xp.css):

- Change the wallpaper path in the `.wallpaper` rule.
- Adjust XP colors and shared sizing through the CSS variables near the top of the file.
- Update responsive behavior in the mobile and tablet media queries.
- Keep paths relative to the project root so static hosting continues to work.

### Add or replace assets

Place new images, icons, fonts, or documents in the project and reference them with relative paths. Check that filenames with spaces are URL-safe in CSS and HTML, and include every referenced asset when deploying.

## Deployment

This project can be deployed to any static host:

- GitHub Pages
- Vercel
- Netlify
- Cloudflare Pages
- Any web server that serves HTML, CSS, JavaScript, and static assets

Set the published directory to the project root. No build command is needed.

### Pre-deployment checklist

- [ ] Confirm `PHOTO.png` and `win xp for tags.jpg` are included.
- [ ] Confirm `windows-xp-desktop/` and `XP.css-main/` are included.
- [ ] Test the boot screen, desktop icons, Start menu, windows, and taskbar.
- [ ] Confirm the XP-style Programs and Places panes work on desktop and mobile widths.
- [ ] Test the layout at desktop and mobile widths.
- [ ] Check every external profile and project link.
- [ ] Replace the hosted resume URL if the resume location changes.
- [ ] Review asset licenses before redistributing the project.

## Credits And Licenses

The portfolio includes local assets and references from the following projects:

- [XP.css](https://github.com/botoxparty/XP.css) - Windows-style UI inspiration and local font/UI assets. See the included `XP.css-main/LICENSE`.
- [Windows XP desktop icon set](https://www.rw-designer.com/icon-set/windows-xp-desktop) - desktop icon assets. See `windows-xp-desktop/readme.txt` for the stated usage terms.
- [Windows XP UI Kit](Windows-XP-UI-Kit-main/README.md) - local design reference assets.

Review the included license and attribution files before publishing a redistributed copy of the complete asset set.

## Connect With Prathmesh

<div align="center">

**Prathmesh Pandey**  
Computer Engineering graduate | Data | AI | Business | Web

[LinkedIn](https://linkedin.com/in/prathmesh-pandey1103/) · [GitHub](https://github.com/Pra1hamCodes) · [LeetCode](https://leetcode.com/u/Blakesolo089/) · [HackerRank](https://www.hackerrank.com/profile/pandeyprathmesh1)

</div>
