import LoginPage from '../pageobjects/loginPage.js'
import InventoryPage from '../pageobjects/inventoryPage.js';
import checkOutPage from '../pageobjects/checkOutPage.js';
import MenuPage from '../pageobjects/menuPage.js';

describe ("Verify login user - All items menu", ()=> {
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
    it ("clicking on the All Items button should redirect to the inventory Page", async ()=>{
        await checkOutPage.shoppingCart.click();
        await MenuPage.menuBtn.click();
        await MenuPage.allItemsBtn.click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
    });
});


describe ("Verify login user - About page menu", ()=> {
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
    it ("clicking on the About in sidebar menu", async ()=>{
        await checkOutPage.shoppingCart.click();
        await MenuPage.menuBtn.click();
        await MenuPage.aboutBtn.click();
        await expect(browser).toHaveUrl("https://saucelabs.com/");
    });
});

describe ("Verify login user - resset app page in menu", ()=> {
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
    it ("clicking on the Reset App State button should clear the cart", async ()=>{
        await InventoryPage.addBackPack.click();
        await MenuPage.menuBtn.click();
        await MenuPage.resetBtn.click();
    });
});

describe ("Verify login user - resset app page in menu", ()=> {
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
    it ("Clicking on LogOut button should take us out and redirect to Login Page", async ()=>{
        await MenuPage.menuBtn.click();
        await MenuPage.logOutBtn.click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/");
    });
});
