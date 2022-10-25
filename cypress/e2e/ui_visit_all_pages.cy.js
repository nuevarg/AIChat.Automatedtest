const { contains } = require("cypress/types/jquery");

context('Visit all pages', () => {
  beforeEach(function () {
    cy.visit('/')
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
  });

  it('Validate homepage is loaded properly', () => {
    cy.get('#rev_slider_7_1_wrapper').within(() => {
      cy.get('.tp-caption')
        .contains('AI-Powered Conversational')
        .should('be.visible')
        .get('.tp-caption')
        .contains('Experience Platform')
        .should('be.visible')
        .get('.tp-caption')
        .contains('Automate 91% of your service support &')
        .should('be.visible')
        .get('.tp-caption')
        .contains('drive 3x more lead conversion via chat.')
        .should('be.visible')
        .get('.rev-btn')
        .should('be.visible')
        .get('.tp-bgimg').should(
          'have.attr',
          'src',
          'https://aichat.com/wp-content/uploads/2019/03/banners_1_bgv6.png',
          'be.visible'
        )
        cy.g
    });
    cy.get('#ccc').within(() => {
      cy.get('.vc_single_image-img').eq(0).should(
        'have.attr',
        'src',
        'https://aichat.com/wp-content/uploads/2018/09/client-Philips.jpg',
        'be.visible'
      )
      cy.get('.vc_single_image-img').eq(1).should(
        'have.attr',
        'src',
        'https://aichat.com/wp-content/uploads/2018/11/client-mbs.png',
        'be.visible'
      )
      cy.get('.vc_single_image-img').eq(2).should(
        'have.attr',
        'src',
        'https://aichat.com/wp-content/uploads/2019/12/coca-cola-logo.png',
        'be.visible'
      )
      cy.get('.vc_single_image-img').eq(3).should(
        'have.attr',
        'src',
        'https://aichat.com/wp-content/uploads/2018/09/mit-client.jpg',
        'be.visible'
      )
      cy.get('.vc_single_image-img').eq(4).should(
        'have.attr',
        'src',
        'https://aichat.com/wp-content/uploads/2019/12/kia-motors-logo.png',
        'be.visible'
      )
      cy.get('.vc_single_image-img').eq(5).should(
        'have.attr',
        'src',
        'https://aichat.com/wp-content/uploads/2018/11/client-jaguar.png',
        'be.visible'
      )
      cy.get('.vc_single_image-img').eq(6).should(
        'have.attr',
        'src',
        'https://aichat.com/wp-content/uploads/2019/12/tesco-logo.png',
        'be.visible'
      )
      cy.get('.vc_single_image-img').eq(7).should(
        'have.attr',
        'src',
        'https://aichat.com/wp-content/uploads/2018/11/client-pernod-ricard.png',
        'be.visible'
      )
      cy.get('.vc_single_image-img').eq(8).should(
        'have.attr',
        'src',
        'https://aichat.com/wp-content/uploads/2019/12/sistic-logo-1.png',
        'be.visible'
      )
      cy.get('.vc_single_image-img').eq(9).should(
        'have.attr',
        'src',
        'https://aichat.com/wp-content/uploads/2018/09/art-client.jpg',
        'be.visible'
      )
      cy.get('.vc_single_image-img').eq(10).should(
        'have.attr',
        'src',
        'https://aichat.com/wp-content/uploads/2018/09/bayer.jpg',
        'be.visible'
      )
      cy.get('.vc_single_image-img').eq(11).should(
        'have.attr',
        'src',
        'https://aichat.com/wp-content/uploads/2018/09/hattan-clientv1.png',
        'be.visible'
      )
      cy.get('.vc_single_image-img').eq(12).should(
        'have.attr',
        'src',
        'https://aichat.com/wp-content/uploads/2018/09/client-capliland.jpg',
        'be.visible'
      )
    });
    cy.get('#features').within(() => {
      cy.contains('Beyond A Chatbot Development Tool').should('be.visible')
      .contains('OUR PRODUCT').should('be.visble')
      .contains('AiChat offers a suite of A.I-powered software for marketing, sales and customer service across multiple chat channels.').should('be.visible')
    })
  });
});
