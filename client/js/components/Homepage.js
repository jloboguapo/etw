import React from 'react';
import CoreValues from './CoreValues';
import LogosBanner from './LogosBanner';
import Solutions from './Solutions';
import Insights from './Insights';
import Header from './Header';
import Footer from './Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <CoreValues />
      <LogosBanner />
      <Solutions />
      <Insights />
      <Footer />
    </>
  );
};

export default HomePage;
