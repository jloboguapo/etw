import React from 'react';
import Button from './Button';
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
          <CallToAction
            linkUrl="/"
            linkName="full bio"
            arrowClassName="arrow-svg"
            source="/arrow.svg"
          />
        </div>
        <div className="article-container">
          <div className="blog-pics blog-header-pic" />
          <p>
            No matter how much it’s desired in business, change is never easy.
            Or, as leadership development expert Brian Smith says, “it’s going
            to get messy.”
          </p>
          <p>
            Change management initiatives within organizations are, by design,
            intended to improve results. And in most cases, those results are
            defined and communicated throughout the organization. So, why do
            more than 70% of change management initiatives fail? And, of the
            other 30%, more than 50% don’t fully deliver the desired results?
          </p>
          <ul>
            <li>Bullet points look like this</li>
            <li>Another bullet point</li>
            <li>And one more for good measure</li>
          </ul>
          <p>
            The primary reason: Leadership Development doesn’t mirror the
            organizations' drivers that cause extraordinary results to happen.
            That includes successful change management.
          </p>
          <h2>4 Essential Steps to Successful Change Management</h2>
          <p>
            Organizational habits are extremely hard to change without a
            systemic, intentional approach.
          </p>
          <p>
            It’s important to get the mindset and processes right before even
            considering the productive power of having the right technology and
            tools in place. Having the right mindset means you understand how
            your Management Operating System elements, including change
            management, are intended to create value for the organization. If
            team members are told to do something without having this
            value-creation mindset, they’ll likely check the box and go back to
            the way things were done before—due to the inertia of their “this is
            how we’ve always done it” mindset.
          </p>
          <p>Here are a few ways to shift that paradigm.</p>
          <h3>
            Scope and Scale: How a Management Operating System Manages Change
          </h3>
          <p>
            Your answers need to become living, breathing continuous-improvement
            efforts and systems. When leaders are coached and developed to have
            a value-creation mindset, this process comes naturally. When leaders
            are not so equipped, many of these responses simply become “events”
            with just a lot of non-value-added box-checking.
          </p>
          <p>
            Additionally, your MOS should intentionally prioritize, measure,
            align and effectively communicate all desired outcomes, such as…
          </p>
          <ul>
            <li>Numbered bullet points look like this</li>
            <li>Another bullet point</li>
            <li>And one more for good measure</li>
          </ul>
          <p>
            Interested in learning more? I hope you'll join me, Brian Smith,
            John Sigmon and an exceptional lineup of CEOs and leadership experts
            at Network Leadership Summit on April 9 in Tempe.{' '}
            <a href="/">Register now.</a>
          </p>
          <div className="blog-pics blog-footer-pic" />
          <a className="button-link" href="/">
            <Button
              content={
                <CallToAction
                  linkName="download the etw guide to change management"
                  arrowClassName="arrow-white-svg"
                  source="arrow-white.svg"
                />
              }
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Articles;
