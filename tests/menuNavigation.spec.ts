import {test} from '@playwright/test';
import {NavigationMenu} from "../pages/NavigationMenu";

test.describe('Menu Navigation Tests', () => {
    let menuPage: NavigationMenu;

    test.beforeEach(async ({page}) => {
        await page.goto('http://localhost:4200/');
    });

    test('Navigate to Forms Menu', async ({page})=>{
        const navigationMenu = new NavigationMenu(page);
        navigationMenu.navigateToFormsMenu();
    })

    
});