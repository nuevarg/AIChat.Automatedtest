/// <reference types='cypress' />

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

context('Widget chat functions', () => {
  beforeEach(function () {
    cy.openHomepage();
  });
  it('validate if website widget chat is loading properly', () => {
    cy.get('.aichat-menu-open-button')
      .should('be.visible')
      .click()
      .get('#aichat-website-menu')
      .should('be.visible')
      .click()
      .selectWidgetChat('#aichat-welcome-frame')
      .should('be.visible');
  });
  it('validate if facebook widget chat is loading properly', () => {
    cy.get('.aichat-menu-open-button')
      .should('be.visible')
      .click()
      .get('#aichat-facebook-menu')
      .should('be.visible')
      .click()
      .selectWidgetChat('iframe[name="f3ce41bb75b0d2c"]')
      .should('be.visible');
  });
  it('validate if the whatsapp widget chat is loading properly', () => {
    cy.get('.aichat-menu-open-button')
      .should('be.visible')
      .click()
      .get('#aichat-whatsapp-menu')
      .should('be.visible')
      .click();
    // Cypress is unable to handle multiple tabs
  });
  it('validate if the widget chat is loading in Homepage', () => {
    cy.get('.aichat-menu-open-button')
      .should('be.visible')
      .click()
      .get('#aichat-website-menu')
      .should('be.visible')
      .get('#aichat-facebook-menu')
      .should('be.visible')
      .get('#aichat-whatsapp-menu')
      .should('be.visible')
      .get('.aichat-menu-close-icon')
      .should('be.visible');
  });
  it('validate if the widget chat is loading in Service Suite page', () => {
    cy.contains('Products')
      .realHover('mouse')
      .get('.nav-label')
      .contains('Service Suite')
      .click()
      .get('.aichat-menu-open-button')
      .should('be.visible')
      .click()
      .get('#aichat-website-menu')
      .should('be.visible')
      .get('#aichat-facebook-menu')
      .should('be.visible')
      .get('#aichat-whatsapp-menu')
      .should('be.visible')
      .get('.aichat-menu-close-icon')
      .should('be.visible');
  });
  it('validate if the widget chat is loading in For Enterprise page', () => {
    cy.contains('Solution')
      .realHover('mouse')
      .get('.nav-label')
      .contains('For Enterprise')
      .click()
      .get('.aichat-menu-open-button')
      .should('be.visible')
      .click()
      .get('#aichat-website-menu')
      .should('be.visible')
      .get('#aichat-facebook-menu')
      .should('be.visible')
      .get('#aichat-whatsapp-menu')
      .should('be.visible')
      .get('.aichat-menu-close-icon')
      .should('be.visible');
  });
  it('validate if the widget chat is loading in Mitsubishi Motors page', () => {
    cy.contains('Customer Success')
      .realHover('mouse')
      .get('.nav-label')
      .contains('Mitsubishi Motors')
      .click()
      .get('.aichat-menu-open-button')
      .should('be.visible')
      .click()
      .get('#aichat-website-menu')
      .should('be.visible')
      .get('#aichat-facebook-menu')
      .should('be.visible')
      .get('#aichat-whatsapp-menu')
      .should('be.visible')
      .get('.aichat-menu-close-icon')
      .should('be.visible');
  });
});
