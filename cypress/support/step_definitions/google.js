import {Given, Then, When} from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'

Given('I open google page', () => {
    cy.visit(url);
})

let sum = 10;

When('I add all following numbers:', (dataTable) => {
    // console.log(dataTable)

    // dataTable.rawTable.slice(1).reduce
})

Then('I verify the datatable result is equal to {int}', (result) => {
    expect(sum).to.eq(result);
})

Then(`I see {string} in the title`, (title) => {
    cy.title().should('include', title)
})