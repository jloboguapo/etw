import React, { useState } from 'react';
import Subscribe from './Subscribe';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SubscribeSection = ( { heading } ) => {

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
