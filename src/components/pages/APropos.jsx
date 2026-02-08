import React from 'react'
import photo01 from "../../assets/kb.jpeg";
import photo02 from "../../assets/c1.jpeg";
import photo03 from "../../assets/c2.png";
import photo04 from "../../assets/c3.jpeg";
import photo05 from "../../assets/b1.jpeg";
import photo07 from "../../assets/b3.jpeg";
import photo08 from "../../assets/b4.jpg";

export default function APropos() {
  return (
    <div className='bg-white w-full h-auto text-black font-["Montserrat",sans-serif]'>
      
      {/* SECTION 1: INTRODUCTION */}
      <div className='flex flex-col md:flex-row items-center md:items-start p-6 md:p-12 gap-8'>
        {/* Photo de profil */}
        <div
          style={{ backgroundImage: `url(${photo01})` }}
          className="w-full max-w-[300px] md:w-1/3 aspect-square rounded-lg shadow-lg bg-cover bg-center"
        ></div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-light mt-4 md:mt-10">
            Hello 👋🏽, je m’appelle <span className="font-bold">Khadidiatou Ba.</span>
          </h1>
          <h2 className="inline-block mt-6 px-4 py-1 bg-pink-500 text-white text-xl md:text-3xl font-light">
            L'ambition au bout des doigts
          </h2>
          <div className="mt-6 text-lg md:text-2xl leading-relaxed text-gray-800">
            Si vous me cherchez la journée, vous me trouverez sans doute entre les murs de l’ESP, plongée dans les subtilités du DECOGEF 1 🙂‍↕️.<br/>
            Mon objectif est clair : devenir une figure de l'expertise comptable 🤩 <br /> 
            Pour moi, la comptabilité n'est pas qu'une question de chiffres, c'est l'art de mettre de l'ordre dans le chaos et de bâtir des structures solides pour l'avenir.
          </div>
        </div>
      </div>

      {/* SECTION 2: CULTURE */}
      <div className='mt-16 md:mt-24 px-6 md:px-12'>
        <h2 className="text-2xl md:text-4xl font-light flex items-center">
          <span className="bg-pink-500 w-3 h-10 md:h-12 mr-4"></span>
          La fierté d'une culture, la douceur d'une langue
        </h2>

        {/* Galerie Photos Culture - Défilement horizontal sur mobile, Grille sur PC */}
        <div className='flex flex-col md:flex-row bg-black p-8 md:p-16 mt-8 gap-6 justify-center items-center rounded-xl'>
          {[photo02, photo03, photo04].map((img, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${img})` }}
              className="w-full max-w-[250px] md:w-1/5 aspect-square rounded-lg shadow-md bg-cover bg-center transition-transform hover:scale-105"
            ></div>
          ))}
        </div>

        <div className="mt-8 text-lg md:text-2xl leading-relaxed text-gray-800">
          Au-delà des bilans et des audits, mon cœur bat au rythme de mes racines. 
          Le <span className="text-pink-600 font-semibold">Pulaar</span> n’est pas seulement ma langue maternelle, c’est ma langue de cœur ❤️.
          Elle porte en elle la sagesse et la noblesse de la culture Peulh, un héritage que je chéris.
        </div>
      </div>

      {/* SECTION 3: PASSIONS */}
      <div className='mt-16 md:mt-24 px-6 md:px-12'>
        <h2 className="text-2xl md:text-4xl font-light flex items-center">
          <span className="bg-pink-500 w-3 h-10 md:h-12 mr-4"></span>
          Curiosité et saveurs
        </h2>

        <div className='flex flex-col md:flex-row bg-black p-8 md:p-16 mt-8 gap-6 justify-center items-center rounded-xl'>
          {[photo05, photo08, photo07].map((img, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${img})` }}
              className="w-full max-w-[250px] md:w-1/5 aspect-square rounded-lg shadow-md bg-cover bg-center transition-transform hover:scale-105"
            ></div>
          ))}
        </div>

        <div className="mt-8 mb-20 text-lg md:text-2xl leading-relaxed text-gray-800">
          Quand les livres de cours se ferment, ma cuisine devient mon laboratoire. 
          J'aime explorer de nouvelles recettes, mariant les saveurs traditionnelles à mes découvertes du moment. 
          En attendant de parcourir physiquement le globe, je m'évade par la lecture et l'imagination.
        </div>
      </div>

      {/* Footer spacer */}
      <div className="h-20"></div>
    </div>
  )
}