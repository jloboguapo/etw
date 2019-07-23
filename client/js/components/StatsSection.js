import React, { useEffect, useState } from 'react';
import CallToAction from './CallToAction';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { getEntriesById } from '../utils/contentfulHelpers';

const StatsSection = props => {
  const { id } = props;

  const [text, setText] = useState('');
  const fetchData = async () => {
    const response = await getEntriesById(id);
    console.log(response);
    console.log(id);

    useEffect(() => {
      fetchData();
    }, []);
  };
  return (
    <div className="bg-white py-8 py-lg-11">
      <Container className="stats-section-container">
        <Row className="justify-content-lg-center text-lg-center">
          <Col lg={9}>
            <h2>
              Actively disengaged employees cost the US{' '}
              <span className="text-info">$438 billion</span> in lost
              productivity
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-lg-center text-lg-center mb-8 mb-lg-10">
          <Col lg={6}>
            <p className="lead">
              Though it may not be billions, whatever it’s costing your
              organization, it’s too much.
            </p>
          </Col>
        </Row>

        <Row className="stats-section-charts mb-8 mb-lg-11">
          <Col lg={4} className="mb-6 mb-lg-0">
            <img src="/lack-card-icon.svg" className="mb-7" />
            <div className="h3">
              <strong>86%</strong> of CEOs say they{' '}
              <span className="text-sea">lack the talent</span> to execute their
              business strategies
            </div>
            <p className="cite-p">
              Global Leadership Forecast 2018; DDI, Inc.; The Conference Board
              Inc., Ernst & Young, LLP
            </p>
          </Col>
          <Col lg={4} className="mb-6 mb-lg-0">
            <img src="/not-engaged-card-icon.svg" className="mb-7" />
            <div className="h3">
              <strong>85%</strong> of worldwide{' '}
              <span className="text-fire">employees are not engaged</span> or
              actively disengaged at work
            </div>
            <p className="cite-p">
              Gallup 2017 State of the American Workplace
            </p>
          </Col>
          <Col lg={4} className="mb-6 mb-lg-0">
            <img src="/no-direction-card-icon.svg" className="mb-7" />
            <div className="h3">
              <strong>78%</strong> of employees believe their leadership team
              has <span className="text-sun">little to no direction</span>
            </div>
            <p className="cite-p">
              Gallup 2017 State of the American Workplace
            </p>
          </Col>
        </Row>

        <Row className="execution-container">
          <Col lg={6}>
            <h2>
              We help you develop an execution playbook to combat disengagement
              and unlock high performance
            </h2>
            <p className="lead">
              When your people are focused on the right priorities and
              practicing the behaviors essential to generating results,
              performance follows. These are the building blocks of every
              intentional leader and culture.
            </p>
            <CallToAction
              linkUrl="/"
              linkName="Download an execution playbook sample"
              arrowClassName="arrow"
              source="arrow.svg"
            />
          </Col>

          <Col lg={6}>
            <Card className="list-card">
              <Card.Body>
                <h6 className="mb-5">People-first inputs</h6>
                <div className="list-card-group">
                  <img src="/improving-people-icon.svg" />

                  <div>
                    <h4>Improving people</h4>
                    <p>
                      When your people are focused on the right priorities and
                      practicing the behaviors essential to generating results,
                      performance follows. These are the building blocks of
                      every intentional leader and culture.
                    </p>
                  </div>
                </div>

                <div className="list-card-group">
                  <img src="/aligned-priorities-icon.svg" />

                  <div>
                    <h4>Aligned priorities</h4>
                    <p>
                      As your people are being developed, we also help your
                      leadership define a most important number (MIN) which
                      everyone can then focus on and advance.
                    </p>
                  </div>
                </div>

                <div className="list-card-group">
                  <img src="/healthy-practices-icon.svg" />

                  <div>
                    <h4>Healthy practices</h4>
                    <p>
                      From goal-setting to communication, effective planning to
                      creative resource allocation, your team's behaviors and
                      processes are what lead to organizational change.
                    </p>
                  </div>
                </div>

                <h6 className="mb-5">Performance-focused outputs</h6>

                <div className="list-card-group">
                  <img src="/winning-performance-icon.svg" />

                  <div>
                    <h4>Winning performance</h4>
                    <p>
                      Whether it's EBITDA or another number indicative of your
                      performance, accelerating your organization's growth is an
                      output of intense focus on your key inputs.
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StatsSection;
