import React from 'react';
import Card from 'react-bootstrap/Card';
import CallToActionNoLink from './CallToActionNoLink';
import Pill from './Pill';

const CtaCardLarge = ({ url }) => (
  <Card className="insight-card card-lg" as="a" href="/">
    <div className="card-img-bg" style={{ backgroundImage: `url("${url}")` }}>
      <Pill content="category" />
    </div>
    <Card.Body>
      <Card.Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium
        mauris nec aliquam porttitor.
      </Card.Title>
      <CallToActionNoLink
        content="call to action"
        arrowClassName="arrow-svg"
        source="arrow.svg"
      />
    </Card.Body>
  </Card>
);

export default CtaCardLarge;
