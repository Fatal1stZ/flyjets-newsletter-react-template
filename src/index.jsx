import React from 'react';
import ReactDOM from 'react-dom/client';
// import Template from './templates/emptyLegs';
import Template from './templates/newsletter';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <Template />
  </React.StrictMode>
);
