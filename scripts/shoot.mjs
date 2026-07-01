// Screenshot the tifo lightbox across devices, both standalone and embedded
// (inside a host page with a sticky header + auto-resize/viewport handshake).
//
// Prereqs: `npm run dev` on :5173 and a static server for scripts/ on :5178,
//   e.g. `npx http-server scripts -p 5178 -s`.
// Usage: node scripts/shoot.mjs [label]
//   label — optional suffix for output filenames (e.g. "before", "after").
import { chromium, devices } from "playwright";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "shots");
const label = process.argv[2] ? `-${process.argv[2]}` : "";

const APP = "http://localhost:5173/";
const HOST = "http://localhost:5178/host.html";

const TARGETS = [
  { name: "iphone", device: devices["iPhone 13"] },
  { name: "ipad", device: devices["iPad (gen 7) landscape"] ?? devices["iPad Pro 11 landscape"] },
  { name: "ipad-portrait", device: devices["iPad (gen 7)"] ?? devices["iPad Pro 11"] },
];

async function openLightbox(page) {
  await page.waitForSelector(".card", { timeout: 10000 });
  await page.locator(".card").first().click();
  await page.waitForSelector(".modal", { timeout: 5000 });
  await page.waitForTimeout(600); // settle images + viewport handshake
}

async function run() {
  const browser = await chromium.launch();

  for (const t of TARGETS) {
    // --- Standalone (app served directly) ---
    {
      const ctx = await browser.newContext({ ...t.device });
      const page = await ctx.newPage();
      await page.goto(APP, { waitUntil: "networkidle" });
      await openLightbox(page);
      await page.screenshot({ path: join(OUT, `${t.name}-standalone${label}.png`) });
      await ctx.close();
    }

    // --- Embedded (inside host page with sticky header) ---
    {
      const ctx = await browser.newContext({ ...t.device });
      const page = await ctx.newPage();
      await page.goto(HOST, { waitUntil: "networkidle" });
      await page.evaluate(() => window.scrollTo(0, 120)); // slide under the header
      await page.waitForTimeout(300);
      const frame = page.frameLocator("#tifo-portfolio");
      await frame.locator(".card").first().click();
      await frame.locator(".modal").waitFor({ timeout: 5000 });
      await page.waitForTimeout(700);
      await page.screenshot({ path: join(OUT, `${t.name}-embedded${label}.png`) });
      await ctx.close();
    }
    console.log(`shot: ${t.name}`);
  }

  await browser.close();
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
