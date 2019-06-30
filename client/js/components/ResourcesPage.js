import React from 'react';
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
        <div className="etw-resources-card-container">
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
            <div className="image-content-wrapper">
              <ImageWithPill imageClass="spacecraft" />
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
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
