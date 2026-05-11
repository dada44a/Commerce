"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AdminProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
        credentials: "include"
      });
      const data = await res.json();
      setProducts(data.products || []);
    } catch (error: any) {
      console.error('Error fetching products:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`, {
          method: 'DELETE',
          credentials: 'include',
        });
        if (res.ok) {
          setProducts(prev => prev.filter(p => p._id !== id));
        } else {
          alert('Failed to delete product');
        }
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  if (loading) return <div className="p-10 text-center font-bold text-slate-900">Initializing Repository...</div>;

  return (
    <div className="space-y-12 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Products</h1>
          <p className="text-slate-500 mt-1 font-medium text-sm">Manage your inventory and stock levels.</p>
        </div>
        <Link href="/admin/products/new" className="btn btn-primary rounded-xl px-6 shadow-md shadow-primary/10 h-12 text-sm font-semibold lowercase tracking-tight group">
          <svg className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" /></svg>
          add product
        </Link>
      </div>

      <div className="bg-base-100 rounded-2xl border border-base-300 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-base-200/50 border-b border-base-300">
                <th className="px-8 py-5 font-semibold text-slate-400 text-[11px] uppercase tracking-[0.2em]">Product</th>
                <th className="px-8 py-5 font-semibold text-slate-400 text-[11px] uppercase tracking-[0.2em]">Category</th>
                <th className="px-8 py-5 font-semibold text-slate-400 text-[11px] uppercase tracking-[0.2em]">Price</th>
                <th className="px-8 py-5 font-semibold text-slate-400 text-[11px] uppercase tracking-[0.2em]">Status</th>
                <th className="px-8 py-5 font-semibold text-slate-400 text-[11px] uppercase tracking-[0.2em] text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-base-200">
              {products.map((product) => (
                <tr key={product._id} className="hover:bg-base-200/20 transition-all group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="relative w-14 h-14 rounded-xl overflow-hidden shadow-sm">
                        <img
                          src={product.image}
                          className="object-cover"
                          alt={product.name}
                        />
                      </div>
                      <div>
                        <span className="block font-semibold text-slate-900 text-sm group-hover:text-primary transition-colors">{product.name}</span>
                        <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest mt-0.5 opacity-60">#PROD-{product._id.slice(-6)}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className="bg-base-200/50 px-3 py-1 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-widest border border-base-300/30">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <span className="text-sm font-bold text-slate-900 tracking-tight">${product.price.toFixed(2)}</span>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${product.stock > 20 ? 'bg-success' : 'bg-warning'}`} />
                      <span className="font-semibold text-slate-600 text-[11px] uppercase tracking-wider">{product.stock} units</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                      <Link
                        href={`/admin/products/${product._id}`}
                        className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm"
                        title="Edit"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                      </Link>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="w-10 h-10 rounded-lg bg-error/10 text-error flex items-center justify-center hover:bg-error hover:text-white transition-all shadow-sm"
                        title="Delete"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {products.length === 0 && (
          <div className="py-40 text-center">
            <div className="w-24 h-24 bg-base-200 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
              <span className="text-4xl">📦</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">Empty Repository</h3>
            <p className="text-slate-500 mb-10 font-semibold max-w-md mx-auto text-sm leading-relaxed">No products found in your inventory.</p>
            <Link href="/admin/products/new" className="btn btn-primary rounded-xl px-10 h-12 font-semibold lowercase tracking-tight shadow-md shadow-primary/10">
              initialize catalog
            </Link>
          </div>
        )}
      </div>

    </div>
  );
}



