import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, Container } from 'react-bootstrap';
import { getEntriesById } from '../utils/contentfulHelpers';
import StatsSection from './StatsSection';
import ChartsCards from './ChartsCards';

const ChartsCardsContainer = props => {
  const { id } = props;
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    const response = await getEntriesById(id);
    console.log(response);
    const cards = response.cards;
    setCards(cards);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(cards);

  return (
    <Row className="stats-section-charts mb-8 mb-lg-11">
      {cards.map(card => {
        return <ChartsCards key={card.sys.id} card={card} />;
      })}

      {/*<Col lg={4} className="mb-6 mb-lg-0">*/}
      {/*  <img src="/lack-card-icon.svg" className="mb-7" />*/}
      {/*  <div className="h3">*/}
      {/*    <strong>86%</strong> of CEOs say they{' '}*/}
      {/*    <span className="text-sea">lack the talent</span> to execute their*/}
      {/*    business strategies*/}
      {/*  </div>*/}
      {/*  <p className="cite-p">*/}
      {/*    Global Leadership Forecast 2018; DDI, Inc.; The Conference Board Inc.,*/}
      {/*    Ernst & Young, LLP*/}
      {/*  </p>*/}
      {/*</Col>*/}
      <Col lg={4} className="mb-6 mb-lg-0">
        <img src="/not-engaged-card-icon.svg" className="mb-7" />
        <div className="h3">
          <strong>85%</strong> of worldwide{' '}
          <span className="text-fire">employees are not engaged</span> or
          actively disengaged at work
        </div>
        <p className="cite-p">Gallup 2017 State of the American Workplace</p>
      </Col>
      <Col lg={4} className="mb-6 mb-lg-0">
        <img src="/no-direction-card-icon.svg" className="mb-7" />
        <div className="h3">
          <strong>78%</strong> of employees believe their leadership team has{' '}
          <span className="text-sun">little to no direction</span>
        </div>
        <p className="cite-p">Gallup 2017 State of the American Workplace</p>
      </Col>
    </Row>
  );
};

StatsSection.propTypes = {
  id: PropTypes.string.isRequired
};

export default ChartsCardsContainer;
