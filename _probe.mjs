import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport:{width:1440,height:900}, reducedMotion:'no-preference' });
await page.goto('http://localhost:8000/index.html', { waitUntil:'load' });
const d = await page.evaluate(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hero = document.getElementById('hero');
  // find any CSS rule that sets position on #hero or body>section
  const hits = [];
  for (const ss of document.styleSheets) {
    let rules; try { rules = ss.cssRules; } catch { continue; }
    for (const r of rules) {
      const t = r.selectorText || (r.media ? '@media '+r.media.mediaText : '');
      if (t && /position\s*:\s*sticky/i.test(r.cssText||'')) hits.push((r.cssText||'').slice(0,120));
      if (r.cssRules) for (const r2 of r.cssRules) if (/position\s*:\s*sticky/i.test(r2.cssText||'')) hits.push('@media{'+ (r2.cssText||'').slice(0,100)+'}');
    }
  }
  return { reduce, heroPos: getComputedStyle(hero).position, stickyRules: hits, isChildOfBody: hero.parentElement.tagName };
});
console.log(JSON.stringify(d,null,1));
await browser.close();
