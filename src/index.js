import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import html2pdf from 'html2pdf.js';

window.html2pdf = html2pdf;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
