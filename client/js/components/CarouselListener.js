import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ImageWithPill from './ImageWithPill';
import CallToAction from './CallToAction';

const CarouselListener = () => {
  const [centerMode, setCenterMode] = useState(!window.matchMedia('(max-width: 768px)').matches);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setCenterMode(!window.matchMedia('(max-width: 768px)').matches);
    });
    window.removeEventListener('resize', () => {
      setCenterMode(!window.matchMedia('(max-width: 768px)').matches);
    });
  });

  return (
    <Carousel
      centerMode={centerMode}
      centerSlidePercentage={
        window.matchMedia('(max-width: 768px)').matches ? 80 : 39
      }
      selectedItem={1}
      showThumbs={false}
    >
      <div>
        <div className="etw-resources-row">
          <div className="image-content-wrapper">
            <ImageWithPill imageClass="camera-desert" />
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
            <CallToAction
              linkUrl="/"
              linkName="call to action"
              arrowClassName="arrow"
              source="arrow.svg"
            />
          </div>
        </div>
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <div className="etw-resources-row">
          <div className="image-content-wrapper">
            <ImageWithPill imageClass="photo-mountain" />
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              pretium mauris nec aliquam porttitor.
            </h3>
            <CallToAction
              linkUrl="/"
              linkName="call to action"
              arrowClassName="arrow"
              source="arrow.svg"
            />
          </div>
        </div>
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <div className="etw-resources-row">
          <div className="image-content-wrapper">
            <ImageWithPill imageClass="modern-desk" />
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
            <CallToAction
              linkUrl="/"
              linkName="call to action"
              arrowClassName="arrow"
              source="arrow.svg"
            />
          </div>
        </div>
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <div className="etw-resources-row">
          <div className="image-content-wrapper">
            <ImageWithPill imageClass="hustle" />
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
            <CallToAction
              linkUrl="/"
              linkName="call to action"
              arrowClassName="arrow"
              source="arrow.svg"
            />
          </div>
        </div>
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <div className="etw-resources-row">
          <div className="image-content-wrapper">
            <ImageWithPill imageClass="horse-race" />
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
            <CallToAction
              linkUrl="/"
              linkName="call to action"
              arrowClassName="arrow"
              source="arrow.svg"
            />
          </div>
        </div>
        <p className="legend">Legend 5</p>
      </div>
    </Carousel>
  );
};

export default CarouselListener;
