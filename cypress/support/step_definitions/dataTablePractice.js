// import {When, Then, Given} from "cypress-cucumber-preprocessor/steps"
// import cypress from "cypress";

const {Given, When, Then} = require("cypress-cucumber-preprocessor/steps");

let sum = 0;

When('I add all following numbers:', (dataTable) => {
    // console.log(dataTable.toString())
    sum = dataTable.rawTable.slice(1).reduce((rowA, rowB) => rowA.reduce((a,b) => parseInt(a,10) + parseInt(b, 10)) +
        rowB.reduce((a, b) => parseInt(a,10) + parseInt(b,10)));
})

Then('I verify the datatable result is equal to {int}', (result) => {
    expect(sum).to.eq(result);
})