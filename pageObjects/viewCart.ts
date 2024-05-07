import { expect, type Page } from '@playwright/test';

export class LetsViewCart {
    protected page: Page

    constructor(page: Page) {
        this.page = page;
    }
    async LetsViewCart(){
        await this.page.getByRole('link', { name: 'View cart' }).click();
        await expect(this.page.getByRole('heading', { name: 'Your shopping cart' })).toBeVisible();
    }
}
