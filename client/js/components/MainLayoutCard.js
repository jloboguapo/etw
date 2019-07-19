import React from 'react';
import Card from 'react-bootstrap/Card';
import CallToActionNoLink from './CallToActionNoLink';

const MainLayoutCard = ({ href, src, title, subtitle, ctaContent }) => (
  <Card as="a" href={href}>
    <Card.Img src={src} />
    <Card.Body>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <CallToActionNoLink
        content={ctaContent}
        arrowClassName="arrow-svg"
        source="arrow.svg"
      />
    </Card.Body>
  </Card>
);

export default MainLayoutCard;
