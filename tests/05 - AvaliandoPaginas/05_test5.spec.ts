import { test } from "@playwright/test";

test("Evaluate in browser context", async ({ page }) => {
  await page.goto("https://www.example.com/");
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio,
    };
  });
  console.log(dimensions);

  const links = await page.evaluate(() => {
    const linkElements = Array.from(document.querySelectorAll("a")); // Seleciona todos os links na página
    return linkElements.map((link) => link.href); // Extrai o atributo href de cada link
  });

  console.log(links); // Imprime todas as URLs coletadas
});
