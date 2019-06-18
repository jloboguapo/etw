import React, { Component } from 'react';
import CallToAction from './CallToAction';

const CoreValues = () => {
  return (
    <div className="etw-core-values-container">
      <div className="etw-core-values-left-container">
        <h1>Only the intentional become exceptional</h1>
        <p>
          ETW is the Intentional Leadership Platform that high-performance
          organizations trust to strengthen culture and accelerate growth
        </p>
        <button className="etw-webinar-button">JOIN our next WEBINAR</button>
      </div>
      <div className="etw-core-values-right-container">
        <div className="etw-core-values-containers">
          <div className="etw-image">
            <img
              className="etw-strengthen-culture-icon"
              src="./resources/etw-strengthen-culture.svg"
            />
          </div>
          <div className="content-container">
            <h4>Strengthen culture</h4>
            <p>
              Develop a value-creation mindset and skill set within all your
              employees.
            </p>
            <CallToAction linkName="put people first" />
          </div>
        </div>
        <div className="etw-core-values-containers">
          <div className="etw-image">
            <img
              className="etw-accelerate-growth-icon"
              src="./resources/etw-accelerate-growth.svg"
            />
          </div>
          <div className="content-container">
            <h4>Accelerate growth</h4>
            <p>
              Clarify and accomplish what's most important across your
              organization.
            </p>
            <CallToAction linkName="Keep performance-focused" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
