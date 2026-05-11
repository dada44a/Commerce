import React from 'react';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop" 
          alt="About Us Hero" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">Crafting Elegance</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            We believe that fashion is more than just clothes; it&apos;s an expression of your unique journey.
          </p>
        </div>

      </section>

      {/* Mission Section */}
      <section className="max-w-screen-xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
          <p className="text-slate-600 leading-relaxed mb-6 text-lg">
            Since our inception in 2020, Nexa Commerce has been dedicated to redefining the modern wardrobe. Our mission is to provide high-quality, sustainable, and stylish apparel that empowers individuals to feel confident and inspired every day.
          </p>
          <p className="text-slate-600 leading-relaxed text-lg">
            We source only the finest materials and work with ethical manufacturers to ensure that every piece we create not only looks good but also does good for the planet and the people who make them.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1523381235212-f72f46182208?q=80&w=800&auto=format&fit=crop" className="rounded-2xl shadow-lg mt-12" alt="Process 1" />
          <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop" className="rounded-2xl shadow-lg" alt="Process 2" />
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Quality First</h3>
              <p className="text-slate-500">We never compromise on the quality of our fabrics or the precision of our craftsmanship.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-slate-500">Continuously exploring new designs and sustainable technologies to lead the fashion industry.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Sustainability</h3>
              <p className="text-slate-500">Committed to reducing our environmental footprint through conscious production and packaging.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-screen-xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">Meet the Founders</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="text-center group">
            <div className="relative mb-6 overflow-hidden rounded-3xl">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Founder 1" />
            </div>
            <h3 className="text-2xl font-bold">James Wilson</h3>
            <p className="text-primary font-medium">CEO & Co-Founder</p>
          </div>
          <div className="text-center group">
            <div className="relative mb-6 overflow-hidden rounded-3xl">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop" className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Founder 2" />
            </div>
            <h3 className="text-2xl font-bold">Sarah Jenkins</h3>
            <p className="text-primary font-medium">Creative Director</p>
          </div>
        </div>
      </section>
    </main>
  );
}
