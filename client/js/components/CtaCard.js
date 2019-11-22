import React from 'react';
import Card, { Body, Title } from 'react-bootstrap/Card';
import CallToActionNoLink from './CallToActionNoLink';
import Pill from './Pill';
import { setExpandedState } from '../actionCreators';

const CtaCard = ({ showLarge, blog }) => {
  const items = blog.fields.items && blog.fields.items;

  const href = blog.fields.path && blog.fields.path;

  const title =
    items && items.find(item => item.fields.name === 'heading').fields.text;

  const pill =
    items &&
    items.find(item => item.fields.name === 'heading').fields.highlightedText;

  const url =
    items &&
    items
      .find(arr => arr.fields.name === 'blogPost')
      .fields.blog.content.find(
        image => image.nodeType === 'embedded-asset-block'
      ).data.target.fields.file.url;

  const linkReload = e => {
    if (location.href !== e.currentTarget.href) {
      location.href = e.currentTarget.href;
      location.reload(true)();
    }
    dispatch(setExpandedState(false));
    window.scrollTo(0, 0);
  };

  return (
    <Card
      className={`insight-card${showLarge ? ' card-lg' : ''}`}
      as="a"
      href={`/#/leadership-resources${href}`}
      onClick={e => {
        linkReload(e);
      }}
    >
      {url && (
        <div
          className="card-img-bg"
          style={{ backgroundImage: `url("${url}")` }}
        >
          {pill && <Pill content={pill} />}
        </div>
      )}
      <Body>
        {title && <Title>{title}</Title>}
        <CallToActionNoLink
          content="Read more"
          arrowClassName="arrow-svg"
          source="arrow.png"
        />
      </Body>
    </Card>
  );
};

export default CtaCard;
