import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter } from "react-router-dom"



import { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./components/pages/HomePage";
import APropos from './components/pages/APropos';
import CV from './components/pages/CV';


function App() {
 
  return (
    <HashRouter>
      
      <Navbar
     
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="/cv" element={<CV />} />

        
        
      </Routes>
    </HashRouter>
  );
}




export default App
