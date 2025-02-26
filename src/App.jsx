import './index.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './Landing';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import Explore from './Explore'; // Import the Explore component

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/explore" element={<Explore />} /> {/* Added the Explore page */}
      </Routes>
    </Router>
  );
}

export default App;
