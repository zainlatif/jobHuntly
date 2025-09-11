import React from "react";
import "./latestjob.css";

const latestJobs = [
  {
    id: 1,
    companyLogo: "/assets/companies/revolut.svg",
    company: "Revolut",
    title: "Email Marketing",
    location: "Madrid, Spain",
    type: "Full Time",
    description: "Revolut is looking for Email Marketing to help team manage campaigns...",
    tags: ["Marketing", "Design"],
  },
  {
    id: 2,
    companyLogo: "/assets/companies/dropbox.svg",
    company: "Dropbox",
    title: "Brand Designer",
    location: "San Francisco, US",
    type: "Full Time",
    description: "Dropbox is looking for Brand Designer to help the team to...",
    tags: ["Design", "Business"],
  },
  {
    id: 3,
    companyLogo: "/assets/companies/pitch.svg",
    company: "Pitch",
    title: "Email Marketing",
    location: "Berlin, Germany",
    type: "Full Time",
    description: "Pitch is looking for Customer Manager to join marketing team...",
    tags: ["Marketing"],
  },
  {
    id: 4,
    companyLogo: "/assets/companies/blinkist.svg",
    company: "Blinkist",
    title: "Visual Designer",
    location: "Granada, Spain",
    type: "Full Time",
    description: "Blinkist is looking for Visual Designer to help team design...",
    tags: ["Design"],
  },
  {
    id: 5,
    companyLogo: "/assets/companies/classpass.svg",
    company: "ClassPass",
    title: "Product Designer",
    location: "Manchester, UK",
    type: "Full Time",
    description: "ClassPass is looking for Product Designer to help us...",
    tags: ["Marketing", "Design"],
  },
  {
    id: 6,
    companyLogo: "/assets/companies/canva.svg",
    company: "Canva",
    title: "Lead Designer",
    location: "Ontario, Canada",
    type: "Full Time",
    description: "Canva is looking for Lead Engineer to help develop new...",
    tags: ["Design", "Business"],
  },
  {
    id: 7,
    companyLogo: "/assets/companies/godaddy.svg",
    company: "GoDaddy",
    title: "Brand Strategist",
    location: "Marseille, France",
    type: "Full Time",
    description: "GoDaddy is looking for Brand Strategist to join the team...",
    tags: ["Marketing"],
  },
  {
    id: 8,
    companyLogo: "/assets/companies/twitter.svg",
    company: "Twitter",
    title: "Data Analyst",
    location: "San Diego, US",
    type: "Full Time",
    description: "Twitter is looking for Data Analyst to help team design...",
    tags: ["Technology"],
  },
];

const tagColors = {
  Marketing: "#fbbf24",
  Design: "#34d399",
  Business: "#6366f1",
  Technology: "#f87171",
};

const LatestJob = () => {
  return (
    <section className="feature-section">
      <div className="container">
        <div className="feature-header">
          <h2>
            <span className="feature-title-main">Latest</span>
            <span className="feature-title-accent"> jobs</span>
          </h2>
          <a href="#" className="feature-show-all">Show all jobs →</a>
        </div>
        <div className="feature-grid">
          {latestJobs.map((job) => (
            <div className="feature-card" key={job.id}>
              <div className="feature-card-header">
                <div className="feature-logo">
                  {/* fallback if logo not found */}
                  <img src={job.companyLogo} alt={job.company} onError={e => e.target.style.display='none'} />
                </div>
                <span className="feature-type">{job.type}</span>
              </div>
              <div className="feature-card-body">
                <h3 className="feature-job-title">{job.title}</h3>
                <div className="feature-company-loc">
                  <span className="feature-company">{job.company}</span>
                  <span className="feature-dot">·</span>
                  <span className="feature-location">{job.location}</span>
                </div>
                <p className="feature-desc">{job.description}</p>
                <div className="feature-tags">
                  {job.tags.map((tag) => (
                    <span
                      className="feature-tag"
                      key={tag}
                      style={{ background: tagColors[tag] || '#e5e7eb', color: '#202430' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestJob;
