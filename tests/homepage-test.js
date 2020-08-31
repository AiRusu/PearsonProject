import HomePage_Page from '../PageObjects/HomePage_Page';

describe('Test Home Page from pearson.com', () => {
  beforeEach(function () {
    this.timeout(10000)
    browser.url('./');
    HomePage_Page.acceptCookies();
  });
  
  it('Search Box is visible therefore should return true', () =>{
    HomePage_Page.confirmSearchBoxPresence();
  });  
});
