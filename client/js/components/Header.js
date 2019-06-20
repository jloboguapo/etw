import React from 'react';
import Button from './Button';

const Header = () => {
  return (
    <div className="etw-secondary-container">
      <div className="etw-header-container">
        <div className="etw-logo-header-container">
          <img
            className="etw-logo-dark-on-transparent"
            src="/etw-logo-dark-on-transparent.svg"
          />
        </div>
        <div className="etw-header-links-container">
          <a href="/performanceSolutions">
            <p>Performance Solutions</p>
          </a>
          <a href="/">
            <p>Leadership Resources</p>
          </a>
          <a href="/">
            <p>more</p>
          </a>
          <Button content="JOIN A WEBINAR" />
        </div>
      </div>
    </div>
  );
};

export default Header;
