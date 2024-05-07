import { expect, type Page } from '@playwright/test';

export class RemoveProdFromCart {
    protected page: Page

    constructor(page: Page) {
        this.page = page;
    }
    async RemoveProdFromCart(){
        await this.page.getByRole('link', { name: 'Remove from cart' }).click();
        await expect(this.page.getByText('Your cart is empty.')).toBeVisible();
    }
}