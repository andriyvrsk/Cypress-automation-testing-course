///<reference types = "cypress"/>


describe("Verifying variables, cypress commands and jquery commands", () => {
    it("Navigating to specific PDP's", () => {
        cy.visit("https://www.automationteststore.com/");
        
        //The following will fail
        // const makeupLink = cy.get("a[href*= 'product/category&path']").contains("Makeup");
        // const skincareLink = cy.get("a[href*= 'product/category&path']").contains("Skincare");
        // makeupLink.click();
        // skincareLink.click();

        //the following will pass
        // const makeupLink = cy.get("a[href*= 'product/category&path']").contains("Makeup");
        // const skincareLink = cy.get("a[href*= 'product/category&path']").contains("Skincare");
        // makeupLink.click();
        // skincareLink.click();

        cy.get("a[href*= 'product/category&path']").contains("Makeup").click();
        cy.get("a[href*= 'product/category&path']").contains("Skincare").click();
    });

    it("Navigating to specific PDP's", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*= 'product/category&path']").contains("Makeup").click();
        
        //The following will fail
        // const header = cy.get("h1 .maintext");
        // cy.log(header.text());

        cy.get("h1 .maintext").then(($headerText) => {
            const headerText = $headerText.text();
            cy.log("Headertext: " + headerText);
            expect(headerText).is.eq("Makeup");
        });
    });

    it.only("Validate properties of the Contact Us page", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");

        //Uses cypress commands & chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name');
        //JQuery approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text();
            expect(firstNameText).to.contain('First name');

             //Embedded commands (Closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text());
                cy.log(fnText);
            });
        });
        //Embedded commands (Closure)
    });
}); 