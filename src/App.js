import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './HomePage';

import BirthdayMessage from './BirthdayMessage';
import BirthdayCard from './BirthdayCard';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/birthday-card" element={<BirthdayCard name="Yash" />} />
          <Route path="/birthday-message" element={<BirthdayMessage />} />
          
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
