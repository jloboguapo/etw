import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const IntentionalCulture = () => {
  return (
    <Container className="hero hero-simple py-8 py-lg-11">
        <ul className="hero-meta">
            <li class="text-success">Performance solutions</li>
            <li class="text-success">Strengthen culture</li>
        </ul>
		<h1>Build an <span className="highlight highlight-info">intentional culture</span></h1>
        <Row>
            <Col lg={6}>
        		<p className="lead">
                    Fostering a strong, thriving culture starts with intentional leadership that prioritizes people first. Are you ready to lead?
        		</p>
            </Col>
        </Row>
    </Container>
  );
};

export default IntentionalCulture;
