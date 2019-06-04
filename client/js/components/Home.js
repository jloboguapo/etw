import React, { useState } from 'react';

const Home = props => {
  const [input, setInput] = useState(1);

  return (
    <div className='etw-home-container'>
      <img className='etw-logo' src='/logo.png' />
      <p>
        Performance Solutions
      </p>
      <p>
        Leadership Resources
      </p>
      <p>
        more
      </p>
      <button
        className='etw-webinar-button'
      >
        JOIN A WEBINAR
      </button>
    </div>
  );
};

export default Home;
