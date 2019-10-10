var testCommands = {
    // TESTING THE NAVBAR BUTTONS LINKING
    navBar: function(data){
        var self = this;
        var number
            for (number = 1; number < 7; number +=1) {
                self.api.useXpath()
                switch (number){
                    case 2:
                        self
                            .click(`(//div[@class="body"]//li//a)[${number}]`)
                            .verify.containsText('@searchResult', data[0].contents)
                        break;
                    case 3:
                        self
                            .click(`(//div[@class="body"]//li)[${number}]`)
                            .verify.containsText('@searchResult', data[0].featuredContents)
                        break;
                    case 4:
                        self
                            .click(`(//div[@class="body"]//li)[${number}]`)
                            .verify.containsText('@searchResult', data[0].currentEvents)
                        break;
                    case 6:
                        self
                            .click(`(//div[@class="body"]//li)[${number}]`)
                            .verify.urlContains(data[0].donateUrl)
                            .api.back()
                        break;
                    case 7:
                        self
                            .click(`(//div[@class="body"]//li)[${number}]`)
                            .verify.urlContains(data[0].storeUrl)
                            .api.back()
                        break;
                    default:
                }
            }
        return this
    },
    // TESTING FOR A VALID INPUT IN THE SEARCH
    searchInput: function(data) {
        this
        // testing the search button
            .setValue('@searchInput', (data[0].search))
            .click('@searchInputButton')
            .waitForElementVisible('@searchResult')
            .verify.containsText('@searchResult', 'DevMountain')
            .api.back()
        return this
    },
    // TESTING FOR AN INVALID INPUT IN THE SEARCH
    searchInvalidInput: function(data){
        this
            .waitForElementVisible('@pageContent')
            .setValue('@searchInput', [data[0].invalidSearch, this.api.Keys.ENTER])
            .waitForElementVisible('@searchResult')
            .verify.containsText('@noSearchResult', 'There were no results matching the query.')
        return this

    },
    accountLogin: function(data){
        this
        //TESTING LOGIN?
            .click('@navLoginButton')
            //calling the .login and .password to the testAssets/wikipediaData.js
            .setValue('@accountLogin',data[0].login)
            .setValue('@passwordLogin', data[0].password)
            .click('@loginButton')
        return this
    }
}

module.exports = {
    url: 'https://en.wikipedia.org/wiki/Main_Page',
    commands: [testCommands],
    elements: {
        //PAGE LAYOUT SELECTOR
        pageContent: '#content',
        //NAVBAR SELECTORS
            //***CONTENTS
        contentsLink: 'a[title="Guides to browsing Wikipedia"]',
            //***FEATURED CONTENTS
        featuredContentLink: 'a[title="Featured content – the best of Wikipedia"]',
            //***CURRENT EVENTS
        currentEventsLink: 'a[title="Find background information on current events"]',
            //***DONATE TO WIKIPEDIA
        donateLink: 'a[title="Support us"]',
            //***WIKIPEDIA STORE
        storeLink: 'a[title="Visit the Wikipedia store"]',

        //SEARCH SELECTORS
        searchInput: '[name="search"]',
        searchResult: '#firstHeading',
        noSearchResult: '.mw-search-nonefound',
        searchInputButton: '[name="go"]',
        //ACCOUNT LOGIN
        accountLogin: '[class="loginText mw-ui-input"]',
        passwordLogin: '[class="loginPassword mw-ui-input"]',
        loginButton: '[name="wploginattempt"]',
        navLoginButton: '#pt-login'

    }
}