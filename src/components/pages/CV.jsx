import React from 'react';
import maPhoto from '../../assets/kb2.jpeg';

export default function CV() {
  return (
    <section id="cv-section" className="py-16 px-6 md:px-[10%] bg-white font-sans">
      
      {/* Header avec Photo */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 uppercase tracking-tight">
            Mon Parcours
          </h2>
          <div className="w-16 h-1.5 bg-[#e91e63] mt-2"></div>
        </div>

        {/* Emplacement Photo Arrondie */}
        <div className="flex justify-center">
        <div className="relative">
            <div className="w-48 h-48 md:w-48 md:h-48 rounded-full border-4 border-[#e91e63] p-1 shadow-lg overflow-hidden transition-transform hover:scale-105">
            <img 
                src={maPhoto} // On utilise la variable ici avec des accolades
                alt="Khadidiatou Ba"
                className="w-full h-full object-cover rounded-full"
            />
            </div>
            {/* Petit badge décoratif */}
            <div className="absolute bottom-1 right-1 bg-[#e91e63] w-6 h-6 rounded-full border-2 border-white shadow-sm"></div>
        </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* État Civil */}
        <div className="p-6 bg-gray-50 border-l-4 border-[#e91e63] rounded-r-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-[#e91e63] font-bold uppercase mb-4 flex items-center gap-2">
            📍 État Civil
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li><span className="font-bold">Nom:</span> Khadidiatou Ba</li>
            <li><span className="font-bold">Née le:</span> 06 Mars 2005 à Ndioum</li>
            <li><span className="font-bold">Nationalité:</span> Sénégalaise</li>
            <li><span className="font-bold">Adresse:</span> Sicap Foire, Dakar</li>
            <li><span className="font-bold">Contact:</span> 77 277 16 51</li>
            <li className="italic text-sm text-[#e91e63]">Khadidiatouba335@gmail.com</li>
          </ul>
        </div>

        {/* Formation */}
        <div className="p-6 bg-gray-50 border-l-4 border-[#e91e63] rounded-r-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-[#e91e63] font-bold uppercase mb-4 flex items-center gap-2">
            🎓 Formation
          </h3>
          <div className="space-y-4">
            <div className="relative pl-4 border-l border-gray-300">
              <span className="block font-bold text-[#e91e63]">2026</span>
              <p className="text-gray-800 font-medium">DECOGEF 1 - ESP de Dakar</p>
            </div>
            <div className="relative pl-4 border-l border-gray-300">
              <span className="block font-bold text-gray-500 text-sm">2025</span>
              <p className="text-gray-700">Baccalauréat</p>
            </div>
            <div className="relative pl-4 border-l border-gray-300">
              <span className="block font-bold text-gray-500 text-sm">2022</span>
              <p className="text-gray-700">BFEM - École IPM</p>
            </div>
          </div>
        </div>

        {/* Compétences & Langues */}
        <div className="p-6 bg-gray-50 border-l-4 border-[#e91e63] rounded-r-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-[#e91e63] font-bold uppercase mb-4 flex items-center gap-2">
            🛠 Compétences & Langues
          </h3>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-black text-white px-3 py-1 rounded-full text-xs">Excel</span>
            <span className="bg-black text-white px-3 py-1 rounded-full text-xs">Word</span>
          </div>
          
          <div className="space-y-2 text-gray-700 text-sm">
            <p><span className="font-bold uppercase text-[10px] text-gray-400 block tracking-widest">Internationales</span></p>
            <p><strong>Français & Espagnol:</strong> Parlé et écrit</p>
            <p><strong>Anglais:</strong> Écrit</p>
            <p className="mt-3"><span className="font-bold uppercase text-[10px] text-gray-400 block tracking-widest">Nationales</span></p>
            <p className="text-lg font-medium">Wolof & Pulaar</p>
          </div>
        </div>

        {/* Qualités */}
        <div className="p-6 bg-gray-50 border-l-4 border-[#e91e63] rounded-r-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-[#e91e63] font-bold uppercase mb-4 flex items-center gap-2">
            ✨ Atouts
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 italic">
            <li>Sérieuse et ponctuelle</li>
            <li>Esprit d'équipe</li>
            <li>Travail sous pression</li>
            <li>Assidue et rigoureuse</li>
          </ul>
        </div>
      </div>
    </section>
  );
}