import React from 'react';
import Card from 'react-bootstrap/Card';
import ButtonUp from './Button';

const TestimonialCardVertical = () => (
  <Card className="testimonial-card">
    <Card.Body>
      <div className="testimonial-quote">
        <blockquote>
          <p>
            ETW has made all the difference in our performance. They are our
            secret sauce.
          </p>
          <footer className="blockquote-footer">
            high-performance client name
          </footer>
        </blockquote>
      </div>
      <div className="testimonial-cta">
        <ButtonUp
          href="#"
          variant="primary"
          className="mt-lg-5 mb-3"
          content="Join our next webinar"
        />
        <p className="px-lg-8">
          Every Tuesday, Thursday, and Friday, designed for C-level leaders like
          you.
        </p>
      </div>
    </Card.Body>
  </Card>
);

export default TestimonialCardVertical;
