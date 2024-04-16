import { test, expect } from '@playwright/test';
import { AddToCart } from '../pageObjects/addToCart'

let addToCart: AddToCart

async function goToMenu(page, menuLink: string, menuName: string){
    await page.getByRole('link', { name: menuLink }).click();
    await expect(page.getByRole('link', { name: menuName, exact: true })).toBeVisible();
}
async function choseProduct(page, productLink: string, productName: string, size: string) {
    await page.getByRole('link', { name: productLink }).click();
    await expect(page.getByRole('heading', { name: productName })).toBeVisible();
    await page.getByLabel(size, { exact: true }).nth(1).click();
}
async function viewCart(page) {
    await page.getByRole('link', { name: 'View cart' }).click();
    await expect(page.getByRole('heading', { name: 'Your shopping cart' })).toBeVisible();
}
async function removeFromCart(page) {
    await page.getByRole('link', { name: 'Remove from cart' }).click();
    await expect(page.getByText('Your cart is empty.')).toBeVisible();
}

test('usunięcie produktu z koszyka', async ({ page }) => {
  await page.goto('https://spree-multi-vendor-demo.herokuapp.com/');
  await goToMenu(page, 'Ambiance Men', 'Men');
  await choseProduct(page, 'Denim Shirt Denim Shirt $', 'Denim Shirt', 'L');
  await addToCart.AddToCart();
  await viewCart(page);
  await removeFromCart(page);
});