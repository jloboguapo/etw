import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card, { Body, Footer, Header, Title } from 'react-bootstrap/Card';
import CallToAction from './CallToAction';
import ReadyWinForm from './ReadyWinForm';
import { getEntriesById } from '../utils/contentfulHelpers';

const ReadyWin = props => {
  const { id } = props;
  const [banner, setBanner] = useState('');
  const [readyToWin, setReadyToWin] = useState('');
  const [ctaLink, setCtaLink] = useState('');

  const fetchData = async () => {
    const response = await getEntriesById(id);
    const items = response.items;

    items.map(section => {
      if (section.fields.name === 'banner') {
        setBanner(section.fields);
      } else if (section.fields.name === 'readyToWin') {
        setReadyToWin(section.fields);
      } else if (section.fields.name === 'ctaLink') {
        setCtaLink(section.fields);
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-white py-8 py-lg-10">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="text-center">
              <Header className="bg-success">
                <Title className="text-white">{banner.text}</Title>
              </Header>
              <Body>
                <h2>{readyToWin.text}</h2>
                <p className="lead mb-8">{readyToWin.subtext}</p>
                <ReadyWinForm />
              </Body>
              <Footer>
                <CallToAction
                  linkUrl={ctaLink.href}
                  linkName={ctaLink.text}
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
