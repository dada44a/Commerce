"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        const res = fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                password: formData.password
            })
        }).then(res => res.json());
        alert('Account created successfully!');
        router.push('/login');
    };

    return (
        <div className="min-h-screen bg-neutral flex items-center justify-center p-6 relative overflow-hidden">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 blur-[120px] -ml-48 -mt-48" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 blur-[120px] -mr-48 -mb-48 animate-pulse" />

            <div className="w-full max-w-md relative animate-fade-in">
                {/* Logo Area */}
                <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/40 mx-auto mb-6 -rotate-6 group hover:rotate-0 transition-transform">
                        <span className="text-white font-black text-3xl">N</span>
                    </div>
                    <h1 className="text-3xl font-black text-white tracking-tighter uppercase">Join <span className="text-primary">Nexa</span></h1>
                    <p className="text-neutral-content/40 font-bold mt-2 text-xs uppercase tracking-[0.2em]">Start your journey in premium commerce</p>
                </div>

                {/* Register Card */}
                <div className="bg-white/5 backdrop-blur-2xl p-10 rounded-[2.5rem] border border-white/10 shadow-2xl space-y-8">
                    <form onSubmit={handleRegister} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-neutral-content/30 uppercase tracking-[0.2em] ml-1">Full Identity</label>
                            <input
                                type="text"
                                required
                                className="input w-full bg-white/5 border-white/5 rounded-2xl h-14 px-6 text-white font-bold transition-all outline-none focus:bg-white/10 focus:border-primary/30 text-sm"
                                placeholder="John Alexander"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-neutral-content/30 uppercase tracking-[0.2em] ml-1">Digital Mail</label>
                            <input
                                type="email"
                                required
                                className="input w-full bg-white/5 border-white/5 rounded-2xl h-14 px-6 text-white font-bold transition-all outline-none focus:bg-white/10 focus:border-primary/30 text-sm"
                                placeholder="name@company.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-neutral-content/30 uppercase tracking-[0.2em] ml-1">Password</label>
                                <input
                                    type="password"
                                    required
                                    className="input w-full bg-white/5 border-white/5 rounded-2xl h-14 px-6 text-white font-bold transition-all outline-none focus:bg-white/10 focus:border-primary/30 text-sm"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-neutral-content/30 uppercase tracking-[0.2em] ml-1">Verify</label>
                                <input
                                    type="password"
                                    required
                                    className="input w-full bg-white/5 border-white/5 rounded-2xl h-14 px-6 text-white font-bold transition-all outline-none focus:bg-white/10 focus:border-primary/30 text-sm"
                                    placeholder="••••••••"
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary w-full h-14 rounded-2xl font-black lowercase tracking-tight shadow-xl shadow-primary/20 border-none bg-gradient-to-r from-primary to-primary/80 hover:scale-[1.02] transition-all">
                            create my account
                        </button>
                    </form>

                    <div className="text-center">
                        <p className="text-[10px] text-neutral-content/20 font-medium">By registering, you agree to our <span className="text-white underline cursor-pointer">Terms</span> and <span className="text-white underline cursor-pointer">Privacy Protocol</span></p>
                    </div>
                </div>

                {/* Footer Link */}
                <div className="text-center mt-8">
                    <p className="text-neutral-content/30 text-[10px] font-black uppercase tracking-widest">
                        Already a member? <Link href="/login" className="text-primary hover:underline ml-2">Sign in here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
