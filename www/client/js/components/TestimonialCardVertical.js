import React from 'react';
import Card, { Body } from 'react-bootstrap/Card';
import _isEmpty from 'lodash.isempty';
import ButtonUp from './Button';

const TestimonialCardVertical = props => {
  const { quote, quoter, button, text } = props;

  return (
    <Card className="testimonial-card">
      <Body>
        <div className="testimonial-quote">
          {quote && (
            <blockquote>
              <p>{quote}</p>
              {quoter && (
                <footer className="blockquote-footer">{quoter}</footer>
              )}
            </blockquote>
          )}
        </div>
        <div className="testimonial-cta">
          {!_isEmpty(button) && (
            <ButtonUp
              href={button.fields.href}
              variant="primary"
              className="mt-lg-5 mb-3"
              content={button.fields.text}
            />
          )}
          {text && <p className="px-lg-8">{text}</p>}
        </div>
      </Body>
    </Card>
  );
};

export default TestimonialCardVertical;
