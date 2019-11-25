import React from 'react';
import Card, { Img, Body } from 'react-bootstrap/Card';
import CallToActionNoLink from './CallToActionNoLink';

const HeroContentCard = ({ href, src, title, subtitle, ctaContent }) => (
  <Card as="a" href={href}>
    {src && <Img src={src} />}
    <Body>
      {title && <h3>{title}</h3>}
      {subtitle && <p>{subtitle}</p>}
      {ctaContent && (
        <CallToActionNoLink
          content={ctaContent}
          arrowClassName="arrow-svg"
          source="arrow.png"
        />
      )}
    </Body>
  </Card>
);

export default HeroContentCard;
