/**
 * This store handle all dynamic meta tag information.
 * All objects with the 'vmid' property are dynamic and can
 * and should be unique for each view.
 */

export default {

  actions: {},

  getters: {
    all: state => Object.values(state.all),
    showByPage: state => property => {
      return {
        title: state.all[property].title,
        meta: [

          {
            'charset': 'utf-8'
          },

          {
            'http-equiv': 'X-UA-Compatible',
            'content': 'IE=edge'
          },

          {
            'name': 'viewport',
            'content': 'width=device-width,initial-scale=1.0'
          },

          {
            'vmid': 'description',
            'name': 'description',
            'content': state.all[property].description
          },

          // For Google Console
          {
            'name': 'google-site-verification',
            'content': 'gxh2oBX6z7vxRRbr3YxVQbL9G087hyHUQjMPazahQLQ'
          },

          // For Google+
          {
            'vmid': 'google+name',
            'itemprop': 'name',
            'content': state.all[property].title
          },

          {
            'vmid': 'google+description',
            'itemprop': 'description',
            'content': state.all[property].description
          },

          {
            'vmid': 'google+image',
            'itemprop': 'description',
            'content': state.all[property].image
          },

          /**
           * For Twitter
           * image should be at least 280pxx150px
           */

          {
            'name': 'twitter:card',
            'content': 'summary'
          },

          {
            'name': 'twitter:site',
            'content': '@executetowin'
          },

          {
            'vmid': 'twitter:title',
            'name': 'twitter:title',
            'content': state.all[property].title
          },

          {
            'vmid': 'twitter:description',
            'name': 'twitter:description',
            'content': state.all[property].description
          },

          {
            'name': 'twitter:creator',
            'content': '@executetowin'
          },

          {
            'vmid': 'twitter:image:src',
            'name': 'twitter:image:src',
            'content': state.all[property].image
          },

          /**
           * For Open Graph (Facebook, LinkedIn, etc.)
           */

          {
            'vmid': 'og:title',
            'property': 'og:title',
            'content': state.all[property].title
          },

          {
            'property': 'og:type',
            'content': 'website'
          },

          {
            'vmid': 'og:url',
            'property': 'og:url',
            'content': state.all[property].url
          },

          {
            'vmid': 'og:image',
            'property': 'og:image',
            'content': state.all[property].image
          },

          {
            'vmid': 'og:description',
            'property': 'og:description',
            'content': state.all[property].description
          },

          {
            'property': 'og:site_name',
            'content': 'ETW.com, Execute to Win'
          },

          {
            'property': 'fb:admins',
            'content': '290864700989373'
          }
        ]
      }
    }
  },

  mutations: {},

  namespaced: true,

  state: {
    all: {

      about: {
        title: 'About - ETW.com',
        description: 'Execute to Win (ETW) is a consulting company that helps organizations improve alignment to get better results.',
        url: 'https://www.etw.com/#/about',
        image: ''
      },

      contact: {
        title: 'Contact Us - ETW.com',
        description: 'Contact us to find out how we can help you.',
        url: 'https://www.etw.com/#/contact',
        image: ''
      },

      customerAgreement: {
        title: 'Customer Agreement - ETW.com',
        description: 'Customer Agreement for ETW.com.',
        url: 'https://www.etw.com/#/customer-agreement',
        image: ''
      },

      customerSuccess: {
        title: 'Customer Success - ETW.com',
        description: 'Success stories from ETW customers.',
        url: 'https://www.etw.com/#/customer-success',
        image: ''
      },

      events: {
        title: 'Events - ETW.com',
        description: 'Upcoming events for ETW.',
        url: 'https://www.etw.com/#/events',
        image: ''
      },

      home: {
        title: 'ETW.com: Improving Alignment to get Better Results',
        description: 'Want to get results quickly? Execute to Win (ETW) is a company that helps organizations improve alignment to get results faster, communicate better and develop more effective leaders. ETW’s proven approach to leadership, strategy and culture can quickly align your organization and drive success for your business.',
        url: 'https://www.etw.com/#/home',
        image: ''
      },

      knowledgeCenter: {
        title: 'Knowledge Center - ETW.com',
        description: 'Insights, Workshops and Implementation resources to help you improve alignment.',
        url: 'https://www.etw.com/#/knowledge-center',
        image: ''
      },

      privacy: {
        title: 'Privacy Policy - ETW.com',
        description: 'Privacy Policy for ETW.com.',
        url: 'https://www.etw.com/#/privacy',
        image: ''
      },

      services: {
        title: 'Professional Services - ETW.com',
        description: 'ETW offers a wide range of consulting and professional services to better align your organization.',
        url: 'https://www.etw.com/#/services',
        image: ''
      },

      software: {
        title: 'Software Products - ETW.com',
        description: 'ETW Software helps align your employees with your strategy and intentional culture.',
        url: 'https://www.etw.com/#/software',
        image: ''
      },

      userAgreement: {
        title: 'User Agreement - ETW.com',
        description: 'User Agreement for ETW.com.',
        url: 'https://www.etw.com/#/user-agreement',
        image: ''
      },

      notFound: {
        title: '404 - ETW.com',
        description: 'The page that you are looking for could not be found.',
        url: 'https://www.etw.com/#/404',
        image: ''
      }

    }
  }

}
