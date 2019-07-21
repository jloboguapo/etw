import React from 'react';
import Subscribe from './Subscribe';
import { Col, Container, Row } from 'react-bootstrap';

const SubscribeSection = ({ heading }) => {
  return (
    <div className="subscribe-section bg-secondary py-8 py-lg-11">
      <Container className="insights-wrapper">
        <Row className="justify-content-md-center text-center">
          <Col>
            <h2 className="mb-7">{heading}</h2>
            <Subscribe />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SubscribeSection;
