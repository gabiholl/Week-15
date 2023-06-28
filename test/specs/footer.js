import LoginPage from '../pageobjects/loginPage.js'
import FooterPage from '../pageobjects/footerPage.js'
import MenuPage from '../pageobjects/menuPage.js';

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
    it("test redirection to social network pages work correctly", async ()=> {
        await FooterPage.twitterBtn.click();
        await browser.switchWindow("https://twitter.com/saucelabs");
        await expect(browser).toHaveUrl("https://twitter.com/saucelabs");
        await browser.closeWindow();
        await browser.switchWindow("Swag Labs");

        await FooterPage.facebookBtn.click();
        await browser.switchWindow("https://www.facebook.com/saucelabs");
        await expect(browser).toHaveUrl("https://www.facebook.com/saucelabs");
        await browser.closeWindow();
        await browser.switchWindow("Swag Labs");

        await FooterPage.linkedinBtn.click();
        await browser.switchWindow("https://www.linkedin.com/company/sauce-labs/");
        await expect(browser).toHaveUrlContaining("https://www.linkedin.com/company/sauce-labs/");
        await browser.switchWindow("Swag Labs");
    });
    it('logging out', async ()=> {
        await MenuPage.menuBtn.click();
        await MenuPage.logOutBtn.click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/");
    });
});
