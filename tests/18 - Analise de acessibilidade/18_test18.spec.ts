import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright"; // 1

test.describe("homepage", () => {
  // 2
  test("should not have any automatically detectable accessibility issues", async ({
    page,
  }) => {
    await page.goto("https://www.example.com"); // 3

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4
    console.log(accessibilityScanResults);
    expect(accessibilityScanResults.violations).toEqual([]); // 5
  });
});
