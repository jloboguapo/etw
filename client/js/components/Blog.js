import React from 'react';

const Blog = ({ blogPost }) => {
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

  return renderBlogPost;
};

export default Blog;
