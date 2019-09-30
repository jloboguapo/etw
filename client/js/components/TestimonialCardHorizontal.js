import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card, { Body } from 'react-bootstrap/Card';
import ButtonUp from './Button';

const TestimonialCardHorizontal = ({ data, style }) => {
  const { button, quote, quoter, text } = data;

  return (
    <Card className="testimonial-card" style={style && style}>
      <Body>
        <Row>
          <Col
            className="testimonial-cta mb-4 mb-lg-0"
            {...(quote ? { lg: 5 } : { lg: 12 })}
          >
            {button && (
              <ButtonUp
                className="mb-3"
                content={button.fields.text}
                href={button.fields.href}
                variant="primary"
              />
            )}
            {text && <p>{text}</p>}
          </Col>
          {quote && (
            <Col className="testimonial-quote">
              <blockquote>
                <p>{quote}</p>
                {quoter && (
                  <footer className="blockquote-footer">{quoter}</footer>
                )}
              </blockquote>
            </Col>
          )}
        </Row>
      </Body>
    </Card>
  );
};

export default TestimonialCardHorizontal;
