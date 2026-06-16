import { chromium } from 'playwright';

const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
p.on('pageerror', e => errors.push(e.message));

await p.goto('file:///D:/PortfolioWebsite-main/index.html', { waitUntil: 'load', timeout: 30000 });
await p.waitForTimeout(14000);

// Screenshot the experience section for inner cards
await p.evaluate(() => document.getElementById('experience')?.scrollIntoView({ behavior:'instant', block:'center' }));
await p.waitForTimeout(1000);
await p.screenshot({ path: 'D:/PortfolioWebsite-main/review-inner-exp.png' });

// Screenshot the projects section for inner cards
await p.evaluate(() => document.getElementById('projects')?.scrollIntoView({ behavior:'instant', block:'center' }));
await p.waitForTimeout(1000);
await p.screenshot({ path: 'D:/PortfolioWebsite-main/review-inner-proj.png' });

console.log('ERRORS:', errors.length);
errors.forEach(e => console.log(' -', e));
console.log('DONE');
await b.close();
