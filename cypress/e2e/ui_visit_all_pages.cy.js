context('empty spec', () => {
  beforeEach(function () {
    cy.visit('https://aichat.com/');
  });

  it('Validate homepage is loaded properly', () => {
    cy.get('.obra-header')
      .within(() => {
        cy.get('.obra-brand')
      .should('exist')
      .get('#menu-item-1790')
      .contains('Products')
      .should('exist')
      .get('#menu-item-8832')
      .contains('Solution')
      .should('exist')
      .get('#menu-item-2673')
      .contains('Service')
      .should('exist')
      .get('#menu-item-2676')
      .contains('Customer Success')
      .should('exist')
      .get('#menu-item-515')
      .contains('Blog')
      .should('exist')
      .get('#menu-item-3314')
      .contains('Company')
      .should('exist');
      })
    
    
    
  });
});
