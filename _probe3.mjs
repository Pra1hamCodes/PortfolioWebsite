import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport:{width:1440,height:900}, reducedMotion:'no-preference' });
await page.goto('http://localhost:8000/index.html', { waitUntil:'load' });
const d = await page.evaluate(() => {
  const hero = document.getElementById('hero');
  const before = getComputedStyle(hero).position;
  // delete the reduced-motion media block at runtime
  let deleted = null;
  for (const ss of document.styleSheets) {
    let rules; try { rules = ss.cssRules; } catch { continue; }
    for (let i=0;i<rules.length;i++){
      const r = rules[i];
      if (r.media && /reduced-motion/.test(r.media.mediaText)) { deleted = r.media.mediaText; ss.deleteRule(i); break; }
    }
    if (deleted) break;
  }
  // force reflow
  void hero.offsetHeight;
  const after = getComputedStyle(hero).position;
  return { before, deletedMedia: deleted, after };
});
console.log(JSON.stringify(d,null,1));
await browser.close();
