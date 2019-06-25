import React from 'react';
import Banner from './Banner';
import Button from './Button';
import CallToAction from './CallToAction';

const HeaderWhite = () => {
  return (
    <div className="etw-header-white-ultimate-container">
      <Banner
        content={
          <>
            Join ETW at our next intentional leadership network event, September
            5, 2019.
            <CallToAction
              linkUrl="/"
              linkName="rsvp now"
              arrowClassName="arrow-white-svg"
              source="arrow-white.svg"
            />
          </>
        }
      />
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

export default HeaderWhite;
