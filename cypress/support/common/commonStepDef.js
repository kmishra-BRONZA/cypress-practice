import {Then} from "cypress-cucumber-preprocessor/steps";

/*
* Reusable step definitions
* This is good place to put  before/beforeEach/after/afterEach hooks relate to that particular feature
* */
Then(`I see {string} in the title`, (title) => {
    cy.title().should('include', title)
})