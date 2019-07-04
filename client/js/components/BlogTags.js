import React, { useEffect, useState } from 'react';

const BlogTags = () => {
  const [mobile, setMobile] = useState(
    !window.matchMedia('(max-width: 328px)').matches
  );

  useEffect(() => {
    window.addEventListener('resize', () => {
      setMobile(!window.matchMedia('(max-width: 328px)').matches);
    });
    window.removeEventListener('resize', () => {
      setMobile(!window.matchMedia('(max-width: 328px)').matches);
    });
  });

  console.log(mobile);
  return mobile ? <span>leadership resources</span> : <span>leadership</span>;
};

export default BlogTags;
