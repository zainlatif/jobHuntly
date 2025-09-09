import React from "react";
import "./Companies.css";

const Companies = () => {
  return (
    <section className="companies">
      <h2>Companies we helped grow</h2>

      <div className="companies-logos">
        <div className="company-logo">
          <img src="/src/assets/companies/amd.svg" alt="AMD" />
        </div>
        <div className="company-logo">
          <img src="/src/assets/companies/intel.svg" alt="Intel" />
        </div>
        <div className="company-logo">
          <img src="/src/assets/companies/talkit.svg" alt="TalkIT" />
        </div>
        <div className="company-logo">
          <img src="/src/assets/companies/tesla.svg" alt="Tesla" />
        </div>
        <div className="company-logo">
          <img src="/src/assets/companies/vodafone.svg" alt="Vodafone" />
        </div>
      </div>
    </section>
  );
};

export default Companies;
