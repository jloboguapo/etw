import React from 'react';
import CategoryPill from './CategoryPill';
import CallToAction from './CallToAction';

const Articles = () => {
  return (
    <div className="articles-main-container">
      <div className="articles-text-container">
        <h1>
          Change management is no joke, and the title can be longer if needed
        </h1>
        <div className="tags-container">
          <span>leadership resources</span>
          <span>&bull;</span>
          <span>August 8, 2019</span>
          <CategoryPill content="culture" />
        </div>
      </div>
      <div className="bio-article-container">
        <div className="bio-container">
          <div className="pic-container">
            <div className="lee-benson" />
          </div>
          <h4>Lee Benson</h4>
          <p>
            Influencer of youth entrepreneurs, guitar maestro, and ETW's Founder
            + CEO.
          </p>
          <CallToAction linkName="full bio" />
        </div>
        <div className="article-container " />
      </div>
    </div>
  );
};

export default Articles;
