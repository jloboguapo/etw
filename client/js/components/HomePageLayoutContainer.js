import React from 'react';
import PropTypes from 'prop-types';
import HeroContent from './HeroContent';
import Banner from './Banner';
import CardsContainer from './CardsContainer';
import MainContent from './MainContent';

const HomePageLayoutContainer = props => {
  const { data } = props;
  const found = name =>
    data.sections.find(section => section.fields && section.fields.name === name);

  if (data && data.sections) {
    const foundHeroContent = found('heroContent');
    const foundCardsContainer = found('cardsContainer');
    const foundMainContent = found('mainContent');

    return (
      <>
        {foundHeroContent && <HeroContent id={foundHeroContent.sys.id} />}
        {data.bannerId && <Banner id={data.bannerId} />}
        {foundCardsContainer && (
          <CardsContainer id={foundCardsContainer.sys.id} />
        )}
        {foundMainContent && <MainContent id={foundMainContent.sys.id} />}
      </>
    );
  }

  return null;
};

HomePageLayoutContainer.propTypes = {
  data: PropTypes.object.isRequired
};

export default HomePageLayoutContainer;
