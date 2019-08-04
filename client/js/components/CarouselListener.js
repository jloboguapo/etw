import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CtaCardCarousel from './CtaCardCarousel';

const CarouselListener = cards => {
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

  const renderCards = card => {
    const { fields } = card.fields;
    return <CtaCardCarousel key={card.sys.id} {...fields} />;
  };

  console.log(cards);

  return (
    <Carousel
      centerMode={centerMode}
      centerSlidePercentage={
        window.matchMedia('(max-width: 768px)').matches ? 80 : 39
      }
      selectedItem={1}
      showThumbs={false}
    >
      {cards && cards.map(renderCards)}

      <CtaCardCarousel url="/camera-desert.svg" />
      <CtaCardCarousel url="/photo-mountain.svg" />
      <CtaCardCarousel url="/modern-desk.svg" />
      <CtaCardCarousel url="/horse-race.jpg" />
      <CtaCardCarousel url="/spacecraft.jpg" />
    </Carousel>
  );
};

export default CarouselListener;
