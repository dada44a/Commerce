
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MOCK_PRODUCTS } from '@/constants/products';

const MOCK_USER = {
  name: "Anish Dahal",
  email: "anish@example.com",
  joinDate: "January 2024",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop"
};

const MOCK_ORDERS = [
  {
    id: "ORD-9284",
    date: "May 06, 2026",
    total: 148.99,
    status: "Processing",
    items: [
      { ...MOCK_PRODUCTS[0], quantity: 2 },
      { ...MOCK_PRODUCTS[1], quantity: 1 }
    ]
  },
  {
    id: "ORD-8172",
    date: "April 28, 2026",
    total: 59.00,
    status: "Delivered",
    items: [
      { ...MOCK_PRODUCTS[2], quantity: 1 }
    ]
  },
  {
    id: "ORD-7651",
    date: "March 15, 2026",
    total: 215.00,
    status: "Delivered",
    items: [
      { ...MOCK_PRODUCTS[5], quantity: 1 },
      { ...MOCK_PRODUCTS[3], quantity: 2 }
    ]
  }
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <main className="min-h-screen bg-slate-50/50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Profile Header */}
        <div className="bg-white rounded-3xl p-8 mb-8 border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-slate-50">
            <Image 
              src={MOCK_USER.avatar} 
              alt={MOCK_USER.name} 
              fill 
              className="object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl font-bold text-slate-900 mb-1">{MOCK_USER.name}</h1>
            <p className="text-slate-500 mb-4">{MOCK_USER.email}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <span className="px-4 py-1.5 bg-slate-100 rounded-full text-xs font-medium text-slate-600">Member since {MOCK_USER.joinDate}</span>
              <span className="px-4 py-1.5 bg-green-50 rounded-full text-xs font-medium text-green-600">Verified Account</span>
            </div>
          </div>
          <button className="btn btn-outline btn-sm rounded-full px-6">
            Edit Profile
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Tabs */}
          <div className="lg:w-64 space-y-2">
            {[
              { id: "orders", label: "Order History", icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              )},
              { id: "wishlist", label: "Wishlist", icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              )},
              { id: "addresses", label: "Addresses", icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              )},
              { id: "settings", label: "Settings", icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              )}
            ].map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl transition-all font-medium ${activeTab === tab.id ? 'bg-slate-900 text-white shadow-lg shadow-slate-200' : 'bg-white text-slate-500 hover:bg-slate-50 border border-transparent hover:border-slate-100'}`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-1">
            {activeTab === "orders" ? (
              <div className="space-y-6">
                {MOCK_ORDERS.map((order) => (
                  <div key={order.id} className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
                    {/* Order Header */}
                    <div className="bg-slate-50/50 px-6 py-4 border-b border-slate-100 flex flex-wrap justify-between items-center gap-4">
                      <div className="flex gap-8">
                        <div>
                          <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-0.5">Order ID</p>
                          <p className="text-sm font-bold text-slate-900">{order.id}</p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-0.5">Date</p>
                          <p className="text-sm font-medium text-slate-600">{order.date}</p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-0.5">Total</p>
                          <p className="text-sm font-bold text-slate-900">$ {order.total.toFixed(2)}</p>
                        </div>
                      </div>
                      <div className={`px-4 py-1 rounded-full text-xs font-bold ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                        {order.status}
                      </div>
                    </div>
                    
                    {/* Order Items */}
                    <div className="p-6 space-y-6">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                          <div className="relative w-16 h-20 rounded-xl overflow-hidden bg-slate-50 border border-slate-100 flex-shrink-0">
                            <Image 
                              src={item.image} 
                              alt={item.name} 
                              fill 
                              className="object-cover object-top"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                            <p className="text-xs text-slate-400 font-medium">Quantity: {item.quantity}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-bold text-slate-900">$ {item.price.toFixed(2)}</p>
                            <Link href={`/products/${item.id}`} className="text-xs text-primary font-semibold hover:underline">View Product</Link>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Order Footer */}
                    <div className="px-6 py-4 bg-slate-50/30 border-t border-slate-100 flex justify-end gap-3">
                      <button className="btn btn-ghost btn-xs rounded-full">Track Order</button>
                      <button className="btn btn-outline btn-xs rounded-full border-slate-200">Invoice</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-slate-100 p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Section under development</h3>
                <p className="text-slate-500 max-w-xs mx-auto">We&apos;re working hard to bring this feature to you soon. Please check back later!</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}
