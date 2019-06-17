import React from 'react';
import PropTypes from 'prop-types';

const CallToAction = ({ linkName }) => (
    <a className="arrow-link" href="/">
      <p className="call-to-action">{linkName}</p>
      <img className="arrow-svg" src="./resources/arrow.svg" />
    </a>
  );

CallToAction.propTypes = {
  props: PropTypes.string.isRequired
};

export default CallToAction;
