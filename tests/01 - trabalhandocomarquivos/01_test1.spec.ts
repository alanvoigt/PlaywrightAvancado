import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

test("Acessa o site e copia o arquivo", async ({ page }) => {
  // Parte 1: Acessar o site
  await page.goto("https://www.example.com/");
  await expect(page).toHaveURL("https://www.example.com/");

  // Parte 2: Copiar o arquivo
  const sourcePath = "C:\\Alan\\teste.txt";
  const destinationPath = path.join(__dirname, "../teste.txt");

  try {
    fs.copyFileSync(sourcePath, destinationPath);
    console.log("Arquivo copiado com sucesso para o repositório.");
  } catch (error) {
    console.error("Erro ao copiar o arquivo:", error);
  }
});
