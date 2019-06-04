import React from 'react';
import Cheader from './Cheader';
import Footer from './Footer';

import '../../sass/style.scss';

export default function App({ children }) {
  return (
    <div className="etw-main-container">
      {window.location.pathname !== '/' && <Header />}
      {children}
      {window.location.pathname !== '/' && <Footer />}
    </div>
  );
}
