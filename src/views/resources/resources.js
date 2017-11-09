/*
|--------------------------------------------------------------------------
| Resources page.
|--------------------------------------------------------------------------
|
| The resources and white papers available by ETW.
|
*/

import Intro from '@/views/resources/intro/intro.vue'

export default {

  data () {
    return {

      /**
       * All of the pdf's
       * @type {Array}
       */
      resources: [
        {
          title: 'Create a Winning Culture',
          description: 'At the end of the workshop Senior Leadership Teams will understand the Ideology of Intentional Culture and how to create a winning culture in their organization.',
          file: '../../../static/resources/Workshop-Create_a_Winning_Culture.pdf',
          image: '../../../static/resources/images/winning-culture.jpg',
          tags: [
            'interactive workshops'
          ]
        },

        {
          title: 'Effective Manager Conversations',
          description: 'At the end of the workshop Senior Leadership Teams will understand the three most important conversations managers should be having and when to have them.',
          file: '../../../static/resources/Workshop-Effective_Manager_Conversations.pdf',
          image: '../../../static/resources/images/manager-coversations.jpg',
          tags: [
            'interactive workshops'
          ]
        },

        {
          title: 'Connecting Employees to Strategy',
          description: 'At the end of the workshop Senior Leaders and their Management Teams will understand the processes and practices necessary to create and execute a winning strategy in their organization.',
          file: '../../../static/resources/Workshop-ConnectingEmployeestoStrategy.pdf',
          image: '../../../static/resources/images/connecting-employees.jpg',
          tags: [
            'interactive workshops'
          ]
        },

        {
          title: 'Implementation Overview',
          description: 'Information Sheet.',
          file: '../../../static/resources/Implementation_Overview-1.27.17.pdf',
          image: '../../../static/resources/images/implementation-overview.jpg',
          tags: [
            'implementation'
          ]
        },

        {
          title: 'Implementation Operational Best Practices',
          description: 'Information Sheet.',
          file: '../../../static/resources/Implementation- Operational Best Practices.pdf',
          image: '../../../static/resources/images/implementation-operational-practices.jpg',
          tags: [
            'implementation'
          ]
        },

        {
          title: 'Why Invest in 1-to-1 Meetings?',
          description: '1-to-1 Meetings.',
          file: '../../../static/resources/Why Invest in 1-to-1 Meetings.pdf',
          image: '../../../static/resources/images/one-to-one.jpg',
          tags: [
            'implementation'
          ]
        },

        {
          title: 'Get the Most Out of Salesforce with ETW',
          description: 'E-book.',
          file: '../../../static/resources/Ebook-Get the Most out of Salesforce with ETW.pdf',
          image: '../../../static/resources/images/salesforce.jpg',
          tags: [
            'implementation'
          ]
        },

        {
          title: 'Goal and Plan Flexibility with ETW',
          description: 'Goals and Plans.',
          file: '../../../static/resources/Goal and Plan Flexibility with ETW.pdf',
          image: '../../../static/resources/images/plans.jpg',
          tags: [
            'implementation'
          ]
        },

        {
          title: 'Values Versus Observable Behaviors',
          description: 'E-book.',
          file: '../../../static/resources/E-Book Values versus Observable Behaviors.pdf',
          image: '../../../static/resources/images/observable-behavior.jpg',
          tags: [
            'implementation'
          ]
        },

        {
          title: 'Good Manager Versus Bad Manager',
          description: 'This whitepaper explores ETW’s ability to support managers at any level. Good, bad or new, our system will help to improve your struggling managers and optimize your successful ones.',
          file: 'http://offers.etw.com/ultimate-guide-how-to-support-your-managers',
          image: '../../../static/resources/images/good-bad-manager.jpg',
          tags: [
            'whitepapers'
          ]
        },

        {
          title: 'ROI Of An Intentional Culture',
          description: 'This whitepaper examines the impact of intentional culture–a culture that is defined, communicated and integrated into the business management process to drive better results for the organization.',
          file: 'http://offers.etw.com/roi-intentional-culture',
          image: '../../../static/resources/images/roi-intentional-culture.jpg',
          tags: [
            'whitepapers'
          ]
        },

        {
          title: 'Develop A Team Of Expert Leaders',
          description: 'This whitepaper explores the importance of developing your leaders beyond a one-size-fits-all training class. Empower the leaders in your organization to produce the best results possible.',
          file: 'http://offers.etw.com/how-to-develop-team-leaders',
          image: '../../../static/resources/images/team-of-leaders.jpg',
          tags: [
            'whitepapers'
          ]
        },

        {
          title: 'Goal Setting Tips & Tricks',
          description: 'This whitepaper provides the steps and a few tips for setting meaningful goals. Understand what makes a good goal, who should set them, and how often they should be reviewed.',
          file: 'http://offers.etw.com/how-to-create-effective-goals',
          image: '../../../static/resources/images/goals.jpg',
          tags: [
            'whitepapers'
          ]
        },

        {
          title: 'Conducting Valuable 1-to-1 Meetings',
          description: 'This whitepaper provides helpful tactics in how to conduct valuable 1-to-1 meetings. Understand how to conduct a 1-to-1 meeting that is constructive, productive, and worth your time.',
          file: 'http://offers.etw.com/rules-to-conducting-meetings',
          image: '../../../static/resources/images/valuable-one-to-one.jpg',
          tags: [
            'whitepapers'
          ]
        },

        {
          title: 'OKRs versus KPIs versus MBOs',
          description: 'This whitepaper will provide comparisons of the different goal-setting methodoliges your organization may use to track performance. Learn what they are, and which would best suit your business needs.',
          file: 'http://offers.etw.com/executive-guide-okrs-kpis-mbos',
          image: '../../../static/resources/images/kpi.jpg',
          tags: [
            'whitepapers'
          ]
        }

      ]

    }
  },

  components: {
    Intro
  }

}
