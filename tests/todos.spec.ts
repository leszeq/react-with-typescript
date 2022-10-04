import { test, expect } from '@playwright/test';
import { wait } from '@testing-library/user-event/dist/utils';
import { typedtext } from '../src/helpers/helper';

test.beforeEach(async ({ page }) => {
	await page.goto('http://localhost:3000/');
});
test('Adding and removing new todo', async ({ page }) => {
	const getStarted = page.locator('text=Todo Text');

	await expect(getStarted).toBeVisible();
	await expect(page.locator('data-test-id=input')).toBeVisible();
	await page.locator('data-test-id=input').click();
	await page.locator('data-test-id=input').type(typedtext);
	await expect(page.locator('data-test-id=add-todo')).toBeVisible();
	await page.locator('data-test-id=add-todo').click();
	await expect(page.locator('text=Delete')).toBeVisible();
	await page.locator('data-test-id=delete-button').click();
	await expect(page.locator('text=Delete')).not.toBeVisible();
});

test('Adding multiple new todo', async ({ page }) => {
	const getStarted = page.locator('text=Todo Text');

	await expect(getStarted).toBeVisible();
	await expect(page.locator('data-test-id=input')).toBeVisible();
	await page.locator('data-test-id=input').click();
	await page.locator('data-test-id=input').type(typedtext);
	await expect(page.locator('data-test-id=add-todo')).toBeVisible();
	await page.locator('data-test-id=add-todo').click();
	await page.locator('data-test-id=input').type('1');
	await page.locator('data-test-id=add-todo').click();
	await wait(5000);
});
