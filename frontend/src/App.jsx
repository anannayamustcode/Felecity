import './index.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './Landing';
import Explore from './Explore'; // Import the Explore component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<Explore />} /> {/* Added the Explore page */}
      </Routes>
    </Router>
  );
}

export default App;
