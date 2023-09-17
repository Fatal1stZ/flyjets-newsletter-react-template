import React from 'react';
import ReactDOM from 'react-dom/client';
// import Template from './templates/emptyLegs';
import Template from './templates/newsletter';
import reportWebVitals from './reportWebVitals';
import ReactDOMServer from 'react-dom/server';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Template />
  </React.StrictMode>
);

console.log(ReactDOMServer.renderToString(<Template />))



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
