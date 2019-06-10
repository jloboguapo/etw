import React from 'react';

const Header = () => {
  return (
    <div className="etw-header-container">
      <img
        className="etw-logo-dark-on-transparent"
        src="./resources/etw-logo-dark-on-transparent.svg"
      />
      <p>Performance Solutions</p>
      <p>Leadership Resources</p>
      <p>more</p>
      <button type="button" className="etw-webinar-button">
        JOIN A WEBINAR
      </button>
    </div>
  );
};

export default Header;
