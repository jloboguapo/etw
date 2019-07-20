import { useContentful } from './customHooks';

export const getEntriesById = async id => {
  const contentful = useContentful();

  try {
    const response = await contentful.getEntries({
      'sys.id': id
    });

    return response && { ...response.items[0].fields };
  } catch (err) {
    console.warn(err || 'Something went wrong trying to get contentful data');
  }
};
