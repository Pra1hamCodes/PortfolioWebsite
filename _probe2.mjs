import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport:{width:1440,height:900}, reducedMotion:'no-preference' });
await page.goto('http://localhost:8000/index.html', { waitUntil:'load' });
const d = await page.evaluate(() => {
  const hero = document.getElementById('hero');
  const matches = [];
  let idx = 0;
  for (const ss of document.styleSheets) {
    let rules; try { rules = ss.cssRules; } catch { continue; }
    const walk = (rl, media) => {
      for (const r of rl) {
        if (r.cssRules && r.selectorText === undefined) { walk(r.cssRules, (r.media?r.media.mediaText:media)); continue; }
        if (!r.selectorText) continue;
        idx++;
        if (/position\s*:/i.test(r.style && r.style.position!=='' ? 'position:'+r.style.position : (r.cssText||''))) {
          // does this selector match hero?
          let m=false; try { m = hero.matches(r.selectorText); } catch {}
          if (m && r.style && r.style.position) matches.push({ order: idx, sel: r.selectorText, position: r.style.position, media: media||null });
        }
      }
    };
    walk(rules, null);
  }
  return { used: getComputedStyle(hero).position, matches };
});
console.log(JSON.stringify(d,null,1));
await browser.close();
