class CheckOutPage{
// Checkout 
    get checkOutBtn() { 
        return $("#checkout");
    }

// Title
    get title() { 
        return $(".title");
    }

// Shopping Cart Logo and Badge selectors
    get addedItemsBadge () {
        return $(".shopping_cart_badge");
    }
    
    get shoppingCart () { 
        return $(".shopping_cart_link");
    }


// Input form
    get firstNameInput() { 
        return $("#first-name");
    }

    get lastNameInput() { 
        return $("#last-name"); 
}

    get postalCodeInput() { 
        return $("#postal-code");
    }

// Continue and Cancel buttons
    get continueBtn() { 
        return $("#continue");
    }

    get cancelBtn() { 
        return $("#cancel");
    }

    get finishBtn() { 
        return $("#finish");
    }

    get backToProductsBtn() {
        return $("#back-to-products")
    }

//Complete checkout elements
    get checkImage() { 
        return $("#checkout_complete_container > img");
    }

    get orderText() { 
        return $("#checkout_complete_container > h2");
    }

    get completeText() { 
        return $("#checkout_complete_container > div");
    }

// Erorr message 
    get errorMsgBtn() { 
        return $('button[class="error-button"]');
    }

}


export default new CheckOutPage();