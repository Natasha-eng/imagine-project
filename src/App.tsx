import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Header } from "./components/Header/Header";
import { ArtWorks } from "./components/ArtWorks/ArtWorks";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <ArtWorks />
      <Footer />
    </div>
  );
}

export default App;
