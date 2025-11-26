import {Page} from "@playwright/test";

export class NavigationMenu {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    };

    async navigateToFormsMenu(){
        await this.page.getByText('Forms').click();
    }

}