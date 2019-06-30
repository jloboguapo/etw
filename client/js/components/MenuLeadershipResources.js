import React from 'react';
import CallToAction from './CallToAction';

const MenuLeadershipResources = () => {
  return (
    <div className="menu-leadership-resources-main-container">
      <div className="menu-header-container">
        <img className="performance-icon" src="/winning-performance-icon.svg" />
        <div className="menu-text-wrap">
          <h5>Leadership resources</h5>
          <p className="menu-tagline">Get equipped for intentional building</p>
        </div>
      </div>
      <div className="menu-content-container">
        <h5>popular</h5>
        <CallToAction
          linkUrl="/performanceSolutions"
          linkName="Intentional leadership score"
          arrowClassName="arrow"
          source="arrow.svg"
        />
        <CallToAction
          linkUrl="/leadershipResources"
          linkName="what is a most important number"
          arrowClassName="arrow"
          source="arrow.svg"
        />
        <CallToAction
          linkUrl="/performanceSolutions"
          linkName="best habits to strengthen culture"
          arrowClassName="arrow"
          source="arrow.svg"
        />
        <CallToAction
          linkUrl="/performanceSolutions"
          linkName="2019 state of intentional leadership"
          arrowClassName="arrow"
          source="arrow.svg"
        />
        <CallToAction
          linkUrl="/performanceSolutions"
          linkName="about the ETW approach"
          arrowClassName="arrow"
          source="arrow.svg"
        />

        <h5>by type</h5>
        <CallToAction
          linkUrl="/performanceSolutions"
          linkName="articles"
          arrowClassName="arrow"
          source="arrow.svg"
        />
        <CallToAction
          linkUrl="/performanceSolutions"
          linkName="white papers"
          arrowClassName="arrow"
          source="arrow.svg"
        />
        <CallToAction
          linkUrl="/performanceSolutions"
          linkName="fact sheets"
          arrowClassName="arrow"
          source="arrow.svg"
        />
        <CallToAction
          linkUrl="/performanceSolutions"
          linkName="checklists"
          arrowClassName="arrow"
          source="arrow.svg"
        />
        <CallToAction
          linkUrl="/performanceSolutions"
          linkName="case studies"
          arrowClassName="arrow"
          source="arrow.svg"
        />
      </div>
    </div>
  );
};

export default MenuLeadershipResources;
