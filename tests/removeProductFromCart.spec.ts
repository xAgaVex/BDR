import { test, expect } from '@playwright/test';
import { AddToCart } from '../pageObjects/addToCart'
import { LetsViewCart } from '../pageObjects/viewCart';
import { RemoveProdFromCart } from '../pageObjects/removeFromCart';

let removeProdFromCart: RemoveProdFromCart
let addToCart: AddToCart
let letsViewCart: LetsViewCart

async function goToMenu(page, menuLink: string, menuName: string){
    await page.getByRole('link', { name: menuLink }).click();
    await expect(page.getByRole('link', { name: menuName, exact: true })).toBeVisible();
}
async function choseProduct(page, productLink: string, productName: string, size: string) {
    await page.getByRole('link', { name: productLink }).click();
    await expect(page.getByRole('heading', { name: productName })).toBeVisible();
    await page.getByLabel(size, { exact: true }).nth(1).click();
}


test('usunięcie produktu z koszyka', async ({ page }) => {
  addToCart = new AddToCart(page);
  letsViewCart = new LetsViewCart(page);
  removeProdFromCart = new RemoveProdFromCart(page);
  await page.goto('https://spree-multi-vendor-demo.herokuapp.com/');
  await goToMenu(page, 'Ambiance Men', 'Men');
  await choseProduct(page, 'Denim Shirt Denim Shirt $', 'Denim Shirt', 'L');
  await addToCart.addToCart();
  await letsViewCart.LetsViewCart();
  await removeProdFromCart.RemoveProdFromCart();
});