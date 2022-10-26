context('Visit all pages', () => {
  beforeEach(function () {
    cy.openHomepage()
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

  afterEach(function () {
    cy.get('.obra-footer').within(() => {
      cy.document()
        .contains('CONTACT US')
        .should('be.visible')
        .get('.get-apps-links')
        .children()
        .should('have.attr', 'href', 'https://aichat.com')
        .children()
        .should('have.attr', 'src', '//aichat.com/wp-content/uploads/2018/08/aichat2-green-600.png')
        .should('be.visible')
        .get('.icon-fa-facebook-square')
        .should('have.attr', 'href', 'https://www.facebook.com/aichat.co/')
        .should('be.visible')
        .get('.icon-fa-twitter-square')
        .should('have.attr', 'href', 'https://twitter.com/aichatco')
        .should('be.visible')
        .get('.icon-fa-google-plus-square')
        .should('have.attr', 'href', 'https://plus.google.com/104781814286874039232')
        .should('be.visible')
        .get('.icon-fa-linkedin-square')
        .should('have.attr', 'href', 'https://www.linkedin.com/company/aichat-pte-ltd')
        .should('be.visible')
        .get('.icon-fa-youtube-square')
        .should('have.attr', 'href', 'https://www.youtube.com/channel/UC9Ijvy5d_Uv19ms84_VmmAg')
        .should('be.visible')
        .document()
        .contains('+65 6591 7889')
        .document()
        .contains('hi@aichat.com')
        .document()
        .contains('75 Ayer Rajah Crescent #03-08,')
        .document()
        .contains('Singapore 139953')
        .get('#footer-mobile-app-download')
        .children()
        .first()
        .should(
          'have.attr',
          'href',
          'https://apps.apple.com/us/app/aichat-conversations/id1599538666?itsct=apps_box_badge&itscg=30200',
        )
        .children()
        .should('have.attr', 'src', '/wp-content/uploads/2022/07/Apple-Store-Badge.png')
        .should('be.visible')
        .get('#footer-mobile-app-download')
        .children()
        .last()
        .should(
          'have.attr',
          'href',
          'https://play.google.com/store/apps/details?id=com.aichat.conversations&utm_source=website&utm_campaign=aichat&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
        )
        .children()
        .should('have.attr', 'src', '/wp-content/uploads/2022/07/Google-Play-Badge.png')
        .should('be.visible')
        .document()
        .contains('LEARN MORE')
        .document()
        .contains('Solution')
        .should('have.attr', 'href', 'https://aichat.com/solution/')
        .document()
        .contains('Service Suite')
        .should('have.attr', 'href', 'https://aichat.com/conversational-service/')
        .document()
        .contains('Marketing Suite')
        .should('have.attr', 'href', 'https://aichat.com/conversational-marketing-suite-2/')
        .document()
        .contains('Commerce Suite')
        .should('have.attr', 'href', 'https://aichat.com/conversational-commerce-suite/')
        .document()
        .contains('AiChat Technology')
        .should('have.attr', 'href', 'https://aichat.com/aichat-technology/')
        .document()
        .contains(/^Service$/)
        .should('have.attr', 'href', 'https://aichat.com/chatbot-development-service/')
        .document()
        .contains('Pricing')
        .should('have.attr', 'href', 'https://aichat.com/pricing/')
        .document()
        .contains('ABOUT AICHAT')
        .document()
        .contains('Our Story')
        .should('have.attr', 'href', 'https://aichat.com/about-us/')
        .document()
        .contains('Careers')
        .should('have.attr', 'href', 'https://aichat.com/careers/')
        .document()
        .contains('Customer Success')
        .should('have.attr', 'href', 'https://aichat.com/customer-success/')
        .document()
        .contains('Blog')
        .should('have.attr', 'href', 'https://aichat.com/blog')
        .document()
        .contains('Contact Us')
        .should('have.attr', 'href', 'https://aichat.com/contact-us/')
        .document()
        .contains('Investors')
        .should('have.attr', 'href', 'https://aichat.com/investor-relations/')
        .document()
        .contains('Media')
        .should('have.attr', 'href', '/Aichat/about-us#aboutmedia')
        .document()
        .contains('NEWSLETTER')
        .document()
        .contains(
          'Fresh insights and ideas about Messaging and A.I delivered monthly to your inbox, gratis.',
        )
        .get('input[type="email"]')
        .get('input[type="submit"][value="Subscribe Now"]')
        .document()
        .contains('Terms of Service')
        .should('have.attr', 'href', 'https://aichat.com/terms-of-service/')
        .document()
        .contains('Privacy')
        .should('have.attr', 'href', 'https://aichat.com/Privacy-Policy/')
        .document()
        .contains('AiChat Pte Ltd © 2016-2022. All Rights Reserved.');
    });
  });

  it('Validate Homepage is loaded properly', () => {
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
    cy.get('#ready-talkhome').within(() => {
      cy.document()
        .contains('Ready To Get In Touch? Let’s Talk!')
        .should('be.visible')
        .document()
        .contains('Build relationships in real-time and respond to your customers at scale.')
        .should('be.visible');
      cy.get('input[name="first_name"]')
        .should('be.visible')
        .get('input[name="last_name"]')
        .should('be.visible')
        .get('input[name="business_email"]')
        .should('be.visible')
        .get('input[name="phoneno"]')
        .should('be.visible')
        .get('input[name="company_name"]')
        .should('be.visible')
        .get('select[name="company_size"]')
        .should('be.enabled')
        .get('select[name="product_interest"]')
        .should('be.enabled')
        .get('select[name="industry"]')
        .should('be.enabled')
        .get('.col-md-12')
        .contains('*We will handle your contact details in line with our ')
        .contains('Privacy Policy')
        .should('have.attr', 'href', '//aichat.com/aichat_website/Privacy-Policy/')
        .document()
        .contains(
          '. If you prefer not to receive marketing emails from AiChat, you can opt-out of all marketing communications or customize your preferences ',
        )
        .contains('here')
        .should(
          'have.attr',
          'href',
          'https://aichat.us19.list-manage.com/unsubscribe?u=7b7fc06e3964ca6688b1e2727&id=e97cd08497',
        )
        .get('input[type="submit"][value="Request a Demo"]')
        .should('be.visible');
    });
    cy.get('.obra-dhav-dotted.Seen-logo').within(() => {
      cy.document()
        .contains('As Seen On')
        .should('be.visible')
        .get('.wpb_wrapper.vc_figure')
        .eq(0)
        .children()
        .should(
          'have.attr',
          'href',
          'https://www.warc.com/newsandopinion/news/chatbots_offer_personalization_options/40833',
        )
        .children()
        .should('have.attr', 'src', 'https://aichat.com/wp-content/uploads/2018/09/warcv1.png')
        .get('.wpb_wrapper.vc_figure')
        .eq(1)
        .children()
        .should(
          'have.attr',
          'href',
          'https://www.zaobao.com.sg/sme/sme-interview/story20180719-876354',
        )
        .children()
        .should('have.attr', 'src', 'https://aichat.com/wp-content/uploads/2018/09/zaov1.png')
        .get('.wpb_wrapper.vc_figure')
        .eq(2)
        .children()
        .should(
          'have.attr',
          'href',
          'https://www.econsultancy.com/reports/a-marketer-s-guide-to-ai-and-machine-learning',
        )
        .children()
        .should(
          'have.attr',
          'src',
          'https://aichat.com/wp-content/uploads/2018/09/econsultancyv1.png',
        )
        .get('.wpb_wrapper.vc_figure')
        .eq(3)
        .children()
        .should(
          'have.attr',
          'href',
          'https://www.huffingtonpost.com/entry/see-how-shimano-chatbot-is-revolutionizing-marketing_us_59dd119ee4b07a185aa75ed8',
        )
        .children()
        .should('have.attr', 'src', 'https://aichat.com/wp-content/uploads/2018/09/huffv1.png')
        .get('.wpb_wrapper.vc_figure')
        .eq(4)
        .children()
        .should(
          'have.attr',
          'href',
          'https://www.channelnewsasia.com/news/business/shopping-for-engagement-rings-or-light-bulbs-there-s-a-chatbot-9085372',
        )
        .children()
        .should('have.attr', 'src', 'https://aichat.com/wp-content/uploads/2018/09/chanlv1.png')
        .get('.wpb_wrapper.vc_figure')
        .eq(5)
        .children()
        .should(
          'have.attr',
          'href',
          'http://www.marketing-interactive.com/why-brands-cant-do-without-chatbots/',
        )
        .children()
        .should('have.attr', 'src', 'https://aichat.com/wp-content/uploads/2018/09/marketingv1.png')
        .get('.wpb_wrapper.vc_figure')
        .eq(6)
        .children()
        .should(
          'have.attr',
          'href',
          'https://sg.news.yahoo.com/5-singaporean-chatbots-actually-070943210.html',
        )
        .children()
        .should('have.attr', 'src', 'https://aichat.com/wp-content/uploads/2018/09/yashhv1.png')
        .get('.wpb_wrapper.vc_figure')
        .eq(7)
        .children()
        .should(
          'have.attr',
          'href',
          'https://venturebeat.com/2016/10/04/100-people-to-watch-in-the-chatbot-space/',
        )
        .children()
        .should('have.attr', 'src', 'https://aichat.com/wp-content/uploads/2018/09/ventv1.png')
        .get('.wpb_wrapper.vc_figure')
        .eq(8)
        .children()
        .should('have.attr', 'href', 'https://www.tnp.sg/news/singapore/chatbots-rise-singapore')
        .children()
        .should('have.attr', 'src', 'https://aichat.com/wp-content/uploads/2018/09/the-paperv1.png')
        .get('.wpb_wrapper.vc_figure')
        .eq(9)
        .children()
        .should(
          'have.attr',
          'href',
          'https://www.straitstimes.com/business/economy/procter-gamble-taps-27-asia-start-ups-for-tech-solutions-to-industry-challenges',
        )
        .children()
        .should(
          'have.attr',
          'src',
          'https://aichat.com/wp-content/uploads/2021/08/the-straits-times-logo.jpg',
        )
        .get('.wpb_wrapper.vc_figure')
        .eq(10)
        .children()
        .should(
          'have.attr',
          'href',
          'https://dailysocial.id/post/aichat-berencana-membawa-platformchatbot- as-a-services-ke-indonesia',
        )
        .children()
        .should(
          'have.attr',
          'src',
          'https://aichat.com/wp-content/uploads/2018/09/daily-soalv1.png',
        )
        .get('.wpb_wrapper.vc_figure')
        .eq(11)
        .children()
        .should(
          'have.attr',
          'href',
          'https://e27.co/5-singaporean-chatbots-will-actually-use-20160830/',
        )
        .children()
        .should('have.attr', 'src', 'https://aichat.com/wp-content/uploads/2018/09/e27v1.png')
        .get('.wpb_wrapper.vc_figure')
        .eq(12)
        .children()
        .should('have.attr', 'href', 'https://www.techinasia.com/tia-sg-2017-arena')
        .children()
        .should('have.attr', 'src', 'https://aichat.com/wp-content/uploads/2018/09/techv1.png')
        .get('.wpb_wrapper.vc_figure')
        .eq(13)
        .children()
        .should(
          'have.attr',
          'href',
          'https://www.businesstimes.com.sg/brunch/a-chatbot-will-help-you-now',
        )
        .children()
        .should(
          'have.attr',
          'src',
          'https://aichat.com/wp-content/uploads/2022/06/bt-icon-EDIT.png',
        );
    });
  });

  it.only('Validate Service Suite page is loaded properly', function () {
    cy.get('.nav-label').contains('Products').trigger('mousehover')
    .get('.nav-label').contains('Service Suite').click({force:true})
  })
});
