import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CtaCardCarousel from './CtaCardCarousel';

const CarouselListener = ({ cards }) => {
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

  return (
    <Carousel
      centerMode={centerMode}
      centerSlidePercentage={
        window.matchMedia('(max-width: 768px)').matches ? 80 : 39
      }
      selectedItem={1}
      showThumbs={false}
    >
      {cards &&
        cards.map(card => {
          return <CtaCardCarousel key={card.sys.id} fields={card.fields} />;
        })}
    </Carousel>
  );
};

export default CarouselListener;
