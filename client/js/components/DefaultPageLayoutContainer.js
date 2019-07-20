import React from 'react';
import CombatDisengagement from './CombatDisengagement';
import IntentionalCulture from './IntentionalCulture';
import ServicesSoftware from './ServicesSoftware';
import ReadyWin from './ReadyWin';

const DefaultPageLayoutContainer = () => {
  return (
    <div className="performance-solutions-container">
      <IntentionalCulture />
      <CombatDisengagement />
      <ServicesSoftware />
      <ReadyWin />
    </div>
  );
};

export default DefaultPageLayoutContainer;
