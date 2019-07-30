import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Container } from 'react-bootstrap';
import { getEntriesById } from '../utils/contentfulHelpers';
import ChartsCards from './ChartsCards';

const ChartsCardsContainer = props => {
  const { id } = props;
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    const response = await getEntriesById(id);
    const cards = response.cards;
    setCards(cards);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-white py-8 py-lg-11">
      <Container className="stats-section-container">
        <Row className="stats-section-charts mb-8 mb-lg-11">
          {cards.map(card => {
            return <ChartsCards key={card.sys.id} card={card} />;
          })}
        </Row>
      </Container>
    </div>
  );
};

ChartsCardsContainer.propTypes = {
  id: PropTypes.string.isRequired
};

export default ChartsCardsContainer;
