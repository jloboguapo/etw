import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from './MainLayout';
import Banner from './Banner';
import Solutions from './Solutions';
import Insights from './Insights';

const HomePageLayoutContainer = props => {
  const { data } = props;
  const found = name =>
    data.fields.sections.find(section => section.fields.name === name);

  if (data && data.fields) {
    const foundMainLayout = found('mainLayout');
    const foundSolutions = found('layout');

    return (
      <>
        {foundMainLayout && <MainLayout id={foundMainLayout.sys.id} />}
        {data.fields.bannerId && <Banner id={data.fields.bannerId} />}
        {foundSolutions && <Solutions id={foundSolutions.sys.id} />}
        <Insights />
      </>
    );
  }

  return null;
};

HomePageLayoutContainer.propTypes = {
  data: PropTypes.object.isRequired
};

export default HomePageLayoutContainer;
