import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import ImageCards from "./Components/ImageCards";
import Hero from "./Components/Hero";
import Footer from './Components/FooterComponent';

function App() {
  return (
    <div className="App bg-image">
      <Navbar />
      <Hero />
      <ImageCards />
      <Footer />
    </div>
  );
}

export default App;
