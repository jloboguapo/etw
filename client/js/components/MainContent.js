import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CardDeck, Col, Container, Row } from 'react-bootstrap';
import _isEmpty from 'lodash.isempty';
import Subscribe from './Subscribe';
import CallToAction from './CallToAction';
import TestimonialCardVertical from './TestimonialCardVertical';
import CtaCard from './CtaCard';
import { getEntriesById } from '../utils/contentfulHelpers';
import TestimonialCardHorizontal from './TestimonialCardHorizontal';

const MainContent = ({ id, blog }) => {
  const [cta, setCta] = useState({});
  const [subscription, setSubscription] = useState({});
  const [title, setTitle] = useState('');
  const [testimonial, setTestimonial] = useState({});

  const fetchData = async () => {
    const items = await getEntriesById(id);

    setCta(items.cta);
    setSubscription(items.subscription);
    setTitle(items.title);
    setTestimonial(items.testimonialCardVertical);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderCards = (blogPost, index) => {
    const isLarge = (index + 1) % 3 === 0;

    return (
      <CtaCard key={blogPost.sys.id} showLarge={isLarge} blog={blogPost} />
    );
  };

  const reverseBlog = blog => {
    let newArray = [];
    for (let i = blog.length - 1; i >= 0; i--) {
      newArray.push(blog[i]);
    }
    return newArray;
  };

  let divStyle = {
    marginBottom: '2.5rem'
  };

  return (
    <div className="bg-secondary py-8 py-lg-11">
      <Container className="main-content-wrapper">
        <Row className="justify-content-md-center text-center">
          <Col lg={8}>
            {title && <h2 className="mb-7">{title}</h2>}
            {subscription && <Subscribe {...subscription.fields} />}
          </Col>
        </Row>
        <div className="main-content-card-container mt-8 mt-lg-11">
          <CardDeck>
            {reverseBlog(blog).map(renderCards)}
            {!_isEmpty(testimonial) &&
              (blog.length % 2 === 0 || blog.length === 1) && (
                <TestimonialCardVertical {...testimonial.fields} />
              )}
          </CardDeck>
          {testimonial &&
            !_isEmpty(testimonial) &&
            !(blog.length % 2 === 0 || blog.length === 1) && (
              <TestimonialCardHorizontal
                data={testimonial.fields}
                style={divStyle}
              />
            )}
          {!_isEmpty(cta) && (
            <p className="text-center mb-0">
              <CallToAction
                linkUrl={cta.fields.href}
                linkName={cta.fields.text}
                arrowClassName="arrow-svg"
                source="arrow.svg"
              />
            </p>
          )}
        </div>
      </Container>
    </div>
  );
};

MainContent.propTypes = {
  id: PropTypes.string.isRequired
};

export default MainContent;
