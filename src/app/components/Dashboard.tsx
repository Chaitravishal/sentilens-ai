'use client';

import { motion } from 'framer-motion';
import { 
  ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend, 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line
} from 'recharts';
import { 
  TrendingUp, Star, Users, ShieldCheck, Heart, AlertCircle, 
  Sparkles, ThumbsUp, ThumbsDown, ArrowLeft, RefreshCw, BarChart2,
  BookmarkCheck, Smile
} from 'lucide-react';
import { ProductData } from '../data/mockData';

interface DashboardProps {
  data: ProductData;
  onBack: () => void;
}

export default function Dashboard({ data, onBack }: DashboardProps) {
  // Chart Color Constants
  const SENTIMENT_COLORS = ['#22C55E', '#F59E0B', '#EF4444']; // Positive, Neutral, Negative
  
  // Format sentiment data for Pie Chart
  const sentimentPieData = [
    { name: 'Positive', value: data.sentimentBreakdown.positive },
    { name: 'Neutral', value: data.sentimentBreakdown.neutral },
    { name: 'Negative', value: data.sentimentBreakdown.negative }
  ];

  // Animation variants for dashboard cards
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
  };

  return (
    <div className="bg-bg-section min-h-screen py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Back Button & Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-10">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-slate-200/80 text-slate-500 hover:text-slate-900 shadow-sm hover:shadow transition-all cursor-pointer"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div>
              <span className="text-xs font-bold text-primary bg-blue-50 border border-blue-100 rounded-full px-2.5 py-0.5 uppercase tracking-wider">
                {data.category}
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-text-main mt-1">
                {data.name}
              </h1>
            </div>
          </div>
          
          <button
            onClick={onBack}
            className="flex items-center justify-center gap-2 rounded-xl bg-white border border-slate-200/80 px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-primary shadow-sm transition-all cursor-pointer w-fit"
          >
            <RefreshCw className="h-4 w-4" />
            <span>Analyze Another Link</span>
          </button>
        </div>

        {/* 1. Final Recommendation Banner (Top Callout) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`mb-8 border rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden relative ${
            data.recommendation.status.includes('Highly')
              ? 'bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent border-emerald-500/25'
              : data.recommendation.status === 'Recommended'
              ? 'bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-transparent border-blue-500/25'
              : 'bg-gradient-to-r from-amber-500/10 via-yellow-500/5 to-transparent border-amber-500/25'
          }`}
        >
          {/* Decorative blur ball */}
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-500/5 blur-2xl pointer-events-none" />
          
          <div className="flex items-start gap-4">
            <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border text-white shadow-md ${
              data.recommendation.status.includes('Highly')
                ? 'bg-gradient-to-tr from-emerald-500 to-teal-600 border-emerald-400'
                : data.recommendation.status === 'Recommended'
                ? 'bg-gradient-to-tr from-blue-500 to-indigo-600 border-blue-400'
                : 'bg-gradient-to-tr from-amber-500 to-orange-500 border-amber-400'
            }`}>
              <BookmarkCheck className="h-7 w-7" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">NLP Platform Verdict</span>
                <span className={`text-xs font-bold rounded-full px-2.5 py-0.5 border ${
                  data.recommendation.status.includes('Highly')
                    ? 'bg-green-50 text-positive border-green-200'
                    : data.recommendation.status === 'Recommended'
                    ? 'bg-blue-50 text-primary border-blue-200'
                    : 'bg-amber-50 text-neutral border-amber-200'
                }`}>
                  {data.recommendation.status}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-text-main mt-1.5">
                Buying Verdict: {data.recommendation.status}
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-3xl font-medium leading-relaxed">
                {data.recommendation.reason}
              </p>
            </div>
          </div>

          <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-8 shrink-0">
            <div className="text-left md:text-right">
              <span className="text-xs font-bold text-slate-400 block uppercase">Confidence Index</span>
              <span className="text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight">
                {data.recommendation.score}%
              </span>
            </div>
          </div>
        </motion.div>

        {/* 2. KPI Metrics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 mb-8"
        >
          {/* Health Score */}
          <motion.div variants={itemVariants} className="bg-white border border-slate-150 p-5 rounded-[22px] shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-bold uppercase tracking-wider">Health Score</span>
              <ShieldCheck className="h-5 w-5 text-primary" />
            </div>
            <div className="mt-4">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-text-main tracking-tight">{data.healthScore}</span>
                <span className="text-sm font-semibold text-slate-400">/100</span>
              </div>
              <p className="text-[11px] font-semibold text-slate-500 mt-2">Overall review utility index</p>
            </div>
          </motion.div>

          {/* Average Rating */}
          <motion.div variants={itemVariants} className="bg-white border border-slate-150 p-5 rounded-[22px] shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-bold uppercase tracking-wider">Average Rating</span>
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
            </div>
            <div className="mt-4">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-text-main tracking-tight">{data.rating}</span>
                <span className="text-sm font-semibold text-slate-400">/5.0</span>
              </div>
              <p className="text-[11px] font-semibold text-slate-500 mt-2">Stars across storefronts</p>
            </div>
          </motion.div>

          {/* Total Reviews */}
          <motion.div variants={itemVariants} className="bg-white border border-slate-150 p-5 rounded-[22px] shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-bold uppercase tracking-wider">Total Reviews</span>
              <Users className="h-5 w-5 text-indigo-500" />
            </div>
            <div className="mt-4">
              <span className="text-4xl font-black text-text-main tracking-tight">
                {data.totalReviews.toLocaleString()}
              </span>
              <p className="text-[11px] font-semibold text-slate-500 mt-2">Parsed sentiment data rows</p>
            </div>
          </motion.div>

          {/* Positive Sentiment % */}
          <motion.div variants={itemVariants} className="bg-white border border-slate-150 p-5 rounded-[22px] shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-bold uppercase tracking-wider">Positive Ratio</span>
              <Heart className="h-5 w-5 text-positive fill-positive" />
            </div>
            <div className="mt-4">
              <span className="text-4xl font-black text-positive tracking-tight">
                {data.sentimentBreakdown.positive}%
              </span>
              <p className="text-[11px] font-semibold text-slate-500 mt-2">Favorable feedback fraction</p>
            </div>
          </motion.div>

          {/* Negative Sentiment % */}
          <motion.div variants={itemVariants} className="bg-white border border-slate-150 p-5 rounded-[22px] shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-bold uppercase tracking-wider">Negative Ratio</span>
              <AlertCircle className="h-5 w-5 text-negative" />
            </div>
            <div className="mt-4">
              <span className="text-4xl font-black text-negative tracking-tight">
                {data.sentimentBreakdown.negative}%
              </span>
              <p className="text-[11px] font-semibold text-slate-500 mt-2">Critical/complaining feedback</p>
            </div>
          </motion.div>
        </motion.div>

        {/* 3. Main Chart Panel: Sentiment Pie & Aspect Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          
          {/* Sentiment Distribution Pie Chart */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 bg-white border border-slate-150 p-6 rounded-[28px] shadow-sm flex flex-col justify-between hover:shadow-md transition-all"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="text-sm font-bold text-text-main">Sentiment Ratio</h3>
                <span className="text-[10px] bg-slate-100 font-bold px-2 py-0.5 rounded-full text-slate-500 uppercase tracking-wide">Overall</span>
              </div>
              <p className="text-xs text-slate-400 mt-3 font-semibold">Distribution of customer tone classification</p>
            </div>
            
            <div className="h-60 mt-4 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sentimentPieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {sentimentPieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={SENTIMENT_COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ background: 'rgba(15, 23, 42, 0.9)', border: 'none', borderRadius: '12px', color: '#fff', fontSize: '11px' }}
                    formatter={(value) => [`${value}%`, 'Ratio']}
                  />
                  <Legend 
                    verticalAlign="bottom" 
                    iconType="circle"
                    iconSize={8}
                    wrapperStyle={{ fontSize: '11px', fontWeight: 'bold' }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Aspect Sentiment Stacked Bar Chart */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-8 bg-white border border-slate-150 p-6 rounded-[28px] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="text-sm font-bold text-text-main">Feature Aspect Sentiment</h3>
                <span className="text-[10px] bg-slate-100 font-bold px-2 py-0.5 rounded-full text-slate-500 uppercase tracking-wide">Feature breakdown</span>
              </div>
              <p className="text-xs text-slate-400 mt-3 font-semibold">Granular metrics showing pro vs con ratios of major product subcomponents</p>
            </div>
            
            <div className="h-64 mt-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data.aspects}
                  layout="vertical"
                  margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                  <XAxis type="number" fontSize={10} fontWeight="bold" stroke="#94a3b8" />
                  <YAxis dataKey="aspect" type="category" width={110} fontSize={10} fontWeight="bold" stroke="#475569" />
                  <Tooltip 
                    contentStyle={{ background: 'rgba(15, 23, 42, 0.9)', border: 'none', borderRadius: '12px', color: '#fff', fontSize: '11px' }}
                    formatter={(value) => [`${value}%`, '']}
                  />
                  <Legend 
                    iconType="circle"
                    iconSize={8}
                    wrapperStyle={{ fontSize: '10px', fontWeight: 'bold' }} 
                  />
                  <Bar dataKey="positive" name="Positive %" stackId="a" fill="#22C55E" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="neutral" name="Neutral %" stackId="a" fill="#F59E0B" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="negative" name="Negative %" stackId="a" fill="#EF4444" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

        </div>

        {/* 4. Full Width Review Sentiment Trend Line Chart */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-white border border-slate-150 p-6 rounded-[28px] shadow-sm hover:shadow-md transition-all mb-8 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-sm font-bold text-text-main">Sentiment Timeline Trend</h3>
              <span className="text-[10px] bg-slate-100 font-bold px-2 py-0.5 rounded-full text-slate-500 uppercase tracking-wide">6-Month Trend</span>
            </div>
            <p className="text-xs text-slate-400 mt-3 font-semibold">Visual tracking of parsed review volume and customer satisfaction index over time</p>
          </div>
          
          <div className="h-64 mt-6">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data.reviewTrends}
                margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="date" fontSize={11} fontWeight="bold" stroke="#94a3b8" />
                <YAxis fontSize={11} fontWeight="bold" stroke="#94a3b8" domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ background: 'rgba(15, 23, 42, 0.9)', border: 'none', borderRadius: '12px', color: '#fff', fontSize: '11px' }}
                />
                <Legend 
                  iconType="circle"
                  iconSize={8}
                  wrapperStyle={{ fontSize: '11px', fontWeight: 'bold' }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="sentimentScore" 
                  name="Sentiment Score (0-100)" 
                  stroke="#7C3AED" 
                  strokeWidth={3}
                  activeDot={{ r: 8 }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="positiveCount" 
                  name="Positive Count" 
                  stroke="#22C55E" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
                <Line 
                  type="monotone" 
                  dataKey="negativeCount" 
                  name="Negative Count" 
                  stroke="#EF4444" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* 5. Emotions and Word Frequency Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          
          {/* Emotion Distribution Panel */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 bg-white border border-slate-150 p-6 rounded-[28px] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="text-sm font-bold text-text-main flex items-center gap-1.5"><Smile className="h-4.5 w-4.5 text-primary" /> Emotion Classification</h3>
                <span className="text-[10px] bg-slate-100 font-bold px-2 py-0.5 rounded-full text-slate-500 uppercase tracking-wide font-mono">Classifier Model</span>
              </div>
              <p className="text-xs text-slate-400 mt-3 font-semibold">Distribution of human feelings (Joy, Anger, Surprise) detected by transformer layers</p>
            </div>

            <div className="space-y-4 mt-6">
              {data.emotions.map((emotion) => (
                <div key={emotion.name}>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-slate-700">{emotion.name}</span>
                    <span className="text-slate-900">{emotion.percentage}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full rounded-full" 
                      style={{ backgroundColor: emotion.color }} 
                      initial={{ width: 0 }}
                      animate={{ width: `${emotion.percentage}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Keyword Frequency Horizontal Bar Chart */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-7 bg-white border border-slate-150 p-6 rounded-[28px] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="text-sm font-bold text-text-main flex items-center gap-1.5"><BarChart2 className="h-4.5 w-4.5 text-secondary" /> Keyword Frequency</h3>
                <span className="text-[10px] bg-slate-100 font-bold px-2 py-0.5 rounded-full text-slate-500 uppercase tracking-wide">NLP Dictionary</span>
              </div>
              <p className="text-xs text-slate-400 mt-3 font-semibold">The most commonly occurring keywords extracted after lemmatization/normalization</p>
            </div>

            <div className="h-64 mt-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data.wordFrequency}
                  margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={true} stroke="#f1f5f9" />
                  <XAxis dataKey="count" type="number" fontSize={9} fontWeight="bold" stroke="#94a3b8" />
                  <YAxis dataKey="word" type="category" width={80} fontSize={10} fontWeight="bold" stroke="#475569" />
                  <Tooltip 
                    contentStyle={{ background: 'rgba(15, 23, 42, 0.9)', border: 'none', borderRadius: '12px', color: '#fff', fontSize: '11px' }}
                    formatter={(value) => [value, 'Mentions']}
                  />
                  <Bar dataKey="count" name="Frequency" fill="#7C3AED" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

        </div>

        {/* 6. NLP Keyword Tag Clouds & Topic Modeling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          
          {/* Keyword Badges (Positive vs Negative) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-5 bg-white border border-slate-150 p-6 rounded-[28px] shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-6"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="text-sm font-bold text-text-main">NLP Term Extraction</h3>
                <span className="text-[10px] bg-slate-100 font-bold px-2 py-0.5 rounded-full text-slate-500 uppercase tracking-wide">Key Phrases</span>
              </div>
              <p className="text-xs text-slate-400 mt-3 font-semibold font-sans">High-weight positive and negative phrases extracted from reviews</p>
            </div>

            <div className="space-y-6">
              {/* Positive Keywords */}
              <div>
                <h4 className="text-xs font-bold text-slate-500 mb-3 flex items-center gap-1.5"><ThumbsUp className="h-4 w-4 text-positive" /> Top Favorable Terms</h4>
                <div className="flex flex-wrap gap-2">
                  {data.topPositiveKeywords.map((tag) => (
                    <span 
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-xl bg-green-50 border border-green-200/60 px-3 py-1.5 text-xs font-bold text-green-700 hover:bg-green-100 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Negative Keywords */}
              <div>
                <h4 className="text-xs font-bold text-slate-500 mb-3 flex items-center gap-1.5"><ThumbsDown className="h-4 w-4 text-negative" /> Top Critical Terms</h4>
                <div className="flex flex-wrap gap-2">
                  {data.topNegativeKeywords.map((tag) => (
                    <span 
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-xl bg-red-50 border border-red-200/60 px-3 py-1.5 text-xs font-bold text-red-700 hover:bg-red-100 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Topic Modeling Clusters */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="lg:col-span-7 bg-white border border-slate-150 p-6 rounded-[28px] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="text-sm font-bold text-text-main flex items-center gap-1.5"><Sparkles className="h-4.5 w-4.5 text-primary" /> Topic Modeling Clusters (LDA)</h3>
                <span className="text-[10px] bg-slate-100 font-bold px-2 py-0.5 rounded-full text-slate-500 uppercase tracking-wide">AI Topics</span>
              </div>
              <p className="text-xs text-slate-400 mt-3 font-semibold">Sub-groupings computed through Latent Dirichlet Allocation (LDA) modeling</p>
            </div>

            <div className="mt-6 space-y-4">
              {data.topics.map((topic) => (
                <div 
                  key={topic.topic}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 hover:bg-slate-100/50 hover:border-slate-350 transition-all flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[9px] font-extrabold uppercase rounded px-2 py-0.5 border ${
                        topic.sentiment === 'positive'
                          ? 'bg-green-50 text-positive border-green-200'
                          : topic.sentiment === 'negative'
                          ? 'bg-red-50 text-negative border-red-200'
                          : 'bg-amber-50 text-neutral border-amber-200'
                      }`}>
                        {topic.sentiment}
                      </span>
                      <h4 className="text-sm font-bold text-slate-800">{topic.topic}</h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {topic.keywords.map(kw => (
                        <span key={kw} className="text-[10px] font-mono text-slate-500 font-medium">{kw}</span>
                      ))}
                    </div>
                  </div>

                  <div className="shrink-0 text-left sm:text-right">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Weight</span>
                    <span className="text-sm font-black text-slate-700">{topic.weight}%</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* 7. AI Executive Summary (Strengths vs Complaints) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white border border-slate-150 p-6 sm:p-8 rounded-[32px] shadow-sm hover:shadow-md transition-all mb-10"
        >
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="text-base font-extrabold text-text-main flex items-center gap-2"><Sparkles className="h-5 w-5 text-primary animate-pulse" /> AI-Generated Executive Summary</h3>
              <span className="text-xs bg-indigo-50 font-bold px-3 py-1 rounded-full text-secondary border border-indigo-100">LLM Synthesis</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 font-medium">
              {data.aiSummary.overview}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pt-8 border-t border-slate-100">
            {/* Top 5 Strengths */}
            <div>
              <h4 className="text-sm font-extrabold text-slate-800 mb-4 flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-green-50 text-positive">
                  <ThumbsUp className="h-3.5 w-3.5" />
                </div>
                <span>Top 5 Strengths</span>
              </h4>
              <ul className="space-y-3.5">
                {data.aiSummary.strengths.map((str, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start text-xs font-semibold text-slate-600 leading-relaxed">
                    <span className="text-positive mt-0.5 shrink-0">✓</span>
                    <span>{str}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Top 5 Complaints */}
            <div>
              <h4 className="text-sm font-extrabold text-slate-800 mb-4 flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-red-50 text-negative">
                  <ThumbsDown className="h-3.5 w-3.5" />
                </div>
                <span>Top 5 Complaints</span>
              </h4>
              <ul className="space-y-3.5">
                {data.aiSummary.complaints.map((comp, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start text-xs font-semibold text-slate-600 leading-relaxed">
                    <span className="text-negative mt-0.5 shrink-0">✗</span>
                    <span>{comp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
