import React, { useState } from 'react';
import Button from './Button';

const Subscribe = props => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('this is where it will make the api call to subscribe', value);
  };

  return (
    <form className="etw-subscribe-container" onSubmit={handleSubmit}>
      <input
        className="etw-input"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="name@company.com"
      />
      <Button content="Subscribe" />
    </form>
  );
};

export default Subscribe;
