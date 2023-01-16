import "./App.css";

import React from "react";
import { HeroLists } from "./pages/heroLists";

const App: React.FC = () => {
  return (
    <div className="App">
      <HeroLists />
    </div>
  );
};

export default App;
