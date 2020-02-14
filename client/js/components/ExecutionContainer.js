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
  const [paddingClass, setPaddingClass] = useState('');

  const fetchData = async () => {
    const response = await getEntriesById(id);
    const {
      title,
      subtitle,
      button: link,
      cardsMenu,
      paddingChoices
    } = response;

    setCardsMenu(cardsMenu);
    setTitle(title);
    setSubtitle(subtitle);
    setLink(link.fields);
    setPaddingClass(paddingChoices);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toMenuGroup = group => {
    return (
      <span key={group.sys.id}>
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
    <div className={`bg-white ${paddingClass ? paddingClass.join(' ') : ''}`}>
      <Container>
        <Row className="execution-container">
          <Col lg={6}>
            <h2>{title}</h2>
            <p className="lead">{subtitle}</p>
            <div className="mb-8 mb-lg-0">
              <CallToAction
                linkUrl={link.href}
                linkName={link.text}
                arrowClassName="arrow"
                source="arrow.png"
                onClick={() => {
                  location.hash === '#/experience'
                    ? scrollTo(
                        0,
                        document.getElementById('form').offsetTop - 40
                      )
                    : null;
                }}
              />
            </div>
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
