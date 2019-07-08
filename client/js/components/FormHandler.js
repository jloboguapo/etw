import React, { useState } from 'react';

const useFormHandler = callback => {
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
