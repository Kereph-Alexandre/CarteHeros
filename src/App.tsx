import "./App.css";

import React from "react";
import Router from "./routes/routes";
import { Header } from "./communs/header/header";
import { Footer } from "./communs/footer/footer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
