import React from 'react';
import Card, { Body, Title } from 'react-bootstrap/Card';
import CallToAction from './CallToAction';
import Pill from './Pill';

const CtaCardCarousel = ({ fields }) => {
  // const { href, name, pill, title, url } = fields;


  console.log(fields)

  return (
    <Card className="insight-card">
      <div className="card-img-bg" style={{ backgroundImage: `url("")` }}>
        <Pill content="category" />
      </div>
      <Body>
        <Title as="a" href="/">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Title>
        <CallToAction
          linkUrl="/"
          linkName="call to action"
          arrowClassName="arrow-svg"
          source="arrow.svg"
        />
      </Body>
    </Card>
  );
};

export default CtaCardCarousel;
