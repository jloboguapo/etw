/*
|--------------------------------------------------------------------------
| Leadership Slide.
|--------------------------------------------------------------------------
|
| A slide about aligning people to culture and strategy.
|
*/

export default {

  name: 'Leadership',

  data () {
    return {
      seniorLeadership: [
        {
          image: './static/headshots/lb-1.jpg',
          name: 'Lee Benson',
          title: 'CEO and Founder',
          info: 'Lee Benson is the founder and CEO of Execute to Win, a Phoenix-based company that helps organizations drive alignment to winning behaviors and performance through business management systems. Benson specializes in helping CEOs grow their organizations faster and more profitably by holding all employees accountable to behaving like their top-performing employees, creating an intentional culture and cascading strategic performance requirements to every corner of the organization.',
          linkedin: 'https://www.linkedin.com/in/lee-benson-5b6101/'
        },
        {
          image: './static/headshots/ap-1.jpg',
          name: 'Ali Parnian',
          title: 'President',
          info: 'Ali’s role is to ensure that every ETW enabled customer, from startup to enterprise, achieves extraordinary results. His team consistently accomplishes this by utilizing the best-in-class technology, effective change management practices, and proven management methodologies during the implementation process. Ali leverages his 20+ years of successful leadership experience in manufacturing, retail and professional services to grow ETW to change the way the world does business.',
          linkedin: 'https://www.linkedin.com/in/ali-p-5557863/'
        },
        {
          image: './static/headshots/da-1.jpg',
          name: 'David Atrostic',
          title: 'COO',
          info: 'David Atrostic serves as Chief Opperations Officer at Execute to Win. In his role, David provides guidance in a multitude of initiatives to develop strategic partnerships, drive out inefficiencies and build a foundation to support massive growth. David has more than 20 years of technology architecture, management and consulting experience across a variety of industries.',
          linkedin: 'https://www.linkedin.com/in/david-m-atrostic-3a42005/'
        },
        {
          image: './static/headshots/cm-1.jpg',
          name: 'Chris Moudy',
          title: 'VP Software Development',
          info: "As vice president of software development, Chris provides technical direction across the company in areas of architectures, software, and information security. In working with ETW business stakeholders and customers, Chris helps define the vision for ETW's technology offerings and shapes ETW's platform and api strategy accordingly to meet the growing demands of technology. Chris holds a B.S. in Computer Science from the University of Iowa and an M.S. in Software Engineering from Southern Methodist University.",
          linkedin: 'https://www.linkedin.com/in/christopher-moudy-750118/'
        },
        {
          image: './static/headshots/br-1.jpg',
          name: 'Blake Rayhons',
          title: 'Director of Client Services',
          info: 'Blake is responsible for the development and delivery of services ensuring that clients successfully implement and utilize ETW to get at least a 10x return on their investment. He works with clients to transform and improve how they do business by drawing on his successful track record of working with senior leadership in a broad range of roles and industries. With an intense focus on delivering a world-class customer support experience to every client, Blake has led numerous ETW client implementations resulting in sustained double-digit growth in profitability, as well as organizational turnarounds in both public and private companies.',
          linkedin: 'https://www.linkedin.com/in/blakerayhons/'
        },
        {
          image: './static/headshots/jw-1.jpg',
          name: 'Jack Welch',
          title: 'ETW Partner',
          info: 'Jack Welch is the former GE Chairman and CEO and the author of Winning, a #1 Wall Street Journal and international bestseller. In 2001, he wrote his #1 New York Times and also international best-selling autobiography, Jack: Straight from the Gut. Since 2005, Jack and Suzy Welch have written business columns for several publications, including Business Weekmagazine, Thomson Reuters digital platforms, Fortune magazine, and the New York Times syndicate. In 2009, they wrote a column, The Welch Way, for Business Weekmagazine, which was also published by the New York Times syndicate.',
          linkedin: 'https://www.linkedin.com/in/johnfwelch/'
        }
      ]
    }
  },

  mounted() {
    this.scrollReveal.reveal('.sr-company-card')
  }

}
