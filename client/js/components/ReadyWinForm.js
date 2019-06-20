import React, { useState } from 'react';
import Button from './Button';

const ReadyWinForm = props => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('this is where it will make the api call', value);
  };

  return (
    <form className="etw-subscribe-container" onSubmit={handleSubmit}>
      <input
        className="etw-input"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Name"
      />
      <input
        className="etw-input"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Organization name"
      />
      <input
        className="etw-input"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Email"
      />
      <input
        className="etw-input"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Role of title"
      />
      <Button content="Request information" />
    </form>
  );
};

export default ReadyWinForm;
