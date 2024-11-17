import { test, expect } from "@playwright/test"; // Importando Playwright
import PageObject from "./pageObjects"; // Importando a classe PageObject

test("Testando findElement e findElements no www.example.com", async ({
  page,
}) => {
  // Cria uma instância da PageObject e configura a página
  const pageObject = new PageObject();
  pageObject.setPage(page);

  // Navega até o site www.example.com
  await page.goto("https://www.example.com");

  // Vamos testar o método findElement - Procurando por um elemento h1
  const element = await pageObject.findElement("h1"); // Procurando por um título h1
  if (element) {
    console.log("Elemento h1 encontrado:", await element.innerText()); // Logando o texto do elemento encontrado
  } else {
    console.log("Elemento h1 não encontrado");
  }

  // Vamos testar o método findElements - Procurando por todos os parágrafos <p>
  const elements = await pageObject.findElements("p"); // Procurando por todos os parágrafos <p>
  if (elements && elements.length > 0) {
    console.log("Elementos encontrados (p):");
    for (let i = 0; i < elements.length; i++) {
      console.log("Elemento " + i + ": " + (await elements[i].innerText())); // Logando o texto de cada parágrafo encontrado
    }
  } else {
    console.log("Nenhum elemento <p> encontrado");
  }
});
