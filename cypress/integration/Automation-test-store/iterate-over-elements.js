///<reference types = "cypress"/>


describe("Iterate over elements", () => {
    beforeEach(function() {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*= 'product/category&path']").contains("Hair Care").click();

    });
    it("Log information of all hair care products", () => {
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
           cy.log('Index = ' + index  + ' : ' + $el.text());
        })
    });

    it("Add specific product to the basket", () => {
        cy.selectProduct('Curls to straight Shampoo');
        // cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        //     if($el.text().includes('Curls to straight Shampoo')){
        //         cy.wrap($el).click();
        //     }
        // });
    });

    it("Add another specific product to the basket", () => {
        cy.selectProduct('Seaweed Conditioner');
    });

    it("Add another specific product to the basket", () => {
        cy.selectProduct('Pantene Pro-V Conditioner, Classic Care');
    });
}); 