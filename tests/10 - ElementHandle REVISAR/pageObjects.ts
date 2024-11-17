import { ElementHandle, Locator, Page } from "playwright";

export default class PageObject {
  protected page: Page | undefined;
  protected defaultDelay = 1000;

  setPage(aPage: Page): void {
    this.page = aPage;
  }

  async enterText(selector: string, value: string | undefined): Promise<void> {
    if (value !== undefined) {
      await this.page?.fill(selector, value);
    }
  }

  async findElement(selector: string): Promise<ElementHandle | null> {
    return this.page ? await this.page.$(selector) : null;
  }

  async findElements(selector: string): Promise<ElementHandle[] | undefined> {
    return await this.page?.$$(selector);
  }

  async getAllInputElementsText(selector: string): Promise<string | undefined> {
    await this.waitUntilVisible(selector);
    const elements = (await this.findElements(selector)) || [];
    let allText = "";
    for (let index = 0; index < elements.length; index++) {
      const value = await elements[index].innerText();
      allText += `${value} `;
    }
    return allText;
  }

  async waitUntilVisible(
    selector: string
  ): Promise<ElementHandle<Element> | null> {
    return this.page ? await this.page.waitForSelector(selector) : null;
  }
}
