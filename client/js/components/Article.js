import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card, { Footer, Img } from 'react-bootstrap/Card';
import CallToAction from './CallToAction';
import CallToActionNoLink from './CallToActionNoLink';
import CarouselListener from './CarouselListener';
import Pill from './Pill';
import SubscribeSection from './SubscribeSection';
import { getEntriesById } from '../utils/contentfulHelpers';
import Blog from './Blog';

const Article = props => {
  const { id } = props;
  const [heading, setHeading] = useState({});
  const [card, setCard] = useState({});
  const [shareInsight, setShareInsight] = useState({});
  const [subscription, setSubscription] = useState([]);
  const [resourcesHead, setResourcesHead] = useState({});
  const [carouselCards, setCarouselCards] = useState([]);
  const [blogPost, setBlogPost] = useState({});
  const [blogFooterPic, setBlogFooterPic] = useState({});

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
        } else if (section.fields.name === 'blogPost') {
          setBlogPost(section.fields.blog);
        } else if (section.fields.name === 'blogFooterPic') {
          setBlogFooterPic(section.fields);
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
              {blogPost && blogPost.content && <Blog blogPost={blogPost} />}
            </div>

            {blogFooterPic && (
              <Card
                as="a"
                href={blogFooterPic.href}
                className="article-cta-card border-0 shadow-none"
              >
                {blogFooterPic && blogFooterPic.icon && (
                  <Img variant="top" src={blogFooterPic.icon.fields.file.url} />
                )}
                <Footer className="bg-success rounded-bottom">
                  <CallToActionNoLink
                    content={blogFooterPic.cta}
                    arrowClassName="arrow-white"
                    source="arrow-white.svg"
                  />
                </Footer>
              </Card>
            )}
          </Col>
        </Row>
      </Container>

      {subscription && <SubscribeSection {...subscription} />}

      <div className="article-related bg-secondary pb-8 pb-lg-11 text-center">
        <h3 className="mb-8">{resourcesHead.title}</h3>
        {carouselCards.items && (
          <CarouselListener cards={carouselCards.items} />
        )}
      </div>
    </div>
  );
};

export default Article;
