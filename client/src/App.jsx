import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/homePage';
import SkillsPage from './Pages/skillsPage';
import './App.css';
import Header from './components/NavBar';
import Contact from './components/contact';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route 
          path="/"
          element={<HomePage />} 
        />
        <Route 
          path="/skills" 
          element={<SkillsPage />} 
        />
        <Route 
          path='/Contact'
          element={<Contact/>}
        />
        
      </Routes>
    </>
  )
};

export default App;