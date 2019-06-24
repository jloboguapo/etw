import React from 'react';

const CallToAction = ({ linkUrl, linkName, arrowClassName, source }) => (
  <a className="arrow-link" href={linkUrl}>
    <p className="call-to-action">{linkName}</p>
    <img className={arrowClassName} src={source} />
  </a>
);

export default CallToAction;
