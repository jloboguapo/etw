<template>
  <div>

    <!--

    INTRO

    -->
    <section class="hero is-medium is-dark resources-intro">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h1 class="title is-1 sr-up">Knowledge Center</h1>
              <h2 class="subtitle sr-up">Insights, Workshops & Implementation</h2>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MAIN PAGE CONTENT -->
    <div class="container">

      <!--

      TABS

      -->
      <div class="section section-small">
        <div class="tabs is-centered">
          <ul>
            <li v-bind:class="{ 'is-active': activeTabId == 0 }">
              <a v-on:click="setActiveTab(0)">All</a>
            </li>
            <li
                v-for="tab in resources"
                v-bind:key="tab.id"
                v-bind:class="{ 'is-active': tab.id == activeTabId }">
              <a v-on:click="setActiveTab(tab.id)">{{ tab.title }}</a>
            </li>
          </ul>
        </div>
      </div>

      <!--

      RESOURCE CARDS

      -->
      <div class="section">
        <div class="columns is-multiline">
          <div
              class="column is-one-third-desktop is-6-tablet"
              v-for="item in activeResources.items"
              v-bind:key="item.title">
            <a v-bind:href="item.file" target="_blank" v-bind:alt="item.title">
              <div class="card is-fullheight">
                <div class="card-image">
                  <figure class="image is-16by9">
                    <img v-bind:src="item.image" alt="Placeholder image">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <p class="title is-5 m-b-1">{{ item.title }}</p>
                    <p>{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

    </div>
    <!-- end of container -->

  </div>
</template>

<script>
export default {

  metaInfo () { return this.$store.getters['meta/showByPage']('knowledgeCenter') },

  computed: {

    activeResources: function () {
      let resource = { items: [] }

      if (this.activeTabId > 0) {
        resource = this.resources[this.activeTabId]
      } else {
        let resources = Object.keys(this.resources).map(key => this.resources[key])
        resources.forEach(source => {
          resource.items = resource.items.concat(source.items)
        })
      }

      return resource
    }

  },

  data () {
    return {

      resources: {
        1: {
          id: 1,
          title: 'eBooks',
          items: [
            {
              title: 'Complement & Extend your HRIS with ETW',
              description: 'Discover how HR can act as a partner in driving performance and strategy to fully engage the workforce.',
              file: 'http://offers.etw.com/complement-your-hris',
              image: require('@/assets/images/resources/hris-min.jpg'),
              tags: [
                'e-books'
              ]
            },
            {
              title: 'ETW for Enterprises',
              description: 'Learn to define and track success for each department to drive winning results for your organization.',
              file: 'http://offers.etw.com/etw-enterprises-ebook',
              image: require('@/assets/images/resources/enterprises-min.jpg'),
              tags: [
                'e-books'
              ]
            },
            {
              title: 'Values Versus Observable Behaviors',
              description: 'Discover the value behind clearly defined observable behaviors as they align the entire organization with the desired culture.',
              file: 'http://offers.etw.com/values-versus-observable-behaviors-e-book',
              image: require('@/assets/images/resources/observable-behavior-min.jpg'),
              tags: [
                'e-books'
              ]
            },

            {
              title: 'Get the Most Out of Salesforce with ETW',
              description: 'Salesforce is best used as the platform for documenting activity and generating metrics, ETW is better used for taking that information and integrating with the management process to capture useful insights.',
              file: 'http://offers.etw.com/get-the-most-out-of-salesforce-with-etw-ebook',
              image: require('@/assets/images/resources/salesforce-min.jpg'),
              tags: [
                'e-books'
              ]
            }
          ]
        },
        2: {
          id: 2,
          title: 'Whitepapers',
          items: [
            {
              title: 'Good Manager Versus Bad Manager',
              description: 'This whitepaper explores ETW’s ability to support managers at any level. Good, bad or new, our system will help to improve your struggling managers and optimize your successful ones.',
              file: 'http://offers.etw.com/ultimate-guide-how-to-support-your-managers',
              image: require('@/assets/images/resources/good-bad-manager-min.jpg'),
              tags: [
                'whitepapers'
              ]
            },

            {
              title: 'ROI Of An Intentional Culture',
              description: 'This whitepaper examines the impact of intentional culture - a culture that is defined, communicated and integrated into the business management process to drive better results for the organization.',
              file: 'http://offers.etw.com/roi-intentional-culture',
              image: require('@/assets/images/resources/roi-intentional-culture-min.jpg'),
              tags: [
                'whitepapers'
              ]
            },

            {
              title: 'Develop A Team Of Expert Leaders',
              description: 'This whitepaper explores the importance of developing your leaders beyond a one-size-fits-all training class. Empower the leaders in your organization to produce the best results possible.',
              file: 'http://offers.etw.com/how-to-develop-team-leaders',
              image: require('@/assets/images/resources/team-of-leaders-min.jpg'),
              tags: [
                'whitepapers'
              ]
            },

            {
              title: 'Goal Setting Tips & Tricks',
              description: 'This whitepaper provides the steps and a few tips for setting meaningful goals. Understand what makes a good goal, who should set them, and how often they should be reviewed.',
              file: 'http://offers.etw.com/how-to-create-effective-goals',
              image: require('@/assets/images/resources/goals-min.jpg'),
              tags: [
                'whitepapers'
              ]
            },

            {
              title: 'Conducting Valuable 1-to-1 Meetings',
              description: 'This whitepaper provides helpful tactics in how to conduct valuable 1-to-1 meetings. Understand how to conduct a 1-to-1 meeting that is constructive, productive, and worth your time.',
              file: 'http://offers.etw.com/rules-to-conducting-meetings',
              image: require('@/assets/images/resources/valuable-one-to-one-min.jpg'),
              tags: [
                'whitepapers'
              ]
            },

            {
              title: 'OKRs versus KPIs versus MBOs',
              description: 'This whitepaper will provide comparisons of the different goal-setting methodologies your organization may use to track performance. Learn what they are, and which would best suit your business needs.',
              file: 'http://offers.etw.com/executive-guide-okrs-kpis-mbos',
              image: require('@/assets/images/resources/kpi-min.jpg'),
              tags: [
                'whitepapers'
              ]
            },

            {
              title: 'Objectively Scoring Culture',
              description: 'Learn how to create the driving force for your organizational growth by identifying and measuring the impact of having an intentional culture.',
              file: 'http://offers.etw.com/objectively-score-culture',
              image: require('@/assets/images/resources/scoring-min.jpg'),
              tags: [
                'whitepapers'
              ]
            },

            {
              title: 'A Day in the Life',
              description: 'Take a look at what kind of information provided by the ETW software could be beneficial in your specific role.',
              file: 'http://offers.etw.com/a-day-in-the-life-whitepaper',
              image: require('@/assets/images/resources/day-in-life-min.jpg'),
              tags: [
                'whitepapers'
              ]
            }
          ]
        },
        3: {
          id: 3,
          title: 'Interactive Workshops',
          items: [
            {
              title: 'Create a Winning Culture',
              description: 'At the end of the workshop, you will have a clearly defined Mission, Vision and set of Observable Behaviors that can be used to help employees at all levels understand how they can live them to bring value to the organization.',
              file: 'https://offers.etw.com/hubfs/Content%20Offers/Workshop%20One%20Sheets/Create%20a%20Winning%20Culture%20Workshop.pdf',
              image: require('@/assets/images/resources/winning-culture-min.jpg'),
              tags: [
                'interactive workshops'
              ]
            },

            {
              title: 'Connecting Employees to Strategy',
              description: 'At the end of the workshop Senior Leaders and their Management Teams will understand the processes and practices necessary to create and execute a winning strategy in their organization.',
              file: 'https://offers.etw.com/hubfs/Content%20Offers/Workshop%20One%20Sheets/Connecting%20Employees%20to%20Strategy%20Workshop.pdf',
              image: require('@/assets/images/resources/connecting-employees-min.jpg'),
              tags: [
                'interactive workshops'
              ]
            },

            {
              title: 'Effective Manager Conversation',
              description: 'At the end of the workshop, you will understand the three most important forms of communication for managers and learn how to most effectively apply these to your daily/weekly/monthly employee interactions.',
              file: 'https://offers.etw.com/hubfs/Content%20Offers/Workshop%20One%20Sheets/Effective%20Manager%20Conversations%20Workshop.pdf',
              image: require('@/assets/images/resources/manager-conversations-min.jpg'),
              tags: [
                'interactive workshops'
              ]
            }
          ]
        },
        4: {
          id: 4,
          title: 'Implementation',
          items: [
            {
              title: 'Why Invest in 1-to-1 Meetings?',
              description: 'These days managers are expected to produce better results and get more done in less time, with fewer resources. This trend is not likely to change anytime soon. Effective managers are able to do more with less by focusing their time on only the highest-value activities.',
              file: 'https://offers.etw.com/hubfs/Content%20Offers/Implementation%20One-sheets/Why%20Invest%20in%201-to-1%20Meetings%20Data%20Sheet.pdf',
              image: require('@/assets/images/resources/one-to-one-min.jpg'),
              tags: [
                'implementation'
              ]
            },
            {
              title: 'Implementation Operational Best Practices',
              description: 'ETW provides a platform to track, evaluate and measure employee performance against the major objectives of the organization.',
              file: 'https://offers.etw.com/hubfs/Content%20Offers/Implementation%20One-sheets/Implementation%20Operational%20Best%20Practices%20Data%20Sheet.pdf',
              image: require('@/assets/images/resources/implementation-operational-practices-min.jpg'),
              tags: [
                'implementation'
              ]
            }
          ]
        },
        5: {
          id: 5,
          title: 'Data Sheets',
          items: [
            {
              title: 'Goal and Plan Flexibility',
              description: 'For maximum flexibility and adaptability within your Management Operating System, ETW offers several different goal types, and plan options.',
              file: 'https://offers.etw.com/hubfs/Content%20Offers/Implementation%20One-sheets/Goal%20and%20Plan%20Flexibility%20Data%20Sheet.pdf',
              image: require('@/assets/images/resources/plan-flexibility-min.jpg'),
              tags: [
                'data sheets'
              ]
            },
            {
              title: 'Adaptive Insights Map',
              description: 'The Adaptive Insights Map gives users a quick visual representation of where their organization stands in real-time by highlighting the hierarchical relationships between plans and goals, and providing insights into how strategy is being executed on each level.',
              file: 'https://offers.etw.com/hubfs/Content%20Offers/Implementation%20One-sheets/Adaptive%20Insights%20Map%20Data%20Sheet.pdf',
              image: require('@/assets/images/resources/aim-min.jpg'),
              tags: [
                'data sheets'
              ]
            }
          ]
        }
      },

      activeTabId: 0

    }
  },

  mounted () {
    // animations
    this.scrollReveal.reveal('.sr-up')
  },

  methods: {
    setActiveTab (tabId) {
      this.$set(this, 'activeTabId', tabId)
    }
  }
}
</script>
