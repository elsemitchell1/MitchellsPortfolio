import React, {useEffect} from "react";
import {HashRouter, Route, Routes, useLocation} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import SkillsPage from "./Pages/SkillsPage";
import WorkPage from "./Pages/WorkPage";
import ResumePage from "./Pages/ResumePage";
import ProjectPage from "./Pages/ProjectPage";
import Footer from "./Components/Footer/Footer";

function App() {
  const ScrollToTop = () => {
    const {pathname} = useLocation();
    useEffect(() => {
      window.scroll(0,0);
    }, [pathname]);
  }
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Skills' element={<SkillsPage />} />
        <Route path='/Work' element={<WorkPage />} />
        <Route path='/Resume' element={<ResumePage />} />
        <Route path='/Projects' element={<ProjectPage />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
