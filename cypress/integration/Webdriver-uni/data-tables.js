/// <reference types="Cypress" />
describe("Handling data via webdriverUni", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })
    it("calculate and assert the total age of all users", () => {
        var userDetails = [];
        let numb = 0;
        cy.get('#thumbnail-1 td').each(($el, index, $list) => {
            userDetails[index] = $el.text()
        }).then(() => {
            var i;
            for(i = 0; i < userDetails.length; i++) {
                if(Number(userDetails[i])){
                    numb += Number(userDetails[i]);
                };
            };
            cy.log("Total age: " + numb);
            expect(numb).to.eq(322);
        });                                                   
    });

    it("calculate and assert of the given user by the last name", () => {
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text();
            if(text.includes("Woods")){
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(function(age) {
                    const userAge = age.text();
                    expect(userAge).to.eq('80');
                });
            };
        });
    });
  });
