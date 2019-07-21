import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TestimonialCardHorizontal from './TestimonialCardHorizontal';

const ServicesSoftware = () => {
  return (
    <Container className="services-software-container py-8 py-lg-11">
      <Row className="justify-content-lg-center text-lg-center mb-10">
        <Col lg={8}>
          <h2>People-powered brains backed by platform-powered brawn</h2>
          <p className="lead">
            Technology alone cannot solve for the complex challenges that
            C-leaders like you face daily. That's why each of ETW's
            culture-strengthening solutions are composed of both services and
            software to deliver the outcomes you crave.
          </p>
        </Col>
      </Row>

      <Row className="text-lg-center mb-8 mb-lg-10">
        <Col lg={{ span: 4, offset: 2 }} className="mb-5 mb-lg-0">
          <img src="/strategic-services.svg" className="mb-5" />
          <h4>Strategic services</h4>
          <p>
            Workshops, coaching, implementation, and consulting are the
            people-powered services you need to strengthen culture.
          </p>
        </Col>
        <Col lg={4}>
          <img src="/enterprise-software.svg" className="mb-5" />
          <h4>Enterprise software</h4>
          <p>
            Assess and monitor your workforce's competencies with Drive, ETW's{' '}
            <a href="#" className="text-info">
              leadership development software
            </a>
            .
          </p>
        </Col>
      </Row>

      <TestimonialCardHorizontal />
    </Container>
  );
};

export default ServicesSoftware;
