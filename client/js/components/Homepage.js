import React from 'react';
import MainLayout from './MainLayout';
import LogosBanner from './LogosBanner';
import Solutions from './Solutions';
import Insights from './Insights';
import Header from './Header';
import Footer from './Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <MainLayout />
      <LogosBanner />
      <Solutions />
      <Insights />
      <Footer />
    </>
  );
};

export default HomePage;
