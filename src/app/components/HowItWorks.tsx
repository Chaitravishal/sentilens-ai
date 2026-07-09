'use client';

import { motion } from 'framer-motion';
import { Link2, DownloadCloud, Cpu, BarChart3, Award, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Paste Product URL',
      subtitle: 'Input Amazon or e-commerce links',
      desc: 'Simply copy and paste any supported product URL. SentiLens parses the product ID and prepares the pipeline.',
      icon: Link2,
      color: 'bg-blue-50 text-primary border-blue-100',
      badge: 'URL Parser'
    },
    {
      number: '02',
      title: 'Collect Reviews',
      subtitle: 'Extract raw text at scale',
      desc: 'The crawler retrieves all available reviews, cleaning out HTML tags, system metadata, and duplicate feedback entries.',
      icon: DownloadCloud,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
      badge: 'Data Crawling'
    },
    {
      number: '03',
      title: 'NLP Processing',
      subtitle: 'Tokenize, Lemmatize & Classify',
      desc: 'Text undergoes cleaning, stopword removal, and tokenization. A DistilBERT transformer evaluates text for sentiment and extracts emotional indicators.',
      icon: Cpu,
      color: 'bg-purple-50 text-purple-600 border-purple-100',
      badge: 'Transformer Model'
    },
    {
      number: '04',
      title: 'Generate Dashboard',
      subtitle: 'Compile visual analytics',
      desc: 'NLP output maps to visual charts: emotion ratios, review count frequencies, aspect analysis grids, and trending key topics.',
      icon: BarChart3,
      color: 'bg-pink-50 text-pink-600 border-pink-100',
      badge: 'Data Visualizer'
    },
    {
      number: '05',
      title: 'Buying Verdict',
      subtitle: 'Compute confidence confidence',
      desc: 'An AI summary generator outlines primary pros and cons, computing a definitive Buying Health Score and confidence percentage.',
      icon: Award,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      badge: 'Executive summary'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any } 
    }
  };

  return (
    <section id="how-it-works" className="bg-bg-section py-20 lg:py-32 border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <h2 className="text-xs font-bold uppercase tracking-wider text-primary">
            Architecture Workflow
          </h2>
          <p className="mt-3 text-3xl font-extrabold tracking-tight text-text-main sm:text-4xl">
            How SentiLens AI Works
          </p>
          <p className="mt-4 text-base text-slate-500 font-medium">
            Discover the NLP pipeline that transforms raw customer commentary into structured buying metrics.
          </p>
        </div>

        {/* Steps Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={cardVariants}
                className="relative group bg-white border border-slate-150 p-6 rounded-[24px] shadow-sm hover:shadow-md hover:border-slate-250 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number Indicator */}
                  <div className="absolute top-4 right-5 text-4xl font-black text-slate-100 group-hover:text-slate-150 transition-colors select-none">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${step.color} shadow-sm mb-6 group-hover:scale-105 transition-transform`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  <span className="inline-block rounded-full bg-slate-50 border border-slate-200/60 px-2 py-0.5 text-[9px] font-bold tracking-wider text-slate-500 uppercase mb-3">
                    {step.badge}
                  </span>

                  <h3 className="text-base font-bold text-text-main group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="mt-1 text-xs font-semibold text-slate-400">
                    {step.subtitle}
                  </p>

                  <p className="mt-4 text-xs leading-relaxed text-slate-500 font-medium">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow Connector for Desktop (except last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-10 -right-4 translate-x-1.5 z-10 items-center justify-center h-8 w-8 rounded-full bg-white border border-slate-100 shadow-sm text-slate-400 group-hover:text-primary transition-colors">
                    <ArrowRight className="h-4.5 w-4.5" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Technical Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 glass-panel p-6 rounded-[24px] border border-slate-200/60 flex flex-col sm:flex-row items-center gap-4 max-w-4xl mx-auto shadow-sm"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-secondary text-white shadow-md">
            <Cpu className="h-5.5 w-5.5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-text-main">NLP Methodological Focus</h4>
            <p className="mt-1 text-xs leading-relaxed text-slate-500 font-medium">
              This system uses a modular NLP pipe. Initial tokens are extracted, filtered for English stopwords, and lemmatized to group base verbs. Sentiment weights are calculated utilizing fine-tuned <strong>DistilBERT transformers</strong>, generating high-accuracy classifications that map across individual product features (aspect extraction).
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
