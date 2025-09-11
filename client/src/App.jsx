import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Footer from "./components/Footer";
import Category from "./components/Categories";
import Feature from "./components/Feature";
import Dashboard from "./components/Dashboard";



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Category />
      <Dashboard />
      <Feature />
      <Footer />
    </div>
  );
}

export default App;
