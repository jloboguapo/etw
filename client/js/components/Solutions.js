import React from 'react';
import CallToActionNoLink from './CallToActionNoLink';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Solutions = () => {
  return (<div className="bg-white py-8 py-lg-11">
		<Container className="etw-solutions-main-container">
			<Row className="justify-content-md-center text-lg-center">
				<Col lg={8}>
					<h2>Solutions built for high performance</h2>
					<p className="lead mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
				</Col>
			</Row>

			<Row className="mb-8 mb-lg-11">
				<Col xs={6} lg={3}>
					<a href="#" className="solution-card people-card">
						<img src="/people-card-icon.svg"/>
						<h3>People</h3>
						<p>Whether facing employee disengagement, weak performers, or decreasing loyalty, investing in people always precedes performance.</p>
						<CallToActionNoLink content="View our solution" arrowClassName="arrow-svg" source="arrow.svg"/>
					</a>
				</Col>
				<Col xs={6} lg={3}>
					<a href="#" className="solution-card priorities-card">
						<img src="/priorities-card-icon.svg"/>
						<h3>Priorities</h3>
						<p>Too many goals, unhelpful KPIs, and a lack of team-wide alignment fosters unnecessary confusion, internal competition, and petty politics. Focus.</p>
						<CallToActionNoLink content="View our solution" arrowClassName="arrow-svg" source="arrow.svg"/>
					</a>
				</Col>
				<Col xs={6} lg={3}>
					<a href="#" className="solution-card quote-fuse-card">
						<img src="/practices-card-icon.svg"/>
						<h3>Practices</h3>
						<p>While ineffective processes can be to blame for some lost productivity, it's cultural habits (or a lack thereof) that are the real culprit. Start improving.</p>
						<CallToActionNoLink content="View our solution" arrowClassName="arrow-svg" source="arrow.svg"/>
					</a>
				</Col>
				<Col xs={6} lg={3}>
					<a href="#" className="solution-card quote-vector-card">
						<img src="/performance-card-icon.svg"/>
						<h3>Performance</h3>
						<p>Performance is just an outcome of leadership becoming laser focused on honing their people, priorities, and practices. Unstick growth by getting intentional.</p>
						<CallToActionNoLink content="View our solution" arrowClassName="arrow-svg" source="arrow.svg"/>
					</a>
				</Col>
			</Row>

			<Card className="testimonial-card">
				<Card.Body>
					<Row>
						<Col lg="5" className="testimonial-cta mb-4 mb-lg-0">
							<Button href="#" variant="primary" className="mb-3">Join our next webinar</Button>
							<p>Every Tuesday, Thursday, and Friday, designed for C-level leaders like you.</p>
						</Col>
						<Col className="testimonial-quote">
							<blockquote>
								<p>ETW has made us far more productive because now we focus on the key things that drive results for our company.</p>
								<footer className="blockquote-footer">Joe Grygiel, Air EVAC Lifeteam</footer>
							</blockquote>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</Container>
	</div> );
};

export default Solutions;
