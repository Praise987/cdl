import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavPage from "./Sections/NavPage";
import LoginForm from "./Sections/Pages/Login";
import Hero from "./Sections/Pages/Hero";
import CoreServices from "./Sections/Pages/CoreServices";
import NewPassword from "./Sections/Pages/NewPassword.tsx";
// import Home from "./Sections/Pages/Home.tsx";
import Home from "./Sections/Pages/Home.tsx";
import NewsLetter from "./Sections/Pages/NewsLetter.tsx";
import Footer from "./Sections/Pages/Footer.tsx";
import AccountCreated from "./Sections/Pages/AccountCreated.tsx";
import ForgotPassword from "./Sections/Pages/ForgotPassword.tsx";
import Dashboard from "./Sections/Pages/Overview.tsx";

const App: React.FC = () => {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>

  );
};

export default App;