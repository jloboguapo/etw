import React from 'react';
import Cheader from './Cheader';
import Cfooter from './Cfooter';

import '../../sass/style.scss';

export default function App({ children }) {
  return (
    <div className="etw-ultimate-container">
      {window.location.pathname !== '/' && <Cheader />}
      {children}
      {window.location.pathname !== '/' && <Cfooter />}
    </div>
  );
}
