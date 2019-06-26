import React from 'react';
import Footer from './Footer';

import '../../sass/style.scss';

export default function App({ children }) {
  return (
    <div className="etw-main-container">
      {children}
      <Footer />
    </div>
  );
}
