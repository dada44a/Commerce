export default function AdminDashboard() {
  const stats = [
    { name: 'Total Revenue', value: '$12,450', change: '+12.5%', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: 'from-blue-500/20 to-indigo-500/20', text: 'text-blue-600' },
    { name: 'Total Orders', value: '154', change: '+8.2%', icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z', color: 'from-emerald-500/20 to-teal-500/20', text: 'text-emerald-600' },
    { name: 'Active Users', value: '1,205', change: '+15.1%', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 01-9-3.5', color: 'from-orange-500/20 to-rose-500/20', text: 'text-orange-600' },
    { name: 'Conversion Rate', value: '3.2%', change: '+2.4%', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6', color: 'from-purple-500/20 to-fuchsia-500/20', text: 'text-purple-600' },
  ];

  return (
    <div className="space-y-12 animate-fade-in">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Dashboard</h1>
          <p className="text-slate-500 mt-1 font-medium text-sm">Real-time performance metrics.</p>
        </div>
        <div className="flex gap-2">
            <button className="btn btn-outline btn-sm rounded-xl px-4 font-semibold h-11">Export</button>
            <button className="btn btn-primary btn-sm rounded-xl px-6 shadow-md shadow-primary/10 font-semibold h-11">Refresh</button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="relative group overflow-hidden bg-base-100 p-6 rounded-2xl border border-base-300 shadow-sm hover:shadow-md transition-all duration-300">
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} blur-3xl -mr-16 -mt-16`} />
            
            <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 rounded-xl bg-base-200 shadow-sm flex items-center justify-center ${stat.text}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={stat.icon} />
                    </svg>
                </div>
                <span className="text-success text-[10px] font-bold bg-success/10 px-2.5 py-1 rounded-lg uppercase tracking-wider">{stat.change}</span>
                </div>
                <h3 className="text-slate-500 font-semibold text-xs uppercase tracking-widest mb-1">{stat.name}</h3>
                <p className="text-2xl font-bold text-slate-900 tracking-tighter">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-base-100 p-8 rounded-2xl border border-base-300 shadow-sm min-h-[400px] flex flex-col">
            <div className="flex justify-between items-center mb-8">
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">Revenue Analytics</h3>
                <select className="select select-sm select-bordered rounded-xl font-semibold bg-base-200 border-base-300 h-10">
                    <option>Last 7 Days</option>
                    <option>Last 30 Days</option>
                </select>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-base-200 rounded-2xl bg-base-200/30">
                <p className="text-slate-400 font-semibold tracking-widest uppercase text-[11px]">Analytics Visualization</p>
            </div>
        </div>

        <div className="bg-base-100 p-8 rounded-2xl border border-base-300 shadow-sm flex flex-col">
            <h3 className="text-lg font-bold text-slate-900 mb-8 tracking-tight">Recent Sales</h3>
            <div className="space-y-6 flex-1">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 rounded-xl bg-base-200 flex items-center justify-center text-xl group-hover:bg-primary/10 transition-all">👕</div>
                        <div className="flex-1">
                            <p className="font-semibold text-slate-900 group-hover:text-primary transition-colors tracking-tight text-sm">Premium Tee</p>
                            <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest mt-0.5">Order #293{i}</p>
                        </div>
                        <div className="text-right text-sm">
                            <p className="font-bold text-slate-900 tracking-tighter">+$29.00</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="btn btn-ghost btn-sm w-full mt-8 rounded-xl font-semibold text-primary border border-primary/10 h-11 text-xs">View All</button>
        </div>
      </div>


    </div>
  );
}

