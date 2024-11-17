import { test, expect } from "@playwright/test";
import { execSync } from "child_process";

test.beforeAll(() => {
  // Chama o script PowerShell para fechar o Chrome
  try {
    execSync(
      'powershell.exe -ExecutionPolicy Bypass -Command "Get-Process chrome -ErrorAction SilentlyContinue | Stop-Process"'
    );
    console.log("Chrome fechado com sucesso.");
  } catch (error) {
    console.error("Erro ao fechar o Chrome:", error);
  }
});

test("Executar teste após fechar o Chrome", async ({ page }) => {
  await page.goto("https://www.example.com/");
  await expect(page).toHaveURL("https://www.example.com/");
});
