import React from 'react';
import Card, { Body, Title } from 'react-bootstrap/Card';
import CallToAction from './CallToAction';
import Pill from './Pill';
import _isEmpty from 'lodash.isempty';

const CtaCardCarousel = ({ fields }) => {
  const { bgImage, pill, href, title, cta } = fields;
  const { url } = !_isEmpty(bgImage) && bgImage.fields.file;

  return (
    <Card className="insight-card">
      {url && (
        <div
          className="card-img-bg"
          style={{ backgroundImage: `url("${url}")` }}
        >
          {pill && <Pill content={pill} />}
        </div>
      )}
      <Body>
        {title && (
          <Title as="a" href={href}>
            {title}
          </Title>
        )}
        {cta.fields && (
          <CallToAction
            linkUrl={cta.fields.href}
            linkName={cta.fields.text}
            arrowClassName="arrow-svg"
            source="arrow.svg"
          />
        )}
      </Body>
    </Card>
  );
};

export default CtaCardCarousel;
