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
        .get('.tp-bgimg')
        .should(
          'have.attr',
          'src',
          'https://aichat.com/wp-content/uploads/2019/03/banners_1_bgv6.png',
          'be.visible',
        );
      cy.g;
    });
    cy.get('#ccc').within(() => {
      cy.get('.vc_single_image-img')
        .eq(0)
        .should(
          'have.attr',
          'src',
          'https://aichat.com/wp-content/uploads/2018/09/client-Philips.jpg',
          'be.visible',
        );
      cy.get('.vc_single_image-img')
        .eq(1)
        .should(
          'have.attr',
          'src',
          'https://aichat.com/wp-content/uploads/2018/11/client-mbs.png',
          'be.visible',
        );
      cy.get('.vc_single_image-img')
        .eq(2)
        .should(
          'have.attr',
          'src',
          'https://aichat.com/wp-content/uploads/2019/12/coca-cola-logo.png',
          'be.visible',
        );
      cy.get('.vc_single_image-img')
        .eq(3)
        .should(
          'have.attr',
          'src',
          'https://aichat.com/wp-content/uploads/2018/09/mit-client.jpg',
          'be.visible',
        );
      cy.get('.vc_single_image-img')
        .eq(4)
        .should(
          'have.attr',
          'src',
          'https://aichat.com/wp-content/uploads/2019/12/kia-motors-logo.png',
          'be.visible',
        );
      cy.get('.vc_single_image-img')
        .eq(5)
        .should(
          'have.attr',
          'src',
          'https://aichat.com/wp-content/uploads/2018/11/client-jaguar.png',
          'be.visible',
        );
      cy.get('.vc_single_image-img')
        .eq(6)
        .should(
          'have.attr',
          'src',
          'https://aichat.com/wp-content/uploads/2019/12/tesco-logo.png',
          'be.visible',
        );
      cy.get('.vc_single_image-img')
        .eq(7)
        .should(
          'have.attr',
          'src',
          'https://aichat.com/wp-content/uploads/2018/11/client-pernod-ricard.png',
          'be.visible',
        );
      cy.get('.vc_single_image-img')
        .eq(8)
        .should(
          'have.attr',
          'src',
          'https://aichat.com/wp-content/uploads/2019/12/sistic-logo-1.png',
          'be.visible',
        );
      cy.get('.vc_single_image-img')
        .eq(9)
        .should(
          'have.attr',
          'src',
          'https://aichat.com/wp-content/uploads/2018/09/art-client.jpg',
          'be.visible',
        );
      cy.get('.vc_single_image-img')
        .eq(10)
        .should(
          'have.attr',
          'src',
          'https://aichat.com/wp-content/uploads/2018/09/bayer.jpg',
          'be.visible',
        );
      cy.get('.vc_single_image-img')
        .eq(11)
        .should(
          'have.attr',
          'src',
          'https://aichat.com/wp-content/uploads/2018/09/hattan-clientv1.png',
          'be.visible',
        );
      cy.get('.vc_single_image-img')
        .eq(12)
        .should(
          'have.attr',
          'src',
          'https://aichat.com/wp-content/uploads/2018/09/client-capliland.jpg',
          'be.visible',
        );
    });
    cy.get('#features').within(() => {
      cy.get('.section-subtitle')
        .contains('Beyond A Chatbot Development Tool')
        .should('be.visible')
        .get('.section-title')
        .contains('OUR PRODUCT')
        .should('be.visible')
        .document()
        .contains(
          'AiChat offers a suite of A.I-powered software for marketing, sales and customer service across multiple chat channels.',
        )
        .should('be.visible');
    });
    cy.get(
      '[class="vc_row wpb_row vc_row-fluid obra-dhav-dotted vc_custom_1541416254690 vc_row-has-fill"]',
    ).within(() => {
      cy.get('.Conversational-mainhove')
        .eq(0)
        .within(() => {
          cy.contains('Conversational Service Suite')
            .should('be.visible')
            .document()
            .contains(
              'Create a support environment that allows for automated conversations, human and A.I collaboration, as well as a 360 view of the customer that enables you to build better relationships with your customers.',
            )
            .should('be.visible')
            .document()
            .contains('Learn More >')
            .should(
              'have.attr',
              'href',
              'https://aichat.com/conversational-service/',
              'be.visible',
            );
        });

      cy.get('.Conversational-mainhove')
        .eq(1)
        .within(() => {
          cy.contains('Conversational Marketing Suite')
            .should('be.visible')
            .document()
            .contains(
              'Provide 1:1 personal conversations with our easy-to-use design, personalization and automation tools. From smart segments to personalized customer journeys, our solution has all the features you need to boost marketing KPIs. ',
            )
            .should('be.visible')
            .document()
            .contains('Learn More >')
            .should(
              'have.attr',
              'href',
              'https://aichat.com/conversational-marketing/',
              'be.visible',
            );
        });

      cy.get('.Conversational-mainhove')
        .eq(2)
        .within(() => {
          cy.contains('Conversational Commerce Suite')
            .should('be.visible')
            .document()
            .contains(
              "Deliver a personalized shopping experience with an automated virtual sales assistant, understand your customer's preferences and maximize revenue with journey-aware product recommendations across multiple chat channels.",
            )
            .should('be.visible')
            .document()
            .contains('Learn More >')
            .should(
              'have.attr',
              'href',
              'https://aichat.com/conversational-commerce/',
              'be.visible',
            );
        });
    });
  });
});
