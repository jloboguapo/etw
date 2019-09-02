import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import _isEmpty from 'lodash.isempty';
import App from './components/App';
import ContentContainer from './components/ContentContainer';
import { useContentful } from '../js/utils/customHooks';

const Routes = () => {
  const [pages, setPages] = useState([]);

  const client = useContentful();

  const fetchData = async () => {
    const response = await client.getEntries({
      include: 10,
      sys: {
        type: 'Link',
        linkType: 'Entry',
        id: 'WnYTMvfL7UWue8TvJ3lyD'
      },
      content_type: 'pages'
    });
    setPages(response.items);
  };

  const foundSection =
    pages && pages.find(page => page.fields.path === '/leadership-resources');

  const filtered =
    foundSection &&
    foundSection.fields.sections
      .find(section => section.fields.name === 'article')
      .fields.items.filter(item => item.fields.name === 'blog');

  const blogPaths = !_isEmpty(filtered) && filtered;

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <App>
        <Switch>
          {pages.map(({ fields, sys }) => {
            const { id } = sys;
            const { path, title } = fields;

            return (
              <Route
                key={path}
                exact
                path={path}
                render={routeProps => (
                  <ContentContainer
                    history={routeProps.history}
                    title={title}
                    id={id}
                    blog={filtered}
                  />
                )}
              />
            );
          })}
          {pages.map(({ fields, sys }) => {
            const { id } = sys;
            const { path, title } = fields;

            return (
              <Route
                key={path}
                exact
                path={
                  blogPaths &&
                  blogPaths.map(
                    blogPath => `/leadership-resources${blogPath.fields.path}`
                  )
                }
                render={routeProps => (
                  <ContentContainer
                    history={routeProps.history}
                    title={title}
                    id={id}
                  />
                )}
              />
            );
          })}
        </Switch>
      </App>
    </BrowserRouter>
  );
};

export default Routes;
