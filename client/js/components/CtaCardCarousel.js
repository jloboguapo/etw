import React from 'react';
import { useDispatch } from 'react-redux';
import { setExpandedState } from '../actionCreators';
import Card, { Body, Title } from 'react-bootstrap/Card';
import CallToAction from './CallToAction';
import Pill from './Pill';

const CtaCardCarousel = ({ blogPost }) => {
  const dispatch = useDispatch();
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

  return (
    <Card key={blogPost.sys.id} className="insight-card">
      <div className="card-img-bg" style={{ backgroundImage: `url("${url}")` }}>
        <Pill content={pill} />
      </div>
      <Body>
        <Title
          onClick={() => {
            dispatch(setExpandedState(false));
            window.scrollTo(0, 0);
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
          source="arrow.png"
          onClick={() => {
            dispatch(setExpandedState(false));
            window.scrollTo(0, 0);
          }}
        />
      </Body>
    </Card>
  );
};

export default CtaCardCarousel;
