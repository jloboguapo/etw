import React, { Component } from 'react';

const LogosBanner = () => {
  return (
    <div className="logos-banner-container">
      <div className="logos-content-wrapper">
        <div className="logos-text-container">
          <p>intentional cultures both big and small leverage us to win</p>
        </div>
        <div className="logos-svg-container">
          <div className="trip-spark-container">
            <img
              className="trip-spark-logo"
              src="/trip-spark-logo.svg"
            />
          </div>
          <img className="univar-logo" src="/univar-logo.svg" />
          <img
            className="verra-mobility-logo"
            src="/verra-mobility-logo.svg"
          />
          <div className="logos-empty-div" />
        </div>
      </div>
    </div>
  );
};

export default LogosBanner;
