"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, useParams } from 'next/navigation';


export default function EditProductPage() {
    const router = useRouter();
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        category: 'T-Shirts',
        stock: '',
        image: '',
        description: ''
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`, {
                    credentials: "include"
                });
                const data = await res.json();
                const product = data.product;
                if (product) {
                    setFormData({
                        name: product.name,
                        price: String(product.price),
                        category: product.category,
                        stock: String(product.stock),
                        image: product.image,
                        description: product.description
                    });
                }
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchProduct();
        }
    }, [id]);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                credentials: "include",
            });

            if (res.ok) {
                alert('Product updated successfully!');
                router.push('/admin/products');
            } else {
                const data = await res.json();
                alert(`Error: ${data.message || 'Failed to update product'}`);
            }
        } catch (error) {
            console.error('Error updating product:', error);
            alert('An error occurred while updating the product.');
        }
    };

    if (loading) return <div className="p-10 text-center font-bold text-slate-900">Retrieving Product Data...</div>;


    return (
        <div className="max-w-5xl animate-fade-in pb-32">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
                <div className="flex items-center gap-6">
                    <Link href="/admin/products" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white border border-slate-100 text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm hover:shadow-md group">
                        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Edit <span className="text-primary">Product</span></h1>
                        <p className="text-slate-500 font-medium mt-1 text-sm tracking-tight">Refining the details of ID #00{id}.</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Link href="/admin/products" className="btn btn-ghost px-6 font-semibold text-slate-400 lowercase">discard</Link>
                    <button onClick={handleSubmit} className="btn btn-primary rounded-2xl px-8 h-14 font-semibold lowercase tracking-tight shadow-xl shadow-primary/20 border-none bg-gradient-to-br from-primary to-primary/80 group">
                        save changes
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-10">
                {/* Main Content Area */}
                <div className="lg:col-span-8 space-y-10">
                    {/* General Information Card */}
                    <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] space-y-10">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h2 className="text-base font-bold text-slate-900 uppercase tracking-widest">Essentials</h2>
                        </div>

                        <div className="space-y-8">
                            <div className="group space-y-3">
                                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-primary transition-colors">Product Designation</label>
                                <input
                                    type="text"
                                    required
                                    className="input w-full bg-slate-50 border-transparent rounded-2xl h-14 px-6 font-semibold text-slate-900 transition-all outline-none focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary/20"
                                    placeholder="e.g. Midnight Cashmere Hoodie"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className="group space-y-3">
                                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-primary transition-colors">Narrative & Details</label>
                                <textarea
                                    className="textarea w-full bg-slate-50 border-transparent rounded-2xl h-48 px-6 py-5 font-medium text-slate-600 transition-all outline-none focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary/20 text-base leading-relaxed"
                                    placeholder="Describe the soul of this product..."
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Inventory & Pricing Card */}
                    <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] space-y-10">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h2 className="text-base font-bold text-slate-900 uppercase tracking-widest">Financials</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="group space-y-3">
                                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-emerald-500 transition-colors">Retail Valuation</label>
                                <div className="relative">
                                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-lg group-focus-within:text-emerald-500">$</span>
                                    <input
                                        type="number"
                                        step="0.01"
                                        required
                                        className="input w-full bg-slate-50 border-transparent rounded-2xl h-14 pl-12 pr-6 font-bold text-slate-900 transition-all outline-none focus:bg-white focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500/20"
                                        placeholder="0.00"
                                        value={formData.price}
                                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="group space-y-3">
                                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-emerald-500 transition-colors">Initial Allocation</label>
                                <input
                                    type="number"
                                    required
                                    className="input w-full bg-slate-50 border-transparent rounded-2xl h-14 px-6 font-bold text-slate-900 transition-all outline-none focus:bg-white focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500/20"
                                    placeholder="Units in Stock"
                                    value={formData.stock}
                                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Area */}
                <div className="lg:col-span-4 space-y-10">
                    {/* Visual Assets Card */}
                    <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-600">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            </div>
                            <h2 className="text-[11px] font-bold text-slate-900 uppercase tracking-widest">Aesthetics</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="relative group overflow-hidden rounded-[1.5rem] bg-slate-50 aspect-square border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center p-6 hover:border-primary transition-all">
                                {formData.image ? (
                                    <img
                                        src={formData.image}
                                        className="object-cover"
                                        alt="Preview"
                                    />
                                ) : (
                                    <div className="space-y-4">
                                        <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mx-auto text-2xl border border-slate-50">🖼️</div>
                                        <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest">Preview Area</p>
                                    </div>
                                )}
                            </div>
                            <input
                                type="url"
                                required
                                className="input w-full bg-slate-50 border-transparent rounded-xl h-12 px-4 font-medium text-[10px] text-slate-500 transition-all outline-none focus:bg-white focus:border-slate-200"
                                placeholder="Paste High-Res Image URL"
                                value={formData.image}
                                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                            />
                        </div>
                    </div>

                    {/* Categorization Card */}
                    <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
                            </div>
                            <h2 className="text-[11px] font-bold text-slate-900 uppercase tracking-widest">Metadata</h2>
                        </div>

                        <select
                            className="select w-full bg-slate-50 border-transparent rounded-xl h-14 px-6 font-semibold text-slate-900 transition-all outline-none focus:bg-white focus:border-slate-200"
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        >
                            <option>T-Shirts</option>
                            <option>Outerwear</option>
                            <option>Pants</option>
                            <option>Knitwear</option>
                            <option>Shoes</option>
                            <option>Accessories</option>
                        </select>
                    </div>

                    {/* Quick Summary Card */}
                    <div className="bg-slate-900 p-8 rounded-[2rem] text-white space-y-6 relative overflow-hidden shadow-2xl shadow-slate-900/20">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] -mr-16 -mt-16" />
                        <h3 className="text-[11px] font-bold uppercase tracking-widest opacity-40">Live Preview Summary</h3>
                        <div className="space-y-4 relative z-10">
                            <div className="flex justify-between items-end border-b border-white/10 pb-4">
                                <span className="text-[10px] font-semibold text-white/50 uppercase tracking-widest">Price</span>
                                <span className="text-2xl font-bold tracking-tight">${formData.price || '0.00'}</span>
                            </div>
                            <div className="flex justify-between items-end border-b border-white/10 pb-4">
                                <span className="text-[10px] font-semibold text-white/50 uppercase tracking-widest">Inventory</span>
                                <span className="text-lg font-bold tracking-tight">{formData.stock || '0'} <span className="text-[10px] opacity-40">PCS</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
