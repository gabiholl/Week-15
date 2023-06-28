class LoginPage {
    
    get loginLogo() {
        return $("#root > div > div.login_logo");
    }

    get userNameInput() {
        return $("#user-name");
    }

    get passwordInput() {
        return $("#password");
    }

    get btnLogin() {
        return $("#login-button");
    }

//Error Messages
    get errorMessage() {
        return $("#login_button_container > div > form > div.error-message-container");
    }

    get errorMessageWrongUserAndPassword() {
        return $("#login_button_container > div > form > div.error-message-container.error");
    }

    get errorMessageBlankUser() {
        return $("#login_button_container > div > form > div.error-message-container.error");
    }

    get errorMessageBlankPassword() {
        return $("#login_button_container > div > form > div.error-message-container.error");
    }

    get errorMessageLocked() {
        return $("#login_button_container > div > form > div.error-message-container.error");
    }

    get problemPage() {
        return $("#item_4_img_link > img");
    }

    get glitchPage() {
        return $("#item_0_img_link > img");
    }
//
    async login (userName, password) {
        await this.userNameInput.setValue(userName);
        await this.passwordInput.setValue(password);
    }

    async btnLoginClick() {
        await this.btnLogin.click();
    }
}

export default new LoginPage();
