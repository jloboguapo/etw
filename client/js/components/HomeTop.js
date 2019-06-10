import React, { Component } from 'react';

const HomeTop = () => {
  return (
    <div className="etw-home-top-container">
      <div className="etw-home-top-left-container">
        <h1>Only the intentional become exceptional</h1>
        <p>
          ETW is the Intentional Leadership Platform that high-performance
          organizations trust to strengthen culture and accelerate growth
        </p>
        <button className="etw-webinar-button">JOIN our next WEBINAR</button>
      </div>
      <div className="etw-home-top-right-container">
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
            <a href="/">
              <img
                className="put-people-first"
                src="./resources/put-people-first.svg"
              />
            </a>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
