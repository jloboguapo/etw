import React, { useEffect, useState } from 'react';

const BlogTags = () => {
  const [mobile, setMobile] = useState(
    !window.matchMedia('(max-width: 328px)').matches
  );

  useEffect(() => {
    const resizeEvent = () =>
      setMobile(!window.matchMedia('(max-width: 328px)').matches);
    window.addEventListener('resize', resizeEvent);

    return () => {
      window.removeEventListener('resize', resizeEvent);
    };
  }, []);

  return mobile ? <span>leadership resources</span> : <span>leadership</span>;
};

export default BlogTags;
