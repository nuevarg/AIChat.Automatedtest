context('empty spec', () => {

  beforeEach(function() {
    cy.visit('https://aichat.com/');
  });

  it('Visit home page', () => {
    cy.get(".obra-brand").should('exist');
  })
})