import React from 'react';
import CallToAction from './CallToAction';

const MessageBanner = ({ content }) => (
  <div className="message-banner">
    <div className="message-banner-content">{content}</div>
    <CallToAction
      linkUrl="/"
      linkName="RSVP Now"
      arrowClassName="arrow-white"
      source="arrow-white.png"
    />
  </div>
);

export default MessageBanner;
