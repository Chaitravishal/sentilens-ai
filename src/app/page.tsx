'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Cpu, CheckCircle, Database, BookOpen, Layers, BarChart } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import NLPLoading from './components/NLPLoading';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import { mockProducts, generateCustomAnalysis, ProductData } from './data/mockData';

export default function Home() {
  const [view, setView] = useState<'landing' | 'loading' | 'dashboard'>('landing');
  const [selectedProdId, setSelectedProdId] = useState<string | null>(null);
  const [customUrl, setCustomUrl] = useState<string>('');
  const [activeData, setActiveData] = useState<ProductData | null>(null);

  // Transitions the view and prepares mock data
  const handleStartAnalysis = (productId: string, url?: string) => {
    setSelectedProdId(productId);
    if (productId === 'custom' && url) {
      setCustomUrl(url);
    } else {
      setCustomUrl('');
    }
    setView('loading');
  };

  const handleLoadingComplete = () => {
    if (selectedProdId === 'custom' && customUrl) {
      const data = generateCustomAnalysis(customUrl);
      setActiveData(data);
    } else if (selectedProdId && mockProducts[selectedProdId]) {
      setActiveData(mockProducts[selectedProdId]);
    }
    setView('dashboard');
  };

  const handleBackToLanding = () => {
    setView('landing');
    setActiveData(null);
    setSelectedProdId(null);
    setCustomUrl('');
    // Scroll to analyzer input on reset
    setTimeout(() => {
      document.getElementById('analyzer')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Safe scroll utility handling dashboard transitions
  const handleScrollToSection = (sectionId: string) => {
    if (view !== 'landing') {
      setView('landing');
      setActiveData(null);
      setSelectedProdId(null);
      setCustomUrl('');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getLoadingProductName = () => {
    if (selectedProdId === 'custom') return 'Scraped URL Link';
    if (selectedProdId && mockProducts[selectedProdId]) {
      return mockProducts[selectedProdId].name;
    }
    return 'Product Reviews';
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar always visible */}
      <Navbar 
        onNavigate={(target) => {
          if (target === 'landing') handleBackToLanding();
          else if (target === 'dashboard' && activeData) setView('dashboard');
          else handleScrollToSection('analyzer');
        }}
        currentView={view === 'dashboard' ? 'dashboard' : 'landing'}
        onScrollToSection={handleScrollToSection}
      />

      <main className="flex-grow">
        {view === 'landing' && (
          <div>
            {/* Hero Section */}
            <Hero onStartAnalysis={handleStartAnalysis} />

            {/* How It Works Section */}
            <HowItWorks />

            {/* NLP College Project Methodology Section */}
            <section id="about" className="py-20 lg:py-32 bg-white">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center max-w-2xl mx-auto mb-16">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-primary">NLP Project Thesis</h2>
                  <p className="mt-3 text-3xl font-extrabold tracking-tight text-text-main sm:text-4xl">
                    Methodology & Pipeline Theory
                  </p>
                  <p className="mt-4 text-base text-slate-500 font-medium">
                    Explaining the NLP methodologies that form the backbone of this product review analyzer.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Card 1 */}
                  <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/40 shadow-sm hover:shadow-md hover:border-slate-200 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-primary mb-5 border border-blue-100">
                        <BookOpen className="h-5.5 w-5.5" />
                      </div>
                      <h3 className="text-base font-bold text-text-main mb-2">Lexicon vs. Transformers</h3>
                      <p className="text-xs leading-relaxed text-slate-500 font-medium">
                        Standard lexicon classifiers (VADER, TextBlob) fail to parse complex negations (e.g., "not bad at all"). SentiLens utilizes <strong>DistilBERT</strong>, a transformer model that preserves bidirectional context and parses complex grammatical structures.
                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/40 shadow-sm hover:shadow-md hover:border-slate-200 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600 mb-5 border border-purple-100">
                        <Layers className="h-5.5 w-5.5" />
                      </div>
                      <h3 className="text-base font-bold text-text-main mb-2">Aspect-Based Extraction</h3>
                      <p className="text-xs leading-relaxed text-slate-500 font-medium">
                        Standard review sentiment yields a single overall score. SentiLens runs dependency parsing and aspect extraction, isolating sentiments specifically targeting <em>Battery</em>, <em>Price</em>, or <em>Display</em> for granular reporting.
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/40 shadow-sm hover:shadow-md hover:border-slate-200 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-50 text-pink-600 mb-5 border border-pink-100">
                        <Database className="h-5.5 w-5.5" />
                      </div>
                      <h3 className="text-base font-bold text-text-main mb-2">LDA Topic Clustering</h3>
                      <p className="text-xs leading-relaxed text-slate-500 font-medium">
                        To uncover hidden issues, we apply Latent Dirichlet Allocation (LDA). This algorithm groups reviews into semantic keyword clusters without prior labeling, automatically surfacing recurring complaints like "squeaking sole" or "screen reflection."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 rounded-[24px] bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 flex flex-col md:flex-row items-center gap-6 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-md">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-main">Academic Note: Why DistilBERT?</h4>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600 font-medium">
                      DistilBERT is a distilled version of BERT. Trained using knowledge distillation, it is 40% smaller and 60% faster while retaining 97% of BERT's language understanding. This allows high-throughput review inference at a fraction of the hardware cost, making it ideal for client-side deployment simulations.
                    </p>
                  </div>
                </div>

              </div>
            </section>
          </div>
        )}

        {view === 'dashboard' && activeData && (
          <Dashboard 
            data={activeData} 
            onBack={handleBackToLanding} 
          />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Fullscreen NLP pipeline loader */}
      <AnimatePresence>
        {view === 'loading' && (
          <NLPLoading 
            productName={getLoadingProductName()} 
            onComplete={handleLoadingComplete} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
