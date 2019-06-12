import React from 'react';
import Header from './Header';
import CoreValues from './CoreValues';
import LogosBanner from './LogosBanner';
import Solutions from './Solutions';
import Insights from './Insights';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="etw-main-container">
      <div className="etw-secondary-container">
        <Header />
        <CoreValues />
      </div>
      <LogosBanner />
      <div className="etw-solutions-ultimate-container">
        <Solutions />
      </div>
      <div className="etw-insights-ultimate-container">
        <Insights />
      </div>
      <div className="etw-footer-ultimate-container">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
