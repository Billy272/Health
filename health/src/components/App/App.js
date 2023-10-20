import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DataProcessing from '../DataProcessing/DataProcessing';
import Header from '../Header/header';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<DataProcessing />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
