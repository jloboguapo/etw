import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CtaCardCarousel from './CtaCardCarousel';

const CarouselListener = ({ blog }) => {
  const [centerMode, setCenterMode] = useState(
    !window.matchMedia('(max-width: 768px)').matches
  );

  const resizeEvent = () =>
    setCenterMode(!window.matchMedia('(max-width: 768px)').matches);

  useEffect(() => {
    window.addEventListener('resize', resizeEvent);

    return () => {
      window.removeEventListener('resize', resizeEvent);
    };
  }, []);

  const reverseBlog = blog => {
    let newArray = [];
    for (let i = blog.length - 1; i >= 0; i--) {
      newArray.push(blog[i]);
    }
    return newArray;
  };

  return (
    <Carousel
      centerMode={blog.length > 2 ? centerMode : false}
      centerSlidePercentage={
        window.matchMedia('(max-width: 768px)').matches ? 80 : 39
      }
      selectedItem={blog.length > 1 ? 1 : 0}
      showThumbs={false}
    >
      {reverseBlog(blog).map(blogPost => (
        <CtaCardCarousel key={blogPost.sys.id} blogPost={blogPost} />
      ))}
    </Carousel>
  );
};

export default CarouselListener;
