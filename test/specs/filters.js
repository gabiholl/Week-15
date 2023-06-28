import InventoryPage from '../pageobjects/inventoryPage.js';
import LoginPage from '../pageobjects/loginPage.js';

describe ("Verify login with user with valid credentials", ()=> {
    beforeAll("Open browser", ()=> {
        // browser.setWindowSize (1366, 768);
        browser.url("https://www.saucedemo.com/");
    });
    it ("user should log in correctly", async ()=> {
        await expect(LoginPage.btnLogin).toExist();
        await expect(LoginPage.userNameInput).toBeDisplayed();
        await LoginPage.login("standard_user", "secret_sauce");
        await LoginPage.btnLoginClick();
    });

    it ("user should be redirected to inventory page", async ()=> {
            await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
    });

    it ("test filter A to Z", async ()=> {
        await InventoryPage.filMenu.click();
        await InventoryPage.filByNameAZ.click();

        expect (InventoryPage.firstItem).toHaveId("#item_4_title_link");
        expect (InventoryPage.secondItem).toHaveId("#item_0_title_link");
        expect (InventoryPage.thirdItem).toHaveId("#item_1_title_link");
        expect (InventoryPage.fourthItem).toHaveId("#item_5_title_link");
        expect (InventoryPage.fifthItem).toHaveId("#item_2_title_link");
        expect (InventoryPage.sixthItem).toHaveId("#item_3_title_link");
    });

    it ("test filter Z to A", async ()=> {
        await InventoryPage.filMenu.click();
        await InventoryPage.filByNameZA.click();

        expect (InventoryPage.firstItem).toHaveId("#item_3_title_link");
        expect (InventoryPage.secondItem).toHaveId("#item_2_title_link");
        expect (InventoryPage.thirdItem).toHaveId("#item_5_title_link");
        expect (InventoryPage.fourthItem).toHaveId("#item_1_title_link");
        expect (InventoryPage.fifthItem).toHaveId("#item_0_title_link");
        expect (InventoryPage.sixthItem).toHaveId("#item_4_title_link");
    });

    it ("test filter low to high", async ()=> {
        await InventoryPage.filMenu.click();
        await InventoryPage.filByLowToHigh.click();

        expect (InventoryPage.firstItem).toHaveId("#item_2_title_link");
        expect (InventoryPage.secondItem).toHaveId("#item_0_title_link");
        expect (InventoryPage.thirdItem).toHaveId("#item_1_title_link");
        expect (InventoryPage.fourthItem).toHaveId("#item_3_title_link");
        expect (InventoryPage.fifthItem).toHaveId("#item_4_title_link");
        expect (InventoryPage.sixthItem).toHaveId("#item_5_title_link");
    });

    it ("test filter high to low", async ()=> {
        await InventoryPage.filMenu.click();
        await InventoryPage.filByHighToLow.click();

        expect (InventoryPage.firstItem).toHaveId("#item_5_title_link");
        expect (InventoryPage.secondItem).toHaveId("#item_4_title_link");
        expect (InventoryPage.thirdItem).toHaveId("#item_1_title_link");
        expect (InventoryPage.fourthItem).toHaveId("#item_3_title_link");
        expect (InventoryPage.fifthItem).toHaveId("#item_0_title_link");
        expect (InventoryPage.sixthItem).toHaveId("#item_2_title_link");
    });
});
