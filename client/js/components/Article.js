import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card, { Footer, Img } from 'react-bootstrap/Card';
import CallToAction from './CallToAction';
import CallToActionNoLink from './CallToActionNoLink';
import CarouselListener from './CarouselListener';
import Pill from './Pill';
import SubscribeSection from './SubscribeSection';
import { getEntriesById } from '../utils/contentfulHelpers';

const Article = props => {
  const { id } = props;
  const [heading, setHeading] = useState({});
  const [card, setCard] = useState({});
  const [shareInsight, setShareInsight] = useState({});
  const [subscription, setSubscription] = useState([]);
  const [resourcesHead, setResourcesHead] = useState({});
  const [carouselCards, setCarouselCards] = useState([]);

  const fetchData = async () => {
    const response = await getEntriesById(id);
    const items = response.items;

    if (response && items) {
      return items.map(section => {
        if (section.fields.name === 'heading') {
          setHeading(section.fields);
        } else if (section.fields.name === 'card') {
          setCard(section.fields);
        } else if (section.fields.name === 'shareInsight') {
          setShareInsight(section.fields);
        } else if (section.fields.name === 'subscribe') {
          setSubscription(section.fields);
        } else if (section.fields.name === 'resourcesHead') {
          setResourcesHead(section.fields);
        } else if (section.fields.name === 'carouselCards') {
          setCarouselCards(section.fields);
        }
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    document.body.className = 'bg-white';
  }, []);

  const headingsAroundBullet = heading.headingsAroundBullet;
  const cardItems = card.items;
  const insightItems = shareInsight.items;

  console.log(carouselCards.items);

  return (
    <div className="article-single">
      <Container className="article-layout">
        <Row>
          <Col>
            <div className="article-header">
              <h1>{heading.text}</h1>
              <div className="article-meta">
                {headingsAroundBullet &&
                  headingsAroundBullet.map((tag, index) => {
                    return (
                      <span key={`${tag}${index}`}>
                        {index === 0 && (
                          <a href={heading.subtext}>{tag + ' '}</a>
                        )}
                        {index !== 0 && (
                          <>
                            <span className="article-meta-divider">&bull;</span>
                            <span>{' ' + tag}</span>
                          </>
                        )}
                      </span>
                    );
                  })}
                <a href="#">
                  <Pill content={heading.highlightedText} />
                </a>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={{ span: 12, order: 1 }} lg={{ span: 3, order: 0 }}>
            <div className="article-author">
              {cardItems &&
                cardItems.map(item => {
                  return (
                    <span key={item.sys.id}>
                      <div
                        className="article-author-photo"
                        style={{
                          backgroundImage: `url(${
                            item.fields.icon.fields.file.url
                          })`
                        }}
                      />
                      <h4>{item.fields.title}</h4>
                      <p>{item.fields.subtitle}</p>
                      <CallToAction
                        linkUrl={item.fields.href}
                        linkName={item.fields.cta}
                        arrowClassName="arrow"
                        source="/arrow.svg"
                      />
                    </span>
                  );
                })}
            </div>

            <div className="article-share">
              <h4>Share this insight</h4>
              {insightItems &&
                insightItems.map(link => {
                  return (
                    <a key={link.fields.name} href={link.fields.href}>
                      <img src={link.fields.image.fields.file.url} />
                    </a>
                  );
                })}
            </div>
          </Col>
          <Col xs={{ span: 12, order: 0 }} lg={{ span: 9, order: 1 }}>
            <div className="article-content">
              <img className="article-hero rounded" src="/typing-hands.svg" />
              <p>
                No matter how much it’s desired in business, change is never
                easy. Or, as leadership development expert Brian Smith says,
                “it’s going to get messy.”
              </p>
              <p>
                Change management initiatives within organizations are, by
                design, intended to improve results. And in most cases, those
                results are defined and communicated throughout the
                organization. So, why do more than 70% of change management
                initiatives fail? And, of the other 30%, more than 50% don’t
                fully deliver the desired results?
              </p>
              <ul>
                <li>Bullet points look like this</li>
                <li>Another bullet point</li>
                <li>And one more for good measure</li>
              </ul>
              <p>
                The primary reason: Leadership Development doesn’t mirror the
                organizations' drivers that cause extraordinary results to
                happen. That includes successful change management.
              </p>
              <h2>4 Essential Steps to Successful Change Management</h2>
              <p>
                Organizational habits are extremely hard to change without a
                systemic, intentional approach.
              </p>
              <p>
                It’s important to get the mindset and processes right before
                even considering the productive power of having the right
                technology and tools in place. Having the right mindset means
                you understand how your Management Operating System elements,
                including change management, are intended to create value for
                the organization. If team members are told to do something
                without having this value-creation mindset, they’ll likely check
                the box and go back to the way things were done before—due to
                the inertia of their “this is how we’ve always done it” mindset.
              </p>
              <p>Here are a few ways to shift that paradigm.</p>
              <h3>
                Scope and Scale: How a Management Operating System Manages
                Change
              </h3>
              <p>
                Your answers need to become living, breathing
                continuous-improvement efforts and systems. When leaders are
                coached and developed to have a value-creation mindset, this
                process comes naturally. When leaders are not so equipped, many
                of these responses simply become “events” with just a lot of
                non-value-added box-checking.
              </p>
              <p>
                Additionally, your MOS should intentionally prioritize, measure,
                align and effectively communicate all desired outcomes, such as…
              </p>
              <ul>
                <li>Numbered bullet points look like this</li>
                <li>Another bullet point</li>
                <li>And one more for good measure</li>
              </ul>
              <p>
                Interested in learning more? I hope you'll join me, Brian Smith,
                John Sigmon and an exceptional lineup of CEOs and leadership
                experts at Network Leadership Summit on April 9 in Tempe.{' '}
                <a href="/">Register now.</a>
              </p>
            </div>

            <Card
              as="a"
              href="#"
              className="article-cta-card border-0 shadow-none"
            >
              <Img variant="top" src="blog-footer-pic.svg" />
              <Footer className="bg-success rounded-bottom">
                <CallToActionNoLink
                  content="Download the ETW guide to change management"
                  arrowClassName="arrow-white"
                  source="arrow-white.svg"
                />
              </Footer>
            </Card>
          </Col>
        </Row>
      </Container>

      {subscription && <SubscribeSection {...subscription} />}

      <div className="article-related bg-secondary pb-8 pb-lg-11 text-center">
        <h3 className="mb-8">{resourcesHead.title}</h3>
        {carouselCards.items && <CarouselListener {...carouselCards.items} />}
      </div>
    </div>
  );
};

export default Article;
