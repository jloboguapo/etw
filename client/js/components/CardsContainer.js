import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import _isEmpty from 'lodash.isempty';
import CallToActionNoLink from './CallToActionNoLink';
import TestimonialCardHorizontal from './TestimonialCardHorizontal';
import { getEntriesById } from '../utils/contentfulHelpers';

const CardsContainer = props => {
  const [cards, setCards] = useState([]);
  const [subtext, setSubtext] = useState('');
  const [testimonialCards, setTestimonialCards] = useState({});
  const [title, setTitle] = useState('');
  const { id } = props;

  const fetchData = async () => {
    const items = await getEntriesById(id);

    setCards(items.cards);
    setSubtext(items.subtext);
    setTestimonialCards(items.testimonialCards);
    setTitle(items.title);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const renderCard = card => {
    const {
      href,
      icon,
      title: cardTitle,
      subtitle: cardSubtitle,
      cta
    } = card.fields;

    return (
      <Col
        key={cardTitle}
        md={cards.length % 2 === 1 ? 12 : 6}
        lg={12 / cards.length}
      >
        <a href={href} className="cards-container-card">
          {icon && <img src={icon.fields.file.url} />}
          {cardTitle && <h3>{cardTitle}</h3>}
          {cardSubtitle && <p>{cardSubtitle}</p>}
          {cta && (
            <CallToActionNoLink
              content={cta}
              arrowClassName="arrow-svg"
              source="arrow.png"
            />
          )}
        </a>
      </Col>
    );
  };

  return (
    <div className="bg-white py-8 py-lg-11">
      <Container className="etw-cards-container-main-container">
        <Row className="justify-content-md-center text-lg-center">
          <Col lg={8}>
            {title && <h2>{title}</h2>}
            {subtext && <p className="lead mb-8">{subtext}</p>}
          </Col>
        </Row>
        <Row className="mb-8 mb-lg-11">
          {!_isEmpty(cards) && cards.map(renderCard)}
        </Row>
        {!_isEmpty(testimonialCards) && (
          <TestimonialCardHorizontal data={testimonialCards.fields} />
        )}
      </Container>
    </div>
  );
};

export default CardsContainer;
