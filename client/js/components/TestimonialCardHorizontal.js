import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card, { Body } from 'react-bootstrap/Card';
import ButtonUp from './Button';

const TestimonialCardHorizontal = () => (
  <Card className="testimonial-card">
    <Body>
      <Row>
        <Col lg="5" className="testimonial-cta mb-4 mb-lg-0">
          <ButtonUp
            href="#"
            variant="primary"
            className="mb-3"
            content="Join our next webinar"
          />
          <p>
            Every Tuesday, Thursday, and Friday, designed for C-level leaders
            like you.
          </p>
        </Col>
        <Col className="testimonial-quote">
          <blockquote>
            <p>
              ETW has made us far more productive because now we focus on the
              key things that drive results for our company.
            </p>
            <footer className="blockquote-footer">
              Joe Grygiel, Air EVAC Lifeteam
            </footer>
          </blockquote>
        </Col>
      </Row>
    </Body>
  </Card>
);

export default TestimonialCardHorizontal;
