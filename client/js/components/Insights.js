import React from 'react';
import ImageWithPill from './ImageWithPill';
import Subscribe from './Subscribe';
import CallToAction from './CallToAction';

const Insights = props => {
  return (
    <div className="etw-insights-ultimate-container">
      <div className="etw-insights-main-container">
        <div className="etw-insights-text-container">
          <h2>Growth-driving insights</h2>
          <Subscribe />
          <p>
            {' '}
            By subscribing, you agree to our <a href="/">privacy policy.</a>
          </p>
        </div>
        <div className="etw-insights-card-container">
          <div className="etw-insights-row">
            <div className="image-content-wrapper">
              <ImageWithPill imageClass="etw-insights-image-phone" />
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
              <CallToAction linkName="call to action" />
            </div>
            <div className="image-content-wrapper">
              <ImageWithPill imageClass="insights-cat-2" />
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                pretium mauris nec aliquam porttitor.
              </h4>
              <CallToAction linkName="call to action" />
            </div>
          </div>
          <div className="etw-insights-row">
            <div className="image-content-wrapper full-width">
              <ImageWithPill imageClass="insights-cat-3" />
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                pretium mauris nec aliquam porttitor.
              </h2>
              <CallToAction linkName="call to action" />
            </div>
          </div>
          <div className="etw-insights-row">
            <div className="image-content-wrapper">
              <ImageWithPill imageClass="insights-cat-4" />
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                pretium mauris nec aliquam porttitor.
              </h4>
              <CallToAction linkName="call to action" />
            </div>
            <div className="insights-category-container-5">
              <img className="quote" src="/quote.svg" />
              <p className="etw-client-quote">
                ETW has made all the difference in our performance. They are our
                secret sauce.
              </p>
              <h5>high-performance client name</h5>
              <button className="etw-webinar-button">
                JOIN our next webinar
              </button>
              <p>
                Every Tuesday, Thursday, and Friday, designed for C-level
                leaders like you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <CallToAction linkName="more insights" />
    </div>
  );
};

export default Insights;
