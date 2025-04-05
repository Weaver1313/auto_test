import { test, expect, Locator, Page } from "@playwright/test";

export class MainPage {
  readonly page: Page;
  readonly elements;

  constructor(page: Page) {
    this.page = page;
    this.elements = [
      {
        locator: (page: Page): Locator =>
          page.getByRole("listitem").filter({ hasText: "Ташкент" }),
        name: "Ташкент",
      },

      {
        locator: (page: Page): Locator =>
          page.getByRole("link", { name: "Продавайте на Wildberries" }),
        name: "Продавайте на Wildberries",
      },

      {
        locator: (page: Page): Locator =>
          page.getByRole("link", { name: "Работа в Wildberries" }),
        name: "Работа в Wildberries",
      },

      {
        locator: (page: Page): Locator =>
          page.getByRole("link", { name: "Wildberries", exact: true }),
        name: "Wildberries",
      },

      {
        locator: (page: Page): Locator =>
          page.getByRole("button", { name: "Навигация по сайту" }),
        name: "Навигация по сайту",
      },

      {
        locator: (page: Page): Locator =>
          page.getByRole("searchbox", { name: "Найти на Wildberries" }),
        name: "Найти на Wildberries",
      },

      {
        locator: (page: Page): Locator =>
          page.locator("#searchByImageFormAbNew"),
        name: "Поисковик",
      },

      {
        locator: (page: Page): Locator =>
          page.getByRole("link", { name: "Адреса" }),
        name: "Адреса",
      },

      {
        locator: (page: Page): Locator =>
          page.getByRole("link", { name: "Войти" }),
        name: "Войти",
      },

      {
        locator: (page: Page): Locator =>
          page.getByRole("link", { name: "Корзина" }),
        name: "Корзина",
      },
    ];
  }

  async openPage() {
    await this.page.goto(
      "https://faberlic.com/index.php?option=com_catalog&view=listgoods&idcategory=1001159186332&Itemid=2075"
    );
  }

  async checkElementVisability() {
    for (const { locator, name } of this.elements) {
      await test.step(`Проверка отображение элемента ${name}`, async () => {
        await expect.soft(locator(this.page)).toBeVisible();
      });
    }
  }

  async addBasketItem() {
    const indexItem = [0, 1];
    for (const index of indexItem) {
      const productLink = this.page.locator(".catalogItem").nth(index);
      await productLink.scrollIntoViewIfNeeded();
      await productLink.hover();
      const button = productLink.locator(".cardBtnBuy");
      await button.click();
    }
  }
}
