import React from 'react';
import Subscribe from './Subscribe';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = props => {
  const {
    about,
    baselineLinks,
    copyright,
    learnLink,
    links,
    logo,
    socialLinks,
    subscribe,
    text
  } = props;

  // so all you need to do now is use those props I brought in.  subscribe is done
  // I tweaked header to use it just once and not make another call (in App.js)
  // footer needs work just try and if you need I could help tomorrow maybe...

  // about needs some work, should go into the data and refactor it to have text and `Link` (the content model)
  // so if link is there it will use it and render a link with the strong, if not then it won't
  // I'm sure there's a different way to do it but I'm not sure the quickest and easiest.

  return (
    <div className="bg-light">
      <Container className="footer-main-container py-8">
        <Row className="footer-top-container">
          <Col lg={6} className="company-description-container">
            <img className="logo" src="/etw-logo-dark-on-transparent.svg" />
            <p>
              Execute to Win (ETW) is the Intentional Leadership Platform that
              high-performance organizations trust to strengthen culture and
              accelerate growth.{' '}
              <strong>
                <a href="/" className="text-nowrap">
                  Learn more about us
                </a>
              </strong>
              .
            </p>
          </Col>
          <Col lg={6} className="footer-input-container">
            <p className="lead">Get leadership resources in your inbox</p>
            {subscribe && <Subscribe {...subscribe[0].fields} />}
          </Col>
        </Row>

        <Row className="footer-links-container">
          <Col xs={6} lg={3}>
            <h3>About</h3>
            <p>Learn more about ETW and our intentional culture.</p>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">About ETW</a>
              </li>
              <li>
                <a href="/">Our story</a>
              </li>
              <li>
                <a href="/">How we give back</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Partners</a>
              </li>
              <li>
                <a href="/">Contact us</a>
              </li>
            </ul>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="tel:4806389300" className="text-nowrap">
                  480.638.9300
                </a>
              </li>
              <li>25 South Arizona Place</li>
              <li>Suite 510</li>
              <li>Chandler, AZ 85225</li>
            </ul>
          </Col>
          <Col xs={6} lg={3}>
            <h3>Solutions</h3>
            <p>Face your enterprise-level challenges head-on.</p>
            <h5>By outcome</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Strengthen Culture</a>
              </li>
              <li>
                <a href="/">Accelerate Growth</a>
              </li>
            </ul>
            <h5>By solution</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Leadership development</a>
              </li>
              <li>
                <a href="/">Goal definition and reporting</a>
              </li>
              <li>
                <a href="/">Behvior and process design</a>
              </li>
              <li>
                <a href="/">Performance delivery</a>
              </li>
            </ul>
            <h5>Dig Deeper</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Why ETW</a>
              </li>
              <li>
                <a href="/">Clients</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
            </ul>
          </Col>
          <Col xs={6} lg={3}>
            <h4 className="mt-7 mt-lg-0">Resources</h4>
            <p>Get equipped for intentional culture-building.</p>
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Frequently asked questions</a>
              </li>
              <li>
                <a href="/">Support Center</a>
              </li>
              <li>
                <a href="/">Developer docs</a>
              </li>
            </ul>
            <h5>Leadership Resources</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Articles</a>
              </li>
              <li>
                <a href="/">Assessments</a>
              </li>
              <li>
                <a href="/">Case studies</a>
              </li>
              <li>
                <a href="/">Checklists</a>
              </li>
              <li>
                <a href="/">Fact sheets</a>
              </li>
              <li>
                <a href="/">White papers</a>
              </li>
            </ul>
          </Col>
          <Col xs={6} lg={3}>
            <h4 className="mt-7 mt-lg-0">Features</h4>
            <p>Explore the ETW platform and its enterprise functionality.</p>
            <h5>Leadership development software</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Drive product tour</a>
              </li>
              <li>
                <a href="/">Talent gap reports</a>
              </li>
              <li>
                <a href="/">Development paths</a>
              </li>
              <li>
                <a href="/">Competency reviews</a>
              </li>
            </ul>
            <h5>Priority execution software</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Align product tour</a>
              </li>
              <li>
                <a href="/">Goal management</a>
              </li>
              <li>
                <a href="/">Plan management</a>
              </li>
              <li>
                <a href="/">Progress dashboards</a>
              </li>
            </ul>
            <h5>Take action</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Request a demo</a>
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="footer-baseline-container">
          <Col xl={8}>
            <ul className="list-inline">
              <li className="list-inline-item">
                &copy; 2019 Execute to Win Inc.
                <span> All rights reserved.</span>
              </li>
              <li className="list-inline-item">
                <a href="#">Terms of use</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="list-inline-item global">
                <a href="#">Global privacy compliance</a>
              </li>
            </ul>
          </Col>
          <Col>
            <ul className="list-inline footer-baseline-social">
              <li className="list-inline-item">
                <a href="/">
                  <img src="/facebook.svg" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/">
                  <img src="/linkedin.svg" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/">
                  <img src="/twitter.svg" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/">
                  <img src="/instagram.svg" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/">
                  <img src="/medium.svg" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;


// definitely delete this when you're done, but I thought it would be nice to see how the data is set up.
// You can recreate this by doing `console.log(JSON.stringify(whateverYourDataObjectIs))` and then go in chrome
// and after the long string it will have a tiny button that says copy.  Do `const whatever = <cmd + v>` and then run prettier.
// delete this when you're done though.

const footerData = {
  logo: {
    sys: {
      space: { sys: { type: 'Link', linkType: 'Space', id: '8r4ccjrv3jhp' } },
      id: 'vz9SW1KYLiALGOZKVBPlY',
      type: 'Asset',
      createdAt: '2019-07-15T18:50:13.230Z',
      updatedAt: '2019-07-16T00:55:52.276Z',
      environment: {
        sys: { id: 'master', type: 'Link', linkType: 'Environment' }
      },
      revision: 2,
      locale: 'en-US'
    },
    fields: {
      title: 'Icon - On Transparent Background - ETW',
      file: {
        url:
          '//images.ctfassets.net/8r4ccjrv3jhp/vz9SW1KYLiALGOZKVBPlY/2a677ac536955fb1c9ad1a4e7c0694ae/etw-logo-dark-on-transparent.svg',
        details: { size: 5011, image: { width: 595, height: 200 } },
        fileName: 'etw-logo-dark-on-transparent.svg',
        contentType: 'image/svg+xml'
      }
    }
  },
  about:
    'Execute to Win (ETW) is the Intentional Leadership Platform that high-performance organizations trust to strengthen culture and accelerate growth. Learn more about us.',
  learnLink: {
    sys: {
      space: { sys: { type: 'Link', linkType: 'Space', id: '8r4ccjrv3jhp' } },
      id: '4AUMCvKkbzRLhIMx6BwoNd',
      type: 'Entry',
      createdAt: '2019-07-21T07:30:01.772Z',
      updatedAt: '2019-07-21T07:30:01.772Z',
      environment: {
        sys: { id: 'master', type: 'Link', linkType: 'Environment' }
      },
      revision: 1,
      contentType: {
        sys: { type: 'Link', linkType: 'ContentType', id: 'link' }
      },
      locale: 'en-US'
    },
    fields: { href: '/', text: 'Learn more about us', name: 'learnLink' }
  },
  text: 'Get leadership resources in your inbox',
  subscribe: [
    {
      sys: {
        space: { sys: { type: 'Link', linkType: 'Space', id: '8r4ccjrv3jhp' } },
        id: '66kknT8iy0P4KTMoCkC7cv',
        type: 'Entry',
        createdAt: '2019-07-19T01:11:58.346Z',
        updatedAt: '2019-07-21T07:23:11.181Z',
        environment: {
          sys: { id: 'master', type: 'Link', linkType: 'Environment' }
        },
        revision: 3,
        contentType: {
          sys: { type: 'Link', linkType: 'ContentType', id: 'subscription' }
        },
        locale: 'en-US'
      },
      fields: {
        placeholderText: 'name@company.com',
        button: 'Subscribe',
        privacyLink: '/',
        name: 'subscribe'
      }
    }
  ],
  links: [
    {
      sys: {
        space: { sys: { type: 'Link', linkType: 'Space', id: '8r4ccjrv3jhp' } },
        id: 'ks4tCXvDLrH3weBSY2mGo',
        type: 'Entry',
        createdAt: '2019-07-17T06:05:34.393Z',
        updatedAt: '2019-07-17T06:05:34.393Z',
        environment: {
          sys: { id: 'master', type: 'Link', linkType: 'Environment' }
        },
        revision: 1,
        contentType: {
          sys: { type: 'Link', linkType: 'ContentType', id: 'dropdownHeading' }
        },
        locale: 'en-US'
      },
      fields: {
        title: 'About',
        subtitle: 'Learn more about ETW and our intentional culture.',
        menu: [
          {
            sys: {
              space: {
                sys: { type: 'Link', linkType: 'Space', id: '8r4ccjrv3jhp' }
              },
              id: '6IL6pEdj8C814SwPtIKOJZ',
              type: 'Entry',
              createdAt: '2019-07-17T05:54:27.051Z',
              updatedAt: '2019-07-17T05:54:27.051Z',
              environment: {
                sys: { id: 'master', type: 'Link', linkType: 'Environment' }
              },
              revision: 1,
              contentType: {
                sys: { type: 'Link', linkType: 'ContentType', id: 'submenu' }
              },
              locale: 'en-US'
            },
            fields: {
              title: 'Company',
              submenuItems: [
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '4ROAoh1s5CW1HuVJPzdTXT',
                    type: 'Entry',
                    createdAt: '2019-07-17T05:52:01.097Z',
                    updatedAt: '2019-07-17T05:52:01.097Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: { href: '/', title: 'About ETW' }
                },
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: 'MGPBTguGIMrwBsOTVcfx0',
                    type: 'Entry',
                    createdAt: '2019-07-17T05:52:30.901Z',
                    updatedAt: '2019-07-17T05:52:30.902Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: { href: '/', title: 'Our story' }
                },
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '6UhlKGrm4pJsPXSzu0C2W4',
                    type: 'Entry',
                    createdAt: '2019-07-17T05:52:52.837Z',
                    updatedAt: '2019-07-17T05:52:52.837Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: { href: '/', title: 'How we give back' }
                },
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '6t4m29AC0p3QeUg74FMHdK',
                    type: 'Entry',
                    createdAt: '2019-07-17T05:53:22.309Z',
                    updatedAt: '2019-07-17T05:53:22.309Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: { href: '/', title: 'Careers' }
                },
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '7GiWtxBdCGCZ57Bm5dPMq2',
                    type: 'Entry',
                    createdAt: '2019-07-17T05:53:44.152Z',
                    updatedAt: '2019-07-17T05:53:44.152Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: { href: '/', title: 'Partners' }
                },
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '6nNM1FqaIOCrdkAfg6V6BF',
                    type: 'Entry',
                    createdAt: '2019-07-17T05:54:10.371Z',
                    updatedAt: '2019-07-17T05:54:10.371Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: { href: '/', title: 'Contact us' }
                }
              ]
            }
          },
          {
            sys: {
              space: {
                sys: { type: 'Link', linkType: 'Space', id: '8r4ccjrv3jhp' }
              },
              id: '7iXkJNLlnY9VrWQWaIQjj3',
              type: 'Entry',
              createdAt: '2019-07-17T05:58:37.407Z',
              updatedAt: '2019-07-17T05:58:37.407Z',
              environment: {
                sys: { id: 'master', type: 'Link', linkType: 'Environment' }
              },
              revision: 1,
              contentType: {
                sys: { type: 'Link', linkType: 'ContentType', id: 'submenu' }
              },
              locale: 'en-US'
            },
            fields: {
              title: 'Contact us',
              submenuItems: [
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '7KhdUvPZ4QWTF2pG8a5UbY',
                    type: 'Entry',
                    createdAt: '2019-07-17T05:57:12.590Z',
                    updatedAt: '2019-07-17T05:57:12.590Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: { title: '480.638.9300' }
                },
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '7qjkn3tRj32BqUBtEmTMYn',
                    type: 'Entry',
                    createdAt: '2019-07-17T05:57:40.476Z',
                    updatedAt: '2019-07-17T05:57:40.476Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: { title: '25 South Arizona Place' }
                },
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '3jK8U3jF2eOtYnFJrqhEEc',
                    type: 'Entry',
                    createdAt: '2019-07-17T05:58:02.779Z',
                    updatedAt: '2019-07-17T05:58:02.779Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: { title: 'Suite 510' }
                },
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '2AFX6LvFlnis0PlIYsZBhK',
                    type: 'Entry',
                    createdAt: '2019-07-17T05:58:29.635Z',
                    updatedAt: '2019-07-17T05:58:29.635Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: { title: 'Chandler, AZ 85225' }
                }
              ]
            }
          }
        ]
      }
    },
    {
      sys: {
        space: { sys: { type: 'Link', linkType: 'Space', id: '8r4ccjrv3jhp' } },
        id: '7sSmCp1sFLzZOxuG03fMxQ',
        type: 'Entry',
        createdAt: '2019-07-17T06:02:59.496Z',
        updatedAt: '2019-07-17T06:02:59.496Z',
        environment: {
          sys: { id: 'master', type: 'Link', linkType: 'Environment' }
        },
        revision: 1,
        contentType: {
          sys: { type: 'Link', linkType: 'ContentType', id: 'dropdownHeading' }
        },
        locale: 'en-US'
      },
      fields: {
        title: 'Solutions',
        subtitle: 'Face your challenges head-on',
        menu: [
          {
            sys: {
              space: {
                sys: { type: 'Link', linkType: 'Space', id: '8r4ccjrv3jhp' }
              },
              id: '3EgnCQdQX0G66VXPfpCmJq',
              type: 'Entry',
              createdAt: '2019-07-16T19:01:54.787Z',
              updatedAt: '2019-07-16T19:01:54.787Z',
              environment: {
                sys: { id: 'master', type: 'Link', linkType: 'Environment' }
              },
              revision: 1,
              contentType: {
                sys: { type: 'Link', linkType: 'ContentType', id: 'submenu' }
              },
              locale: 'en-US'
            },
            fields: {
              title: 'By outcome',
              submenuItems: [
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '7AUNeIGtI6ReuD6FvcVdmQ',
                    type: 'Entry',
                    createdAt: '2019-07-15T19:27:14.479Z',
                    updatedAt: '2019-07-15T19:27:14.479Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: {
                    href: '/performancesolutions',
                    title: 'Strengthen culture'
                  }
                },
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '5o7GUdaOgNYmR4EzzYz1FQ',
                    type: 'Entry',
                    createdAt: '2019-07-15T19:29:28.323Z',
                    updatedAt: '2019-07-15T19:29:28.323Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: {
                    href: '/performancesolutions',
                    title: 'Accelerate growth'
                  }
                }
              ]
            }
          },
          {
            sys: {
              space: {
                sys: { type: 'Link', linkType: 'Space', id: '8r4ccjrv3jhp' }
              },
              id: '7wUXa1lKhAMvFOfShyjAbv',
              type: 'Entry',
              createdAt: '2019-07-16T19:20:15.879Z',
              updatedAt: '2019-07-16T19:29:51.729Z',
              environment: {
                sys: { id: 'master', type: 'Link', linkType: 'Environment' }
              },
              revision: 2,
              contentType: {
                sys: { type: 'Link', linkType: 'ContentType', id: 'submenu' }
              },
              locale: 'en-US'
            },
            fields: {
              title: 'By solution',
              submenuItems: [
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '6SPJLrka24utcK9jp5X96w',
                    type: 'Entry',
                    createdAt: '2019-07-16T19:24:01.267Z',
                    updatedAt: '2019-07-16T19:24:01.267Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: {
                    href: '/performancesolutions',
                    title: 'Leadership development'
                  }
                },
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '24PAfQ7n2pypvLTJi27bl6',
                    type: 'Entry',
                    createdAt: '2019-07-16T19:24:38.008Z',
                    updatedAt: '2019-07-16T19:24:38.008Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: {
                    href: '/performancesolutions',
                    title: 'Goal definition and reporting'
                  }
                },
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '1fEt0xRWotM3knnPvppV5Q',
                    type: 'Entry',
                    createdAt: '2019-07-16T19:28:31.099Z',
                    updatedAt: '2019-07-16T19:28:31.099Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: {
                    href: '/performancesolutions',
                    title: 'Behavior and process design'
                  }
                },
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '3j4x83U24TSssik1ib1vn4',
                    type: 'Entry',
                    createdAt: '2019-07-16T19:29:20.635Z',
                    updatedAt: '2019-07-16T19:29:20.635Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: {
                    href: '/performancesolutions',
                    title: 'Performance delivery'
                  }
                }
              ]
            }
          },
          {
            sys: {
              space: {
                sys: { type: 'Link', linkType: 'Space', id: '8r4ccjrv3jhp' }
              },
              id: 'r8ycCXPupUSivdnFZ4zsd',
              type: 'Entry',
              createdAt: '2019-07-16T19:20:33.956Z',
              updatedAt: '2019-07-16T19:33:32.497Z',
              environment: {
                sys: { id: 'master', type: 'Link', linkType: 'Environment' }
              },
              revision: 2,
              contentType: {
                sys: { type: 'Link', linkType: 'ContentType', id: 'submenu' }
              },
              locale: 'en-US'
            },
            fields: {
              title: 'Dig deeper',
              submenuItems: [
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '1CuNs5A32braKnpAUTfrV1',
                    type: 'Entry',
                    createdAt: '2019-07-16T19:30:24.909Z',
                    updatedAt: '2019-07-16T19:30:24.909Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: { href: '/performancesolutions', title: 'Why ETW' }
                },
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '1ceI9kuFWBTCoRq9GV8kri',
                    type: 'Entry',
                    createdAt: '2019-07-16T19:30:51.724Z',
                    updatedAt: '2019-07-16T19:30:51.724Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: { href: '/performancesolutions', title: 'Clients' }
                },
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '1esbkel4h17FypvGeSaRgo',
                    type: 'Entry',
                    createdAt: '2019-07-16T19:31:21.152Z',
                    updatedAt: '2019-07-16T19:31:21.152Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: { href: '/performancesolutions', title: 'Pricing' }
                }
              ]
            }
          }
        ]
      }
    },
    {
      sys: {
        space: { sys: { type: 'Link', linkType: 'Space', id: '8r4ccjrv3jhp' } },
        id: '5lxhgGjOBZbfdOh32Bg3Tx',
        type: 'Entry',
        createdAt: '2019-07-16T19:18:46.563Z',
        updatedAt: '2019-07-17T06:22:03.266Z',
        environment: {
          sys: { id: 'master', type: 'Link', linkType: 'Environment' }
        },
        revision: 3,
        contentType: {
          sys: { type: 'Link', linkType: 'ContentType', id: 'dropdownHeading' }
        },
        locale: 'en-US'
      },
      fields: {
        title: 'Resources',
        subtitle: 'Get equipped for intentional building',
        menu: [
          {
            sys: {
              space: {
                sys: { type: 'Link', linkType: 'Space', id: '8r4ccjrv3jhp' }
              },
              id: '7ouNZcmWvff7FqL5qej8SE',
              type: 'Entry',
              createdAt: '2019-07-17T06:10:45.571Z',
              updatedAt: '2019-07-17T06:10:45.571Z',
              environment: {
                sys: { id: 'master', type: 'Link', linkType: 'Environment' }
              },
              revision: 1,
              contentType: {
                sys: { type: 'Link', linkType: 'ContentType', id: 'submenu' }
              },
              locale: 'en-US'
            },
            fields: {
              title: 'Support',
              submenuItems: [
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '4Q3pppmDY2VgcIDRwIkNWk',
                    type: 'Entry',
                    createdAt: '2019-07-17T06:09:16.854Z',
                    updatedAt: '2019-07-17T06:09:16.854Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: {
                    href: '/leadershipresources',
                    title: 'Frequently asked questions'
                  }
                },
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '2ophVl3kGMzml1qzFe98tP',
                    type: 'Entry',
                    createdAt: '2019-07-17T06:09:57.224Z',
                    updatedAt: '2019-07-17T06:09:57.224Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: {
                    href: '/leadershipresources',
                    title: 'Support center'
                  }
                },
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '3Cfh5NVCqMlHJO8K8ZWAuu',
                    type: 'Entry',
                    createdAt: '2019-07-17T06:10:29.554Z',
                    updatedAt: '2019-07-17T06:10:29.554Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: {
                    href: '/leadershipresources',
                    title: 'Developer docs'
                  }
                }
              ]
            }
          },
          {
            sys: {
              space: {
                sys: { type: 'Link', linkType: 'Space', id: '8r4ccjrv3jhp' }
              },
              id: '1JQxawpILuiffyz3S7D59n',
              type: 'Entry',
              createdAt: '2019-07-17T06:13:48.350Z',
              updatedAt: '2019-07-17T06:13:48.350Z',
              environment: {
                sys: { id: 'master', type: 'Link', linkType: 'Environment' }
              },
              revision: 1,
              contentType: {
                sys: { type: 'Link', linkType: 'ContentType', id: 'submenu' }
              },
              locale: 'en-US'
            },
            fields: {
              title: 'Leadership resources',
              submenuItems: [
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '2RuOKTfxmio2l0Bz3zcIol',
                    type: 'Entry',
                    createdAt: '2019-07-17T06:11:32.749Z',
                    updatedAt: '2019-07-17T06:11:32.749Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: { href: '/leadershipresources', title: 'Articles' }
                },
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '77PzrPurwbsSpAzInnpS1g',
                    type: 'Entry',
                    createdAt: '2019-07-17T06:11:57.586Z',
                    updatedAt: '2019-07-17T06:11:57.586Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: { href: '/leadershipresources', title: 'Assessments' }
                },
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '5xGpkfKax31nvG9V16tkEQ',
                    type: 'Entry',
                    createdAt: '2019-07-17T06:12:23.098Z',
                    updatedAt: '2019-07-17T06:12:23.098Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: {
                    href: '/leadershipresources',
                    title: 'Case studies'
                  }
                },
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '38GgFUY91MBnQEhO1H0mKX',
                    type: 'Entry',
                    createdAt: '2019-07-17T06:12:45.927Z',
                    updatedAt: '2019-07-19T03:48:02.124Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 2,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: { href: '/leadershipresources', title: 'Checklists' }
                },
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '72a9zCBjRgdCZkJinMxNwp',
                    type: 'Entry',
                    createdAt: '2019-07-17T06:13:10.192Z',
                    updatedAt: '2019-07-17T06:13:10.192Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: { href: '/leadershipresources', title: 'Fact sheets' }
                },
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '2mG4r2xFuGP9ngHNqTnIKr',
                    type: 'Entry',
                    createdAt: '2019-07-17T06:13:37.150Z',
                    updatedAt: '2019-07-19T03:47:51.594Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 2,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: {
                    href: '/leadershipresources',
                    title: 'White papers'
                  }
                }
              ]
            }
          }
        ]
      }
    },
    {
      sys: {
        space: { sys: { type: 'Link', linkType: 'Space', id: '8r4ccjrv3jhp' } },
        id: '51jICbJn2s4I8EU79wBWpV',
        type: 'Entry',
        createdAt: '2019-07-17T06:21:45.919Z',
        updatedAt: '2019-07-17T06:21:45.919Z',
        environment: {
          sys: { id: 'master', type: 'Link', linkType: 'Environment' }
        },
        revision: 1,
        contentType: {
          sys: { type: 'Link', linkType: 'ContentType', id: 'dropdownHeading' }
        },
        locale: 'en-US'
      },
      fields: {
        title: 'Features',
        subtitle: 'Explore the ETW platform and its enterprise functionality.',
        menu: [
          {
            sys: {
              space: {
                sys: { type: 'Link', linkType: 'Space', id: '8r4ccjrv3jhp' }
              },
              id: '2bEBpifb1Fn5JrbET52abP',
              type: 'Entry',
              createdAt: '2019-07-17T06:17:25.538Z',
              updatedAt: '2019-07-17T06:17:25.538Z',
              environment: {
                sys: { id: 'master', type: 'Link', linkType: 'Environment' }
              },
              revision: 1,
              contentType: {
                sys: { type: 'Link', linkType: 'ContentType', id: 'submenu' }
              },
              locale: 'en-US'
            },
            fields: {
              title: 'Leadership development software',
              submenuItems: [
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '63tWoP6UkBwZgC29ecjqFO',
                    type: 'Entry',
                    createdAt: '2019-07-17T06:15:46.521Z',
                    updatedAt: '2019-07-17T06:15:46.521Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: { href: '/', title: 'Drive product tour' }
                },
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '13wyzeQU9bUuIdnEIihwrw',
                    type: 'Entry',
                    createdAt: '2019-07-17T06:16:14.277Z',
                    updatedAt: '2019-07-17T06:16:14.277Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: { href: '/', title: 'Talent gap reports' }
                },
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '2hFm2np3yorw30DQKegi9k',
                    type: 'Entry',
                    createdAt: '2019-07-17T06:16:41.351Z',
                    updatedAt: '2019-07-17T06:16:41.351Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: { href: '/', title: 'Development paths' }
                },
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '5DehozE02U9nw7FolfrsSU',
                    type: 'Entry',
                    createdAt: '2019-07-17T06:17:09.027Z',
                    updatedAt: '2019-07-17T06:17:09.027Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: { href: '/', title: 'Competency reviews' }
                }
              ]
            }
          },
          {
            sys: {
              space: {
                sys: { type: 'Link', linkType: 'Space', id: '8r4ccjrv3jhp' }
              },
              id: '1ftlShhm1OnimWvF4RuZu6',
              type: 'Entry',
              createdAt: '2019-07-17T06:19:51.521Z',
              updatedAt: '2019-07-17T06:19:51.521Z',
              environment: {
                sys: { id: 'master', type: 'Link', linkType: 'Environment' }
              },
              revision: 1,
              contentType: {
                sys: { type: 'Link', linkType: 'ContentType', id: 'submenu' }
              },
              locale: 'en-US'
            },
            fields: {
              title: 'Priority execution software',
              submenuItems: [
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '4jPCIQdXqX2YONMlCPPmK1',
                    type: 'Entry',
                    createdAt: '2019-07-17T06:18:11.749Z',
                    updatedAt: '2019-07-17T06:18:11.749Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: { href: '/', title: 'Align product tour' }
                },
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '4MO2YhGFqgCWLDTdJCVAzu',
                    type: 'Entry',
                    createdAt: '2019-07-17T06:18:40.634Z',
                    updatedAt: '2019-07-17T06:18:40.634Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: { href: '/', title: 'Goal management' }
                },
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '7fAdnSU7JpVQiNv8MgBUVC',
                    type: 'Entry',
                    createdAt: '2019-07-17T06:19:05.719Z',
                    updatedAt: '2019-07-17T06:19:05.719Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: { href: '/', title: 'Plan management' }
                },
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '21swVFbMczaDcm1UqsW7fF',
                    type: 'Entry',
                    createdAt: '2019-07-17T06:19:38.494Z',
                    updatedAt: '2019-07-17T06:19:38.494Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: { href: '/', title: 'Progress dashboards' }
                }
              ]
            }
          },
          {
            sys: {
              space: {
                sys: { type: 'Link', linkType: 'Space', id: '8r4ccjrv3jhp' }
              },
              id: '1NHI1RsqnjHb7kE7Nyqtja',
              type: 'Entry',
              createdAt: '2019-07-17T06:20:44.678Z',
              updatedAt: '2019-07-17T06:20:44.678Z',
              environment: {
                sys: { id: 'master', type: 'Link', linkType: 'Environment' }
              },
              revision: 1,
              contentType: {
                sys: { type: 'Link', linkType: 'ContentType', id: 'submenu' }
              },
              locale: 'en-US'
            },
            fields: {
              title: 'Take action',
              submenuItems: [
                {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: '8r4ccjrv3jhp'
                      }
                    },
                    id: '3CLzW4UR4ehxCc08r3Loj6',
                    type: 'Entry',
                    createdAt: '2019-07-17T06:20:32.795Z',
                    updatedAt: '2019-07-17T06:20:32.795Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment'
                      }
                    },
                    revision: 1,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'items'
                      }
                    },
                    locale: 'en-US'
                  },
                  fields: { href: '/', title: 'Request a demo' }
                }
              ]
            }
          }
        ]
      }
    }
  ],
  copyright: '© 2019 Execute to Win Inc. All rights reserved.',
  baselineLinks: [
    {
      sys: {
        space: { sys: { type: 'Link', linkType: 'Space', id: '8r4ccjrv3jhp' } },
        id: '28YBt5v7XbnqV1eQ4jyp01',
        type: 'Entry',
        createdAt: '2019-07-21T07:45:30.484Z',
        updatedAt: '2019-07-21T07:45:48.175Z',
        environment: {
          sys: { id: 'master', type: 'Link', linkType: 'Environment' }
        },
        revision: 2,
        contentType: {
          sys: { type: 'Link', linkType: 'ContentType', id: 'link' }
        },
        locale: 'en-US'
      },
      fields: { href: '/', text: 'Terms of use', name: 'termsOfUse' }
    },
    {
      sys: {
        space: { sys: { type: 'Link', linkType: 'Space', id: '8r4ccjrv3jhp' } },
        id: '77ZgTR3yiSq8Khd1En2x1G',
        type: 'Entry',
        createdAt: '2019-07-21T07:46:24.862Z',
        updatedAt: '2019-07-21T07:46:24.862Z',
        environment: {
          sys: { id: 'master', type: 'Link', linkType: 'Environment' }
        },
        revision: 1,
        contentType: {
          sys: { type: 'Link', linkType: 'ContentType', id: 'link' }
        },
        locale: 'en-US'
      },
      fields: { href: '/', text: 'Privacy Policy', name: 'privacyPolicy' }
    },
    {
      sys: {
        space: { sys: { type: 'Link', linkType: 'Space', id: '8r4ccjrv3jhp' } },
        id: '6IYX5vEuj5OCshWxxW5rBW',
        type: 'Entry',
        createdAt: '2019-07-21T07:46:58.876Z',
        updatedAt: '2019-07-21T07:46:58.876Z',
        environment: {
          sys: { id: 'master', type: 'Link', linkType: 'Environment' }
        },
        revision: 1,
        contentType: {
          sys: { type: 'Link', linkType: 'ContentType', id: 'link' }
        },
        locale: 'en-US'
      },
      fields: { href: '/', text: 'Global privacy compliance', name: 'global' }
    }
  ],
  socialLinks: [
    {
      sys: {
        space: { sys: { type: 'Link', linkType: 'Space', id: '8r4ccjrv3jhp' } },
        id: '7IBBS53TxcWcatzEGzR9Ua',
        type: 'Entry',
        createdAt: '2019-07-21T07:52:20.608Z',
        updatedAt: '2019-07-21T07:52:20.608Z',
        environment: {
          sys: { id: 'master', type: 'Link', linkType: 'Environment' }
        },
        revision: 1,
        contentType: {
          sys: { type: 'Link', linkType: 'ContentType', id: 'imageLink' }
        },
        locale: 'en-US'
      },
      fields: {
        href: '/',
        image: {
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: '8r4ccjrv3jhp' }
            },
            id: '38cebLrqBItXNExe1FRCRw',
            type: 'Asset',
            createdAt: '2019-07-21T07:52:06.144Z',
            updatedAt: '2019-07-21T07:52:06.144Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' }
            },
            revision: 1,
            locale: 'en-US'
          },
          fields: {
            title: 'facebook',
            file: {
              url:
                '//images.ctfassets.net/8r4ccjrv3jhp/38cebLrqBItXNExe1FRCRw/1204f964b7649002faa2ed546cc602b5/facebook.svg',
              details: { size: 1586, image: { width: 20, height: 20 } },
              fileName: 'facebook.svg',
              contentType: 'image/svg+xml'
            }
          }
        },
        name: 'facebook'
      }
    },
    {
      sys: {
        space: { sys: { type: 'Link', linkType: 'Space', id: '8r4ccjrv3jhp' } },
        id: '3AXDDQUqZ18tbNKPic9bPH',
        type: 'Entry',
        createdAt: '2019-07-21T07:53:50.108Z',
        updatedAt: '2019-07-21T07:53:50.108Z',
        environment: {
          sys: { id: 'master', type: 'Link', linkType: 'Environment' }
        },
        revision: 1,
        contentType: {
          sys: { type: 'Link', linkType: 'ContentType', id: 'imageLink' }
        },
        locale: 'en-US'
      },
      fields: {
        href: '/',
        image: {
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: '8r4ccjrv3jhp' }
            },
            id: '3q6iL6HSTmPolhOcAueiCU',
            type: 'Asset',
            createdAt: '2019-07-21T07:52:53.827Z',
            updatedAt: '2019-07-21T07:52:53.827Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' }
            },
            revision: 1,
            locale: 'en-US'
          },
          fields: {
            title: 'linkedin',
            file: {
              url:
                '//images.ctfassets.net/8r4ccjrv3jhp/3q6iL6HSTmPolhOcAueiCU/41075e69370dc276bf8329fa7482bbb3/linkedin.svg',
              details: { size: 2239, image: { width: 20, height: 20 } },
              fileName: 'linkedin.svg',
              contentType: 'image/svg+xml'
            }
          }
        },
        name: 'linkedIn'
      }
    },
    {
      sys: {
        space: { sys: { type: 'Link', linkType: 'Space', id: '8r4ccjrv3jhp' } },
        id: 'Miin4HIZPQgJJOyhCRsph',
        type: 'Entry',
        createdAt: '2019-07-21T07:54:33.343Z',
        updatedAt: '2019-07-21T07:54:33.343Z',
        environment: {
          sys: { id: 'master', type: 'Link', linkType: 'Environment' }
        },
        revision: 1,
        contentType: {
          sys: { type: 'Link', linkType: 'ContentType', id: 'imageLink' }
        },
        locale: 'en-US'
      },
      fields: {
        href: '/',
        image: {
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: '8r4ccjrv3jhp' }
            },
            id: '4C4gx5GSH7Bd8qNJtO0XvP',
            type: 'Asset',
            createdAt: '2019-07-21T07:54:26.221Z',
            updatedAt: '2019-07-21T07:54:26.221Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' }
            },
            revision: 1,
            locale: 'en-US'
          },
          fields: {
            title: 'twitter',
            file: {
              url:
                '//images.ctfassets.net/8r4ccjrv3jhp/4C4gx5GSH7Bd8qNJtO0XvP/b811d425eb5d3f2e317f610920593d67/twitter.svg',
              details: { size: 11493, image: { width: 26, height: 20 } },
              fileName: 'twitter.svg',
              contentType: 'image/svg+xml'
            }
          }
        },
        name: 'twitter'
      }
    },
    {
      sys: {
        space: { sys: { type: 'Link', linkType: 'Space', id: '8r4ccjrv3jhp' } },
        id: '3WAOMfw3cWwpvKgIgybtqq',
        type: 'Entry',
        createdAt: '2019-07-21T07:56:40.102Z',
        updatedAt: '2019-07-21T07:56:40.102Z',
        environment: {
          sys: { id: 'master', type: 'Link', linkType: 'Environment' }
        },
        revision: 1,
        contentType: {
          sys: { type: 'Link', linkType: 'ContentType', id: 'imageLink' }
        },
        locale: 'en-US'
      },
      fields: {
        href: '/',
        image: {
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: '8r4ccjrv3jhp' }
            },
            id: 'sbUXvX8RXZ7JN5qJB1CGi',
            type: 'Asset',
            createdAt: '2019-07-21T07:56:30.879Z',
            updatedAt: '2019-07-21T07:56:30.879Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' }
            },
            revision: 1,
            locale: 'en-US'
          },
          fields: {
            title: 'instagram',
            file: {
              url:
                '//images.ctfassets.net/8r4ccjrv3jhp/sbUXvX8RXZ7JN5qJB1CGi/3dcbd78d96ebc236748f2d82b8fedb9f/instagram.svg',
              details: { size: 1945, image: { width: 19, height: 20 } },
              fileName: 'instagram.svg',
              contentType: 'image/svg+xml'
            }
          }
        },
        name: 'instagram'
      }
    },
    {
      sys: {
        space: { sys: { type: 'Link', linkType: 'Space', id: '8r4ccjrv3jhp' } },
        id: '1zYuMcTwrqO9aVaaGsiMt3',
        type: 'Entry',
        createdAt: '2019-07-21T07:57:19.905Z',
        updatedAt: '2019-07-21T07:57:19.905Z',
        environment: {
          sys: { id: 'master', type: 'Link', linkType: 'Environment' }
        },
        revision: 1,
        contentType: {
          sys: { type: 'Link', linkType: 'ContentType', id: 'imageLink' }
        },
        locale: 'en-US'
      },
      fields: {
        href: '/',
        image: {
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: '8r4ccjrv3jhp' }
            },
            id: '5L91rijxVddQ7S5yxdBjtF',
            type: 'Asset',
            createdAt: '2019-07-21T07:57:12.315Z',
            updatedAt: '2019-07-21T07:57:12.315Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' }
            },
            revision: 1,
            locale: 'en-US'
          },
          fields: {
            title: 'medium',
            file: {
              url:
                '//images.ctfassets.net/8r4ccjrv3jhp/5L91rijxVddQ7S5yxdBjtF/992ef44e5afe9f9b429e7aec221185c6/medium.svg',
              details: { size: 2049, image: { width: 23, height: 20 } },
              fileName: 'medium.svg',
              contentType: 'image/svg+xml'
            }
          }
        },
        name: 'medium'
      }
    }
  ],
  name: 'footer'
};
