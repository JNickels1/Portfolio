import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/homePage';
import SkillsPage from './Pages/skillsPage';
import './App.css';
import Header from './components/NavBar';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skills" element={<SkillsPage />} />
      </Routes>
    </>
  )
};

export default App;