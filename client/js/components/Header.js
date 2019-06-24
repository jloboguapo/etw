import React from 'react';
import Button from './Button';

const Header = () => {
  return (
    <div className="etw-header-ultimate-container">
      <div className="etw-header-container">
        <div className="etw-logo-header-container">
          <a href="/">
            <img
              className="etw-logo-dark-on-transparent"
              src="/etw-logo-dark-on-transparent.svg"
            />
          </a>
        </div>
        <div className="etw-header-links-container">
          <a href="/performanceSolutions">
            <p>Performance Solutions</p>
          </a>
          <a href="/leadershipResources">
            <p>Leadership Resources</p>
          </a>
          <a href="/">
            <p>more</p>
          </a>
          <a className="button-link" href="/">
            <Button content="JOIN A WEBINAR" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
