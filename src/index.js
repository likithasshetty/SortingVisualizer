import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root for React 18

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
