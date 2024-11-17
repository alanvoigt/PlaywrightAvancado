import { test, expect } from "@playwright/test";

// Estendendo o expect com um matcher customizado
expect.extend({
  async toHaveTextContent(element, expectedText) {
    // Obter o conteúdo de texto do elemento
    const actualText = await element.textContent();
    // Verifica se o texto atual é igual ao esperado
    const pass = actualText === expectedText;

    // Retorna o resultado da verificação, com uma mensagem customizada
    return {
      pass,
      message: () =>
        `Expected element text to be "${expectedText}", but got "${actualText}"`,
    };
  },
});

test("Custom matcher to check text content", async ({ page }) => {
  // Navega até a página de exemplo
  await page.goto("https://example.com");

  // Localiza o elemento que será verificado
  const element = await page.locator("h1");

  // Usa o matcher customizado toHaveTextContent
  await expect(element).toHaveTextContent("Example Domain");
});
