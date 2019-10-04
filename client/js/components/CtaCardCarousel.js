import React from 'react';
import Card, { Body, Title } from 'react-bootstrap/Card';
import CallToAction from './CallToAction';
import Pill from './Pill';

const CtaCardCarousel = ({ blogPost }) => {
  const items = blogPost.fields.items && blogPost.fields.items;

  const href = blogPost.fields.path && blogPost.fields.path;
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
    window.scrollTo(0, 0);
  };

  return (
    <Card key={blogPost.sys.id} className="insight-card">
      <div className="card-img-bg" style={{ backgroundImage: `url("${url}")` }}>
        <Pill content={pill} />
      </div>
      <Body>
        <Title
          onClick={e => {
            linkReload(e);
          }}
          as="a"
          href={`/#/leadership-resources${href}`}
        >
          {title}
        </Title>

        <CallToAction
          linkUrl={`/#/leadership-resources${href}`}
          linkName="Read more"
          arrowClassName="/arrow-svg"
          source="/arrow.svg"
          onClick={e => {
            linkReload(e);
          }}
        />
      </Body>
    </Card>
  );
};

export default CtaCardCarousel;
