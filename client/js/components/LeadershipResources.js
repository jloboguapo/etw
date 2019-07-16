import React, { useEffect } from 'react';
import Article from './Article';
import Banner from './Banner';
import Header from './Header';
import Footer from './Footer';

const LeadershipResources = props => {
  useEffect(() => {
    document.body.className = 'bg-white';
  }, []);

  return (
    <div className="leadership-resources-container">
      <Banner content="Join ETW at our next intentional leadership network event, September 5, 2019." />
      <Header />
      <Article />
      <Footer />
    </div>
  );
};

export default LeadershipResources;
