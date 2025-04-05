import { test, expect, Page, Locator } from "@playwright/test";
import { MainPage } from "../models/MainPage";

let mainPage: MainPage;
test.describe("Тесты главной страницы", () => {
  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.openMainPage();
  });

  test("Проверка отображения элементов хедера", async () => {
    await mainPage.ceckElementsVisability();
  });

  test("Проверка названий элементов хедера", async () => {
    await mainPage.checkElementsText();
  });

  test("Проверка атрибуда href элементов хедера", async () => {
    await mainPage.checkElementsHrefAttribute();
  });

  test("Проверка переключения лайт мода", async () => {
    test.step("Нажатие на кнопку переключение лайт мода", async () => {
      await mainPage.clickSwitchLightModelIcon();
    });

    test.step("Проверка значений атрибута", async () => {
      await mainPage.checkDataThemsAttributeValue();
    });
  });

  test(`Проверка стилий со светлой темой ;`, async () => {
    await test.step("Установка светлой темы", async () => {
      await mainPage.setLightMode();
    });

    await test.step("Скриншотная проверка светлой темы", async () => {
      await mainPage.checkLoyaoutLighMode();
    });
  });

  test(`Проверка стилий со тёмной темой ;`, async () => {
    await test.step("Установка тёмной темы", async () => {
      await mainPage.setDarkMode();
    });

    await test.step("Скриншотная проверка тёмной темы", async () => {
      await mainPage.checkLoyaoutDarkMode();
    });
  });
});
