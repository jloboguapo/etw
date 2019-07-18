import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const TestimonialCardHorizontal = () => (
  <Card className="testimonial-card">
    <Card.Body>
      <Row>
        <Col lg="5" className="testimonial-cta mb-4 mb-lg-0">
          <Button href="#" variant="primary" className="mb-3">
            Join our next webinar
          </Button>
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
    </Card.Body>
  </Card>
);

export default TestimonialCardHorizontal;