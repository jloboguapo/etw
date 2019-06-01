import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const navItems = [
    'About'
  ];

  return (
    <div className="etw-nav-bar-container">
      {navItems.map((name, idx) => {
        const location = name.toLowerCase();
        const selected = `/${location}` === window.location.pathname;
        return (
          <Link
            key={idx}
            className={`etw-nav-bar-items ${selected && 'selected'}`}
            to={`/${location}`}
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavBar;
