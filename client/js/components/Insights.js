import React from 'react';
import { CardDeck, Col, Container, Row } from 'react-bootstrap';
import Subscribe from './Subscribe';
import CallToAction from './CallToAction';
import TestimonialCardVertical from './TestimonialCardVertical';
import CtaCard from './CtaCard';
import CtaCardLarge from './CtaCardLarge';

const Insights = () => {
  return (
    <div className="bg-secondary py-8 py-lg-11">
      <Container className="insights-wrapper">
        <Row className="justify-content-md-center text-center">
          <Col lg={8}>
            <h2 className="mb-7">Growth-driving insights</h2>
            <Subscribe />
          </Col>
        </Row>
        <div className="insights-card-container mt-8 mt-lg-11">
          <CardDeck>
            <CtaCard url="/phone-on-desk.svg" />
            <CtaCard url="/tower.svg" />
            <CtaCardLarge url="/typing-hands.svg" />
            <CtaCard url="/laptop-angle.svg" />
            <TestimonialCardVertical />
          </CardDeck>
          <p className="text-center mb-0">
            <CallToAction
              linkUrl="/"
              linkName="More insights"
              arrowClassName="arrow-svg"
              source="arrow.svg"
            />
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Insights;
