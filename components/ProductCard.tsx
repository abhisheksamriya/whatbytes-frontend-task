"use client";

import { Product } from '@/data/products';
import { useStore } from '@/store/useStore';
import { Star } from 'lucide-react';
import Link from 'next/link';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const { addToCart } = useStore();

  const handleAddToCart = () => {
    addToCart(product, 1);
    toast.success(`${product.title} added to cart!`);
  };
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex flex-col justify-between hover:shadow-md transition">
      <Link href={`/product/${product.id}`}>
        <div className="relative w-full h-48 md:h-54 rounded-md overflow-hidden bg-gray-100 mb-4">
          <img src={product.image} alt={product.title} className="object-cover w-full h-full hover:scale-105 transition duration-300" />
        </div>
        <h3 className="font-semibold text-gray-900 text-lg mb-1">{product.title}</h3>
        <p className="text-gray-900 font-bold text-base mb-2">${product.price}</p>
        
        {product.rating && (
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(product.rating!) ? "fill-amber-400 text-amber-400" : "text-gray-300"}
              />
            ))}
          </div>
        )}
      </Link>

      <button onClick={handleAddToCart} className="w-full bg-[#0f4c81] hover:bg-[#16568c] text-white py-2 rounded-md font-medium text-sm transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;