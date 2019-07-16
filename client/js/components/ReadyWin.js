import React from 'react';
import CallToAction from './CallToAction';
import ReadyWinForm from './ReadyWinForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ReadyWin = () => {
    return (
        <div className="bg-white py-8 py-lg-10">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <Card className="text-center">
                            <Card.Header className="bg-success">
                                <Card.Title className="text-white">Parter with ETW to strengthen your culture</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <h2>Are you ready to win?</h2>
                                <p className="lead mb-8">Now is your time to develop high-performance leaders, establish a value-creation mindset, improve enterprise-wide habits, and more. Unintentional leaders need not apply.</p>
                                <ReadyWinForm />
                            </Card.Body>
                            <Card.Footer>
                                <CallToAction
                                  linkUrl="/"
                                  linkName="not convinced? read some case studies"
                                  arrowClassName="arrow"
                                  source="arrow.svg"
                                />
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ReadyWin;
