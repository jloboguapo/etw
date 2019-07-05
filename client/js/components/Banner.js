import React from 'react';
import CallToAction from './CallToAction';

const Banner = ({ content }) => (
  <button type="banner">
    <div>{content}</div>
    <CallToAction
      linkUrl="/"
      linkName="rsvp now"
      arrowClassName="arrow-white"
      source="/arrow-white.svg"
    />
  </button>
);

export default Banner;
