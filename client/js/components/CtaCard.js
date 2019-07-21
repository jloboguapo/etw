import React from 'react';
import _isEmpty from 'lodash.isempty';
import Card, { Body, Title } from 'react-bootstrap/Card';
import CallToActionNoLink from './CallToActionNoLink';
import Pill from './Pill';

const CtaCard = props => {
  const { bgImage, pill, title, cta, href, showLarge } = props;
  const { url } = !_isEmpty(bgImage) && bgImage.fields.file;
  const showBody = title || !_isEmpty(cta);

  return (
    <Card
      className={`insight-card${showLarge ? ' card-lg' : ''}`}
      as="a"
      href={href}
    >
      {url && (
        <div
          className="card-img-bg"
          style={{ backgroundImage: `url("${url}")` }}
        >
          {pill && <Pill content={pill} />}
        </div>
      )}
      {showBody && (
        <Body>
          {title && <Title>{title}</Title>}
          {!_isEmpty(cta) && (
            <CallToActionNoLink
              content={cta.fields.text}
              arrowClassName="arrow-svg"
              source="arrow.svg"
            />
          )}
        </Body>
      )}
    </Card>
  );
};

export default CtaCard;
