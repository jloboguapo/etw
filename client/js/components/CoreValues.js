import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CoreValuesCard from './CoreValuesCard';

const CoreValues = () => {
  return (
    <Container className="hero py-8 py-lg-11">
      <Row>
        <Col lg={7} className="pr-lg-10">
          <h1>Only the intentional become exceptional</h1>
          <p className="lead">
            ETW is the Intentional Leadership Platform that high-performance
            organizations trust to strengthen culture and accelerate growth.
          </p>
          <Button variant="primary" className="button-link" href="/">
            Join our next webinar
          </Button>
        </Col>

        <Col>
          <CoreValuesCard
            href="/performancesolutions"
            src="/etw-strengthen-culture.svg"
            title="Strengthen culture"
            subtitle="Develop a value-creation mindset and skill set within all your employees."
            ctaContent="Put people first"
          />
          <CoreValuesCard
            href="/leadershipresources"
            src="/etw-accelerate-growth.svg"
            title="Accelerate growth"
            subtitle="Clarify and accomplish what's most important across your
			organization."
            ctaContent="Keep performance-focused"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CoreValues;
