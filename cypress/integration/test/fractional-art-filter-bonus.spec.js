describe('Checking filtering of Fractions', () => {
    before(() => {
        cy.visit('https://qa.fractional.art/explore')
    })

    it('checks if all closed Fractals have Badge "closed"', () => {
        cy.get('.toggle')
          .last()
          .as('toggle')
          .siblings()
          .should('contain', 'Closed')
          .click();

        cy.wait(500)
        cy.get('.card').each(($card) => {
            cy.wrap($card).children().eq(0).should('contain', 'Closed');
        })

        cy.get('@toggle').click();
    })

    it('checks if all Verified Fractals have Verified badge', () => {
        cy.get('#options-menu').click()
        cy.get('[role="menu"]').within(() => {
            cy.get('a').contains('Verified').click()
        })
        cy.wait(500)
        cy.get('.card')
            .eq(1)
            .children()
            .eq(0)
            .find('img')
            .parent()
            .should('have.class', 'is-verified-badge')

        cy.get('.card').each(($card) => {
            cy.wrap($card)
              .children()
              .eq(0)
              .find('img')
              .parent()
              .should('have.class', 'is-verified-badge')
        })
    })
    
}) 