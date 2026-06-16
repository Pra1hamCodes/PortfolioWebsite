import { chromium } from 'playwright';

const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
p.on('pageerror', e => errors.push(e.message));

await p.goto('file:///D:/PortfolioWebsite-main/index.html', { waitUntil: 'load', timeout: 30000 });
await p.waitForTimeout(14000);

// Scroll to experience
await p.evaluate(() => document.getElementById('experience')?.scrollIntoView({ behavior:'instant', block:'start' }));
await p.waitForTimeout(2000);
await p.screenshot({ path: 'D:/PortfolioWebsite-main/review-winding-top.png' });

// Scroll partway to show progress + orb on the curve
await p.evaluate(() => window.scrollBy(0, 400));
await p.waitForTimeout(1500);
await p.screenshot({ path: 'D:/PortfolioWebsite-main/review-winding-mid.png' });

// Hover over a card to trigger magnetic pull
await p.mouse.move(500, 550);
await p.waitForTimeout(800);
await p.screenshot({ path: 'D:/PortfolioWebsite-main/review-winding-hover.png' });

// Move cursor near the timeline to test bending
await p.mouse.move(150, 400);
await p.waitForTimeout(800);
await p.screenshot({ path: 'D:/PortfolioWebsite-main/review-winding-bend.png' });

console.log('ERRORS:', errors.length);
errors.forEach(e => console.log(' -', e));
console.log('DONE');
await b.close();
