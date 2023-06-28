class InventoryPage {

    // Add-to-cart button
    get addBackPack() { 
        return $("#add-to-cart-sauce-labs-backpack");
    }

    get addBikeLight() {
        return $("#add-to-cart-sauce-labs-bike-light");
    }

    get addBoltTshirt() { 
        return $("#add-to-cart-sauce-labs-bolt-t-shirt");
    }

    get addJacket() { 
        return $("#add-to-cart-sauce-labs-fleece-jacket");
    }

    get addOnesie() { 
        return $("#add-to-cart-sauce-labs-onesie");
    }

    get addRedTshirt() { 
        return $("#add-to-cart-test\.allthethings\(\)-t-shirt-\(red\)");
    }

        // Remove button
    get removeBackPack() { 
        return $("#remove-sauce-labs-backpack");
    }

    get removeBikeLight() { 
        return $("#remove-sauce-labs-bike-light");
    }

    get removeBoltTshirt() { 
        return $("#remove-sauce-labs-bolt-t-shirt");
    }

    get removeJacket() { 
        return $("#remove-sauce-labs-fleece-jacket");
    }

    get removeOnesie() { 
        return $("#remove-sauce-labs-onesie");
    }

    get removeRedTshirt() {
        return $("#remove-test\.allthethings\(\)-t-shirt-\(red\)");
}

// Title Item
    get bPackTitle() { 
        return $("#item_4_title_link");
    }

    get backLightTitle() { 
        return $("#item_0_title_link");
    }

    get boltTshirtTitle() { 
        return $("#item_1_title_link");
    }

    get jacketTitle() { 
        return $("#item_5_title_link");
    }

    get onesieTitle() { 
        return $("#item_2_title_link");
    }

    get redTshirtTitle() { 
        return $("#item_3_title_link");
    }

// Images
    get bPackImg() { 
        return $("#item_4_img_link");
    }

    get backLightImg() { 
        return $("#item_0_img_link"); 
    }

    get boltTshirtImg() { 
        return $("#item_1_img_link");
    }

    get jacketImg() { 
        return $("#item_5_img_link");
    }

    get onesieImg() { 
        return $("#item_2_img_link"); 
    }

    get redTshirtImg() { 
        return $("#item_3_img_link");
    }

// 'Back to Products' and 'Continue Shopping' buttons

    get backToProducts() { 
        return $("#back-to-products");
    }

    get contShopp() { 
        return $("#continue-shopping");
    }

// Filter's selectors

    get filMenu() { 
        return $(".product_sort_container");
    }

    get filByNameAZ() { 
        return $("div.right_component > span > select > option:nth-child(1)");
    }

    get filByNameZA() { 
        return $("div.right_component > span > select > option:nth-child(2)");
    } 

    get filByLowToHigh() { 
        return $("div.right_component > span > select > option:nth-child(3)");
    }

    get filByHighToLow() { 
        return $("div.right_component > span > select > option:nth-child(4)");
    }

    get firstItem() { 
        return $("#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.inventory_item_label > a");
    }

    get secondItem() { 
        return $("#inventory_container > div > div:nth-child(2) > div.inventory_item_description > div.inventory_item_label > a");
    }

    get thirdItem() { 
        return $("#inventory_container > div > div:nth-child(3) > div.inventory_item_description > div.inventory_item_label > a");
    }

    get fourthItem() { 
        return $("#inventory_container > div > div:nth-child(4) > div.inventory_item_description > div.inventory_item_label > a");
    }

    get fifthItem() { 
        return $("#inventory_container > div > div:nth-child(5) > div.inventory_item_description > div.inventory_item_label > a");
    }

    get sixthItem() { 
        return $("#inventory_container > div > div:nth-child(6) > div.inventory_item_description > div.inventory_item_label > a"); 
    }

    // Shopping Cart
    get cartBtn() { 
        return $("#shopping_cart_container a");
    }

}

export default new InventoryPage();
