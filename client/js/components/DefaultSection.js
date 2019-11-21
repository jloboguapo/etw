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
  const [paddingClass, setPaddingClass] = useState('');

  const fetchData = async () => {
    const response = await getEntriesById(id);

    !_isEmpty(response.paddingChoices)
      ? setPaddingClass(response.paddingChoices)
      : null;
    !_isEmpty(response.text) ? setText(response.text) : null;
    !_isEmpty(response.highlightedText)
      ? setHighlightedText(response.highlightedText)
      : null;
    !_isEmpty(response.subtext) ? setSubtext(response.subtext) : null;
    !_isEmpty(response.headingsAroundBullet)
      ? setHeadingsAroundBullet(response.headingsAroundBullet)
      : null;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container
      className={`hero hero-simple ${
        paddingClass ? paddingClass.join(' ') : 'py-8 py-lg-11'
      }`}
    >
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
