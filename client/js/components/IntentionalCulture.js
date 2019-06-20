import React, { Component } from 'react';
import LinkNoArrow from './LinkNoArrow';

const IntentionalCulture = () => {
  return (
    <div className="intentional-culture-container">
      <div className="link-row-container">
        <LinkNoArrow
          linkName={
            <span>
              <span>performance </span>solutions
            </span>
          }
        />
        <span>&bull;</span>
        <LinkNoArrow
          linkName={
            <span>
              <span>strengthen </span>culture
            </span>
          }
        />
      </div>
      <div className="intentional-culture-text-container">
        <h1>Build an intentional culture</h1>
        <p>
          Fostering a strong, thriving culture starts with intentional
          leadership that prioritizes people first. Are you ready to lead?
        </p>
      </div>
    </div>
  );
};

export default IntentionalCulture;