import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Read from './Read';
import Create from './Create';

function App() {
  return (
    <Router>
      <div>
        <Link to="/" className="link">Home</Link>
        <Link to="/read-data" className='link'>Read Data</Link>
        <Link to="/create" className='link'>Create New Data</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/read-data" element={<Read />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
