import { expect, type Page } from '@playwright/test';

export class AddToCart {
    protected page: Page

    constructor(page: Page) {
        this.page = page;
    }
    async addToCart(){
        await this.page.getByRole('button', { name: 'Add To Cart' }).click();
        await expect(this.page.getByText('Added to cart successfully!')).toBeVisible();
    }
}