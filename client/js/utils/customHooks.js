import { createClient } from 'contentful';

export const useContentful = () =>
  createClient({
    space: '8r4ccjrv3jhp',
    accessToken: 'NsCGjckS1lVjwbDFBRVsReHqY00wH-rPK9ECBg6Oqec'
  });
