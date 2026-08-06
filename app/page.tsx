'use client';

import { useState } from 'react';
import { products } from '@/data/products';
import Sidebar from '@/components/Sidebar';
import ProductGrid from '@/components/ProductGrid';
import { useStore } from '@/store/useStore';

export default function Home() {
  const { searchQuery } = useStore();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(1000);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesPrice = product.price <= maxPrice;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto w-full px-4 py-8 gap-8">
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />

      <ProductGrid products={filteredProducts} />
    </div>
  );
}