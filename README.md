# BaSP Week 14 - Swag Labs site Automation Testing

Welcome to automated UI test for  [SauceLabs's testing webpage](https://www.saucedemo.com/)  based on  [WebdriverIO](https://webdriver.io/)  testing framework of Become a Software Professional corresponding to the week 14 issue.

## Description

This project consists of UI automated tests for a demo webpage. Tests will be functional to test the webpage usage as deeply as possible.
100% of the tests were made with  [WebDriverIO](https://webdriver.io/)  based on Jasmine (using sync mode).

In this repository you will find:

-   Tests for the Login page (with valid and invalid credentials and for each one of the users).
-   Tests for multiple features in Inventory page (adding and removing items to cart from different sections of the webpage, sorting products, visiting social media links, reseting the app's state, logging out). All of them were tested using standard_user session.
-   Tests for Checkout page (checking out with valid and invalid credentials), with a standard_user session.
-   An E2E (_End to End_) test using standard_user session (Logging in, sorting products, adding them to the cart, removing one, checking out and logging out).

Every test is organized by corresponding 'describe' and 'it's for a better understanding of the reports. Also there are some spaces between lines of code for a better reading experience.

## Getting Started

### []Dependencies

-   [Node.js version 12 or up](https://nodejs.org/en/)  is a pre-requisite.
-   [Google chrome](https://www.google.com/chrome/?brand=BNSD&gclid=Cj0KCQjw16KFBhCgARIsALB0g8LepNdLaZtxkPxgXo3piPweP7NjQQ76azzg9XDmbH5ZESeb_4kFTn4aAjCaEALw_wcB&gclsrc=aw.ds)  is preferred
-   [VS Code](https://code.visualstudio.com/)  or any other code editor is necessary.

### []Installing

-   Download the project from this repository
-   Run  [git bash](https://git-scm.com/)  (or any other) terminal on the project's folder
-   Run  `npm install`  on the terminal to install every dependency of the package.json
-   Run  `code .`  to see the code

You're ready to run the tests!  😄

### Executing program

You should use the test's commands on the terminal you previously runned on the project's folder.

-   For running  **Login test**: You should use  `npm run test:login.test.js`
-   For running  **Inventory test**: You should use  `npm run test:inventory.test.js`
-   For running  **Menu test**: You should use  `npm run test:menu.test.js`
-   For running  **Footer test**: You should use  `npm run test:footer.test.js`
-   For running  **Checkout test**: You should use  `npm run test:checkout.test.js`
-   For running  **End to End test**: You should use  `npm run test:swaglabsE2E.test.js`

...or just type  `npm run test`  and it'll run all the tests one by one!  😉

## Some info you should know

#### []'Pageobjects'

Here you will find the different files for each part of the webpage and their corresponding selectors.

#### []'Specs'

In this folder you will find the different files for the tests.


## Author

Gabriela Hollmann 🦋