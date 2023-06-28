import HomePage from '../pageobjects/homePage.js';
import LoginPage from '../pageobjects/loginPage.js'

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
    
    it ("user should be redirected to inventory page", async ()=>{
        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
    });
})

describe("Verify system denies user when trying to access with wrong username", ()=> {
    beforeAll("Open browser", ()=> {
        // browser.setWindowSize (1366, 768);
        browser.url("https://www.saucedemo.com/");
    });
    
    it ("error message should appear due to incorrect username", async ()=>{
        await expect(LoginPage.btnLogin).toExist();

        await expect(LoginPage.userNameInput).toBeDisplayed();
        await LoginPage.login("gabrielahollmann", "secret_sauce");
        await LoginPage.btnLoginClick();

        await expect(LoginPage.errorMessageWrongUserAndPassword).toBeDisplayed();
    });

})

describe("Verify system denies user when trying to access with wrong password", ()=> {
    beforeAll("Open browser", ()=> {
        // browser.setWindowSize (1366, 768);
        browser.url("https://www.saucedemo.com/");
    });
    
    it ("error message should appear due to incorrect password", async ()=>{
        await expect(LoginPage.btnLogin).toExist();

        await expect(LoginPage.userNameInput).toBeDisplayed();
        await LoginPage.login("standard_user", "secret-sauce");
        await LoginPage.btnLoginClick();

        await expect(LoginPage.errorMessageWrongUserAndPassword).toBeDisplayed();
    });

})

describe("Verify system denies user when trying to access with wrong username and password", ()=> {
    beforeAll("Open browser", ()=> {
        // browser.setWindowSize (1366, 768);
        browser.url("https://www.saucedemo.com/");
    });
    
    it ("error message should appear due to incorrect username and password", async ()=>{
        await expect(LoginPage.btnLogin).toExist();

        await expect(LoginPage.userNameInput).toBeDisplayed();
        await LoginPage.login("gabrielahollmann", "secret-sauce");
        await LoginPage.btnLoginClick();

        await expect(LoginPage.errorMessageWrongUserAndPassword).toBeDisplayed();
    });
})

// Quise implementar la verificación con campos vacios pero no me funcionó.

// describe("Verify system denies user when trying to access with blank", ()=> {
//     beforeAll("Open browser", ()=> {
//         // browser.setWindowSize (1366, 768);
//         browser.url("https://www.saucedemo.com/");
//     });
    
//     it ("error message should appear due to blank username and valid password", async ()=>{
//         await expect(LoginPage.btnLogin).toExist();

//         await expect(LoginPage.userNameInput).toBeDisplayed();
//         await LoginPage.login("", "secret_sauce");
//         await LoginPage.btnLoginClick();

//         await expect(LoginPage.username).not.toHaveText();
//         await expect(LoginPage.errorMessageBlankUser).toBeDisplayed();
//     });
//     it ("error message should appear due to valid username and blank password", async ()=>{
//         await expect(LoginPage.btnLogin).toExist();

//         await expect(LoginPage.userNameInput).toBeDisplayed();
//         await LoginPage.login("standard_user", "");
//         await LoginPage.btnLoginClick();

//         await expect(LoginPage.password).not.toHaveText();
//         await expect(LoginPage.errorMessageBlankPassword).toBeDisplayed();
//     });

//     it ("error message should appear due to blank username and blank password", async ()=>{
//         await expect (LoginPage.btnLogin).toExist();

//         await expect (LoginPage.userNameInput).toBeDisplayed();
//         await LoginPage.login("", "");
//         await LoginPage.btnLoginClick();

//         await expect(LoginPage.username).not.toHaveText();
//         await expect(LoginPage.password).not.toHaveText();
//         await expect(LoginPage.errorMessageBlankUser).toBeDisplayed();
//     });
// })
///////////

describe ("Verify system when trying to access with locked", ()=> {
    beforeAll("Open browser", ()=> {
        // browser.setWindowSize (1366, 768);
        browser.url("https://www.saucedemo.com/");
    });
    it ("check user locked", async ()=>{
        await expect (LoginPage.btnLogin).toExist();

        await expect (LoginPage.userNameInput).toBeDisplayed();
        await LoginPage.login("locked_out_user", "secret_sauce");
        await LoginPage.btnLoginClick();

        await expect(LoginPage.errorMessageLocked).toBeDisplayed();
    });
})

describe ("Verify system when trying to access with problem", ()=> {
    beforeAll("Open browser", ()=> {
        // browser.setWindowSize (1366, 768);
        browser.url("https://www.saucedemo.com/");
    });
    it ("check user problem", async ()=> {
        await expect (LoginPage.btnLogin).toExist();

        await expect (LoginPage.userNameInput).toBeDisplayed();
        await LoginPage.login("problem_user", "secret_sauce");
        await LoginPage.btnLoginClick();

        await expect(LoginPage.problemPage).toBeDisplayed();
    });
})

describe ("Verify system when trying to access with glitch", ()=> {
    beforeAll("Open browser", ()=> {
        // browser.setWindowSize (1366, 768);
        browser.url("https://www.saucedemo.com/");
    });
    
    it ("check user glitch", async ()=> {
        await expect (LoginPage.btnLogin).toExist();

        await expect (LoginPage.userNameInput).toBeDisplayed();
        await LoginPage.login("performance_glitch_user", "secret_sauce");
        await LoginPage.btnLoginClick();

        await expect(LoginPage.glitchPage).toBeDisplayed();
    });
})
