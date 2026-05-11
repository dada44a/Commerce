"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/app/store/AuthStore';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuthStore();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const success = await login(email, password);
            if (success) {
                router.push("/admin");
            }
            else {
                alert("Login failed. Please check your credentials and try again.");
            }
        }
        catch (error) {
            console.log(error);
            alert("An error occurred while logging in. Please try again later.");
        }
    };
    return (
        <div className="min-h-screen bg-neutral flex items-center justify-center p-6 relative overflow-hidden">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] -mr-48 -mt-48 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 blur-[120px] -ml-48 -mb-48" />

            <div className="w-full max-w-md relative animate-fade-in">
                {/* Logo Area */}
                <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/40 mx-auto mb-6 rotate-6 group hover:rotate-12 transition-transform">
                        <span className="text-white font-black text-3xl">N</span>
                    </div>
                    <h1 className="text-3xl font-black text-white tracking-tighter uppercase">Welcome <span className="text-primary">Back</span></h1>
                    <p className="text-neutral-content/40 font-bold mt-2 text-xs uppercase tracking-[0.2em]">Enter your credentials to access Nexa</p>
                </div>

                {/* Login Card */}
                <div className="bg-white/5 backdrop-blur-2xl p-10 rounded-[2.5rem] border border-white/10 shadow-2xl space-y-8">
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-neutral-content/30 uppercase tracking-[0.2em] ml-1">Email Address</label>
                            <div className="relative group">
                                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-content/20 group-focus-within:text-primary transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </span>
                                <input
                                    type="email"
                                    required
                                    className="input w-full bg-white/5 border-white/5 rounded-2xl h-14 pl-14 pr-6 text-white font-bold transition-all outline-none focus:bg-white/10 focus:border-primary/30 text-sm"
                                    placeholder="name@company.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center px-1">
                                <label className="text-[10px] font-black text-neutral-content/30 uppercase tracking-[0.2em]">Password</label>
                                <Link href="#" className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">Forgot?</Link>
                            </div>
                            <div className="relative group">
                                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-content/20 group-focus-within:text-primary transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                </span>
                                <input
                                    type="password"
                                    required
                                    className="input w-full bg-white/5 border-white/5 rounded-2xl h-14 pl-14 pr-6 text-white font-bold transition-all outline-none focus:bg-white/10 focus:border-primary/30 text-sm"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-3 px-1">
                            <input type="checkbox" className="checkbox checkbox-primary checkbox-xs rounded-md border-white/10" id="remember" />
                            <label htmlFor="remember" className="text-[10px] font-black text-neutral-content/40 uppercase tracking-widest cursor-pointer">Stay signed in for 30 days</label>
                        </div>

                        <button type="submit" className="btn btn-primary w-full h-14 rounded-2xl font-black lowercase tracking-tight shadow-xl shadow-primary/20 border-none bg-gradient-to-r from-primary to-primary/80 hover:scale-[1.02] transition-all">
                            sign in to nexa
                        </button>
                    </form>

                    <div className="relative py-4">
                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
                        <div className="relative flex justify-center text-[10px] uppercase font-black tracking-widest"><span className="bg-neutral px-4 text-neutral-content/20">or continue with</span></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button className="btn bg-white/5 border-white/5 hover:bg-white/10 h-12 rounded-xl text-white font-black text-[10px] uppercase tracking-widest gap-3">
                            <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" /></svg>
                            Google
                        </button>
                        <button className="btn bg-white/5 border-white/5 hover:bg-white/10 h-12 rounded-xl text-white font-black text-[10px] uppercase tracking-widest gap-3">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.152-1.11-1.459-1.11-1.459-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" /></svg>
                            Github
                        </button>
                    </div>
                </div>

                {/* Footer Link */}
                <div className="text-center mt-8">
                    <p className="text-neutral-content/30 text-[10px] font-black uppercase tracking-widest">
                        New to the commerce? <Link href="/register" className="text-primary hover:underline ml-2">Create an account</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
