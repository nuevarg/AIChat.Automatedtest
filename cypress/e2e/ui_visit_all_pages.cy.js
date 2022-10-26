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
    cy.get('#paddingremoverow').within(() => {
      cy.contains('OUR PLATFORM')
        .should('be.visible')
        .document()
        .contains(
          "A framework designed to personalize every stage of your customers' purchase journey, from acquisition to advocacy — driving measurable results.",
        )
        .should('be.visible')
        .get('.nav-link')
        .eq(0)
        .contains('Engage')
        .should('be.visible')
        .get('.nav-link')
        .eq(1)
        .contains('Qualify')
        .should('be.visible')
        .get('.nav-link')
        .eq(2)
        .contains('Convert')
        .should('be.visible')
        .get('.nav-link')
        .eq(3)
        .contains('Keep')
        .should('be.visible')
        .get('.obra-image')
        .children()
        .should(
          'have.attr',
          'src',
          'https://aichat.com/wp-content/uploads/2019/03/engage-min.png',
          'be.visible',
        )
        .document()
        .contains('Engage')
        .should('be.visible')
        .document()
        .contains(
          'Provide online visitors with automated instant responses to commonly asked questions, educate them about your products and services 24/7 and even gamify the chat experience to acquire more prospects.',
        )
        .should('be.visible')
        .get('.obra-link-arrow-right')
        .contains('Learn More')
        .should('have.attr', 'href', 'solution/#Engage')
        .should('be.visible');
    });
    cy.get('#rev_slider_5_2_wrapper').within(() => {
      cy.get('[class="tp-bgimg defaultimg "]')
        .should(
          'have.attr',
          'src',
          'https://aichat.com/wp-content/uploads/2020/11/tesco-malaysia-chatbot-banner.jpg',
        )
        .should('be.visible')
        .get('#slider-tesco-logo')
        .children()
        .should('have.attr', 'src', 'https://aichat.com/wp-content/uploads/2020/11/Tesco_Logo.png')
        .get('#slide-89-layer-34')
        .contains('Tesco Malaysia ')
        .should('be.visible')
        .get('#slide-89-layer-35')
        .contains(
          "With Facebook Messenger, we've married our goals of sustainability, customer experience and satisfaction levels within an intuitive mobile experience. Through chat, we've also streamlined content distribution and personalised experiences at scale. We are excited to see how we can further these with AiChat and Facebook.",
        )
        .should('be.visible');
    });
    cy.get('.ourtechnology').within(() => {
      cy.document()
        .contains('OUR TECHNOLOGY')
        .should('be.visible')
        .document()
        .contains(
          'Proprietary hybrid A.I technology with built-in, industry-specific capabilities including B2C Retail, FMCG, Hospitality and Automotive Industries.',
        )
        .should('be.visible');
      cy.get('.feature-item')
        .eq(0)
        .within(() => {
          cy.get('.obra-icon')
            .children()
            .should(
              'have.attr',
              'src',
              'https://aichat.com/wp-content/uploads/2019/03/technology-multi-languages.svg',
            )
            .should('be.visible')
            .document()
            .contains('Natural Language Processing')
            .should('be.visible')
            .document()
            .contains(
              'Define annotated data and use the entity module to equip the AI model with domain attributes needed to build quality data for complex business problems. The algorithm is also designed to provide precise intent detection.',
            )
            .should('be.visible');
        });
      cy.get('.feature-item')
        .eq(1)
        .within(() => {
          cy.get('.obra-icon')
            .children()
            .should(
              'have.attr',
              'src',
              'https://aichat.com/wp-content/uploads/2019/03/technology-machine-learning.svg',
            )
            .should('be.visible')
            .document()
            .contains('Always learning and improving')
            .should('be.visible')
            .document()
            .contains(
              "Machine actively learns from user's responses and get smarter over time. For out-of-scope questions, the platform enables improvement of the AI model through a semi-supervised machine learning techniques to optimize the judgments and accuracy.",
            )
            .should('be.visible');
        });
      cy.get('.feature-item')
        .eq(2)
        .within(() => {
          cy.get('.obra-icon')
            .children()
            .should(
              'have.attr',
              'src',
              'https://aichat.com/wp-content/uploads/2019/03/technology-ai-human.svg',
            )
            .should('be.visible')
            .document()
            .contains('Human & A.I Collaboration')
            .should('be.visible')
            .document()
            .contains(
              'When a new message is received, bot suggests the most relevant answers to the agent. If the prediction falls below the confidence threshold, the agent can personalize the answer and bot learns from every interaction.',
            )
            .should('be.visible');
        });
      cy.get('.feature-item')
        .eq(3)
        .within(() => {
          cy.get('.obra-icon')
            .children()
            .should(
              'have.attr',
              'src',
              'https://aichat.com/wp-content/uploads/2019/03/technology-multi-languages-1.svg',
            )
            .should('be.visible')
            .document()
            .contains('Multi-language Support')
            .should('be.visible')
            .document()
            .contains(
              "Built-in identifier that can recognize language of the message which the machine can analyze and translate them accurately to the user's native language. Proprietary South East Asia languages packages are designed to detect and understand slangs and short forms used in the local context.",
            )
            .should('be.visible');
        });
      cy.get('.feature-item')
        .eq(4)
        .within(() => {
          cy.get('.obra-icon')
            .children()
            .should(
              'have.attr',
              'src',
              'https://aichat.com/wp-content/uploads/2019/03/technology-domain-knowledge.svg',
            )
            .should('be.visible')
            .document()
            .contains('Domain Knowledge')
            .should('be.visible')
            .document()
            .contains(
              'AiChat platform can perform industry-specific entity extraction and powers major labeling strategy for popular B2C domains such as Retail, FMCG, Automotive, Hospitality, Pharmaceutical, Education and Financial Institutes enabling your business to speed up the A.I model training by at least 100x.',
            )
            .should('be.visible');
        });
      cy.get('.feature-item')
        .eq(5)
        .within(() => {
          cy.get('.obra-icon')
            .children()
            .should(
              'have.attr',
              'src',
              'https://aichat.com/wp-content/uploads/2019/03/technology-sentiment.svg',
            )
            .should('be.visible')
            .document()
            .contains('Sentiment Analysis')
            .should('be.visible')
            .document()
            .contains(
              'Bot can understand the context and emotion of the customers right from the beginning, helping them to select the best course of action. This provides insights about the customers and determines if the cases should be escalated to a human agent.',
            )
            .should('be.visible');
        });
      cy.get('.btn-text').contains('See More').should('be.visible');
    });
    cy.get('#innerremoverow').within(() => {
      cy.get('.vc_single_image-wrapper')
        .children()
        .should(
          'have.attr',
          'src',
          'https://aichat.com/wp-content/uploads/2021/10/omni-channels-messaging-platform.png',
        )
        .should('be.visible')
        .document()
        .contains('READY TO CONNECT')
        .should('be.visible')
        .document()
        .contains('Multiple channels and platforms')
        .should('be.visible')
        .document()
        .contains(
          'Connect your chatbot with one API to all the channels your users use everyday. Reach out to your target audience regardless of their channel of choice. Seamless integration can also be done to sync up with your customer service software, marketing automation tool, CRM and eCommerce platforms that you are already familiar with.',
        )
        .should('be.visible');
    });
  });
});
