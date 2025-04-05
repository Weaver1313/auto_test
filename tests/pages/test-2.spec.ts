import { test, expect } from "@playwright/test";
import { MainPage } from "../models/TestPge";

let mainPage: MainPage;

test.describe("Тесты главной страницы Озон", () => {
  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.openPage();
  });

  test("Проверка заголовка страницы", async () => {
    await mainPage.checkElementVisability();
  });

  test("товар", async () => {
    await mainPage.addBasketItem();
  });
});
