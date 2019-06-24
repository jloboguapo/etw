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

        <div className="execution-container">
          <div className="playbook-container">
            <h1>
              We help you develop an execution playbook to combat disengagement
              and unlock high-performance
            </h1>
            <p>
              When your people are focused on the right priorities and
              practicing the behaviors essential to generating results,
              performance follows. These are the building blocks of every
              intentional leader and culture.
            </p>
            <CallToAction
              linkUrl="/"
              linkName="download an execution playbook sample"
              arrowClassName="arrow-svg"
              source="arrow.svg"
            />
          </div>
          <div className="inputs-outputs-container">
            <div className="people-performance-containers-wrap">
              <h5>people-first inputs</h5>
              <div className="people-performance-containers">
                <div className="etw-image">
                  <img
                    className="improving-people-icon"
                    src="/improving-people-icon.svg"
                  />
                </div>
                <div className="content-container">
                  <h4>Improving people</h4>
                  <p>
                    When your people are focused on the right priorities and
                    practicing the behaviors essential to generating results,
                    performance follows. These are the building blocks of every
                    intentional leader and culture.
                  </p>
                </div>
              </div>
              <div className="people-performance-containers">
                <div className="etw-image">
                  <img
                    className="aligned-priorities-icon"
                    src="/aligned-priorities-icon.svg"
                  />
                </div>
                <div className="content-container">
                  <h4>Aligned priorities</h4>
                  <p>
                    As your people are being developed, we also help your
                    leadership define a most important number (MIN) which
                    everyone can then focus on and advance.
                  </p>
                </div>
              </div>
              <div className="people-performance-containers">
                <div className="etw-image">
                  <img
                    className="healthy-practices-icon"
                    src="/healthy-practices-icon.svg"
                  />
                </div>
                <div className="content-container">
                  <h4>Healthy practices</h4>
                  <p>
                    From goal-setting to communication, effective planning to
                    creative resource allocation, your team's behaviors and
                    processes are what lead to organizational change.
                  </p>
                </div>
              </div>{' '}
            </div>
            <div className="people-performance-containers-wrap">
              <h5>performance-focused outputs</h5>
              <div className="people-performance-containers">
                <div className="etw-image">
                  <img
                    className="winning-performance-icon"
                    src="/winning-performance-icon.svg"
                  />
                </div>
                <div className="content-container">
                  <h4>Winning performance</h4>
                  <p>
                    Whether it's EBITDA or another number indicative of your
                    performance, accelerating your organization's growth is an
                    output of intense focus on your key inputs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombatDisengagment;
