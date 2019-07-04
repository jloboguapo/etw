import React, { useState } from 'react';
import Button from './Button';
import MenuPerformanceSolutions from './MenuPerformanceSolutions';
import MenuLeadershipResources from './MenuLeadershipResources';
import MenuMore from './MenuMore';
import Banner from './Banner';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [
    showmenuPerformanceSolutions,
    setShowmenuPerformanceSolutions
  ] = useState(false);
  const [
    showmenuLeadershipResources,
    setShowmenuLeadershipResources
  ] = useState(false);
  const [showmenuMore, setShowmenuMore] = useState(false);

  return (
    <div className="etw-header-ultimate-container">
      <Banner content="Join ETW at our next intentional leadership network event, September 5, 2019." />
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
          } ${
            showmenuPerformanceSolutions
              ? 'menu-performance-solutions-open'
              : ''
          }
          ${showmenuLeadershipResources ? 'menu-leadership-resources-open' : ''}
          ${showmenuMore ? 'menu-more-open' : ''}`}
        >
          <a
            className="header-main-links performance-solutions-link"
            onMouseEnter={() => {
              setShowmenuPerformanceSolutions(!showmenuPerformanceSolutions);
            }}
            onMouseLeave={() => {
              setShowmenuPerformanceSolutions(!showmenuPerformanceSolutions);
            }}
            href="/performanceSolutions"
          >
            <p>Performance Solutions</p>
          </a>
          <MenuPerformanceSolutions />
          <a
            className="header-main-links leadership-resources-link"
            onMouseEnter={() => {
              setShowmenuLeadershipResources(!showmenuLeadershipResources);
            }}
            onMouseLeave={() => {
              setShowmenuLeadershipResources(!showmenuLeadershipResources);
            }}
            href="/leadershipResources"
          >
            <p>Leadership Resources</p>
          </a>
          <MenuLeadershipResources />
          <a
            className="header-main-links more-link"
            onMouseEnter={() => {
              setShowmenuMore(!showmenuMore);
            }}
            onMouseLeave={() => {
              setShowmenuMore(!showmenuMore);
            }}
            href="/"
          >
            <p>more</p>
          </a>
          <MenuMore />
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
