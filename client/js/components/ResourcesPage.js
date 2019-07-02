import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ImageWithPill from './ImageWithPill';
import Subscribe from './Subscribe';
import CallToAction from './CallToAction';

const ResourcesPage = props => {
  return (
    <div className="etw-resources-ultimate-container">
      <div className="etw-resources-main-container">
        <div className="etw-resources-text-container">
          <h2>Get leadership resources in your inbox</h2>
          <Subscribe />
          <p>
            {' '}
            By subscribing, you agree to our <a href="/">privacy policy.</a>
          </p>
          <h4>You might also like these resources</h4>
        </div>
        <Carousel
          centerMode={
            window.matchMedia('(max-width: 768px)').matches ? false : true
          }
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus pretium mauris nec aliquam porttitor.
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
      </div>
    </div>
  );
};

export default ResourcesPage;
