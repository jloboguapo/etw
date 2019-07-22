import React from 'react';
import CombatDisengagement from './CombatDisengagement';
import IntentionalCulture from './IntentionalCulture';
import ServicesSoftware from './ServicesSoftware';
import ReadyWin from './ReadyWin';

const DefaultPageLayoutContainer = props => {
  const { data } = props;
  const found = name =>
    data.sections.find(section => section.fields && section.fields.name === name);

  if (data && data.sections) {
    const foundHeroContent = found('heroContent');
    const foundCardsContainer = found('cardsContainer');
    const foundServices = found('mainContent');

    return (
      <div className="performance-solutions-container">
        <IntentionalCulture/>
        <CombatDisengagement/>
        <ServicesSoftware/>
        <ReadyWin/>
      </div>
    );
  }
  return null;
};

export default DefaultPageLayoutContainer;
