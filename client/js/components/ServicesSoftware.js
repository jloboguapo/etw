import React, { Component } from 'react';
import Button from './Button';

const ServicesSoftware = () => {
  return (
    <div className="etw-ss-ultimate-container">
      <div className="etw-ss-main-container">
        <div className="etw-ss-text-container">
          <h2>People-powered brains backed by platform-powered brawn</h2>
          <p>
            Technology alone cannot solve for the complex challenges that
            C-leaders like you face daily. That's why each of ETW's
            culture-strengthening solutions are composed of both services and
            software to deliver the outcomes you crave.
          </p>
          <br />
        </div>
        <div className="etw-ss-card-container">
          <div className="services-card">
            <img
              className="strategic-services-card-icon"
              src="/strategic-services.svg"
            />
            <h4>Strategic services</h4>
            <p>
              Workshops, coaching, implementation, and consulting are the
              people-powered services you need to strengthen culture.
            </p>
          </div>
          <div className="software-card">
            <img
              className="enterprise-software-card-icon"
              src="/enterprise-software.svg"
            />
            <h4>Enterprise software</h4>
            <p>
              Assess and monitor your workforce's competencies with Drive, ETW's{' '}
              <span>leadership development software</span>.
            </p>
          </div>
        </div>
        <div className="ss-testimonial-container">
          <div className="ss-testimonial-container-left">
            <Button content="Join our next webinar" />
            <p>
              Every Tuesday, Thursday, and Friday, designed for C-level leaders
              like you.
            </p>
          </div>
          <div className="ss-testimonial-container-right">
            <img className="quote" src="/quote.svg" />
            <p>
              ETW has made us far more productive because now we focus on the
              key things that drive results for our company.
            </p>
            <h5>Joe Grygiel, Air EVAC Lifeteam</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSoftware;
