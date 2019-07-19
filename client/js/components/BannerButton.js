import React from 'react';
import CallToAction from './CallToAction';

const BannerButton = ({ content }) => (
  <div className="banner-button">
    <div className="banner-button-content">{content}</div>
    <CallToAction
      linkUrl="/"
      linkName="RSVP Now"
      arrowClassName="arrow-white"
      source="/arrow-white.svg"
    />
  </div>
);

export default BannerButton;

