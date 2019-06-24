import React, { Component } from 'react';
import Button from './Button';
import CallToAction from './CallToAction';
import ReadyWinForm from './ReadyWinForm';

const ReadyWin = () => {
  return (
    <div className="ready-win-ultimate-container">
      <div className="ready-win-main-container">
        <div className="ready-win-form-container">
          <Button content="partner with etw to strengthen your culture" />
          <h2>Are you ready to win?</h2>
          <p>
            Now is your time to develop high-performance leaders, establish a
            value-creation mindset, improve enterprise-wide habits, and more.
            Unintentional leaders need not apply.
          </p>
          <ReadyWinForm />
          <div className="link-container">
            <CallToAction
              linkUrl="/"
              linkName="not convinced? read some case studies"
              arrowClassName="arrow-svg"
              source="arrow.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyWin;
