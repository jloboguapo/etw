import React, { Component } from 'react';
import CallToAction from './CallToAction';

const CombatDisengagment = () => {
  return (
    <div className="combat-disengagement-ultimate-container">
      <div className="combat-disengagement-main-container">
        <div className="combat-disengagement-text-container">
          <h2>
            Actively disengaged employees cost the US <span>$438 billion</span>{' '}
            in lost productivity
          </h2>
          <p>
            Though it may not be billions, whatever it's costing your
            organization, it's too much
          </p>
          <br />
        </div>
        <div className="combat-disengagement-card-container">
          <div className="lack-card">
            <img className="lack-card-icon" src="/lack-card-icon.svg" />
            <h4>
              <span className="percent-span">86%</span> of CEOs say they{' '}
              <span className="lack-span">lack the talent</span> to execute
              their business strategy
            </h4>
            <p className="cite-p">
              Global Leadership Forecast 2018, DDI, Inc; The Conference Board
              Inc, Ernst & Young, LLP
            </p>
          </div>
          <div className="not-engaged-card">
            <img
              className="not-engaged-card-icon"
              src="/not-engaged-card-icon.svg"
            />
            <h4>
              <span className="percent-span">85%</span> of worldwide{' '}
              <span>employees are not engaged</span> or activeley disengaged at
              work
            </h4>
            <p className="cite-p">
              Gallup 2017 State of the American Workplace
            </p>
          </div>
          <div className="no-direction-card">
            <img
              className="no-direction-card-icon"
              src="/no-direction-card-icon.svg"
            />
            <h4>
              <span className="percent-span">78%</span> of employees believe
              their leadership team has <span>little to no direction</span>
            </h4>
            <p className="cite-p">
              Gallup 2017 State of the American Workplace
            </p>
          </div>
        </div>

        <div className="etw-core-values-container">
          <div className="etw-core-values-left-container">
            <h1>
              We help you develop and execution playbook to combat disengagement
              and unlock high-performance
            </h1>
            <p>
              When your people are focused on the right priorities and
              practicing the behaviors essential to generating results,
              performance follows. These are the building blocks of every
              intentional leader and culture.
            </p>
            <CallToAction linkName="download an execution playbook sample" />
          </div>
          <div className="etw-core-values-right-container">
            <div className="etw-core-values-containers">
              <div className="etw-image">
                <img
                  className="etw-strengthen-culture-icon"
                  src="./etw-strengthen-culture.svg"
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
                  src="/etw-accelerate-growth.svg"
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
      </div>
    </div>
  );
};

export default CombatDisengagment;
