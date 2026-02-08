import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const checkWidth = () => {
  //     // On considère que moins de 1024px = portable ou tablette
  //     setIsMobile(window.innerWidth < 1024);
  //   };

  //   checkWidth();
  //   window.addEventListener('resize', checkWidth);
  //   return () => window.removeEventListener('resize', checkWidth);
  // }, []);

  // // Si on est sur mobile/tablette, on affiche l'invitation
  // if (isMobile) {
  //   return (
  //     <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center p-8 text-center z-[9999]">
  //       <div className="mb-6 text-[#e91e63] text-6xl">💻</div>
  //       <h1 className="text-2xl font-bold uppercase mb-4 tracking-widest">
  //         Expérience Optimisée sur Ordinateur
  //       </h1>
  //       <p className="text-gray-400 max-w-md leading-relaxed">
  //         Bonjour ! Le portfolio de <span className="text-[#e91e63] font-bold">Khadidiatou Ba</span> a été conçu comme une immersion narrative pensée pour le grand écran.
  //       </p>
  //       <p className="mt-6 text-sm border border-[#e91e63] px-4 py-2 rounded-full">
  //         Veuillez ouvrir ce lien sur un **ordinateur** pour découvrir son univers.
  //       </p>
  //     </div>
  //   );
  // }

  return (
    <Router>
      
      <Navbar
     
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="/cv" element={<CV />} />

        
        
      </Routes>
    </Router>
  );
}




export default App
