import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import _isEmpty from 'lodash.isempty';
import TestimonialCardHorizontal from './TestimonialCardHorizontal';
import { getEntriesById } from '../utils/contentfulHelpers';

const ServicesSoftware = props => {
  const { id } = props;
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [cards, setCards] = useState([]);
  const [cardsMenu, setCardsMenu] = useState([]);

  const fetchData = async () => {
    const response = await getEntriesById(id);
    setTitle(response.title);
    setSubtitle(response.subtitle);
    setCards(response.cards);
    setCardsMenu(response.cardsMenu);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container className="services-software-container py-8 py-lg-11">
      <Row className="justify-content-lg-center text-lg-center mb-5 mb-lg-10">
        <Col lg={8}>
          <h2>{title}</h2>
          <p className="lead">{subtitle}</p>
        </Col>
      </Row>

      <Row className="text-lg-center mb-8 mb-lg-10">
        {cards.map((card, index) => {
          return index ? (
            <Col key={card.fields.name} lg={4} className="mb-5">
              <img src={card.fields.image.fields.file.url} className="mb-5" />
              <h4>{card.fields.boldPercentage}</h4>
              <p>
                {card.fields.textPart1}
                <a href="#" className="text-info">
                  {card.fields.highlightedText &&
                    ' ' + card.fields.highlightedText}
                </a>
                {card.fields.textPart2}
              </p>
            </Col>
          ) : (
            <Col
              key={card.fields.name}
              lg={{ span: 4, offset: 2 }}
              className="mb-5 mb-lg-0"
            >
              <img src={card.fields.image.fields.file.url} className="mb-5" />
              <h4>{card.fields.boldPercentage}</h4>
              <p>
                {card.fields.textPart1}
                <a href="#" className="text-info">
                  {card.fields.highlightedText &&
                    ' ' + card.fields.highlightedText}
                </a>
                {card.fields.textPart2}
              </p>
            </Col>
          );
        })}
      </Row>

      {cardsMenu.map(testimonialCard => {
        return (
          !_isEmpty(testimonialCard) && (
            <TestimonialCardHorizontal
              key={testimonialCard.sys.id}
              data={testimonialCard.fields}
            />
          )
        );
      })}
    </Container>
  );
};

export default ServicesSoftware;
