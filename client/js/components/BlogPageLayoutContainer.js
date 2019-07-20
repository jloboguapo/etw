import React, { useEffect } from 'react';
import Article from './Article';

const BlogPageLayout = props => {
  useEffect(() => {
    document.body.className = 'bg-white';
  }, []);

  return (
    <div className="leadership-resources-container">
      <Article />
    </div>
  );
};

export default BlogPageLayout;
