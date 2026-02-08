import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

export default function Navbar({}) {
 

  
  //Objet de navigation
  const navigate = useNavigate();

  //Definition d'un state contenant l'id du button avec le focus
  //ID 0 : Logo Portefolio -> Page d'acceuil
  //ID 1 : Bouton Projets -> Page projet
  //ID 2 : Bouton Competencs -> Page competences
  //ID 3 : Bouton Connexion -> Page d'authentification
  //ID 4 : Bouton de deconnexion

  const [focusBtnId, setFocusBtnId] = useState(0);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/" || location.pathname == "/home") {
      setFocusBtnId(0);
    } else if (location.pathname == "/apropos") {
      setFocusBtnId(1);
    } else if (location.pathname == "/cv") {
      setFocusBtnId(2);
    } 
    //Pour detecter un changement de route
  }, [location.pathname]);

  //Definition d'une constante definissant les classename tailwind approprie selon si le boutton est focus ou pas
  const focusedBtnStyle =
    //  "mr-5 p-3 border border-gray-500 cursor-pointer rounded-lg bg-pink-500 text-white ";
    "mr-5 p-3 text-red-600 cursor-pointer font-medium  border-b-2 border-yellow-300 text-white ";

  const noFocusedBtnStyle =
    //    "mr-5 p-3 border rounded-lg border-gray-500 cursor-pointer hover:bg-pink-500 hover:text-white";
    "mr-5 p-3 cursor-pointer border-b-2 border-gray-500 hover:border-yellow-300";

  //Handler de capture des click sur les buttons du navbar
  const btnClickHandler = (id) => {
    //Navigation
    if (id == 0) {
      navigate("/home");
    } else if (id == 1) {
      navigate("/apropos");
    } else if (id == 2) {
      navigate("/cv");
    } 
  };

  return (
    // barre de navigation : definis par deux elements

    <nav className="relative flex items-center justify-center text-white h-20 px-3 sm:px-4">
      {/* Le contenue du navbar */}

      <div className="flex flex-row items-center justify-between w-full max-w-6xl">
        {/* Le logo */}

        <div
          className="flex flex-col items-start sm:items-center cursor-pointer max-w-[60%] sm:max-w-none"
          onClick={() => {
            btnClickHandler(0);
          }}
        >
          <span className="text-sm sm:text-base md:text-lg lg:text-xl tracking-[0.35em] whitespace-nowrap">
            PORTFOLIO
          </span>
          <div className="mt-1 text-[9px] sm:text-[10px] whitespace-nowrap">
            <span className="text-pink-500 text-[0.7rem] sm:text-xs">[</span> K H A D I D I A T O U &nbsp;&nbsp; B A
            <span className="text-pink-500 text-[0.7rem] sm:text-xs">]</span>
          </div>
        </div>

        {/* Container des bouttons Projets Competences et Connexion */}

        <div className="flex items-center text-xs sm:text-sm">
          

          <button
            className={focusBtnId == 0 ? focusedBtnStyle : noFocusedBtnStyle}
            onClick={() => {
              btnClickHandler(0);
            }}
          >
            Accueil
          </button>
          <button
            className={focusBtnId == 1 ? focusedBtnStyle : noFocusedBtnStyle}
            onClick={() => {
              btnClickHandler(1);
            }}
          >
            A propos de moi
          </button>
          <button
            className={focusBtnId == 2 ? focusedBtnStyle : noFocusedBtnStyle}
            onClick={() => {
              btnClickHandler(2);
            }}
          >
            CV
          </button>

          {/* Si l'utilisateur est non authentifie => boutton de connexion */}

        

          
        </div>
      </div>

      {/* La bordure du navbar : creer de maniere a pouvoir centrer a la place du bordure bottom et definis a une taille de 2/3 du viewport width*/}
      <div className="w-2/3 border-b-4 border-white absolute bottom-0"></div>
    </nav>
  );
}
