'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Smartphone, Headphones, Tv, Sparkles, ArrowRight, ShieldCheck, Heart, TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';

interface HeroProps {
  onStartAnalysis: (productId: string, customUrl?: string) => void;
}

export default function Hero({ onStartAnalysis }: HeroProps) {
  const [urlInput, setUrlInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const demoProducts = [
    { id: 'apple', name: 'Apple', icon: Smartphone, color: 'from-gray-700 to-gray-900', desc: 'iPhone 15 Pro Max', rating: '4.7 ★' },
    { id: 'samsung', name: 'Samsung', icon: Smartphone, color: 'from-blue-600 to-indigo-800', desc: 'Galaxy S24 Ultra', rating: '4.6 ★' },
    { id: 'sony', name: 'Sony', icon: Headphones, color: 'from-purple-600 to-indigo-700', desc: 'WH-1000XM5', rating: '4.8 ★' },
    { id: 'nike', name: 'Nike', icon: Sparkles, color: 'from-orange-500 to-red-600', desc: 'Air Max Runner', rating: '4.4 ★' },
    { id: 'lg', name: 'LG', icon: Tv, color: 'from-rose-600 to-red-800', desc: 'OLED C3 65"', rating: '4.8 ★' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput) {
      setErrorMsg('Please enter a product URL');
      return;
    }
    if (!urlInput.startsWith('http://') && !urlInput.startsWith('https://')) {
      setErrorMsg('Please enter a valid URL starting with http:// or https://');
      return;
    }
    setErrorMsg('');
    onStartAnalysis('custom', urlInput);
  };

  return (
    <section id="analyzer" className="relative overflow-hidden bg-white py-20 lg:py-32">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-10 h-[600px] w-[600px] rounded-full bg-blue-50/50 blur-3xl opacity-80" />
        <div className="absolute top-60 -left-20 h-[500px] w-[500px] rounded-full bg-purple-50/50 blur-3xl opacity-85" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Form & Title */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex w-fit items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-semibold text-primary border border-blue-100 mb-6"
            >
              <Sparkles className="h-3.5 w-3.5 animate-pulse text-secondary" />
              <span>NLP-Powered Buying Intelligence</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-extrabold tracking-tight text-text-main sm:text-5xl md:text-6xl lg:leading-[1.1]"
            >
              Understand Customer <span className="text-gradient">Opinions</span> Before You Buy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg leading-relaxed text-slate-600 max-w-xl"
            >
              Analyze thousands of product reviews using Natural Language Processing and AI to instantly understand customer satisfaction, product strengths, recurring complaints, and buying confidence.
            </motion.p>

            {/* URL Analyzer Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10"
            >
              <form onSubmit={handleSubmit} className="relative max-w-2xl">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-2 rounded-[24px] bg-slate-50 p-2 border border-slate-200/80 shadow-sm focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/10 transition-all duration-300">
                  <div className="flex flex-1 items-center pl-3">
                    <Search className="h-5.5 w-5.5 text-slate-400 shrink-0" />
                    <input
                      type="text"
                      value={urlInput}
                      onChange={(e) => {
                        setUrlInput(e.target.value);
                        if (errorMsg) setErrorMsg('');
                      }}
                      placeholder="Paste product review link (Amazon, Shopify, etc.)..."
                      className="w-full bg-transparent px-3 py-3 text-sm text-text-main placeholder-slate-400 outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 rounded-[18px] bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-primary/10 hover:bg-blue-700 hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
                  >
                    <span>Analyze URL</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                {errorMsg && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2.5 ml-4 text-xs font-semibold text-negative flex items-center gap-1"
                  >
                    <AlertTriangle className="h-3.5 w-3.5" />
                    <span>{errorMsg}</span>
                  </motion.p>
                )}
              </form>
            </motion.div>

            {/* Supported Demo Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-5">
                Or Test NLP with Demo Products
              </h3>
              
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                {demoProducts.map((prod) => {
                  const Icon = prod.icon;
                  return (
                    <button
                      key={prod.id}
                      onClick={() => onStartAnalysis(prod.id)}
                      className="group flex flex-col items-start rounded-2xl border border-slate-100 bg-slate-50/50 p-4 text-left shadow-sm hover:bg-white hover:border-slate-200 hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer"
                    >
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr ${prod.color} text-white shadow-md group-hover:scale-105 transition-transform`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="mt-3.5 text-xs font-semibold text-slate-400">{prod.name}</span>
                      <span className="mt-0.5 text-sm font-bold text-text-main group-hover:text-primary transition-colors line-clamp-1">{prod.desc}</span>
                      <span className="mt-2 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">{prod.rating}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>

          </div>

          {/* Right Column: Floating Premium Dashboard Mockups */}
          <div className="relative lg:col-span-5 flex justify-center lg:justify-end items-center h-[420px] sm:h-[480px]">
            
            {/* Ambient background glow behind floating cards */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-indigo-200/20 blur-3xl" />

            {/* Health Score Card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-4 left-6 sm:left-12 glass-panel p-5 rounded-[24px] shadow-lg w-44 hover:shadow-xl hover:border-slate-300 transition-colors z-20"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400">Health Score</span>
                <ShieldCheck className="h-5 w-5 text-positive" />
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold tracking-tight text-text-main">86</span>
                <span className="text-sm font-semibold text-slate-400">/100</span>
              </div>
              <p className="mt-2.5 text-[11px] font-semibold text-positive bg-green-50 rounded-full px-2 py-0.5 w-fit">
                Robust Sentiment
              </p>
            </motion.div>

            {/* Ratio Cards - Stacked positive/negative percentages */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-8 glass-panel p-6 rounded-[28px] shadow-lg w-52 hover:shadow-xl z-10"
            >
              <span className="text-xs font-bold text-slate-400">Analysis Snapshot</span>
              
              <div className="mt-4 space-y-3.5">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-slate-600 flex items-center gap-1"><Heart className="h-3 w-3 text-positive fill-positive" /> Positive</span>
                    <span className="text-positive">68%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-positive rounded-full" style={{ width: '68%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-slate-600 flex items-center gap-1"><TrendingDown className="h-3 w-3 text-negative" /> Negative</span>
                    <span className="text-negative">13%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-negative rounded-full" style={{ width: '13%' }} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AI Summary Banner Card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-6 left-2 sm:left-8 glass-panel p-5 rounded-[24px] shadow-xl w-64 hover:shadow-2xl z-30"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-50 text-secondary">
                  <TrendingUp className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400">AI Recommendation</h4>
                  <p className="text-sm font-extrabold text-text-main">Highly Recommended</p>
                </div>
              </div>
              <p className="mt-3 text-[11px] leading-relaxed text-slate-500 font-medium border-t border-slate-100 pt-2.5">
                "Consistently strong battery reports and display color praise overshadow minor pricing concerns."
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
