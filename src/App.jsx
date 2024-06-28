import { useState } from "react";
import "./App.css";
import HeroPlate from "./Components/HeroPlate";
import Social from "./Components/Social";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import BuiltWith from "./Components/BuiltWith";

function App() {
  return (
    <span className="flex flex-col justify-between h-screen">
      <HeroPlate />
      <Social />
      <Skills />
      <Projects />
      <BuiltWith />
    </span>
  );
}

export default App;
