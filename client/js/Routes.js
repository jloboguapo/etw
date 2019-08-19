import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
                exact
                key={path}
                path={path}
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
