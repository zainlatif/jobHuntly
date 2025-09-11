import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-title">
          <h1>
            Discover <br />
            <span className="highlight">more than </span> <br />
            <span className="number">5000+ Jobs</span>
          </h1>
          <img src="/assets/companies/blueline.svg" alt="blueline.svg" />
          <p>
            Great platform for the job seeker that searching for new career heights
            and passionate about startups.
          </p>
        </div>


        {/* Search Box */}
        <div className="search-box">
          <div className="search-content">
            <img src="/assets/companies/search.svg" alt="search_icon" />
          <input type="text" placeholder="Job title or keyword" />
          </div>
          <div className="location-content">
            <img src="/assets/companies/location.svg" alt="location_icon" />
          <input type="text" placeholder="Location, e.g. Florence, Italy" />
          </div>
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
