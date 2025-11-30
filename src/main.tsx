import "./fix-leaflet";

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

import "leaflet/dist/leaflet.css";  // ✔ CSS fix
import "./fix-leaflet";             // ⭐ MISSING FIX

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
