import React from 'react';
import CallToActionNoLink from './CallToActionNoLink';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const CoreValues = () => {
  return ( <Container className="hero py-8 py-lg-11">
		<Row>
			<Col lg={7} className="pr-lg-10">
				<h1>Only the intentional become exceptional</h1>
				<p className="lead">
					ETW is the Intentional Leadership Platform that high-performance organizations trust to strengthen culture and accelerate growth.
				</p>
				<Button variant="primary" className="button-link" href="/">Join our next webinar</Button>
			</Col>

			<Col>
				<Card as="a" href="/performancesolutions">
					<Card.Img src="/etw-strengthen-culture.svg"/>
					<Card.Body>
						<h3>Strengthen culture</h3>
						<p>
							Develop a value-creation mindset and skill set within all your employees.
						</p>
						<CallToActionNoLink content="Put people first" arrowClassName="arrow-svg" source="arrow.svg"/>
					</Card.Body>
				</Card>
				<Card as="a" href="leadershipresources">
					<Card.Img src="/etw-accelerate-growth.svg"/>
					<Card.Body>
						<h3>Accelerate growth</h3>
						<p>
							Clarify and accomplish what's most important across your organization.
						</p>
						<CallToActionNoLink content="Keep performance-focused" arrowClassName="arrow-svg" source="arrow.svg"/>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	</Container> );
};

export default CoreValues;
