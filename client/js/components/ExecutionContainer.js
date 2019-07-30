import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import CallToAction from './CallToAction';
import { getEntriesById } from '../utils/contentfulHelpers';

const ExecutionContainer = props => {
  const { id } = props;
  const [cardsMenu, setCardsMenu] = useState([]);
  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  const fetchData = async () => {
    const response = await getEntriesById(id);
    const { title, subtitle, button: link, cardsMenu } = response;

    setCardsMenu(cardsMenu);
    setTitle(title);
    setSubtitle(subtitle);
    setLink(link.fields);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toMenuGroup = group => {
    return (
      <span key={group.fields.title}>
        <h6 className="mb-5">{group.fields.title}</h6>
        {group.fields.submenuItems.map(toCards)}
      </span>
    );
  };

  const toCards = card => {
    return (
      <div key={card.fields.title} className="list-card-group">
        <img src={card.fields.icon.fields.file.url} />
        <div>
          <h4>{card.fields.title}</h4>
          <p>{card.fields.subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white py-8 py-lg-11">
      <Container className="stats-section-container">
        <Row className="execution-container">
          <Col lg={6}>
            <h2>{title}</h2>
            <p className="lead">{subtitle}</p>
            <CallToAction
              linkUrl={link.href}
              linkName={link.text}
              arrowClassName="arrow"
              source="arrow.svg"
            />
          </Col>

          <Col lg={6}>
            <Card className="list-card">
              <Card.Body>{cardsMenu.map(toMenuGroup)}</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ExecutionContainer;
