import React, { useState } from 'react';
import Button from './Button';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="etw-header-ultimate-container">
      <div className="etw-header-container">
        <div className="etw-logo-header-container">
          <a className="logo-link" href="/">
            <img
              className="etw-logo-dark-on-transparent"
              src="/etw-logo-dark-on-transparent.svg"
            />
          </a>
        </div>
        <div
          className={`etw-header-links-container ${
            showMobileMenu ? 'burger-expanded' : ''
          }`}
        >
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
        <img
          className={`etw-hammie-burger  ${showMobileMenu ? 'expanded' : ''}`}
          onClick={() => {
            setShowMobileMenu(!showMobileMenu);
          }}
          src="/hamburger.svg"
        />
      </div>
    </div>
  );
};

export default Header;
