import React from 'react';
import CallToAction from './CallToAction';
import Button from './Button';

const Solutions = () => {
  return (
    <div className="etw-solutions-ultimate-container">
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
          <div className="cards people-card">
            <img className="card-icons people-card-icon" src="/people-card-icon.svg" />
            <h4>People</h4>
            <p>
              Whether facing employee disengagement, weak performers, or
              decreasing loyalty, investing in people always precedes
              performance.
            </p>
            <CallToAction
              linkUrl="/"
              linkName="view our solution"
              arrowClassName="arrow"
              source="arrow.svg"
            />
          </div>
          <div className="cards priorities-card">
            <img
              className="card-icons priorities-card-icon"
              src="/priorities-card-icon.svg"
            />
            <h4>Priorities</h4>
            <p>
              Too many goals, unhelpful KPIs, and a lack of team-wide alignment
              fosters unnecessary confusion, internal competition, and petty
              politics. Focus.
            </p>
            <CallToAction
              linkUrl="/"
              linkName="view our solution"
              arrowClassName="arrow"
              source="arrow.svg"
            />
          </div>
          <div className="cards practices-card">
            <img
              className="card-icons practices-card-icon"
              src="/practices-card-icon.svg"
            />
            <h4>Practices</h4>
            <p>
              While ineffective processes can be to blame for some lost
              productivity, it's cultural habits (or a lack thereof) that are
              the real culprit. Start improving.
            </p>
            <CallToAction
              linkUrl="/"
              linkName="view our solution"
              arrowClassName="arrow"
              source="arrow.svg"
            />
          </div>
          <div className="cards performance-card">
            <img
              className="card-icons performance-card-icon"
              src="/performance-card-icon.svg"
            />
            <h4>Performance</h4>
            <p>
              Performance is just an outcome of leadership becoming laser
              focused on honing their people, priorities, and practices. Unstick
              growth by getting intentional.
            </p>
            <CallToAction
              linkUrl="/"
              linkName="view our solution"
              arrowClassName="arrow"
              source="arrow.svg"
            />
          </div>
        </div>
        <div className="testimonial-container">
          <div className="testimonial-container-left">
            <a className="button-link" href="/">
              <Button content="Join our next webinar" />
            </a>
            <p>
              Every Tuesday, Thursday, and Friday, designed for C-level leaders
              like you.
            </p>
          </div>
          <div className="testimonial-container-right">
            <img className="card-icons quote" src="/quote.svg" />
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

export default Solutions;
