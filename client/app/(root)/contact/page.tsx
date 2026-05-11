"use client"
import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Handle form submission logic here
  };

  return (
    <main className="min-h-screen bg-slate-50/50 py-20">
      <div className="max-w-screen-xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Get in Touch</h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Have a question or just want to say hi? We&apos;d love to hear from you. 
            Fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>
        </div>


        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Visit Us</h3>
                    <p className="text-slate-500">123 Fashion Street, Design District<br />New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Email Us</h3>
                    <p className="text-slate-500">hello@nexacommerce.com<br />support@nexacommerce.com</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Call Us</h3>
                    <p className="text-slate-500">+1 (555) 123-4567<br />Mon - Fri: 9am - 6pm EST</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary p-8 rounded-3xl text-white">
              <h3 className="text-xl font-bold mb-4">Follow Our Journey</h3>
              <p className="text-white/80 mb-6">Stay updated with our latest drops and exclusive offers.</p>
              <div className="flex gap-4">
                {['Instagram', 'Twitter', 'Facebook', 'Pinterest'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors">
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-white rounded-sm" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-sm h-full">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center animate-fade-in">
                  <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h2>
                  <p className="text-slate-500 mb-8">Thank you for reaching out. Our team will get back to you shortly.</p>

                  <button 
                    onClick={() => setSubmitted(false)}
                    className="btn btn-outline rounded-2xl px-8"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="input input-bordered w-full bg-slate-50 border-slate-200 rounded-2xl h-14 focus:bg-white transition-all"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                      <input 
                        type="email" 
                        required
                        className="input input-bordered w-full bg-slate-50 border-slate-200 rounded-2xl h-14 focus:bg-white transition-all"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                    <input 
                      type="text" 
                      required
                      className="input input-bordered w-full bg-slate-50 border-slate-200 rounded-2xl h-14 focus:bg-white transition-all"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                    <textarea 
                      required
                      className="textarea textarea-bordered w-full bg-slate-50 border-slate-200 rounded-2xl h-40 focus:bg-white transition-all p-4"
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-full rounded-2xl h-14 text-lg">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
