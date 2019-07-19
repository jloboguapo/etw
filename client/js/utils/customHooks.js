import { useState } from 'react';
import { createClient } from 'contentful';

export const useContentful = () =>
  createClient({
    space: '8r4ccjrv3jhp',
    accessToken: 'NsCGjckS1lVjwbDFBRVsReHqY00wH-rPK9ECBg6Oqec'
  });

const useFormHandler = () => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = e => {
    if (e) {
      e.preventDefault();
      console.log('this is where it will make the api call', inputs);
    }
  };
  const handleInputChange = e => {
    const { name, value } = e.target;
    e.persist();
    setInputs(Object.assign(inputs, { [name]: value }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};
export default useFormHandler;
