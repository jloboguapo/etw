import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash.isempty';
import { useDispatch } from 'react-redux';
import { setMessageBannerContent } from '../actionCreators';
import { getEntriesById } from '../utils/contentfulHelpers';
import Banner from './Banner';
import CardsContainer from './CardsContainer';
import ChartsCardsContainer from './ChartsCardsContainer';
import DefaultSection from './DefaultSection';
import ExecutionContainer from './ExecutionContainer';
import HeroContent from './HeroContent';
import MainContent from './MainContent';
import ReadyWin from './ReadyWin';
import ServicesSoftware from './ServicesSoftware';
import StatsSection from './StatsSection';
import Article from './Article';
import RichText from './RichText';

const ContentContainer = props => {
  const dispatch = useDispatch();
  const [entry, setEntry] = useState({});
  const { id, blog } = props;

  const getEntry = async () => {
    try {
      const response = await getEntriesById(id);
      const { sections } = response;
      const found =
        sections &&
        sections.find(
          section => section.fields && section.fields.messageBanner
        );

      if (found) {
        dispatch(setMessageBannerContent(found.fields.messageBanner));
      }

      setEntry(response);
    } catch (err) {
      console.warn(err || 'Error finding messageBanner');
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getEntry();
    scrollToTop();
  }, []);

  const bodyColorSection =
    !_isEmpty(entry) &&
    entry.sections.find(
      section =>
        section.sys.id === '3BsGM1W5cbFoYtCsIKmjDr' ||
        section.sys.id === 'OxLmrRa8x6eAWR7bWpkXb'
    );

  useEffect(() => {
    bodyColorSection &&
    (bodyColorSection.sys.id === '3BsGM1W5cbFoYtCsIKmjDr' ||
      bodyColorSection.sys.id === 'OxLmrRa8x6eAWR7bWpkXb')
      ? (document.body.className = 'bg-white')
      : (document.body.className = '');
  }, [bodyColorSection]);

  const components = {
    defaultSection: (id, key) => <DefaultSection key={key} id={id} />,
    statsSection: (id, key) => <StatsSection key={key} id={id} />,
    chartsCardsContainer: (id, key) => (
      <ChartsCardsContainer key={key} id={id} />
    ),
    executionContainer: (id, key) => <ExecutionContainer key={key} id={id} />,
    servicesSoftware: (id, key) => <ServicesSoftware key={key} id={id} />,
    readyWin: (id, key) => <ReadyWin key={key} id={id} />,
    richText: (id, key) => <RichText key={key} id={id} />,
    heroContent: (id, key) => <HeroContent key={key} id={id} />,
    cardsContainer: (id, key) => <CardsContainer key={key} id={id} />,
    mainContent: (id, key) => <MainContent key={key} id={id} blog={blog} />,
    article: (id, key) => <Article key={key} id={id} />,
    bannerId: (id, key) => <Banner key={key} id={id} />
  };

  if (entry && entry.sections) {
    return entry.sections.map(({ fields, sys }, index) => {
      if (fields && fields.name) {
        if (fields.name === 'banner' && entry.bannerId) {
          return components.bannerId(
            entry.bannerId,
            `${entry.bannerId}${index}`
          );
        }

        return (
          fields.name &&
          components[fields.name] &&
          components[fields.name](sys.id, `${sys.id}${index}`)
        );
      }
      return null;
    });
  }

  return null;
};

ContentContainer.propTypes = {
  history: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default ContentContainer;
