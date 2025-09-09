import React from 'react';
import './Category.css';

const Category = () => {
  const categories = [
    {
      id: 1,
      title: 'Design',
      jobsAvailable: 235,
      icon: '🎨',
      isHighlighted: false
    },
    {
      id: 2,
      title: 'Sales',
      jobsAvailable: 756,
      icon: '📊',
      isHighlighted: false
    },
    {
      id: 3,
      title: 'Marketing',
      jobsAvailable: 140,
      icon: '📢',
      isHighlighted: true
    },
    {
      id: 4,
      title: 'Finance',
      jobsAvailable: 325,
      icon: '💰',
      isHighlighted: false
    },
    {
      id: 5,
      title: 'Technology',
      jobsAvailable: 496,
      icon: '💻',
      isHighlighted: false
    },
    {
      id: 6,
      title: 'Engineering',
      jobsAvailable: 542,
      icon: '⚙️',
      isHighlighted: false
    },
    {
      id: 7,
      title: 'Business',
      jobsAvailable: 271,
      icon: '💼',
      isHighlighted: false
    },
    {
      id: 8,
      title: 'Human Resource',
      jobsAvailable: 346,
      icon: '👥',
      isHighlighted: false
    }
  ];

  return (
    <div className="category-container">
      <div className="category-header">
        <h1 className="category-title">
          Explore by <span className="highlight-text">category</span>
        </h1>
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
              {category.icon}
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

export default Category;