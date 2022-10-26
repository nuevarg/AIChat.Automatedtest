context('Visit all pages', () => {
  beforeEach(function () {
    cy.openHomepage();
  });

  it('validate if lets talk form is working properly', () => {
    cy.get('#ready-talkhome').within(() => {
      cy.document()
        .contains('Ready To Get In Touch? Let’s Talk!')
        .should('be.visible')
        .document()
        .contains('Build relationships in real-time and respond to your customers at scale.')
        .should('be.visible');
      cy.get('input[name="first_name"]')
        .type('Rifqi')
        .get('input[name="last_name"]')
        .type('Jauhari')
        .get('input[name="business_email"]')
        .type('ranger@gmail.com')
        .get('input[name="phoneno"]')
        .type('+62918238961')
        .get('input[name="company_name"]')
        .type('Big Company')
        .get('.company_size')
        .click()
        .get('[data-value="101-1000"]')
        .click()
        .get('.product_interest')
        .click()
        .get('[data-value="Conversational Marketing"]')
        .click()
        .get('.industry')
        .click()
        .get('[data-value="Biotechnology"]')
        .click()
        .get('input[type="submit"][value="Request a Demo"]')
        .click();
    });
    cy.document().contains('Thank you for your message. It has been sent.').should('be.visible');
  });
});
