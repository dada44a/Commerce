"use client"
import React from 'react';

interface FilterSidebarProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceChange: (range: [number, number]) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  categories,
  selectedCategories,
  onCategoryChange,
  priceRange,
  onPriceChange,
  sortBy,
  onSortChange,
}) => {
  return (
    <div className="w-full lg:w-64 flex flex-col gap-8 p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
      {/* Search/Sort for mobile layout integration if needed */}
      
      <div>
        <h3 className="text-lg font-semibold mb-4 text-slate-800">Sort By</h3>
        <select 
          value={sortBy} 
          onChange={(e) => onSortChange(e.target.value)}
          className="select select-bordered w-full bg-slate-50 border-slate-200 focus:outline-none"
        >
          <option value="newest">Newest</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-slate-800">Categories</h3>
        <div className="flex flex-col gap-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-3 cursor-pointer group">
              <input 
                type="checkbox" 
                className="checkbox checkbox-primary checkbox-sm rounded" 
                checked={selectedCategories.includes(category)}
                onChange={() => onCategoryChange(category)}
              />
              <span className="text-slate-600 group-hover:text-primary transition-colors">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-slate-800">Price Range</h3>
          <span className="text-sm font-medium text-primary">${priceRange[0]} - ${priceRange[1]}</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="500" 
          value={priceRange[1]} 
          onChange={(e) => onPriceChange([priceRange[0], parseInt(e.target.value)])}
          className="range range-primary range-xs" 
        />
        <div className="flex justify-between text-xs px-2 mt-2 text-slate-400">
          <span>$0</span>
          <span>$500</span>
        </div>
      </div>

      <button 
        className="btn btn-outline btn-sm mt-4"
        onClick={() => {
            // Reset filters logic could go here if handled by parent
        }}
      >
        Clear All Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
