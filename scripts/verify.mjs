// Behavioral checks for the embedded mobile lightbox: arrow navigation,
// internal panel scrolling, and — critically — that the HOST page cannot
// scroll while the lightbox is open (background scroll-lock).
//
// Prereqs: `npm run dev` on :5173 and a static server for scripts/ on :5178.
import { chromium, devices } from "playwright";

const HOST = "http://localhost:5178/host.html";

const b = await chromium.launch();
const ctx = await b.newContext({ ...devices["iPhone 13"] });
const page = await ctx.newPage();
await page.goto(HOST, { waitUntil: "networkidle" });
await page.evaluate(() => window.scrollTo(0, 120));
await page.waitForTimeout(300);
const f = page.frameLocator("#tifo-portfolio");
await f.locator(".card").first().click();
await f.locator(".modal").waitFor();
await page.waitForTimeout(500);

// 1) arrow nav
const t1 = await f.locator(".modal__title").innerText();
await f.locator(".modal__nav--next").click();
await page.waitForTimeout(400);
const t2 = await f.locator(".modal__title").innerText();

// 2) internal panel scroll
const before = await f.locator(".modal__panel").evaluate((el) => el.scrollTop);
await f.locator(".modal__panel").evaluate((el) => (el.scrollTop = 250));
const after = await f.locator(".modal__panel").evaluate((el) => el.scrollTop);

// 3) host page scroll is LOCKED while modal open
const hostScrollBefore = await page.evaluate(() => window.scrollY);
await page.mouse.wheel(0, 500);
await page.waitForTimeout(300);
const hostScrollAfter = await page.evaluate(() => window.scrollY);
const bodyPos = await page.evaluate(() => getComputedStyle(document.body).position);

// 4) closing restores scroll
await f.locator(".modal__close").click();
await page.waitForTimeout(300);
const bodyPosAfterClose = await page.evaluate(() => getComputedStyle(document.body).position);

console.log("nav works:", t1 !== t2, `("${t1}" -> "${t2}")`);
console.log("panel scrolls internally:", before, "->", after, after > before ? "OK" : "FAIL");
console.log("host locked while open:", hostScrollBefore, "->", hostScrollAfter,
  hostScrollBefore === hostScrollAfter ? "OK" : "FAIL", `(body.position=${bodyPos})`);
console.log("scroll restored after close:", bodyPosAfterClose === "static" || bodyPosAfterClose === "" ? "OK" : `body.position=${bodyPosAfterClose}`);
await b.close();
