import React, { useEffect, useState } from 'react';
import _isEmpty from 'lodash.isempty';
import CarouselListener from './CarouselListener';
import SubscribeSection from './SubscribeSection';
import { getEntriesById } from '../utils/contentfulHelpers';
import Blog from './Blog';

const Article = ({ id }) => {
  const [subscription, setSubscription] = useState([]);
  const [resourcesHead, setResourcesHead] = useState({});
  const [blogPost, setBlogPost] = useState({});
  const [blogPostsArray, setBlogPostsArray] = useState([]);

  const fetchData = async () => {
    const response = await getEntriesById(id);
    const items = response.items;

    const getNames = name => {
      const sectionFields = items.filter(array => array.fields.name === name)[0]
        .fields;
      return sectionFields;
    };
    const filtered = items.filter(array => array.fields.name === 'blog');
    const latestPostIndex = !_isEmpty(filtered) && filtered.length - 1;

    const getProperBlogPost =
      window.location.hash === '#/leadership-resources' ||
      window.location.hash === '#/leadership-resources/'
        ? filtered[latestPostIndex]
        : filtered.find(
            blog => blog.fields.path === window.location.hash.slice(22)
          );
    setBlogPostsArray(filtered);
    setBlogPost(getProperBlogPost);
    setSubscription(getNames('subscribe'));
    setResourcesHead(getNames('resourcesHead'));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const blog = !_isEmpty(blogPost) && blogPost;

  return (
    <div className="article-single">
      {blog && <Blog blog={blogPost} />}
      {subscription && <SubscribeSection {...subscription} />}
      <div className="article-related bg-secondary pb-8 pb-lg-11 text-center">
        <h3 className="mb-8">{resourcesHead.title}</h3>
        {!_isEmpty(blogPostsArray) && (
          <CarouselListener blog={blogPostsArray} />
        )}
      </div>
    </div>
  );
};

export default Article;
