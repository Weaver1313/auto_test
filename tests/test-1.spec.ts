import { test, expect } from "@playwright/test";

const element = [
  {
    locator: (page) => page.getByRole("link", { name: "Docs" }),
  },

  {
    locator: (page) =>
      page.getByRole("link", { name: "Playwright logo Playwright" }),
  },

  {
    locator: (page) => page.getByRole("link", { name: "API" }),
  },

  {
    locator: (page) => page.getByRole("link", { name: "Community" }),
  },
];

test("test", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  element.forEach(async ({ locator }) => {
    await expect.soft(locator(page)).toBeVisible();
  });

  await expect(page.getByRole("link", { name: "Docs" })).toBeVisible();
});
