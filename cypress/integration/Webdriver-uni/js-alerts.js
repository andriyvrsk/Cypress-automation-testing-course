///<reference types = "cypress"/>

describe("Handle js alerts", () => {
    it("Confirm js alerts contain the right text", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true});

        cy.get('#button1').click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!');
        });
    });

    it("Validate JS confirm box works correctly when clicking ok", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true});

        cy.get('#button4').click();

        cy.on('window:confirm', (str) => {
            return true; //clicks ok
        });
        cy.get('#confirm-alert-text').should('contain', 'You pressed OK!');
    });

    it("Validate JS confirm box works correctly when clicking cancel", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true});
        cy.get('#button4').click();

        cy.on('window:confirm', (str) => {
            return false; //clicks cancel
        });
        cy.get('#confirm-alert-text').contains('You pressed Cancel!');
    });
    

    it("Using the stub", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true});

        const stub = cy.stub();
        cy.on('window:confirm', stub);

        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!');
        }).then(() => {
            return true;
        }).then(() => {
            cy.get('#confirm-alert-text').should('contain', 'You pressed OK!');
        });

    });
});