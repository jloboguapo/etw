import React, { Component } from 'react';
import CallToAction from './CallToAction';
import Button from './Button';

const CoreValues = () => {
  return (
    <div className="etw-core-values-ultimate-container">
      <div className="etw-core-values-container">
        <div className="etw-core-values-left-container">
          <h1>Only the intentional become exceptional</h1>
          <p>
            ETW is the Intentional Leadership Platform that high-performance
            organizations trust to strengthen culture and accelerate growth
          </p>
          <a className="button-link" href="/">
            <Button content="JOIN our next WEBINAR" />
          </a>
        </div>
        <div className="etw-core-values-right-container">
          <div className="etw-core-values-containers">
            <div className="etw-image">
              <img
                className="etw-strengthen-culture-icon"
                src="/etw-strengthen-culture.svg"
              />
            </div>
            <div className="content-container">
              <h4>Strengthen culture</h4>
              <p>
                Develop a value-creation mindset and skill set within all your
                employees.
              </p>
              <CallToAction
                linkUrl="/performanceSolutions"
                linkName="put people first"
              />
            </div>
          </div>
          <div className="etw-core-values-containers">
            <div className="etw-image">
              <img
                className="etw-accelerate-growth-icon"
                src="/etw-accelerate-growth.svg"
              />
            </div>
            <div className="content-container">
              <h4>Accelerate growth</h4>
              <p>
                Clarify and accomplish what's most important across your
                organization.
              </p>
              <CallToAction
                linkUrl="/leadershipResources"
                linkName="Keep performance-focused"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
