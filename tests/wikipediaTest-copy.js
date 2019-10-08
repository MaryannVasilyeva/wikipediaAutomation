var wikipediaObject = {}
module.exports = {
  beforeEach: browser => {
      wikipediaObject = browser.page.wikipedia()
      wikipediaObject.navigate()
  },  
  after: browser => {
      wikipediaObject.end()
  },
  'Testing the navbar': browser => {

  },
  'Testing the account login': browser => {
    // wikipediaObject
    //     .accountLogin(data)
    wikipediaObject
      .click('#pt-login')
      .setValue('[class="loginText mw-ui-input"]','Ewilhelm-test')
      .setValue('[class="loginPassword mw-ui-input"]', 'testme123')
      .click('button[name="wploginattempt"]')
    
  }
}