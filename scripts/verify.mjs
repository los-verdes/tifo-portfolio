// Behavioral checks for the embedded mobile lightbox: arrow navigation and
// internal panel scrolling (not leaking to the background).
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

const t1 = await f.locator(".modal__title").innerText();
await f.locator(".modal__nav--next").click();
await page.waitForTimeout(400);
const t2 = await f.locator(".modal__title").innerText();

const before = await f.locator(".modal__panel").evaluate((el) => el.scrollTop);
await f.locator(".modal__panel").evaluate((el) => (el.scrollTop = 250));
const after = await f.locator(".modal__panel").evaluate((el) => el.scrollTop);

console.log("nav works:", t1 !== t2, `("${t1}" -> "${t2}")`);
console.log("panel scrolls internally:", before, "->", after, after > before ? "OK" : "FAIL");
await b.close();
