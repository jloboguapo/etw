import React from 'react';

import '../../sass/style.scss';

export default function App({ children }) {
  return (
    <div className="etw-main-container">
      {children}
    </div>
  );
}
