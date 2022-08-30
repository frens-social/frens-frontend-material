import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Auth from './components/auth';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<Home />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
