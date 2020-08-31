import SearchResults_Page from '../PageObjects/SearchResults_Page'
import HompePage_Page from '../PageObjects/HomePage_Page'

describe('Test Search Results Page from pearson.com', () => {
    beforeEach(function () {
        this.timeout(10000)
        browser.url('./');
        HompePage_Page.acceptCookies();
    });

     it('First page with searching result should have at most 10 elements', () => {
        SearchResults_Page.searchForSomething();
        SearchResults_Page.confirmSearchingResultPageHasOnlyTenElements();
    }); 

    it('Clicking on Next button should display next page with 10 more result', () => {
        SearchResults_Page.searchForSomething();
        SearchResults_Page.confirmSearchingResultPageHasOnlyTenElements();
        SearchResults_Page.clickOnNextButton();
        SearchResults_Page.confirmSearchingResultPageHasOnlyTenElements();
    });  

    it('Third searched element should redirect to the proper article', () => {
        SearchResults_Page.searchForSomething();
        SearchResults_Page.clickOnSpecificArticle();
    });
});