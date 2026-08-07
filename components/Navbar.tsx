'use client';

import { Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useStore } from "@/store/useStore";

const Navbar = () => {
  const { searchQuery, setSearchQuery, cart } = useStore();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-brand-blue text-white px-4 md:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-md sticky top-0 z-50">
      <div className="text-2xl font-bold tracking-wider w-full md:w-auto flex justify-between items-center">
        <Link href="/">Logo</Link>
        {/* for mobile */}
        <div className="flex md:hidden items-center gap-3">
          <Link href="/cart" className="relative flex items-center gap-1 bg-dark-blue hover:bg-dark-blue/80 px-3 py-2 rounded-md text-sm font-medium transition">
            <ShoppingCart size={16} />
            <span>Cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white cursor-pointer">
            <User size={16} />
          </div>
        </div>
      </div>
      
      <div className="relative w-full md:w-1/3 max-w-md">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-white">
          <Search size={18} />
        </span>
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 text-white placeholder-gray-300 rounded-md focus:outline-none border border-white/30 bg-white/10 text-sm"
        />
      </div>

      {/* for desktop */}
      <div className="hidden md:flex items-center gap-4">
        <Link href="/cart" className="relative flex items-center gap-2 bg-dark-blue hover:bg-dark-blue/80 px-4 py-2 rounded-md text-sm font-medium transition">
          <ShoppingCart size={18} />
          <span>Cart</span>
          {/* BADGE ADDED HERE */}
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md">
              {totalItems}
            </span>
          )}
        </Link>
        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white cursor-pointer hover:bg-white/30 transition">
          <User size={18} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;