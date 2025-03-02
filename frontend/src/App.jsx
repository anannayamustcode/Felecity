import './index.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './Landing';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import Explore from './Pages/Students/Explore';
import MyLabs from './Pages/Educator/MyLabs';
import Educator from './Pages/Educator/Educator';
import Dashboard from './Pages/Educator/Dashboard';
import AddLab from './Pages/Educator/AddLab';
import LayoutGeneral from "./Layouts/LayoutGeneral";  // Layout with General Navbar
import LayoutEducator from "./Layouts/LayoutEducator";  // Layout with Educator Navbar

const App = () => {
  return (

    <Router>
      <Routes>
      <Route path="/" element={<LayoutGeneral />}>

        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/explore" element={<Explore />} />
        </Route>
        {/* Parent Route for Educator Section */}

        <Route path="/educator" element={<LayoutEducator />}>
          <Route index element={<Dashboard />} /> {/* Default page when visiting /educator */}
          <Route path="mylabs" element={<MyLabs />} />
          <Route path="addlab" element={<AddLab />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
