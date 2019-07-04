import React from 'react';
import CallToAction from './CallToAction';

const Banner = ({ content }) => (
  <button type="banner" className="etw-leadership-banner">
    {content}
    <CallToAction
      linkUrl="/"
      linkName="rsvp now"
      arrowClassName="arrow-white"
      source="/arrow-white.svg"
    />
  </button>
);

export default Banner;
