import checkOutPage from '../pageobjects/checkOutPage.js';
import InventoryPage from '../pageobjects/inventoryPage.js';
import LoginPage from '../pageobjects/loginPage.js';

describe ("Verify login with user with valid credentials", ()=> {
    beforeAll("Open browser", ()=> {
        // browser.setWindowSize (1366, 768);
        browser.url("https://www.saucedemo.com/");
    });
    it ("user should log in correctly", async ()=>{
        await expect(LoginPage.btnLogin).toExist();
        await expect(LoginPage.userNameInput).toBeDisplayed();
        await LoginPage.login("standard_user", "secret_sauce");
        await LoginPage.btnLoginClick();
    });
    it ("adding products to cart", async ()=>{
        await InventoryPage.addBackPack.click();
        await InventoryPage.addBikeLight.click();
        await InventoryPage.cartBtn.click();
        await checkOutPage.checkOutBtn.click();
    });
    it ("verify Checkout page is correctly displayed", async ()=>{
        await InventoryPage.cartBtn.click();
        await checkOutPage.checkOutBtn.click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-step-one.html");
        await expect (checkOutPage.title).toHaveText("Checkout: Your Information");
    });
    it ("filling right data", async ()=>{
        await checkOutPage.firstNameInput.setValue("Gabriela");
        await checkOutPage.lastNameInput.setValue("Hollmann");
        await checkOutPage.postalCodeInput.setValue("2000");
        await checkOutPage.continueBtn.click();
    });
});

describe("Cancel button", ()=> {
    it("Cancel Button works correctly, redirecting back to inventory page", async ()=> {
        await checkOutPage.cancelBtn.click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
    })
});

describe("Finish button test - correct purchase", ()=> {
    beforeAll("Open browser", ()=> {
        // browser.setWindowSize (1366, 768);
        browser.url("https://www.saucedemo.com/");
    });
    it ("user should log in correctly", async ()=>{
        await expect(LoginPage.btnLogin).toExist();
        await expect(LoginPage.userNameInput).toBeDisplayed();
        await LoginPage.login("standard_user", "secret_sauce");
        await LoginPage.btnLoginClick();
    });
    it("adding products and proceed to cart - checkout", async ()=> {
        await InventoryPage.cartBtn.click();
        await checkOutPage.checkOutBtn.click();
        await checkOutPage.firstNameInput.setValue("Gabriela");
        await checkOutPage.lastNameInput.setValue("Hollmann");
        await checkOutPage.postalCodeInput.setValue("2000");
        await checkOutPage.continueBtn.click();
        await checkOutPage.finishBtn.click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-complete.html");
    });
});

describe("Finish button test - complete purchase", ()=> {
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
    it("adding products and proceed to buy - information related to the complete purchase proccess should be displayed correctly", async ()=> {
        await InventoryPage.addBackPack.click();
        await InventoryPage.addBikeLight.click();
        await InventoryPage.cartBtn.click();
        await checkOutPage.checkOutBtn.click();
        await checkOutPage.firstNameInput.setValue("Gabriela");
        await checkOutPage.lastNameInput.setValue("Hollmann");
        await checkOutPage.postalCodeInput.setValue("2000");
        await checkOutPage.continueBtn.click();
        await checkOutPage.finishBtn.click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-complete.html");
        await expect(checkOutPage.checkImage).toBeDisplayed();
        await expect(checkOutPage.orderText).toBeDisplayed();
        await expect(checkOutPage.completeText).toBeDisplayed();
    });
});

describe("Finish purchase - back home button", ()=> {
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
    it("adding products and proceed to buy - Back Home button is enabled and redirect back to the inventory page", async ()=> {
        await InventoryPage.addBackPack.click();
        await InventoryPage.addBikeLight.click();
        await InventoryPage.cartBtn.click();
        await checkOutPage.checkOutBtn.click();
        await checkOutPage.firstNameInput.setValue("Gabriela");
        await checkOutPage.lastNameInput.setValue("Hollmann");
        await checkOutPage.postalCodeInput.setValue("2000");
        await checkOutPage.continueBtn.click();
        await checkOutPage.finishBtn.click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-complete.html");
        await expect(checkOutPage.checkImage).toBeDisplayed();
        await expect(checkOutPage.orderText).toBeDisplayed();
        await expect(checkOutPage.completeText).toBeDisplayed();
        await expect(checkOutPage.backToProductsBtn).toBeDisplayed();
        await checkOutPage.backToProductsBtn.click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
    });
});

describe ("Cancel Button works correctly", ()=> {
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
    it ("adding products to cart and cancel at the end", async ()=>{
        await InventoryPage.addBackPack.click();
        await InventoryPage.cartBtn.click();
        await checkOutPage.checkOutBtn.click();

        await expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-step-one.html");
        await expect (checkOutPage.title).toHaveText("Checkout: Your Information");

        await checkOutPage.firstNameInput.setValue('Gabriela');
        await checkOutPage.lastNameInput.setValue('Hollmann');
        await checkOutPage.postalCodeInput.setValue('2000');

        await checkOutPage.continueBtn.click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-step-two.html");

        await checkOutPage.cancelBtn.click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
    });
});
