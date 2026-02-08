import { useNavigate } from "react-router";
import photo01 from "../../assets/photo01.jpg";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#121212] flex flex-col overflow-x-hidden">
      {/* Container Principal */}
      <div className="relative w-full flex-grow flex flex-col lg:flex-row items-center justify-center px-6 py-10 lg:px-20 gap-12">
        
        {/* Section Texte */}
        <div className="z-10 flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2">
          
          {/* Badge Comptabilité / Finance */}
          <div className="text-lg md:text-2xl lg:text-3xl text-white font-light tracking-widest leading-relaxed">
            <span className="text-pink-500">[</span> C O M P T A B I L I T E
            <span className="mx-2 lg:mx-4 inline-block bg-pink-500 px-3 py-1 text-white font-bold">
              F I N A N C E S
            </span>
            <span className="text-pink-500">]</span>
          </div>

          {/* Description */}
          <div className="mt-8 lg:mt-12 text-gray-200 text-lg md:text-2xl max-w-xl leading-relaxed">
            Je m’appelle <span className="text-pink-500 font-semibold">Khadidiatou Ba</span>, 
            étudiante en DECOGEF 1 à l’ESP. Je suis peulh, j’adore ma culture et je suis passionnée par la cuisine.
          </div>

          <div className="mt-4 text-gray-400 text-md md:text-xl italic">
            Voulez-vous en savoir plus sur moi ? <br className="hidden md:block" />
            Cliquez juste en bas 🥰
          </div>
          
          {/* Bouton - Largeur auto sur mobile, fixe sur desktop */}
          <div className="mt-10 lg:mt-16 w-full max-w-md">
            <button 
              onClick={() => navigate("/apropos")}
              className="w-full py-4 px-8 rounded-full border border-pink-400 bg-gradient-to-r from-pink-600 via-rose-500 to-pink-400 text-white text-lg md:text-xl font-bold tracking-widest shadow-lg shadow-pink-500/20 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              À PROPOS DE MOI 🧕🏽
            </button>
          </div>
        </div>

        {/* Section Image - Devient prioritaire ou s'adapte */}
        <div className="relative w-full max-w-[300px] md:max-w-[400px] lg:w-1/3 aspect-square">
            <div 
                style={{ backgroundImage: `url(${photo01})` }}
                className="w-full h-full border-2 border-pink-500/30 rounded-2xl shadow-2xl bg-cover bg-center transition-all hover:rotate-2" 
            ></div>
            {/* Petit élément décoratif derrière l'image */}
            <div className="absolute -inset-4 border border-pink-500/20 rounded-2xl -z-10 hidden lg:block"></div>
        </div>
      </div>

      {/* Footer Signature */}
      <div className="p-6 flex justify-center lg:justify-end items-center text-white text-[10px] md:text-xs tracking-[0.3em] opacity-60">
        K H A D I D I A T O U &nbsp;&nbsp; B A
        <span className="ml-2 border border-pink-500 rounded-full px-1.5 py-0.5 text-[8px]">TM</span>
      </div>
    </div>
  );
}