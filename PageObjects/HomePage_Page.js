const { expect } = require("chai");

    class HomePage_Page {

        get searchBox() { return $("[class='search-box-input']"); }
        get buttonAcceptCookies() { return $("[id='cookie-notification-policy-accept-continue']") };
 

    setSearchBoxValue(searchBox) {
        return this.searchBox.setValue(searchBox);
    }
    
    acceptCookies() {
        if (this.buttonAcceptCookies.isDisplayedInViewport()) {
            this.buttonAcceptCookies.doubleClick();
        };
    }

    confirmSearchBoxPresence() {
        browser.pause(2000);
        var isDisplayedInViewport = $(this.searchBox).isDisplayedInViewport()
        expect(isDisplayedInViewport).true;
    }
}

module.exports = new HomePage_Page();
