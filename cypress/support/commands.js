// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-iframe';
import "cypress-real-events/support";

Cypress.Commands.add('openHomepage', () => {
  cy.visit('/');
});

Cypress.Commands.add('selectWidgetChat', (iframe) => {
  return cy
    .get('iframe')
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap);
});

Cypress.Commands.add('validateHeaderPage', () => {
  return cy
  .get('.obra-header')
  .within(() => {
    cy.get('.obra-brand')
      .should('be.visible')
      .get('#menu-item-1790')
      .contains('Products')
      .should('be.visible')
      .get('#menu-item-8832')
      .contains('Solution')
      .should('be.visible')
      .get('#menu-item-2673')
      .contains('Service')
      .should('be.visible')
      .get('#menu-item-2676')
      .contains('Customer Success')
      .should('be.visible')
      .get('#menu-item-515')
      .contains('Blog')
      .should('be.visible')
      .get('#menu-item-3314')
      .contains('Company')
      .should('be.visible');
  });
})
