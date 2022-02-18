///<reference types = "cypress"/>


describe("Alias and invoke", () => {
    it("Validate a specific hair care product", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*= 'product/category&path']").contains("Hair Care").click();

        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail');
        cy.get('@productThumbnail').its('length').should('be.gt', 5);
        cy.get('@productThumbnail').should('contain', 'Seaweed Conditioner');
    });

    it("Validate a product thumbnail", () => {
        cy.visit("https://www.automationteststore.com/");

        //cy.xpath("//div[@class='thumbnail']//*[@class = 'productcart' or @class='nostock']").as('productThumbnail');
        cy.get('.thumbnail').as('productThumbnail');
        cy.get('@productThumbnail').should('have.length',16);
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('eq', 'Add to Cart');
        cy.get('@productThumbnail').each(($el, index, $list) => {
            if($el.attr('class') ==='productcart'){
                cy.log('Index = ' + index  + ' : ' + $el.text());
            }else{
                cy.log('Index = ' + index  + ' : ' + $el.text());
            }

        })
    });

    it.only("Calculate total of normal and sale products", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get('.thumbnail').as('productThumbnail');
        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
        //     cy.log($el.text());
        // })
        cy.get('@productThumbnail').find('.oneprice').invoke('text').as('itemPrice');
        cy.get('@productThumbnail').find('.pricenew').invoke('text').as('saleItemPrice');

        var itemsTotal = 0;
        cy.get('@itemPrice').then($linkText => {
            var itemsPriceTotal = 0;
            var itemPrice = $linkText.split('$');
            var i;
            for(i = 0; i < itemPrice.length; i++){
                cy.log(itemPrice[i]);
                itemsPriceTotal += Number(itemPrice[i]);
            };
            itemsTotal += itemsPriceTotal;
            cy.log('Non sale items price total: ' + itemsPriceTotal);
        });

        
        cy.get('@saleItemPrice').then($linkText => {
            var saleItemsPrice = 0;
            var saleItemPrice = $linkText.split('$');
            var i;
            for(i = 0; i < saleItemPrice.length; i++){
                cy.log(saleItemPrice[i]);
                saleItemsPrice += Number(saleItemPrice[i]);
            };
            itemsTotal += saleItemsPrice;
            cy.log('Sale items price total: ' + saleItemsPrice);
        })
        .then(() => {
            cy.log('The total price of all products: ' + itemsTotal);
            expect(itemsTotal).to.equal(648.5);
        })
    });
}); 