import { test, expect } from '@playwright/test';
import { AddToCart } from '../pageObjects/addToCart'
import { LetsViewCart } from '../pageObjects/viewCart';
import { RemoveProdFromCart } from '../pageObjects/removeFromCart';
import { MenuPage} from '../pageObjects/menuPage';
import { ProductsPage } from '../pageObjects/productsPage';

let removeProdFromCart: RemoveProdFromCart
let addToCart: AddToCart
let letsViewCart: LetsViewCart
let menu: MenuPage;
let product: ProductsPage

test.beforeEach(async ({ page }) => {
    await page.goto('https://spree-multi-vendor-demo.herokuapp.com/');
    addToCart = new AddToCart(page);
    letsViewCart = new LetsViewCart(page);
    removeProdFromCart = new RemoveProdFromCart(page);
    menu = new MenuPage(page);
    product = new ProductsPage(page);
})
test('usunięcie produktu z koszyka', async ({ page }) => {
  await menu.goToMenu('Ambiance Men', 'Men');
  await product.choseProduct('Denim Shirt Denim Shirt $', 'Denim Shirt', 'L');
  await addToCart.addToCart();
  await letsViewCart.LetsViewCart();
  await removeProdFromCart.RemoveProdFromCart();
});