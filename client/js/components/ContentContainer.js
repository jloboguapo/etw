import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import BlogPageLayoutContainer from './BlogPageLayoutContainer';
import DefaultPageLayoutContainer from './DefaultPageLayoutContainer';
import { setMessageBannerContent } from '../actionCreators';
import { useContentful } from '../utils/customHooks';
import HomePageLayoutContainer from './HomePageLayoutContainer';

const ContentContainer = props => {
  const dispatch = useDispatch();
  const client = useContentful();
  const [entry, setEntry] = useState({});
  const { id, pageLayout } = props;

  const getEntry = async () => {
    try {
      const response = await client.getEntry(id);
      const { sections } = response.fields;
      const found =
        sections &&
        sections.find(section => section.fields && section.fields.messageBanner);

      if (found) {
        dispatch(setMessageBannerContent(found.fields.messageBanner));
      }

      setEntry(response);
    } catch (err) {
      console.warn(err || 'Error finding messageBanner');
    }
  };

  useEffect(() => {
    getEntry();
  }, []);

  switch (pageLayout) {
    case 'home':
      return <HomePageLayoutContainer data={entry} />;
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
