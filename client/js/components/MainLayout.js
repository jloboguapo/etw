import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainLayoutCard from './MainLayoutCard';
import ButtonUp from './Button';
import { getEntriesById } from '../utils/contentfulHelpers';

const MainLayout = props => {
  const { id } = props;
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [button, setButton] = useState('');
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    const items = await getEntriesById(id);

    setTitle(items.title);
    setSubtitle(items.subtitle);
    setButton(items.button.fields);
    setCards(items.cards);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container className="hero py-8 py-lg-11">
      <Row>
        <Col lg={7} className="pr-lg-10">
          <h1>{title}</h1>
          <p className="lead">{subtitle}</p>
          <ButtonUp
            variant="primary"
            className="button-link"
            href={button.href}
            content={button.text}
          />
        </Col>

        <Col>
          {cards.map(card => {
            return (
              <MainLayoutCard
                key={card.sys.id}
                href={card.fields.href}
                src={card.fields.icon.fields.file.url}
                title={card.fields.title}
                subtitle={card.fields.subtitle}
                ctaContent={card.fields.cta}
              />
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default MainLayout;
