"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const MOCK_ORDERS = [
  { id: 'ORD-7721', customer: 'Alice Johnson', date: '2024-05-01', total: 129.99, status: 'Delivered', items: 3 },
  { id: 'ORD-7722', customer: 'Bob Smith', date: '2024-05-02', total: 59.00, status: 'Shipped', items: 1 },
  { id: 'ORD-7723', customer: 'Charlie Brown', date: '2024-05-03', total: 210.50, status: 'Processing', items: 4 },
  { id: 'ORD-7724', customer: 'Diana Prince', date: '2024-05-04', total: 89.00, status: 'Pending', items: 2 },
  { id: 'ORD-7725', customer: 'Ethan Hunt', date: '2024-05-05', total: 45.00, status: 'Cancelled', items: 1 },
];

export default function AdminOrdersPage() {
  const [orders] = useState(MOCK_ORDERS);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Delivered': return 'bg-success/10 text-success border-success/20';
      case 'Shipped': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'Processing': return 'bg-warning/10 text-warning border-warning/20';
      case 'Pending': return 'bg-slate-500/10 text-slate-500 border-slate-500/20';
      case 'Cancelled': return 'bg-error/10 text-error border-error/20';
      default: return 'bg-slate-500/10 text-slate-500 border-slate-500/20';
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Orders</h1>
          <p className="text-slate-500 mt-1 font-medium text-sm">Managing customer transactions and fulfillment.</p>
        </div>
        <button className="btn btn-primary rounded-xl px-6 h-12 text-sm font-semibold shadow-md shadow-primary/10">
          Export Orders
        </button>
      </div>

      <div className="bg-base-100 rounded-2xl border border-base-300 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-base-200/50 border-b border-base-300">
                <th className="px-8 py-5 font-semibold text-slate-400 text-[11px] uppercase tracking-widest">Order ID</th>
                <th className="px-8 py-5 font-semibold text-slate-400 text-[11px] uppercase tracking-widest">Customer</th>
                <th className="px-8 py-5 font-semibold text-slate-400 text-[11px] uppercase tracking-widest">Date</th>
                <th className="px-8 py-5 font-semibold text-slate-400 text-[11px] uppercase tracking-widest">Total</th>
                <th className="px-8 py-5 font-semibold text-slate-400 text-[11px] uppercase tracking-widest">Status</th>
                <th className="px-8 py-5 font-semibold text-slate-400 text-[11px] uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-base-200">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-base-200/20 transition-all group">
                  <td className="px-8 py-5">
                    <span className="font-semibold text-slate-900 text-sm">{order.id}</span>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex flex-col">
                        <span className="font-semibold text-slate-900 text-sm">{order.customer}</span>
                        <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest">{order.items} items</span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className="text-sm font-medium text-slate-600">{order.date}</span>
                  </td>
                  <td className="px-8 py-5">
                    <span className="text-sm font-bold text-slate-900 tracking-tight">${order.total.toFixed(2)}</span>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest border ${getStatusStyle(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="w-10 h-10 rounded-lg bg-base-200 text-slate-600 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
