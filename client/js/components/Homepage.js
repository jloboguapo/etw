import React from 'react';
import MainLayout from './MainLayout';
import Banner from './Banner';
import Solutions from './Solutions';
import Insights from './Insights';
import Header from './Header';
import Footer from './Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <MainLayout />
      <Banner />
      <Solutions />
      <Insights />
      <Footer />
    </>
  );
};

export default HomePage;
