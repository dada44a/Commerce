"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuthStore } from '@/app/store/AuthStore';

const AdminSidebar = () => {
  const pathname = usePathname();
  const { user } = useAuthStore();

  const links = [
    { name: 'Dashboard', href: '/admin', icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' },
    { name: 'Products', href: '/admin/products', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
    { name: 'Orders', href: '/admin/orders', icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' },
    { name: 'Users', href: '/admin/users', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 01-9-3.5' },
    { name: 'Settings', href: '/admin/settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },

  ];

  return (
    <aside className="w-72 bg-neutral h-screen sticky top-0 flex flex-col text-neutral-content shadow-[10px_0_40px_rgba(0,0,0,0.2)] z-30 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -mr-32 -mt-32 pointer-events-none" />

      <div className="relative p-10 mb-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/40 rotate-3">
            <span className="text-white font-bold text-lg">N</span>
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">NEXA<span className="text-primary">.</span></span>
        </Link>
      </div>

      <nav className="relative flex-1 px-6 space-y-3">
        <p className="px-4 text-[11px] font-bold uppercase tracking-widest text-neutral-content/30 mb-4">Main Menu</p>
        {links.map((link) => {
          const isActive = link.href === '/admin'
            ? pathname === '/admin'
            : pathname.startsWith(link.href);
          return (
            <Link
              key={link.name}
              href={link.href}

              className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-500 group ${isActive
                ? 'bg-white/10 text-white shadow-[0_10px_20px_rgba(0,0,0,0.1)] backdrop-blur-md border border-white/5'
                : 'text-neutral-content/40 hover:text-white hover:bg-white/5'
                }`}
            >
              <div className={`transition-all duration-500 ${isActive ? 'text-primary scale-110' : 'group-hover:scale-110'}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={link.icon} />
                </svg>
              </div>
              <span className={`font-semibold text-sm tracking-tight ${isActive ? 'translate-x-1' : 'group-hover:translate-x-1'} transition-transform`}>
                {link.name}
              </span>
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_#6366f1]" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="relative p-8 mt-auto">
        <div className="bg-white/5 rounded-[2rem] p-6 border border-white/5 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/20 flex items-center justify-center text-primary font-bold">JD</div>
              <div>
                <p className="text-sm font-semibold text-white">{user?.name}</p>
                <p className="text-[11px] text-neutral-content/40 uppercase tracking-widest font-bold">{user?.role}</p>
              </div>
            </div>
            <button
              onClick={() => {
                alert('Logged out!');
                window.location.href = '/login';
              }}
              className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-neutral-content/40 hover:bg-error/20 hover:text-error transition-all"
              title="Logout"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
            </button>
          </div>
          <Link href="/" className="btn btn-primary btn-sm w-full rounded-xl gap-2 font-semibold lowercase tracking-tight">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            storefront
          </Link>
        </div>

      </div>
    </aside>
  );
};



export default AdminSidebar;
