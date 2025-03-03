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
import AboutUs from './AboutUs'; // ✅ Added About Us page
import LayoutGeneral from "./Layouts/LayoutGeneral";  // Layout for students (with footer)
import LayoutEducator from "./Layouts/LayoutEducator";  // Layout for educators (without footer)

const App = () => {
  return (
    <Routes>
      {/* ✅ General Layout (For Public Pages) */}
      <Route path="/" element={<LayoutGeneral />}>
        <Route index element={<LandingPage />} />
        <Route path="explore" element={<Explore />} />
        <Route path="aboutus" element={<AboutUs />} /> {/* ✅ About Us page */}
      </Route>

      {/* ✅ Routes Without Layout (Login & Signup) */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* ✅ Educator Layout (No Footer) */}
      <Route path="/educator" element={<LayoutEducator />}>
        <Route index element={<Dashboard />} />
        <Route path="mylabs" element={<MyLabs />} />
        <Route path="addlab" element={<AddLab />} />
      </Route>
    </Routes>
  );
};

export default App;
