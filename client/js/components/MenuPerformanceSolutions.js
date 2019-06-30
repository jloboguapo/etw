import React from 'react';
import CallToAction from './CallToAction';

const MenuPerformanceSolutions = () => {
  return (
    <div className="menu-performance-solutions-main-container">
      <div className="menu-header-container">
        <img className="performance-icon" src="/winning-performance-icon.svg" />
        <div className="menu-text-wrap">
          <h5>Performance solutions</h5>
          <p className="menu-tagline">Face your challenges head-on</p>
        </div>
      </div>
      <div className="menu-content-container">
        <h5>By outcome</h5>
        <CallToAction
          linkUrl="/performanceSolutions"
          linkName="stengthen culture"
          arrowClassName="arrow"
          source="arrow.svg"
        />
        <CallToAction
          linkUrl="/leadershipResources"
          linkName="accelerate growth"
          arrowClassName="arrow"
          source="arrow.svg"
        />
        <h5>By solution</h5>
        <CallToAction
          linkUrl="/performanceSolutions"
          linkName="Leadership development"
          arrowClassName="arrow"
          source="arrow.svg"
        />
        <CallToAction
          linkUrl="/performanceSolutions"
          linkName="Goal definition and reporting"
          arrowClassName="arrow"
          source="arrow.svg"
        />
        <CallToAction
          linkUrl="/performanceSolutions"
          linkName="behavior and process design"
          arrowClassName="arrow"
          source="arrow.svg"
        />
        <CallToAction
          linkUrl="/performanceSolutions"
          linkName="performance delivery"
          arrowClassName="arrow"
          source="arrow.svg"
        />
        <h5>Dig deeper</h5>
        <CallToAction
          linkUrl="/performanceSolutions"
          linkName="why ETW"
          arrowClassName="arrow"
          source="arrow.svg"
        />
        <CallToAction
          linkUrl="/performanceSolutions"
          linkName="clients"
          arrowClassName="arrow"
          source="arrow.svg"
        />
        <CallToAction
          linkUrl="/performanceSolutions"
          linkName="pricing"
          arrowClassName="arrow"
          source="arrow.svg"
        />
      </div>
    </div>
  );
};

export default MenuPerformanceSolutions;
