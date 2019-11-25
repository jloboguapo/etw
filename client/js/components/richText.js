import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import _isEmpty from 'lodash.isempty';
import { getEntriesById } from '../utils/contentfulHelpers';

const RichText = ({ id }) => {
  const [blog, setBlog] = useState({});
  const [entryTitle, setEntryTitle] = useState('');

  const fetchData = async () => {
    const items = await getEntriesById(id);

    !_isEmpty(items.blog) ? setBlog(items.blog) : null;
    !_isEmpty(items.entryTitle) ? setEntryTitle(items.entryTitle) : null;
  };

  useEffect(() => {
    fetchData();
  }, []);

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
    'embedded-asset-block': data => (
      <img
        key={data.target.sys.id}
        className="article-hero rounded"
        src={data.target.fields.file.url}
      />
    ),
    'embedded-entry-block': data => (
      <a key={data.target.sys.id} href={data.target.fields.href}>
        <img
          key={data.target.fields.image.sys.id}
          className="article-hero rounded"
          src={data.target.fields.image.fields.file.url}
        />
      </a>
    )
  };

  const buildHTML = ({ data, content, nodeType }, index) => {
    return mapThroughRichText[nodeType](data, content, index);
  };

  const renderBlogPost =
    !_isEmpty(blog) &&
    blog.content.map((arr, index) => {
      return buildHTML(arr, index);
    });

  return (
    <Container className="mb-8">
      {entryTitle === 'story text' && (
        <Row className="pb-8">
          <Col xs={{ span: 12, order: 0 }} className="col-lg-10 col-centered">
            <iframe
              src="https://player.vimeo.com/video/374755428?title=0&byline=0&portrait=0"
              width="100%"
              height="420"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </Col>
        </Row>
      )}
      <Row className="pb-8">
        <Col xs={{ span: 12, order: 0 }} className="col-lg-10 col-centered">
          <div>{renderBlogPost}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default RichText;
