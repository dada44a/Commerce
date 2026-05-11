"use client"
import React, { useState } from 'react';

const MOCK_USERS = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', joined: '2024-01-15' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Customer', status: 'Active', joined: '2024-02-20' },
  { id: 3, name: 'Mike Ross', email: 'mike@example.com', role: 'Customer', status: 'Inactive', joined: '2024-03-05' },
  { id: 4, name: 'Harvey Specter', email: 'harvey@example.com', role: 'Admin', status: 'Active', joined: '2024-03-12' },
  { id: 5, name: 'Rachel Zane', email: 'rachel@example.com', role: 'Customer', status: 'Suspended', joined: '2024-04-01' },
];

export default function AdminUsersPage() {
  const [users] = useState(MOCK_USERS);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-success/10 text-success border-success/20';
      case 'Inactive': return 'bg-slate-500/10 text-slate-500 border-slate-500/20';
      case 'Suspended': return 'bg-error/10 text-error border-error/20';
      default: return 'bg-slate-500/10 text-slate-500 border-slate-500/20';
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Users</h1>
          <p className="text-slate-500 mt-1 font-medium text-sm">Managing accounts and permissions.</p>
        </div>
        <button className="btn btn-primary rounded-xl px-6 h-12 text-sm font-semibold shadow-md shadow-primary/10">
          Add New User
        </button>
      </div>

      <div className="bg-base-100 rounded-2xl border border-base-300 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-base-200/50 border-b border-base-300">
                <th className="px-8 py-5 font-semibold text-slate-400 text-[11px] uppercase tracking-widest">User</th>
                <th className="px-8 py-5 font-semibold text-slate-400 text-[11px] uppercase tracking-widest">Email</th>
                <th className="px-8 py-5 font-semibold text-slate-400 text-[11px] uppercase tracking-widest">Role</th>
                <th className="px-8 py-5 font-semibold text-slate-400 text-[11px] uppercase tracking-widest">Status</th>
                <th className="px-8 py-5 font-semibold text-slate-400 text-[11px] uppercase tracking-widest">Joined</th>
                <th className="px-8 py-5 font-semibold text-slate-400 text-[11px] uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-base-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-base-200/20 transition-all group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                            {user.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="font-semibold text-slate-900 text-sm">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className="text-sm font-medium text-slate-600">{user.email}</span>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`text-xs font-semibold ${user.role === 'Admin' ? 'text-primary' : 'text-slate-500'}`}>
                        {user.role}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest border ${getStatusStyle(user.status)}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <span className="text-sm font-medium text-slate-400">{user.joined}</span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex justify-end gap-2">
                        <button className="w-8 h-8 rounded-lg bg-base-200 text-slate-600 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-base-200 text-slate-600 flex items-center justify-center hover:bg-error hover:text-white transition-all">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
                        </button>
                    </div>
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
