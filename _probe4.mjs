import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport:{width:1440,height:900}, reducedMotion:'no-preference' });
await page.goto('http://localhost:8000/index.html', { waitUntil:'load' });
const d = await page.evaluate(() => {
  const ids = ['hero','about','about-me','skills','projects','connect'];
  const r = {};
  for (const id of ids){ const el=document.getElementById(id); r[id] = { pos:getComputedStyle(el).position, inline: el.getAttribute('style')||'' }; }
  // also: does CSS.supports sticky? and what is body/html overflow now
  r._env = { supportsSticky: CSS.supports('position','sticky'),
             bodyOverflowX: getComputedStyle(document.body).overflowX,
             bodyOverflowY: getComputedStyle(document.body).overflowY,
             htmlOverflowX: getComputedStyle(document.documentElement).overflowX };
  return r;
});
console.log(JSON.stringify(d,null,1));
await browser.close();
