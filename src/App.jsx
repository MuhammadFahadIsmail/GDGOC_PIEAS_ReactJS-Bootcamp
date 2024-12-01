import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BorrowedPage from "./pages/BorrowedPage";
import FavoritesPage from "./pages/FavoritesPage";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/borrowed" element={<BorrowedPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  </Router>
);

export default App;
