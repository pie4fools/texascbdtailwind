import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from './components/Products';


function App() {
  return (
    <div>
      <Hero />
      <Products />
      <About />
    </div>
  );
}

export default App;
