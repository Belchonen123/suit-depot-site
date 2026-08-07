import { chromium } from "playwright";

const baseUrl = process.env.SMOKE_BASE_URL || "http://127.0.0.1:3799";
const routes = [
  "/",
  "/oak-park",
  "/custom-suits",
  "/tailoring",
  "/tuxedo-rentals",
  "/wedding-suits",
  "/visit-prep",
  "/contact",
  "/service-areas/oak-park",
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
const errors = [];

page.on("console", (message) => {
  if (message.type() === "error") {
    errors.push(message.text());
  }
});

for (const route of routes) {
  const response = await page.goto(`${baseUrl}${route}`, { waitUntil: "domcontentloaded" });
  if (!response?.ok()) {
    throw new Error(`${route} returned ${response?.status()}`);
  }
  const title = await page.title();
  if (!title) {
    throw new Error(`${route} rendered without a document title`);
  }
}

await page.goto(`${baseUrl}/`, { waitUntil: "domcontentloaded" });
await page.getByRole("button", { name: "Open menu" }).click();
await page.getByRole("link", { name: "Visit Prep" }).first().waitFor({ state: "visible" });

await browser.close();

if (errors.length) {
  throw new Error(`Browser console errors:\n${errors.join("\n")}`);
}

console.log(`Smoke passed for ${routes.length} routes at ${baseUrl}`);
