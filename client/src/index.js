import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { usePopup } from 'react-hook-popup';
import { PopupProvider } from 'react-hook-popup';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PopupProvider><App /></PopupProvider>
    
  </React.StrictMode>
);

