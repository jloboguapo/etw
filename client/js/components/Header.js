import React from 'react';

const Header = () => {
  return (
    <div className="etw-header-container">
      <div className="etw-logo-header-container">
        <img
          className="etw-logo-dark-on-transparent"
          src="./resources/etw-logo-dark-on-transparent.svg"
        />
      </div>
      <div className="etw-header-links-container">
        <a href='/'><p>Performance Solutions</p></a>
        <a href='/'><p>Leadership Resources</p></a>
        <a href='/'><p>more</p></a>
        <button type="button" className="etw-webinar-button">
          JOIN A WEBINAR
        </button>
      </div>
    </div>
  );
};

export default Header;
