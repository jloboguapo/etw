import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CoreValuesCard from './CoreValuesCard';
import ButtonUp from './Button';
import { useContentful } from '../utils/customHooks';

const CoreValues = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [button, setButton] = useState('');
  const [cards, setCards] = useState([]);

  const client = useContentful();

  const fetchData = async () => {
    const response = await client.getEntries({
      include: 10,
      content_type: 'mainLayout'
    });

    setTitle(response.items[0].fields.title);
    setSubtitle(response.items[0].fields.subtitle);
    setButton(response.items[0].fields.button.fields);
    setCards(response.items[0].fields.cards);
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
              <CoreValuesCard
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

export default CoreValues;
