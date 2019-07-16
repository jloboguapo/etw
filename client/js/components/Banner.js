import React from 'react';
import CallToAction from './CallToAction';

const Banner = ({ content }) => (
  <div className="banner">
    <div className="banner-content">{content}</div>
    <CallToAction
      linkUrl="/"
      linkName="RSVP Now"
      arrowClassName="arrow-white"
      source="/arrow-white.svg"
    />
  </div>
);

export default Banner;
