import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card, { Body, Footer, Header, Title } from 'react-bootstrap/Card';
import CallToAction from './CallToAction';
import ReadyWinForm from './ReadyWinForm';

const ReadyWin = () => {
  return (
    <div className="bg-white py-8 py-lg-10">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="text-center">
              <Header className="bg-success">
                <Title className="text-white">
                  Partner with ETW to strengthen your culture
                </Title>
              </Header>
              <Body>
                <h2>Are you ready to win?</h2>
                <p className="lead mb-8">
                  Now is your time to develop high-performance leaders,
                  establish a value-creation mindset, improve enterprise-wide
                  habits, and more. Unintentional leaders need not apply.
                </p>
                <ReadyWinForm />
              </Body>
              <Footer>
                <CallToAction
                  linkUrl="/"
                  linkName="not convinced? read some case studies"
                  arrowClassName="arrow"
                  source="arrow.svg"
                />
              </Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ReadyWin;
