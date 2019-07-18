import React, { useState } from 'react';
import ButtonUp from './Button';

const Subscribe = props => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('this is where it will make the api call to subscribe', value);
  };

  return (
    <form
      className="subscribe-container form-inline justify-content-center"
      onSubmit={handleSubmit}
    >
      <input
        className="subscribe-input form-control"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="name@company.com"
      />
      <ButtonUp
        type="submit"
        variant="primary"
        className="ml-0 ml-lg-3"
        content="Subscribe"
      />
      <p className="small">
        By subscribing, you agree to our <a href="#">privacy policy</a>.
      </p>
    </form>
  );
};

export default Subscribe;
