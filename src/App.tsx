import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Sections/Pages/Home.tsx";
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