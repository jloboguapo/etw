import React from 'react';
import Cheader from './Cheader';
import Footer from './Footer';

import '../../sass/style.scss';

export default function App({ children }) {
  return (
    <div className="etw-main-container">
      {window.location.pathname !== '/' && <Cheader />}
      {children}
      {window.location.pathname !== '/' && <Footer />}
    </div>
  );
}
