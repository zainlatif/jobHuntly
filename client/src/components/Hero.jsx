import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Discover <br />
          <span className="highlight">more than <span className="number">5000+ Jobs</span></span>
        </h1>
        <p>
          Great platform for the job seeker that searching for new career heights 
          and passionate about startups.
        </p>

        {/* Search Box */}
        <div className="search-box">
          <input type="text" placeholder="Job title or keyword" />
          <input type="text" placeholder="Location, e.g. Florence, Italy" />
          <button>Search my job</button>
        </div>

        {/* Popular keywords */}
        <p className="popular">
          Popular: <span>UI Designer</span>, <span>UX Researcher</span>, 
          <span> Android</span>, <span> Admin</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
