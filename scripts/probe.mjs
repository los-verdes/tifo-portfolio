// Dump the computed box geometry of the lightbox image + wrapper on embedded
// iPhone, to diagnose letterboxing/fit issues.
//
// Prereqs: `npm run dev` on :5173 and a static server for scripts/ on :5178.
import { chromium, devices } from "playwright";

const HOST = "http://localhost:5178/host.html";

const browser = await chromium.launch();
const ctx = await browser.newContext({ ...devices["iPhone 13"] });
const page = await ctx.newPage();
await page.goto(HOST, { waitUntil: "networkidle" });
await page.evaluate(() => window.scrollTo(0, 120));
await page.waitForTimeout(300);
const frame = page.frameLocator("#tifo-portfolio");
await frame.locator(".card").first().click();
await frame.locator(".modal").waitFor();
await page.waitForTimeout(700);

const info = await page.frame({ url: /localhost:5173/ }).evaluate(() => {
  const pick = (el) => {
    if (!el) return null;
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    return {
      w: Math.round(r.width),
      h: Math.round(r.height),
      display: cs.display,
      objectFit: cs.objectFit,
      maxHeight: cs.maxHeight,
      aspectRatio: cs.aspectRatio,
      background: cs.backgroundColor,
      borderRadius: cs.borderRadius,
      padding: cs.padding,
      margin: cs.margin,
    };
  };
  const img = document.querySelector(".modal__img");
  return {
    modal: pick(document.querySelector(".modal")),
    imgwrap: pick(document.querySelector(".modal__imgwrap")),
    img: pick(img),
    imgNatural: img ? { nw: img.naturalWidth, nh: img.naturalHeight } : null,
  };
});

console.log(JSON.stringify(info, null, 2));
await browser.close();
