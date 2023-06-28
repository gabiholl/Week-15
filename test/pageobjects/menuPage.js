class MenuPage {
    get menuBtn() { 
        return $("#react-burger-menu-btn");
    }
    
    get menuCrossBtn() { 
        return $("#react-burger-cross-btn"); 
    }
    
    get allItemsBtn () { 
        return $("#inventory_sidebar_link");
    }
    
    get aboutBtn() { 
        return $("#about_sidebar_link");
    }
    
    get logOutBtn () {
        return $("#logout_sidebar_link");
    }
    
    get resetBtn () {
        return $("#reset_sidebar_link");
    }

}

export default new MenuPage();
