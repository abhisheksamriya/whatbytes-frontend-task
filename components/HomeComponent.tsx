'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { products } from '@/data/products';
import Sidebar from '@/components/Sidebar';
import ProductGrid from '@/components/ProductGrid';
import { useStore } from '@/store/useStore';

export default function HomeComponents() {
  const { searchQuery } = useStore();
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryParam = searchParams.get('category') || 'All';
  const priceParam = searchParams.get('price');

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [maxPrice, setMaxPrice] = useState(priceParam ? Number(priceParam) : 1000);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    updateUrl(category, maxPrice);
  };

  const handlePriceChange = (price: number) => {
    setMaxPrice(price);
    updateUrl(selectedCategory, price);
  };

  const updateUrl = (category: string, price: number) => {
    const params = new URLSearchParams();
    if (category !== 'All') {
      params.set('category', category.toLowerCase());
    }
    if (price < 1000) {
      params.set('price', price.toString());
    }
    
    const queryStr = params.toString();
    router.push(queryStr ? `/?${queryStr}` : '/', { scroll: false });
  };

  useEffect(() => {
    const cat = searchParams.get('category');
    const price = searchParams.get('price');

    if (cat) {
      const formattedCat = cat.charAt(0).toUpperCase() + cat.slice(1);
      setSelectedCategory(formattedCat);
    } else {
      setSelectedCategory('All');
    }

    if (price) {
      setMaxPrice(Number(price));
    }
  }, [searchParams]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesPrice = product.price <= maxPrice;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto w-full px-4 py-8 gap-8">
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={handleCategoryChange}
        maxPrice={maxPrice}
        setMaxPrice={handlePriceChange}
      />

      <ProductGrid products={filteredProducts} />
    </div>
  );
}