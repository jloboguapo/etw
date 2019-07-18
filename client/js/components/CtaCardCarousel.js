import React from 'react';
import Card from 'react-bootstrap/Card';
import CallToAction from './CallToAction';
import Pill from './Pill';

const CtaCardCarousel = ({ url }) => (
  <Card className="insight-card">
    <div className="card-img-bg" style={{ backgroundImage: `url("${url}")` }}>
      <Pill content="category" />
    </div>
    <Card.Body>
      <Card.Title as="a" href="/">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </Card.Title>
      <CallToAction
        linkUrl="/"
        linkName="call to action"
        arrowClassName="arrow-svg"
        source="arrow.svg"
      />
    </Card.Body>
  </Card>
);

export default CtaCardCarousel;
