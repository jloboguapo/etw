import React from 'react';

const Footer = () => (
  <div className="etw-footer">
    <div className="etw-footer-items">
      <a target="_blank" href="tel:phoneGoesHere">
        phoneGoesHere
      </a>{' '}
    </div>
    <div className="etw-footer-items">
      <a
        href="mailto:emailGoesHere?Subject=Name%20the%20subject%20here."
        target="_top"
      >
        emailGoesHere
      </a>{' '}
    </div>
  </div>
);

export default Footer;
