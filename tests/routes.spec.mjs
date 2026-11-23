import { expect, test } from '@playwright/test'

test('renders the application shell and navigates to the news page', async ({ page }) => {
  const errors = []
  page.on('pageerror', error => errors.push(error.message))
  await page.goto('/')
  await expect(page.getByRole('heading', { name: '홈', exact: true })).toBeVisible()
  await page.getByPlaceholder('캐릭터명').fill('로아')
  await expect(page.getByPlaceholder('캐릭터명')).toHaveValue('로아')
  await page.getByRole('link', { name: '소식' }).click()
  await expect(page).toHaveURL(/\/news$/)
  await expect(page.getByRole('heading', { name: '소식', exact: true })).toBeVisible()
  expect(errors).toEqual([])
})
