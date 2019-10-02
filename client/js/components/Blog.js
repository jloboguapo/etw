import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Pill from './Pill';
import CallToAction from './CallToAction';
import Card, { Footer, Img } from 'react-bootstrap/Card';
import CallToActionNoLink from './CallToActionNoLink';

const Blog = ({ blog }) => {
  const getNames = name => {
    const sectionFields = blog.fields.items.filter(
      array => array.fields.name === name
    )[0].fields;
    return sectionFields;
  };

  const heading = getNames('heading');
  const card = getNames('card');
  const shareInsight = getNames('shareInsight');
  const blogFooterPic = getNames('blogFooterPic');

  const cardItems = card.items;
  const headingsAroundBullet = heading.headingsAroundBullet;
  const insightItems = shareInsight.items;

  const foundBlogPost = blog.fields.items.find(
    blog => blog.fields.name === 'blogPost'
  );

  const blogPost = foundBlogPost.fields.blog;

  const buildParagraph = contents => {
    return contents.map(content => {
      return content.nodeType === 'hyperlink'
        ? buildParagraphHighlight(
            content.content.map(arr => arr.marks),
            content.content.map(arr => arr.value),
            content.data.uri
          )
        : buildParagraphHighlight(content.marks, content.value);
    });
  };

  const textDecorationMap = {
    bold: content => <strong key={content}>{content}</strong>,
    italic: content => <em key={content}>{content}</em>,
    underline: content => <u key={content}>{content}</u>
  };

  const buildParagraphHighlight = (marks, content, link) => {
    if (Array.isArray(marks) && Array.isArray(content)) {
      marks = marks[0];
      content = content[0];
    }
    if (marks && marks.length > 0) {
      const newText =
        marks.some(mark => mark.type === 'bold') &&
        marks.some(mark => mark.type === 'italic') &&
        marks.some(mark => mark.type === 'underline') ? (
          <strong key={content}>
            <em>
              <u>{content}</u>
            </em>
          </strong>
        ) : marks.some(mark => mark.type === 'bold') &&
          marks.some(mark => mark.type === 'italic') ? (
          <strong key={content}>
            <em>{content}</em>
          </strong>
        ) : marks.some(mark => mark.type === 'bold') &&
          marks.some(mark => mark.type === 'underline') ? (
          <strong key={content}>
            <u>{content}</u>
          </strong>
        ) : marks.some(mark => mark.type === 'italic') &&
          marks.some(mark => mark.type === 'underline') ? (
          <em key={content}>
            <u>{content}</u>
          </em>
        ) : (
          textDecorationMap[marks[0].type](content)
        );
      return link ? (
        <a key={link + marks + content} href={link}>
          {newText}
        </a>
      ) : (
        newText
      );
    }
    return link ? (
      <a key={link + marks + content} href={link}>
        {content}
      </a>
    ) : (
      content
    );
  };

  const mapThroughRichText = {
    paragraph: (data, content, index) => (
      <p key={content.map(content => content.value + index)}>
        {buildParagraph(content)}
      </p>
    ),
    'heading-1': (data, content) => (
      <h1 key={content.map(content => content.value)}>
        {content.map(content => content.value)}
      </h1>
    ),
    'heading-2': (data, content) => (
      <h2 key={content.map(content => content.value)}>
        {content.map(content => content.value)}
      </h2>
    ),
    'heading-3': (data, content) => (
      <h3 key={content.map(content => content.value)}>
        {content.map(content => content.value)}
      </h3>
    ),
    'heading-4': (data, content) => (
      <h4 key={content.map(content => content.value)}>
        {content.map(content => content.value)}
      </h4>
    ),
    'heading-5': (data, content) => (
      <h5 key={content.map(content => content.value)}>
        {content.map(content => content.value)}
      </h5>
    ),
    'unordered-list': (data, content, index) => (
      <ul key={index}>
        {content.map(array =>
          array.content.map(arr =>
            arr.content.map(lastArr => (
              <li key={lastArr.value + index}>{lastArr.value}</li>
            ))
          )
        )}
      </ul>
    ),
    'ordered-list': (data, content, index) => (
      <ol key={index}>
        {content.map(array =>
          array.content.map(arr =>
            arr.content.map(lastArr => (
              <li key={lastArr.value}>{lastArr.value}</li>
            ))
          )
        )}
      </ol>
    ),
    'embedded-asset-block': (data, content) => (
      <img
        key={data.target.sys.id}
        className="article-hero rounded"
        src={data.target.fields.file.url}
      />
    )
  };

  const buildHTML = ({ data, content, nodeType }, index) => {
    return mapThroughRichText[nodeType](data, content, index);
  };

  const renderBlogPost = blogPost.content.map((arr, index) => {
    return buildHTML(arr, index);
  });

  return (
    <Container className="article-layout">
      <Row>
        <Col>
          <div className="article-header">
            <h1>{heading.text}</h1>
            <div className="article-meta">
              {headingsAroundBullet &&
                headingsAroundBullet.map((tag, index) => {
                  return (
                    <span key={`${tag}${index}`}>
                      {index === 0 && <a href='/#/leadership-resources'>{tag + ' '}</a>}
                      {index !== 0 && (
                        <>
                          <span className="article-meta-divider">&bull;</span>
                          <span>{' ' + tag}</span>
                        </>
                      )}
                    </span>
                  );
                })}
              <a href="#">
                <Pill content={heading.highlightedText} />
              </a>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={{ span: 12, order: 1 }} lg={{ span: 3, order: 0 }}>
          <div className="article-author">
            {cardItems &&
              cardItems.map(item => {
                return (
                  <span key={item.sys.id}>
                    <div
                      className="article-author-photo"
                      style={{
                        backgroundImage: `url(${
                          item.fields.icon.fields.file.url
                        })`
                      }}
                    />
                    <h4>{item.fields.title}</h4>
                    <p>{item.fields.subtitle}</p>
                    <CallToAction
                      linkUrl={item.fields.href}
                      linkName={item.fields.cta}
                      arrowClassName="arrow"
                      source="/arrow.svg"
                    />
                  </span>
                );
              })}
          </div>

          <div className="article-share">
            <h4>Share this insight</h4>
            {insightItems &&
              insightItems.map(link => {
                return (
                  <a key={link.fields.name} href={link.fields.href}>
                    <img src={link.fields.image.fields.file.url} />
                  </a>
                );
              })}
          </div>
        </Col>
        <Col xs={{ span: 12, order: 0 }} lg={{ span: 9, order: 1 }}>
          <div className="article-content">{renderBlogPost}</div>

          {blogFooterPic && (
            <Card
              as="a"
              href={blogFooterPic.href}
              className="article-cta-card border-0 shadow-none"
            >
              {blogFooterPic && blogFooterPic.icon && (
                <Img variant="top" src={blogFooterPic.icon.fields.file.url} />
              )}
              <Footer className="bg-success rounded-bottom">
                <CallToActionNoLink
                  content={blogFooterPic.cta}
                  arrowClassName="arrow-white"
                  source="arrow-white.svg"
                />
              </Footer>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
