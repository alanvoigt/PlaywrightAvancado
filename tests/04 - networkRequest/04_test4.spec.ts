import { test } from "@playwright/test";

test("Intercept network requests", async ({ page }) => {
  // Log and continue all network requests
  await page.route("**", (route) => {
    console.log(route.request().url());
    if (route.request().url() == "https://apis.google.com/js/plusone.js")
      console.log("ENCONTREI O " + route.request().url());
    route.continue();
  });
  await page.goto("http://todomvc.com");
});
