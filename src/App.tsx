import "./App.css";

import React from "react";
import Router from "./routes/routes";
import { Header } from "./composants/communs/header/header";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
};

export default App;
