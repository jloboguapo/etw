import React from 'react';

const BlogTags = () =>
  window.matchMedia('(min-width: 328px)').matches ? (
    <span>leadership resources</span>
  ) : (
    <span>leadership</span>
  );

export default BlogTags;
