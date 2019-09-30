import React from 'react';
import { Col } from 'react-bootstrap';
import _isEmpty from 'lodash.isempty';

const ChartsCards = ({ card }) => {
  const {
    image,
    boldPercentage,
    textPart1,
    highlightedText,
    highlightColor: color,
    textPart2,
    citeSource
  } = card.fields;

  const { url } = !_isEmpty(image) && image.fields.file;

  return (
    <Col lg={4} className="mb-6 mb-lg-0">
      <img src={url} className="mb-7" />
      <div className="h3">
        <strong>{boldPercentage}</strong>
        {' ' + textPart1 + ' '}
        <span className={`text-${color}`}>{highlightedText}</span>
        {' ' + textPart2}
      </div>
      <p className="cite-p">{citeSource}</p>
    </Col>
  );
};

export default ChartsCards;
