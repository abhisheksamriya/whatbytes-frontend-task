'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { products } from '@/data/products';
import { Star } from 'lucide-react';
import Link from 'next/link';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  
  const product = products.find((p) => p.id === productId);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Product not found</h2>
        <Link href="/" className="bg-brand-blue text-white px-6 py-2 rounded-md font-medium">
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        
        {/* left section*/}
        <div className="relative w-full h-100 md:h-125 rounded-lg overflow-hidden bg-gray-100">
          <img src={product.image} alt={product.title} className="object-cover w-full h-full" />
        </div>
        {/* right section */}
        <div className="flex flex-col gap-2">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-wider bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full font-semibold">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
            <p className="text-2xl font-bold text-gray-900">${product.price}</p>
            
            {product.rating && (
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating!) ? "fill-amber-400 text-amber-400" : "text-gray-300"}
                  />
                ))}
              </div>
            )}

            <p className="text-gray-600 text-sm leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="space-y-6 pt-3 border-gray-100">
            <div className="flex flex-col items-start gap-3">
              <span className="text-md font-semibold text-gray-700">Quantity:</span>
              <div className="flex w-fit items-center border border-gray-300 rounded-md">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition"
                >
                  -
                </button>
                <span className="px-4 py-1 text-gray-800 font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition"
                >
                  +
                </button>
              </div>
            </div>

            <button className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white py-3 rounded-md font-medium transition shadow-md">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}