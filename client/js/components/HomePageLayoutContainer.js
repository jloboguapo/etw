import React from 'react';
import PropTypes from 'prop-types';
import HeroContent from './HeroContent';
import Banner from './Banner';
import CardsContainer from './CardsContainer';
import Insights from './Insights';

const HomePageLayoutContainer = props => {
  const { data } = props;
  const found = name =>
    data.fields.sections.find(section => section.fields.name === name);

  if (data && data.fields) {
    const foundHeroContent = found('heroContent');
    const foundCardsContainer = found('cardsContainer');

    return (
      <>
        {foundHeroContent && <HeroContent id={foundHeroContent.sys.id} />}
        {data.fields.bannerId && <Banner id={data.fields.bannerId} />}
        {foundCardsContainer && <CardsContainer id={foundCardsContainer.sys.id} />}
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
