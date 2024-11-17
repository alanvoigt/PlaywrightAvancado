import { test } from "@playwright/test";

test("Clock", async ({ page }) => {
  await page.clock.install({ time: new Date() });
  await page.goto("https://demo.playwright.dev/clock/");
  await page.screenshot({ path: "horarioInicial.png" });
  await page.clock.fastForward("00:10");
  await page.screenshot({ path: "horarioFinal.png" });
});
