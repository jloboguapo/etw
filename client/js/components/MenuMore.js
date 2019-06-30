import React from 'react';
import CallToAction from './CallToAction';

const MenuMore = () => {
  return (
    <div className="menu-more-main-container">
      <div className="menu-header-container">
        <img className="performance-icon" src="/winning-performance-icon.svg" />
        <div className="menu-text-wrap">
          <h5>more</h5>
          <p className="menu-tagline">explore our intentional culture</p>
        </div>
      </div>
      <div className="menu-content-container">
        <h5>our company</h5>
        <CallToAction
          linkUrl="/performanceSolutions"
          linkName="about ETW"
          arrowClassName="arrow"
          source="arrow.svg"
        />
        <CallToAction
          linkUrl="/leadershipResources"
          linkName="our story"
          arrowClassName="arrow"
          source="arrow.svg"
        />
        <CallToAction
          linkUrl="/performanceSolutions"
          linkName="how we give back"
          arrowClassName="arrow"
          source="arrow.svg"
        />
        <CallToAction
          linkUrl="/performanceSolutions"
          linkName="careers"
          arrowClassName="arrow"
          source="arrow.svg"
        />
        <CallToAction
          linkUrl="/performanceSolutions"
          linkName="partners"
          arrowClassName="arrow"
          source="arrow.svg"
        />
        <CallToAction
          linkUrl="/performanceSolutions"
          linkName="contact us"
          arrowClassName="arrow"
          source="arrow.svg"
        />
      </div>
    </div>
  );
};

export default MenuMore;
