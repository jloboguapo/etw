import React from 'react';
import MainLayout from './MainLayout';
import Banner from './Banner';
import Solutions from './Solutions';
import Insights from './Insights';

const HomePage = () => {
  return (
    <>
      <MainLayout />
      <Banner />
      <Solutions />
      <Insights />
    </>
  );
};

export default HomePage;
