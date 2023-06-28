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

    it ("test access to item by clicking title", async ()=> {
        await InventoryPage.filMenu.click();
        await InventoryPage.filByNameAZ.click();

        await InventoryPage.bPackTitle.click();
        await expect (browser).toHaveUrl("https://www.saucedemo.com/inventory-item.html?id=4");
        await InventoryPage.backToProducts.click();

        await InventoryPage.backLightTitle.click();
        await expect (browser).toHaveUrl("https://www.saucedemo.com/inventory-item.html?id=0");
        await InventoryPage.backToProducts.click();

        await InventoryPage.boltTshirtTitle.click();
        await expect (browser).toHaveUrl("https://www.saucedemo.com/inventory-item.html?id=1");
        await InventoryPage.backToProducts.click();

        await InventoryPage.jacketTitle.click();
        await expect (browser).toHaveUrl("https://www.saucedemo.com/inventory-item.html?id=5");
        await InventoryPage.backToProducts.click();

        await InventoryPage.onesieTitle.click();
        await expect (browser).toHaveUrl("https://www.saucedemo.com/inventory-item.html?id=2");
        await InventoryPage.backToProducts.click();

        await InventoryPage.redTshirtTitle.click();
        await expect (browser).toHaveUrl("https://www.saucedemo.com/inventory-item.html?id=3");
        await InventoryPage.backToProducts.click();
    });

    it ("test access to item by clicking image", async ()=> {
        await InventoryPage.bPackImg.click();
        await expect (browser).toHaveUrl("https://www.saucedemo.com/inventory-item.html?id=4");
        await InventoryPage.backToProducts.click();

        await InventoryPage.backLightImg.click();
        await expect (browser).toHaveUrl("https://www.saucedemo.com/inventory-item.html?id=0");
        await InventoryPage.backToProducts.click();

        await InventoryPage.boltTshirtImg.click();
        await expect (browser).toHaveUrl("https://www.saucedemo.com/inventory-item.html?id=1");
        await InventoryPage.backToProducts.click();

        await InventoryPage.jacketImg.click();
        await expect (browser).toHaveUrl("https://www.saucedemo.com/inventory-item.html?id=5");
        await InventoryPage.backToProducts.click();

        await InventoryPage.onesieImg.click();
        await expect (browser).toHaveUrl("https://www.saucedemo.com/inventory-item.html?id=2");
        await InventoryPage.backToProducts.click();

        await InventoryPage.redTshirtImg.click();
        await expect (browser).toHaveUrl("https://www.saucedemo.com/inventory-item.html?id=3");
        await InventoryPage.backToProducts.click();
    });

    it ("test access to shopping cart", async ()=> {
        await InventoryPage.cartBtn.click();
        await InventoryPage.contShopp.click();
    });

    it ("testing adding and removing products to shopping cart from image", async ()=> {
        await InventoryPage.bPackImg.click();
        await InventoryPage.addBackPack.click();
        await InventoryPage.backToProducts.click();

        await InventoryPage.backLightImg.click();
        await InventoryPage.addBikeLight.click();
        await InventoryPage.backToProducts.click();

        await InventoryPage.cartBtn.click();

        await expect (InventoryPage.bPackTitle).toExist();
        await expect (InventoryPage.backLightTitle).toExist();

        await InventoryPage.removeBackPack.click();
        await InventoryPage.removeBikeLight.click();

        await InventoryPage.contShopp.click();
    });

    it ("testing adding and removing products to shopping cart from home page", async ()=> {
        await InventoryPage.addBackPack.click();
        await InventoryPage.addBikeLight.click();

        await InventoryPage.cartBtn.click();

        await expect (InventoryPage.bPackTitle).toExist();
        await expect (InventoryPage.backLightTitle).toExist();

        await InventoryPage.removeBackPack.click();
        await InventoryPage.removeBikeLight.click();

        await InventoryPage.contShopp.click();
    });

describe ("Verify system when trying to access with glitch", ()=> {
    beforeAll("Open browser", ()=> {
        // browser.setWindowSize (1366, 768);
        browser.url("https://www.saucedemo.com/");
    });
        
    it ("check user glitch", async ()=>{
        await expect (LoginPage.btnLogin).toExist();
    
        await expect (LoginPage.userNameInput).toBeDisplayed();
        await LoginPage.login("performance_glitch_user", "secret_sauce");
        await LoginPage.btnLoginClick();
    
        await expect(LoginPage.glitchPage).toBeDisplayed();
    });

    it ("test access to item by clicking title", async ()=> {
        await InventoryPage.bPackTitle.click();
        expect (browser).toHaveUrl("https://www.saucedemo.com/inventory-item.html?id=4");
        await InventoryPage.backToProducts.click();

        await InventoryPage.backLightTitle.click();
        expect (browser).toHaveUrl("https://www.saucedemo.com/inventory-item.html?id=0");
        await InventoryPage.backToProducts.click();

        await InventoryPage.boltTshirtTitle.click();
        expect (browser).toHaveUrl("https://www.saucedemo.com/inventory-item.html?id=1");
        await InventoryPage.backToProducts.click();
    });
});
});