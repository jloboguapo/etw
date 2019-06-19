import React from 'react';

const LinkNoArrow = ({ linkName }) => (
  <a className="arrow-link" href="/">
    <p className="call-to-action">{linkName}</p>
  </a>
);

export default LinkNoArrow;