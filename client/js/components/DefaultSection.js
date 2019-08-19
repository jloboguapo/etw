import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash.isempty';
import { Col, Container, Row } from 'react-bootstrap';
import { getEntriesById } from '../utils/contentfulHelpers';

const DefaultSection = props => {
  const { id } = props;
  const [text, setText] = useState('');
  const [highlightedText, setHighlightedText] = useState('');
  const [subtext, setSubtext] = useState('');
  const [headingsAroundBullet, setHeadingsAroundBullet] = useState('');

  const fetchData = async () => {
    const response = await getEntriesById(id);

    setText(response.text);
    setHighlightedText(response.highlightedText);
    setSubtext(response.subtext);
    setHeadingsAroundBullet(response.headingsAroundBullet);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container className="hero hero-simple py-8 py-lg-11">
      <ul className="hero-meta">
        {!_isEmpty(headingsAroundBullet) &&
          headingsAroundBullet.map(heading => (
            <li key={heading} className="text-success">
              {heading}
            </li>
          ))}
      </ul>
      {text && (
        <h1>
          {text + ' '}
          {highlightedText && (
            <span className="highlight highlight-info">{highlightedText}</span>
          )}
        </h1>
      )}
      <Row>
        <Col lg={6}>{subtext && <p className="lead">{subtext}</p>}</Col>
      </Row>
    </Container>
  );
};

DefaultSection.propTypes = {
  id: PropTypes.string.isRequired
};

export default DefaultSection;
