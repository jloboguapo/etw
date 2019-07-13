import React, { useEffect } from 'react';
import Article from './Article';

const LeadershipResources = props => {
  useEffect(() => {
    document.body.className = 'bg-white';
  }, []);

  return (
    <div className="leadership-resources-container">
      <Article />
    </div>
  );
};

export default LeadershipResources;
