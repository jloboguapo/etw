import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import BlogPageLayoutContainer from './BlogPageLayoutContainer';
import DefaultPageLayoutContainer from './DefaultPageLayoutContainer';
import { setBannerButtonContent } from '../actionCreators';
import { useContentful } from '../utils/customHooks';
import HomePage from './Homepage';

const ContentContainer = props => {
  const dispatch = useDispatch();
  const client = useContentful();
  const [entry, setEntry] = useState({});
  const { id, pageLayout } = props;
  console.log(pageLayout);

  const getEntry = async () => {
    const response = await client.getEntry(id);
    const { sections } = response.fields;
    const found = sections && sections.find(section => section.fields.bannerButton);

    if (found) {
      dispatch(setBannerButtonContent(found.fields.bannerButton));
    }

    setEntry(response);
  };

  useEffect(() => {
    getEntry();
  }, []);

  console.log(entry);
  // if (props.title === 'Performance Solutions') {
  //   return <PerformanceSolutions />;
  // }
  // return <LeadershipResources />;
  switch (pageLayout) {
    case 'home':
      return <HomePage />;
    case 'blog':
      return <BlogPageLayoutContainer data={entry} />;
    case 'default':
    default:
      return <DefaultPageLayoutContainer data={entry} />;
  }
};

ContentContainer.propTypes = {
  history: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  pageLayout: PropTypes.string.isRequired
};

export default ContentContainer;
