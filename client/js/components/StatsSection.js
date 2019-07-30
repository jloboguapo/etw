import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'react-bootstrap';
import { getEntriesById } from '../utils/contentfulHelpers';

const StatsSection = props => {
  const { id } = props;
  const [text, setText] = useState('');
  const [highlightedText, setHighlightedText] = useState('');
  const [textPart2, setTextPart2] = useState('');
  const [subtext, setSubtext] = useState('');

  const fetchData = async () => {
    const response = await getEntriesById(id);
    const {
      text,
      highlightedText,
      textPart2,
      subtext
    } = response.defaultSection.fields;
    setText(text);
    setHighlightedText(highlightedText);
    setTextPart2(textPart2);
    setSubtext(subtext);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-white py-8 py-lg-11">
      <Container className="stats-section-container">
        <Row className="justify-content-lg-center text-lg-center">
          <Col lg={9}>
            {text && (
              <h2>
                {text + ' '}
                {highlightedText && (
                  <span className="text-info">{highlightedText}</span>
                )}
                {' ' + textPart2}
              </h2>
            )}
          </Col>
        </Row>
        <Row className="justify-content-lg-center text-lg-center mb-8 mb-lg-10">
          <Col lg={6}>
            <p className="lead">{subtext}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

StatsSection.propTypes = {
  id: PropTypes.string.isRequired
};

export default StatsSection;
