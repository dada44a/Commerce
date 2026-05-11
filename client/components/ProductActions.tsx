"use client"

import React, { useState } from 'react';

interface ProductActionsProps {
  productId: string;
}

export default function ProductActions({ productId }: ProductActionsProps) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log(`Adding ${quantity} of product ${productId} to cart`);
    // Add to cart logic here
    alert(`Added ${quantity} item(s) to cart!`);
  };

  return (
    <div className="space-y-6">
      {/* Quantity */}
      <div>
        <p className="font-semibold text-slate-900 mb-4 font-poppins">Quantity</p>
        <div className="flex items-center gap-3 w-fit bg-slate-50 p-1.5 rounded-xl border border-slate-100">
          <button 
            onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
            className="w-8 h-8 rounded-lg hover:bg-white transition-colors flex items-center justify-center text-slate-600"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
            </svg>
          </button>
          <span className="w-6 text-center font-semibold text-slate-900 text-sm">{quantity}</span>
          <button 
            onClick={() => setQuantity(prev => prev + 1)}
            className="w-8 h-8 rounded-lg hover:bg-white transition-colors flex items-center justify-center text-slate-600"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <button 
          onClick={handleAddToCart}
          className="btn btn-primary flex-1 h-14 rounded-xl text-base shadow-lg shadow-primary/20 font-poppins"
        >
          Add to Cart
        </button>
        <button className="btn btn-outline border-slate-200 hover:bg-slate-50 hover:text-slate-900 h-14 rounded-xl px-6 group">
          <svg className="w-5 h-5 text-slate-400 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
