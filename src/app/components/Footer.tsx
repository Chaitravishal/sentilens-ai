import { Brain, Mail, ShieldAlert } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 mt-auto py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 pb-10 border-b border-slate-100">
          
          {/* Logo & Pitch */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-primary to-secondary text-white">
                <Brain className="h-4.5 w-4.5" />
              </div>
              <span className="text-base font-bold tracking-tight text-text-main">
                SentiLens <span className="text-primary">AI</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-500 font-semibold">
              NLP-driven purchase guidance analyzing consumer reviews using advanced Transformers and Aspect Sentiment extraction models.
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Technology Stack</h4>
            <ul className="space-y-2 text-xs font-bold text-slate-600">
              <li>Next.js 16 (App Router)</li>
              <li>TypeScript</li>
              <li>Tailwind CSS v4</li>
              <li>Framer Motion</li>
              <li>Recharts Visualizer</li>
            </ul>
          </div>

          {/* NLP Pipeline Details */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">NLP Pipeline</h4>
            <ul className="space-y-2 text-xs font-bold text-slate-600">
              <li>WordPiece Tokenization</li>
              <li>WordNet Lemmatizer</li>
              <li>DistilBERT Base Uncased</li>
              <li>TF-IDF Key Phrases</li>
              <li>LDA Topic Modeling</li>
            </ul>
          </div>

          {/* About Section */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Project Attribution</h4>
            <p className="text-xs leading-relaxed text-slate-500 font-semibold">
              Developed as a collegiate Natural Language Processing (NLP) project demonstrating deep transformer applications in modern commercial e-commerce review indexing.
            </p>
            <div className="flex gap-4 pt-2">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-400 hover:text-slate-900 transition-colors"
              >
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
              <a 
                href="mailto:project@college.edu" 
                className="text-slate-400 hover:text-slate-900 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & notes */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
            <ShieldAlert className="h-4 w-4 text-amber-500" />
            <span>Demonstration project. All web scraper crawlers are simulated utilizing realistic mock indices.</span>
          </div>
          <div className="text-xs font-bold text-slate-500">
            © {new Date().getFullYear()} SentiLens AI. Made for NLP Class.
          </div>
        </div>
      </div>
    </footer>
  );
}
