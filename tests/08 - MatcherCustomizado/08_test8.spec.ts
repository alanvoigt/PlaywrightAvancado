import { test, expect, Locator } from "@playwright/test";

// Função customizada para verificar o conteúdo de texto de um Locator
async function toHaveTextContent(element: Locator, expectedText: string) {
  const actualText = await element.textContent();
  if (actualText === expectedText) {
    return {
      pass: true,
      message: () => `Text content matches: "${expectedText}"`,
    };
  } else {
    return {
      pass: false,
      message: () =>
        `Expected element text to be "${expectedText}", but got "${actualText}"`,
    };
  }
}

test("Custom matcher to check text content", async ({ page }) => {
  // Vai para a página de exemplo
  await page.goto("https://example.com");

  // Localiza o elemento <h1>
  const element = page.locator("h1");

  // Usa a função customizada toHaveTextContent
  const result = await toHaveTextContent(element, "Example Domain");

  console.log(result.message()); // Exibe a mensagem de sucesso ou erro

  // Verifica o resultado
  expect(result.pass).toBe(true);
  expect(result.message()).toBe('Text content matches: "Example Domain"');
});
