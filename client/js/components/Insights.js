import React from 'react';
import ImageWithPill from './ImageWithPill';
import Subscribe from './Subscribe';
import CallToAction from './CallToAction';
import Button from './Button';

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
              <ImageWithPill imageClass="phone-on-desk" />
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
              <CallToAction
                linkUrl="/"
                linkName="call to action"
                arrowClassName="arrow-svg"
                source="arrow.svg"
              />
            </div>
            <div className="image-content-wrapper">
              <ImageWithPill imageClass="tower" />
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                pretium mauris nec aliquam porttitor.
              </h3>
              <CallToAction
                linkUrl="/"
                linkName="call to action"
                arrowClassName="arrow-svg"
                source="arrow.svg"
              />
            </div>
          </div>
          <div className="etw-insights-row">
            <div className="image-content-wrapper full-width">
              <ImageWithPill imageClass="typing-hands" />
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                pretium mauris nec aliquam porttitor.
              </h2>
              <CallToAction
                linkUrl="/"
                linkName="call to action"
                arrowClassName="arrow-svg"
                source="arrow.svg"
              />
            </div>
          </div>
          <div className="etw-insights-row">
            <div className="image-content-wrapper">
              <ImageWithPill imageClass="laptop-angle" />
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                pretium mauris nec aliquam porttitor.
              </h3>
              <CallToAction
                linkUrl="/"
                linkName="call to action"
                arrowClassName="arrow-svg"
                source="arrow.svg"
              />
            </div>
            <div className="insights-category-container-5">
              <img className="quote" src="/quote.svg" />
              <p className="etw-client-quote">
                ETW has made all the difference in our performance. They are our
                secret sauce.
              </p>
              <h5>high-performance client name</h5>
              <a className="button-link" href="/">
                <Button content="JOIN our next webinar" />
              </a>
              <p>
                Every Tuesday, Thursday, and Friday, designed for C-level
                leaders like you.
              </p>
            </div>
          </div>
        </div>
        <CallToAction
          linkUrl="/"
          linkName="more insights"
          arrowClassName="arrow-svg"
          source="arrow.svg"
        />
      </div>
    </div>
  );
};

export default Insights;
