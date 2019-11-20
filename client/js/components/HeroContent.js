import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import _isEmpty from 'lodash.isempty';
import HeroContentCard from './HeroContentCard';
import ButtonUp from './Button';
import { getEntriesById } from '../utils/contentfulHelpers';

const HeroContent = props => {
  const { id } = props;
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [button, setButton] = useState('');
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    const items = await getEntriesById(id);

    !_isEmpty(items.title) ? setTitle(items.title) : null;
    !_isEmpty(items.subtitle) ? setSubtitle(items.subtitle) : null;
    !_isEmpty(items.button) ? setButton(items.button.fields) : null;
    !_isEmpty(items.cards) ? setCards(items.cards) : null;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container className="hero py-8 py-lg-11">
      <Row>
        <Col lg={7} className="pr-lg-10">
          {title && <h1>{title}</h1>}
          {subtitle && <p className="lead">{subtitle}</p>}
          {button && (
            <ButtonUp
              variant="primary"
              className="button-link"
              href={button.href}
              content={button.text}
            />
          )}
        </Col>
        <Col>
          {!_isEmpty(cards) &&
            cards.map(card => (
              <HeroContentCard
                key={card.sys.id}
                href={card.fields.href}
                src={card.fields.icon.fields.file.url}
                title={card.fields.title}
                subtitle={card.fields.subtitle}
                ctaContent={card.fields.cta}
              />
            ))}
        </Col>
      </Row>
    </Container>
  );
};

HeroContent.propTypes = {
  id: PropTypes.string.isRequired
};

export default HeroContent;
