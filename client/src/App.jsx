import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Categories from "./components/Categories";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Categories />
      <Footer />
      {/* Other sections like Hero, Search box, etc */}
    </div>
  );
}

export default App;
