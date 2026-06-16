import { chromium } from 'playwright';

const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
p.on('pageerror', e => errors.push(e.message));

await p.goto('file:///D:/PortfolioWebsite-main/index.html', { waitUntil: 'load', timeout: 30000 });
await p.waitForTimeout(14000);

// Screenshot the about section
await p.evaluate(() => document.getElementById('about')?.scrollIntoView({ behavior:'instant', block:'center' }));
await p.waitForTimeout(1000);
await p.screenshot({ path: 'D:/PortfolioWebsite-main/review-card-about.png' });

// Screenshot the skills section
await p.evaluate(() => document.getElementById('skills')?.scrollIntoView({ behavior:'instant', block:'center' }));
await p.waitForTimeout(1000);
await p.screenshot({ path: 'D:/PortfolioWebsite-main/review-card-skills.png' });

console.log('ERRORS:', errors.length);
errors.forEach(e => console.log(' -', e));
console.log('DONE');
await b.close();
