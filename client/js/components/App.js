import React from 'react';

import '../../sass/style.scss';
import Header from './Header';
import Footer from './Footer';

export default function App({ children }) {
  return (
    <div className="etw-main-container">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
