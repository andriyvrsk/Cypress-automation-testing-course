// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
Cypress.Commands.add("selectProduct", productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        if($el.text().includes(productName)){
            cy.wrap($el).click();
        };
    });
});

// Cypress.Commands.add("addProductToBasket", productName => {
//     cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
//         if($el.text() === productName){
//             cy.log($el.text());
// cy.wrap($el).parent().parent().parent().find("[href='#']").click({force: true});      
//         };
//     });
// });

Cypress.Commands.add("addProductToBasket", productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        if($el.text() === productName){
            cy.log($el.text());
            cy.get('.productcart').eq(index).click();
            cy.wait(1000);
        };
    });
});

Cypress.Commands.add("webdriverUni_ContactForm_submission", (fname, lname, email, comment, $selector, textToLocate) => {
    cy.get('[name="first_name"]').type(fname);
    cy.get('[name="last_name"]').type(lname);
    cy.get('[name="email"]').type(email);
    cy.get('textarea.feedback-input').type(comment);
    cy.get('[type="submit"]').click();
    cy.get($selector).contains(textToLocate);
});

Cypress.Commands.add("navigate_to_webdriveruni_homepage", () => {
    cy.visit("/");
});

Cypress.Commands.add("navigate_to_webdriveruni_checkbox_page", () => {
    cy.visit("/" + "/Dropdown-Checkboxes-RadioButtons/index.html");
});
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';