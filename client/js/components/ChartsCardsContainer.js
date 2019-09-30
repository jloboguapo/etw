import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Container } from 'react-bootstrap';
import { getEntriesById } from '../utils/contentfulHelpers';
import ChartsCards from './ChartsCards';

const ChartsCardsContainer = props => {
  const { id } = props;
  const [cards, setCards] = useState([]);
  const [paddingClass, setPaddingClass] = useState('');

  const fetchData = async () => {
    const response = await getEntriesById(id);
    setPaddingClass(response.paddingChoices);
    setCards(response.cards);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={`bg-white ${paddingClass ? paddingClass.join(' ') : ''}`}>
      <Container>
        <Row className="">
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
