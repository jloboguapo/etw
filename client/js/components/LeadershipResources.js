import React, { useEffect } from 'react';
import Articles from './Articles';
import ResourcesPage from './ResourcesPage';
import HeaderWhite from './HeaderWhite';

const LeadershipResources = props => {
  useEffect(() => {
    document.body.className = 'leadership-resources-wrapper';
  }, []);

  return (
    <div className="leadership-resources-container">
      <Articles />
      <ResourcesPage />
    </div>
  );
};

export default LeadershipResources;
