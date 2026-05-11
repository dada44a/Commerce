"use client";

import React from 'react';
import AdminSidebar from '@/components/AdminSidebar';
import { useAuthStore } from '../store/AuthStore';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, checkAuth, loading } = useAuthStore();

  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    checkAuth();
    setIsMounted(true);
  }, [checkAuth]);


  if (!isMounted || loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-xl font-bold">Checking authentication...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-xl font-bold">You must be logged in to access the admin panel.</p>
      </div>
    );
  }

  if (user.role !== "admin") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-xl font-bold">You do not have permission to access the admin panel.</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-base-200 selection:bg-primary/10">
      <AdminSidebar />
      <main className="flex-1 p-6 md:p-10 overflow-auto">
        <div className="max-w-7xl mx-auto pb-16">
          {children}
        </div>
      </main>
    </div>
  );
}


