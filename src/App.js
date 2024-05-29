import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import SkillsPage from "./Pages/SkillsPage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";

function App() {
  return (
    <BrowserRouter basename="/MitchellsPortfolio">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Skills' element={<SkillsPage />} />
        <Route path='/About' element={<AboutPage />} />
        <Route path='/Resume' element={<ResumePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
