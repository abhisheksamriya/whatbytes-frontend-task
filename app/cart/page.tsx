'use client';

import { useStore } from '@/store/useStore';
import Link from 'next/link';
import { Trash2 } from 'lucide-react';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useStore();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = cart.length > 0 ? 15 : 0;
  const total = subtotal + shipping;

  // if cart have no items 
  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
        <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet.</p>
        <Link href="/" className="bg-brand-blue text-white px-6 py-3 rounded-md font-medium transition shadow-md">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* cart products */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-100 gap-4">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-md bg-gray-100" />
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>
              </div>

              <div className="flex items-center justify-between w-full sm:w-auto gap-6">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 text-gray-800 font-medium">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                <span className="font-bold text-gray-900">${item.price * item.quantity}</span>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 transition"
                  aria-label="Remove item"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={clearCart}
            className="text-sm text-red-600 hover:underline font-medium mt-2"
          >
            Clear Cart
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-fit space-y-4">
          <h3 className="text-lg font-bold text-gray-900 border-b pb-3">Order Summary</h3>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Shipping</span>
            <span>${shipping}</span>
          </div>
          <div className="flex justify-between text-base font-bold text-gray-900 border-t pt-3">
            <span>Total</span>
            <span>${total}</span>
          </div>
          <button className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white py-3 rounded-md font-medium transition shadow-md mt-4">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}