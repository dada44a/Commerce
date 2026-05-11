"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const MOCK_CART_ITEMS = [
  { id: 1, name: "Premium White Tee", price: 29.99, quantity: 2, image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=200&auto=format&fit=crop" },
  { id: 2, name: "Classic Denim Jacket", price: 89.00, quantity: 1, image: "https://images.unsplash.com/photo-1576871333021-d619ae4e760b?q=80&w=200&auto=format&fit=crop" },
];

export default function CartPage() {
  const [items, setItems] = useState(MOCK_CART_ITEMS);

  const updateQuantity = (id: number, delta: number) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <main className="min-h-screen bg-slate-50/50 py-12 md:py-20">
      <div className="max-w-screen-xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-10">Shopping Cart</h1>

        {items.length > 0 ? (
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Cart Items */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {items.map(item => (
                <div key={item.id} className="bg-white p-6 rounded-2xl border border-slate-100 flex gap-6 items-center shadow-sm">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-xl" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                    <p className="text-slate-500 mb-4">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-3 py-1 hover:bg-slate-50 transition-colors"
                        >
                          -
                        </button>
                        <span className="px-3 py-1 border-x border-slate-200 font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-3 py-1 hover:bg-slate-50 transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-sm text-error font-medium hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-slate-900">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm sticky top-24">
                <h2 className="text-xl font-bold mb-6 text-slate-900">Order Summary</h2>
                <div className="flex flex-col gap-4 mb-8">
                  <div className="flex justify-between text-slate-500">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Shipping</span>
                    <span className="text-success font-medium">Free</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Tax (10%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-slate-100 pt-4 mt-2 flex justify-between text-xl font-bold text-slate-900">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <button className="btn btn-primary w-full rounded-2xl h-14 text-lg">
                  Proceed to Checkout
                </button>
                <Link href="/products" className="block text-center mt-6 text-sm font-medium text-slate-400 hover:text-primary transition-colors">
                  Continue Shopping
                </Link>
              </div>
            </div>

          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-dashed border-slate-200 text-center">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Your cart is empty</h2>
            <p className="text-slate-500 mb-8 max-w-xs mx-auto">Looks like you haven&apos;t added anything to your cart yet.</p>

            <Link href="/products" className="btn btn-primary px-10 rounded-2xl">
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
