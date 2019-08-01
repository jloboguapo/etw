import React from 'react';
import PropTypes from 'prop-types';
import StatsSection from './StatsSection';
import ChartsCardsContainer from './ChartsCardsContainer';
import ExecutionContainer from './ExecutionContainer';
import DefaultSection from './DefaultSection';
import ServicesSoftware from './ServicesSoftware';
import ReadyWin from './ReadyWin';

const DefaultPageLayoutContainer = props => {
  const { data } = props;
  const found = name =>
    data.sections.find(
      section => section.fields && section.fields.name === name
    );

  if (data && data.sections) {
    const foundDefaultSection = found('defaultSection');
    const foundStatsSection = found('statsSection');
    const foundChartsCardsContainer = found('chartsCardsContainer');
    const foundExecutionContainer = found('executionContainer');
    const foundServicesSoftware = found('servicesSoftware');

    return (
      <div className="performance-solutions-container">
        {foundDefaultSection && (
          <DefaultSection id={foundDefaultSection.sys.id} />
        )}
        {foundStatsSection && <StatsSection id={foundStatsSection.sys.id} />}
        {foundChartsCardsContainer && (
          <ChartsCardsContainer id={foundChartsCardsContainer.sys.id} />
        )}
        {foundExecutionContainer && (
          <ExecutionContainer id={foundExecutionContainer.sys.id} />
        )}
        {foundServicesSoftware && (
          <ServicesSoftware id={foundServicesSoftware.sys.id} />
        )}
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
