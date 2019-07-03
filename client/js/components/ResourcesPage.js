import React from 'react';
import Subscribe from './Subscribe';
import CarouselListener from './CarouselListener';

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
        <CarouselListener />
      </div>
    </div>
  );
};

export default ResourcesPage;
