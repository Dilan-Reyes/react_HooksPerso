import "./App.css";
import { Home } from "./components/Home";
import { DarkModeContext } from "./context/DarkModeContext";

const App = () => {
  return (
    <DarkModeContext>
      <Home />
    </DarkModeContext>
  );
};

export default App;
