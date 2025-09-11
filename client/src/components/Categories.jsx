import React from 'react';
import './Categories.css';

// Import logos
import designLogo from '../assets/categories/finance.svg';
import salesLogo from '../assets/categories/finance.svg';
import marketingLogo from '../assets/categories/finance.svg';
import financeLogo from '../assets/categories/finance.svg';
import techLogo from '../assets/categories/finance.svg';
import engineeringLogo from '../assets/categories/finance.svg';
import businessLogo from '../assets/categories/finance.svg';
import hrLogo from '../assets/categories/finance.svg';

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: 'Design',
      jobsAvailable: 235,
      icon: designLogo,
      isHighlighted: false
    },
    {
      id: 2,
      title: 'Sales',
      jobsAvailable: 756,
      icon: salesLogo,
      isHighlighted: false
    },
    {
      id: 3,
      title: 'Marketing',
      jobsAvailable: 140,
      icon: marketingLogo,
      isHighlighted: true
    },
    {
      id: 4,
      title: 'Finance',
      jobsAvailable: 325,
      icon: financeLogo,
      isHighlighted: false
    },
    {
      id: 5,
      title: 'Technology',
      jobsAvailable: 496,
      icon: techLogo,
      isHighlighted: false
    },
    {
      id: 6,
      title: 'Engineering',
      jobsAvailable: 542,
      icon: engineeringLogo,
      isHighlighted: false
    },
    {
      id: 7,
      title: 'Business',
      jobsAvailable: 271,
      icon: businessLogo,
      isHighlighted: false
    },
    {
      id: 8,
      title: 'Human Resource',
      jobsAvailable: 346,
      icon: hrLogo,
      isHighlighted: false
    }
  ];

  return (
    <div className="category-container">
      <div className="category-header">
        <h2 className="category-title">
          Explore by <span className="highlight-text">category</span>
        </h2>
        <button className="show-all-btn">
          Show all jobs →
        </button>
      </div>
      
      <div className="category-grid">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`category-card ${category.isHighlighted ? 'highlighted' : ''}`}
          >
            <div className="category-icon">
              <img src={category.icon} alt={category.title} />
            </div>
            <h3 className="category-name">{category.title}</h3>
            <p className="jobs-count">
              {category.jobsAvailable} jobs available →
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
