import React from 'react';
import { Product } from '@/data/products';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <main className="flex-1">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Product Listing</h1>

      {products.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-lg shadow-sm border border-gray-100">
          <p className="text-gray-500 text-lg">No products found matching your filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
};

export default ProductGrid;