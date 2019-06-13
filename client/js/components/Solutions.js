import React, { Component } from 'react';

const Solutions = () => {
  return (
    <div className="etw-solutions-main-container">
      <div className="etw-solutions-text-container">
        <h2>Solutions built for high-performance</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        </p>
        <br />
      </div>
      <div className="etw-solutions-card-container">
        <div className="people-card">
          <img
            className="people-card-icon"
            src="./resources/people-card-icon.svg"
          />
          <h4>People</h4>
          <p>
            Whether facing employee disengagement, weak performers, or
            decreasing loyalty, investing in people always precedes performance.
          </p>
        </div>
        <div className="priorities-card">
          <img
            className="priorities-card-icon"
            src="./resources/priorities-card-icon.svg"
          />
          <h4>Priorities</h4>
          <p>
            Too many goals, unhelpful KPIs, and a lack of team-wide alignment
            fosters unnecessary confusion, internal competition, and petty
            politics. Focus.
          </p>
          <a href="/">
            <img
              className="view-our-solution"
              src="./resources/view-our-solution.svg"
            />
          </a>
        </div>
        <div className="practices-card">
          <img
            className="practices-card-icon"
            src="./resources/practices-card-icon.svg"
          />
          <h4>Practices</h4>
          <p>
            While ineffective processes can be to blame for some lost
            productivity, it's cultural habits (or a lack thereof) that are the
            real culprit. Start improving.
          </p>
        </div>
        <div className="performance-card">
          <img
            className="performance-card-icon"
            src="./resources/performance-card-icon.svg"
          />
          <h4>Performance</h4>
          <p>
            Performance is just an outcome of leadership becoming laser focused
            on honing their people, priorities, and practices. Unstick growth by
            getting intentional.
          </p>
        </div>
      </div>
      <div className="testimonial-container">
        <div className="testimonial-container-left">
          <button className="etw-webinar-button">Join our next webinar</button>
          <p>
            Every Tuesday, Thursday, and Friday, designed for C-level leaders
            like you.
          </p>
        </div>
        <div className="testimonial-container-right">
          <img className="quote" src="./resources/quote.svg" />
          <p>
            ETW has made us far more productive because now we focus on the key
            things that drive results for our company.
          </p>
          <h5>Joe Grygiel, Air EVAC Lifeteam</h5>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
