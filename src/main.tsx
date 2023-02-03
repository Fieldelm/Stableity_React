import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/index.css';
import '/home/reka/Stableity/frontend/vite-project/src/i18n/i18n.ts';

  
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
