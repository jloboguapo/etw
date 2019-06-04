import React from 'react';

function Header () {
  return (
    <div className='etw-header-container'>
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

export default Header;
