import React from 'react';

const CallToActionNoLink = ({ content, arrowClassName, source }) => (
  <>
    <p className="call-to-action">{content}</p>
    <img className={arrowClassName} src={source} />
  </>
);

export default CallToActionNoLink;
