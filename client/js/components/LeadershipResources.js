import React from 'react';
import Articles from './Articles';
import ResourcesPage from './ResourcesPage';
import HeaderWhite from './HeaderWhite';

const LeadershipResources = () => {
  return (
    <>
      <HeaderWhite />
      <div className="leadership-resources-container">
        <Articles />
        <ResourcesPage />
      </div>
    </>
  );
};

export default LeadershipResources;
