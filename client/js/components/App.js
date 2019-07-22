import React, { useEffect, useState } from 'react';

import '../../sass/style.scss';
import Header from './Header';
import Footer from './Footer';
import { useContentful } from '../utils/customHooks';

export default function App({ children }) {
  const [entries, setEntry] = useState([]);

  const client = useContentful();

  const fetchData = async () => {
    const response = await client.getEntries({
      include: 10,
      sys: {
        type: 'Link',
        linkType: 'Entry',
        id: 'WnYTMvfL7UWue8TvJ3lyD'
      },
      content_type: 'common'
    });
    setEntry(response.items);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const found = entries.find(
    entry => entry.fields && entry.fields.name.toLowerCase() === 'common'
  );
  const items = found && found.fields.items;
  const findByName = name => items.find(item => item.fields.name === name);

  const foundHeader = items && findByName('header');
  const foundFooter = items && findByName('footer');

  return (
    <div className="etw-main-container">
      {foundHeader && <Header {...foundHeader.fields} />}
      {children}
      {foundFooter && <Footer {...foundFooter.fields} />}
    </div>
  );
}
