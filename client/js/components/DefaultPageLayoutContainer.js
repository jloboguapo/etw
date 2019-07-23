import React from 'react';
import PropTypes from 'prop-types';
import StatsSection from './StatsSection';
import DefaultSection from './DefaultSection';
import ServicesSoftware from './ServicesSoftware';
import ReadyWin from './ReadyWin';

const DefaultPageLayoutContainer = props => {
  const { data } = props;
  const found = name =>
    data.sections.find(
      section => section.fields && section.fields.name === name
    );
  console.log(data)

  if (data && data.sections) {
    const foundDefaultSection = found('defaultSection');
    const foundStatsSection = found('statsSection');
    const foundServices = found('mainContent');

    return (
      <div className="performance-solutions-container">
        {foundDefaultSection && (
          <DefaultSection id={foundDefaultSection.sys.id} />
        )}
        {foundStatsSection && <StatsSection id={foundStatsSection.sys.id} />}
        <ServicesSoftware />
        <ReadyWin />
      </div>
    );
  }
  return null;
};

DefaultPageLayoutContainer.propTypes = {
  data: PropTypes.object.isRequired
};

export default DefaultPageLayoutContainer;
