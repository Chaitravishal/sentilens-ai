'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle2, Terminal, Cpu, Database, Award } from 'lucide-react';

interface NLPLoadingProps {
  productName: string;
  onComplete: () => void;
}

interface PipelineStep {
  name: string;
  logMessage: string;
  stage: 'scrape' | 'preprocess' | 'model' | 'compile';
}

export default function NLPLoading({ productName, onComplete }: NLPLoadingProps) {
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const consoleEndRef = useRef<HTMLDivElement>(null);

  const steps: PipelineStep[] = [
    { name: 'Detecting Product', logMessage: `Product signature detected: "${productName}"`, stage: 'scrape' },
    { name: 'Collecting Reviews', logMessage: 'Scraping review contents from web source index...', stage: 'scrape' },
    { name: 'Cleaning Text', logMessage: 'Removing HTML markups, system metadata, and emoji strings', stage: 'preprocess' },
    { name: 'Language Detection', logMessage: 'Language check: 100% English reviews verified', stage: 'preprocess' },
    { name: 'Tokenization', logMessage: 'WordPiece Tokenizer: mapping text to input IDs', stage: 'preprocess' },
    { name: 'Removing Stopwords', logMessage: 'Filtering common stopwords (the, an, is) using NLTK patterns', stage: 'preprocess' },
    { name: 'Lemmatization', logMessage: 'Lemmatizing terms using WordNet Lexicon reference', stage: 'preprocess' },
    { name: 'Running DistilBERT', logMessage: 'Loading fine-tuned DistilBERT-base-uncased weights...', stage: 'model' },
    { name: 'Sentiment Classification', logMessage: 'Running forward pass: computing positive/negative confidence vectors', stage: 'model' },
    { name: 'Keyword Extraction', logMessage: 'Calculating TF-IDF frequencies across token sets', stage: 'model' },
    { name: 'Aspect Extraction', logMessage: 'Mapping dependency trees for aspect extraction (e.g. battery, price)', stage: 'model' },
    { name: 'Emotion Detection', logMessage: 'Computing multi-class emotion coefficients (Joy, Surprise, Anger)', stage: 'model' },
    { name: 'Topic Modeling', logMessage: 'Generating Latent Dirichlet Allocation (LDA) topic arrays', stage: 'model' },
    { name: 'AI Summary Generation', logMessage: 'Synthesizing pro/con executive review arrays', stage: 'compile' },
    { name: 'Dashboard Ready', logMessage: 'Compilation successful. Rendering analytics layout...', stage: 'compile' }
  ];

  // Auto scroll terminal logs to bottom
  useEffect(() => {
    consoleEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  useEffect(() => {
    if (activeStepIdx >= steps.length) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timeout);
    }

    const currentStep = steps[activeStepIdx];
    
    // Add starting step log
    const startTime = new Date().toLocaleTimeString().split(' ')[0];
    setLogs((prev) => [...prev, `[${startTime}] [INIT] Starting: ${currentStep.name}...`]);

    // Simulate work done
    const duration = activeStepIdx === 7 || activeStepIdx === 13 ? 550 : 320; // models and AI take a bit longer
    const timeout = setTimeout(() => {
      const endTime = new Date().toLocaleTimeString().split(' ')[0];
      setLogs((prev) => [
        ...prev,
        `[${endTime}] [SUCCESS] ${currentStep.logMessage}`
      ]);
      setActiveStepIdx((prev) => prev + 1);
    }, duration);

    return () => clearTimeout(timeout);
  }, [activeStepIdx]);

  const progressPercent = Math.min(Math.round((activeStepIdx / steps.length) * 100), 100);

  // Determine current active pipeline stage name
  const getCurrentStageLabel = () => {
    if (activeStepIdx < 2) return { text: 'Scraping Data', icon: Database, color: 'text-blue-400' };
    if (activeStepIdx < 7) return { text: 'Preprocessing Text', icon: Terminal, color: 'text-indigo-400' };
    if (activeStepIdx < 13) return { text: 'Running Neural Network', icon: Cpu, color: 'text-purple-400' };
    return { text: 'Compiling Dashboard', icon: Award, color: 'text-emerald-400' };
  };

  const StageInfo = getCurrentStageLabel();
  const StageIcon = StageInfo.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel-dark max-w-2xl w-full p-6 sm:p-8 rounded-[28px] border border-white/10 shadow-2xl relative overflow-hidden"
      >
        {/* Glow effect at top */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-40 w-80 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white border border-white/10">
              <Cpu className="h-5.5 w-5.5 animate-pulse text-indigo-400" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white tracking-wide uppercase">NLP Processing Pipeline</h2>
              <p className="text-[11px] font-semibold text-slate-400">DistilBERT Sentiment Core v1.2</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-2xl font-black text-white">{progressPercent}%</span>
          </div>
        </div>

        {/* Active Stage Indicator */}
        <div className="flex items-center gap-2 mb-4 bg-white/5 rounded-xl px-4 py-2.5 border border-white/5">
          <StageIcon className={`h-4.5 w-4.5 animate-pulse ${StageInfo.color}`} />
          <span className="text-xs font-bold text-slate-300">Stage: </span>
          <span className={`text-xs font-black uppercase tracking-wider ${StageInfo.color}`}>
            {StageInfo.text}
          </span>
        </div>

        {/* Global Progress Bar */}
        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden mb-6 relative">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full"
            style={{ width: `${progressPercent}%` }}
            transition={{ ease: 'easeOut' }}
          />
        </div>

        {/* Terminal Logs Window */}
        <div className="bg-slate-900/90 border border-white/10 rounded-2xl p-4 h-64 overflow-y-auto font-mono text-[11px] leading-relaxed text-indigo-200/90 shadow-inner">
          <div className="space-y-2">
            {logs.map((log, idx) => (
              <div 
                key={idx} 
                className={`${log.includes('[SUCCESS]') ? 'text-emerald-400' : 'text-slate-300'}`}
              >
                {log}
              </div>
            ))}
            
            {activeStepIdx < steps.length && (
              <div className="flex items-center gap-2 text-blue-400 animate-pulse">
                <span>&gt; Executing {steps[activeStepIdx].name}</span>
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              </div>
            )}
            
            <div ref={consoleEndRef} />
          </div>
        </div>

        {/* Step Checklists */}
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2.5 justify-center border-t border-white/5 pt-5">
          <div className="flex items-center gap-1.5">
            {activeStepIdx > 1 ? (
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            ) : (
              <div className={`h-2.5 w-2.5 rounded-full ${activeStepIdx >= 0 ? 'bg-blue-400 animate-ping' : 'bg-white/10'}`} />
            )}
            <span className="text-[11px] font-bold text-slate-300">Scrape</span>
          </div>
          <div className="flex items-center gap-1.5">
            {activeStepIdx > 6 ? (
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            ) : (
              <div className={`h-2.5 w-2.5 rounded-full ${activeStepIdx >= 2 ? 'bg-indigo-400 animate-ping' : 'bg-white/10'}`} />
            )}
            <span className="text-[11px] font-bold text-slate-300">Clean & Normalize</span>
          </div>
          <div className="flex items-center gap-1.5">
            {activeStepIdx > 12 ? (
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            ) : (
              <div className={`h-2.5 w-2.5 rounded-full ${activeStepIdx >= 7 ? 'bg-purple-400 animate-ping' : 'bg-white/10'}`} />
            )}
            <span className="text-[11px] font-bold text-slate-300">Transformers (DistilBERT)</span>
          </div>
          <div className="flex items-center gap-1.5">
            {activeStepIdx >= steps.length ? (
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            ) : (
              <div className={`h-2.5 w-2.5 rounded-full ${activeStepIdx >= 13 ? 'bg-emerald-400 animate-ping' : 'bg-white/10'}`} />
            )}
            <span className="text-[11px] font-bold text-slate-300">Generate Summary</span>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
