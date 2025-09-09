import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Footer from "./components/Footer";
import Category from "./components/Categories";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Category />
      <Footer />

    </div>
  );
}

export default App;
