const { ElementFlags } = require("typescript");
const { expect } = require("chai");

class SearchResults_Page {

    get searchBox() { return $("[class='search-box-input']"); }
    get searchButton() { return $("[class='search-box-icon']"); }
    get results() { return $$("[class='productItem__name']"); }
    get nextButton() { return $("a.pagination__btn.hasArrow.arrowRight"); }


    searchForSomething() {
        browser.pause(8000);
        this.searchBox.waitForEnabled(10000, false);
        this.searchBox.setValue('English course');
        this.searchButton.waitForClickable({ timeout: 10000 });
        this.searchButton.doubleClick();
    }
    
    confirmSearchingResultPageHasOnlyTenElements() {
        browser.pause(8000);
        this.results.values.length;
        expect(this.results.length).to.be.lessThan(11);
    }

    clickOnNextButton() {
        this.nextButton.waitForEnabled({ timeout: 10000 });
        this.nextButton.scrollIntoView();
        this.nextButton.waitForClickable({ timeout: 8000 });
        this.nextButton.click();
    }

    clickOnSpecificArticle() {
        browser.pause(20000);
        var href = this.results[3].getProperty('href');
        this.results[3].click();
        browser.pause(10000);
        var currentUrl = browser.getUrl();
        expect(currentUrl).to.be.equal(href);
    }
}

module.exports = new SearchResults_Page();