import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const redirectPath = window.location.search.replace("?redirect=", "");
if (redirectPath) {
  window.history.replaceState(null, "", redirectPath);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/Christopher-Portfolio">
    <App />
  </BrowserRouter>
);
