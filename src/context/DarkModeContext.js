import { createContext, useState } from "react";

export const DarkMode = createContext();

export const DarkModeContext = ({ children }) => {
  const [darkMode, setDarkMode] = useState({
    fontSize: "50px",
    weight: "bold",
  });

  return (
    <DarkMode.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkMode.Provider>
  );
};
