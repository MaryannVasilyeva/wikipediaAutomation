var testCommands = {
    // TESTING THE NAVBAR BUTTONS LINKING
    navBar: function(data){
        this
            .waitForElementVisible('@pageContent')
            .click('@contentsLink')
            .verify.containsText('@searchResult', 'Portal:Contents')
        this
            .click('@featuredContentLink')
            .verify.containsText('@searchResult', 'Portal:Featured content')
        this
            .click('@currentEventsLink')
            .verify.containsText('@searchResult', 'Portal:Current events')
        this
            .click('@donateLink')
            .verify.urlContains('https://donate.wikimedia.org')
            .api.back()
        this
            .click('@storeLink')
            .verify.urlContains('https://store.wikimedia.org')
            .api.back()
        return this
    },
    // TESTING FOR A VALID INPUT IN THE SEARCH
    searchInput: function(data) {
        this
        // testing with the ENTER key
            .waitForElementVisible('@pageContent')
            .setValue('@searchInput', [data.search, this.api.Keys.ENTER])
            .waitForElementVisible('@searchResult')
            .verify.containsText('@searchResult', 'DevMountain')
            .api.back()
        this
        // testing the search button
            .setValue('@searchInput', (data.search))
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
            .setValue('@searchInput', [data.invalidSearch, this.api.Keys.ENTER])
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