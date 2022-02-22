import { useContext, useEffect, useRef } from "react";
import { DarkMode } from "../context/DarkModeContext";
import useGetApi from "../Hooks/useGetAPI";


export const Home = () => {

useGetApi("https://pokeapi.co/api/v2/pokemon")
  const modoOscuro = useContext(DarkMode);

  useEffect(() => console.log(modoOscuro), []);

  const titulo = useRef();

  const handleDarkMode = () => {
    modoOscuro.setDarkMode({ fontSize: "30px", weight: "bold", color: "grey" });
  };
  return (
    <>
      <h1 style={modoOscuro.darkMode} ref={titulo}>
        Hola a todos, soy:
      </h1>
      <button onClick={handleDarkMode}>Cambiar a light mode</button>
    </>
  );
};