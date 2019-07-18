import React from 'react';
import Card from 'react-bootstrap/Card';
import CallToActionNoLink from './CallToActionNoLink';
import Pill from './Pill';

const CtaCard = ({ url }) => (
  <Card className="insight-card" as="a" href="/">
    <div className="card-img-bg" style={{ backgroundImage: `url("${url}")` }}>
      <Pill content="category" />
    </div>
    <Card.Body>
      <Card.Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </Card.Title>
      <CallToActionNoLink
        content="call to action"
        arrowClassName="arrow-svg"
        source="arrow.svg"
      />
    </Card.Body>
  </Card>
);

export default CtaCard;
