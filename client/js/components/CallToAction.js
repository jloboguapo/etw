import React from 'react';

const CallToAction = ({ linkName }) => (
  <a className="arrow-link" href="/">
    <p className="call-to-action">{linkName}</p>
    <img className="arrow-svg" src="/arrow.svg" />
  </a>
);

export default CallToAction;
