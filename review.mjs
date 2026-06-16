import { chromium } from 'playwright';

const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
p.on('console', m => { if (m.type()==='error') errors.push(m.text()); });
p.on('pageerror', e => errors.push('PAGEERROR: '+e.message));

await p.goto('file:///D:/PortfolioWebsite-main/index.html', { waitUntil: 'load', timeout: 30000 });
await p.waitForTimeout(14000);

// Hero
await p.screenshot({ path: 'D:/PortfolioWebsite-main/review-hero.png', fullPage: false });

// Scroll to each section and screenshot
const sections = ['about', 'about-me', 'skills', 'projects', 'experience', 'achievements', 'certifications', 'connect'];
for (const sec of sections) {
  await p.evaluate(id => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  }, sec);
  await p.waitForTimeout(1500);
  await p.screenshot({ path: `D:/PortfolioWebsite-main/review-${sec}.png`, fullPage: false });
}

// Test drag orbit
await p.evaluate(() => window.scrollTo(0, 0));
await p.waitForTimeout(1000);
await p.mouse.move(720, 450);
await p.mouse.down();
for (let i = 0; i < 20; i++) {
  await p.mouse.move(720 + i * 15, 450 + i * 3);
  await p.waitForTimeout(30);
}
await p.mouse.up();
await p.waitForTimeout(800);
await p.screenshot({ path: 'D:/PortfolioWebsite-main/review-hero-drag.png', fullPage: false });

console.log('ERRORS:', errors.length);
errors.forEach(e => console.log(' -', e));
console.log('DONE');
await b.close();
