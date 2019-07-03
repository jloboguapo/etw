import React, { useState } from 'react';
//import Button from './Button';
import MenuPerformanceSolutions from './MenuPerformanceSolutions';
import MenuLeadershipResources from './MenuLeadershipResources';
import MenuMore from './MenuMore';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';

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
    <header class="header-public">
        <Container>
            <a className="logo" href="/">
                <img src="/etw-logo-dark-on-transparent.svg" />
            </a>

            <div className="header-links">
                <a href="/">Performance Solutions</a>
                <a href="/">Leadership Resources</a>
                <a href="/">More</a>
                <Button variant="primary" className="button-link" href="/">Join a Webinar</Button>
            </div>
        </Container>
    </header>


        // <div
        //   className={`etw-header-links-container ${
        //     showMobileMenu ? 'burger-expanded' : ''
        //   } ${
        //     showmenuPerformanceSolutions
        //       ? 'menu-performance-solutions-open'
        //       : ''
        //   }
        //   ${showmenuLeadershipResources ? 'menu-leadership-resources-open' : ''}
        //   ${showmenuMore ? 'menu-more-open' : ''}`}
        // >
        //   <a
        //     className="header-main-links performance-solutions-link"
        //     onMouseEnter={() => {
        //       setShowmenuPerformanceSolutions(!showmenuPerformanceSolutions);
        //     }}
        //     onMouseLeave={() => {
        //       setShowmenuPerformanceSolutions(!showmenuPerformanceSolutions);
        //     }}
        //     href="/performanceSolutions"
        //   >
        //     <p>Performance Solutions</p>
        //   </a>
        //   <MenuPerformanceSolutions />
        //   <a
        //     className="header-main-links leadership-resources-link"
        //     onMouseEnter={() => {
        //       setShowmenuLeadershipResources(!showmenuLeadershipResources);
        //     }}
        //     onMouseLeave={() => {
        //       setShowmenuLeadershipResources(!showmenuLeadershipResources);
        //     }}
        //     href="/leadershipResources"
        //   >
        //     <p>Leadership Resources</p>
        //   </a>
        //   <MenuLeadershipResources />
        //   <a
        //     className="header-main-links more-link"
        //     onMouseEnter={() => {
        //       setShowmenuMore(!showmenuMore);
        //     }}
        //     onMouseLeave={() => {
        //       setShowmenuMore(!showmenuMore);
        //     }}
        //     href="/"
        //   >
        //     <p>more</p>
        //   </a>
        //   <MenuMore />
        //   <Button className="button-link" href="/">
        //     Join a Webinar
        //   </Button>
        // </div>
        // <img
        //   className={`etw-hammie-burger  ${showMobileMenu ? 'expanded' : ''}`}
        //   onClick={() => {
        //     setShowMobileMenu(!showMobileMenu);
        //   }}
        //   src="/hamburger.svg"
        // />

    // </Container>
    // </div>
  );
};

export default Header;
