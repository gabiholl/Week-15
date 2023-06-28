import LoginPage from '../pageobjects/loginPage.js'
import InventoryPage from '../pageobjects/inventoryPage.js';
import checkOutPage from '../pageobjects/checkOutPage.js';
import MenuPage from '../pageobjects/menuPage.js';

describe ("Swag labs Website - End to end test", ()=> {
    beforeAll("Open browser", ()=> {
        // browser.setWindowSize (1366, 768);
        browser.url("https://www.saucedemo.com/");
    });
    it ("user should log in correctly", async ()=> {
        await expect(LoginPage.btnLogin).toExist();
        await expect(LoginPage.userNameInput).toBeDisplayed();
        await LoginPage.login("standard_user", "secret_sauce");
        await LoginPage.btnLoginClick();

        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
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
    it("adding products to cart", async ()=> {
        await InventoryPage.addBackPack.click();
        await InventoryPage.addBikeLight.click();
        await InventoryPage.cartBtn.click();
    });
    it("removing products from cart, adding a new one and proceeding to checkout", async ()=> {
        await InventoryPage.contShopp.click();
        await InventoryPage.removeBikeLight.click();
        await InventoryPage.addJacket.click();
        await InventoryPage.cartBtn.click();
        await checkOutPage.checkOutBtn.click();
    });
    it("completing user data", async ()=> {
        await checkOutPage.firstNameInput.setValue("Gabriela");
        await checkOutPage.lastNameInput.setValue("Hollmann");
        await checkOutPage.postalCodeInput.setValue("2000");
        await checkOutPage.continueBtn.click();
    });
    it("finishing purchase", async ()=> {
        await checkOutPage.finishBtn.click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-complete.html");
    });
    it("back to Home page after buying", async ()=> {
        await expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-complete.html");
        await expect(checkOutPage.checkImage).toBeDisplayed();
        await expect(checkOutPage.orderText).toBeDisplayed();
        await expect(checkOutPage.completeText).toBeDisplayed();
        await expect(checkOutPage.backToProductsBtn).toBeDisplayed();
        await checkOutPage.backToProductsBtn.click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html")
    })
    it('logging out', async ()=> {
        await MenuPage.menuBtn.click();
        await MenuPage.logOutBtn.click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/");
    })
});

