import { test } from "@playwright/test";

// Extende o tipo global para incluir a propriedade __capturedLogs no window
declare global {
  interface Window {
    __capturedLogs: any[];
  }
}

test("Capturar mensagens de console.log", async ({ page }) => {
  // Instala um script para substituir o console.log na página
  await page.addInitScript(() => {
    // Substitui o console.log original para capturar as mensagens
    window.console.log = (...args) => {
      // Aqui você pode processar ou enviar as mensagens para um servidor, por exemplo
      window.__capturedLogs = window.__capturedLogs || [];
      window.__capturedLogs.push(args);
    };
  });

  // Vai até a página desejada
  await page.goto("https://example.com");

  // Executa um comando no console da página que vai gerar uma mensagem no console
  await page.evaluate(() => {
    console.log("Olá do console!");
    console.log("Outra mensagem");
  });

  // Depois de interagir com a página, vamos verificar as mensagens capturadas
  const capturedLogs = await page.evaluate(() => window.__capturedLogs);
  console.log("Mensagens capturadas:", capturedLogs); // Verifique no terminal

  // Adicionalmente, você pode usar os logs para verificações em testes
  if (capturedLogs.includes("Olá do console!")) {
    console.log('Test Passed: Mensagem "Olá do console!" capturada!');
  }

  // Adicionalmente, fazer uma captura de tela
  await page.screenshot({ path: "example-screenshot.png" });
});
