import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MainContextProvider from './Context/MainContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainContextProvider>
    <App />
    </MainContextProvider>
  </React.StrictMode>
);

