import React from 'react';

const CategoryFilter = ({ categories, onFilterChange, activeCategory }) => {
  return (
    <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 mb-8">
      <button
        onClick={() => onFilterChange('All')}
        className={`px-4 py-2 rounded-full font-medium transition duration-300 ${
          activeCategory === 'All'
            ? 'bg-green-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        Todas
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`px-4 py-2 rounded-full font-medium transition duration-300 ${
            activeCategory === category
              ? 'bg-green-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;