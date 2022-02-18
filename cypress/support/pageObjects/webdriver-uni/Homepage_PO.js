class HomePage_PO {
    visitHomepage() {
        cy.visit(Cypress.env('webdriveruni_homepage'), {timeout: 60000});
    };

    click_on_contactUs_button() {
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true}, {timeout: 6000});
    };
};
export default HomePage_PO;