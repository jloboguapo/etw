import React from 'react';

  const CallToAction = ({linkUrl, linkName}) => (
  <a className="arrow-link" href={linkUrl}>
    <p className="call-to-action">{linkName}</p>
    <img className="arrow-svg" src="/arrow.svg" />
  </a>
);

export default CallToAction;
