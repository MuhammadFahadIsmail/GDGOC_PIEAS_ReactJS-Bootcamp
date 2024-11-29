import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BookProvider } from './BookProvider'; // Import the provider
import './index.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
      <App />
    </BookProvider>
  </StrictMode>
);

