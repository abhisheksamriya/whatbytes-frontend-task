import React from 'react';

interface SidebarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  maxPrice: number;
  setMaxPrice: (price: number) => void;
}

const Sidebar = ({ selectedCategory, setSelectedCategory, maxPrice, setMaxPrice }: SidebarProps) => {
  return (
    <aside className="w-full lg:w-64 bg-[#0f4c81] text-white p-6 rounded-lg shadow-md h-fit space-y-6">
      <h2 className="text-xl font-bold border-b border-white/20 pb-2">Filters</h2>
      
      {/* category filter */}
      <div className="space-y-3">
        <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-200">Category</h3>
        {['All', 'Electronics', 'Clothing', 'Home'].map((cat) => (
          <label key={cat} className="flex items-center gap-3 cursor-pointer text-sm">
            <input
              type="radio"
              name="category"
              checked={selectedCategory === cat}
              onChange={() => setSelectedCategory(cat)}
              className="accent-white"
            />
            {cat}
          </label>
        ))}
      </div>

      {/* price filter */}
      <div className="space-y-3">
        <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-200">Price</h3>
        <div className="flex justify-between text-xs text-gray-300">
          <span>0</span>
          <span>{maxPrice}</span>
        </div>
        <input
          type="range"
          min="0"
          max="1000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-white cursor-pointer"
        />
      </div>
    </aside>
  );
};

export default Sidebar;