export interface ReviewTrendPoint {
  date: string;
  sentimentScore: number;
  positiveCount: number;
  negativeCount: number;
}

export interface AspectSentiment {
  aspect: string;
  positive: number;
  neutral: number;
  negative: number;
  score: number; // 0 to 100
}

export interface TopicModel {
  topic: string;
  keywords: string[];
  weight: number; // percentage
  sentiment: 'positive' | 'neutral' | 'negative';
}

export interface WordFreq {
  word: string;
  count: number;
}

export interface EmotionMetric {
  name: string;
  percentage: number;
  color: string;
}

export interface ProductData {
  id: string;
  name: string;
  category: string;
  price: string;
  rating: number;
  totalReviews: number;
  healthScore: number;
  confidenceScore: number;
  sentimentBreakdown: {
    positive: number;
    neutral: number;
    negative: number;
  };
  reviewTrends: ReviewTrendPoint[];
  aspects: AspectSentiment[];
  topPositiveKeywords: string[];
  topNegativeKeywords: string[];
  emotions: EmotionMetric[];
  topics: TopicModel[];
  wordFrequency: WordFreq[];
  aiSummary: {
    overview: string;
    strengths: string[];
    complaints: string[];
  };
  recommendation: {
    status: 'Highly Recommended' | 'Recommended' | 'Recommended with Caution' | 'Not Recommended';
    score: number;
    reason: string;
  };
}

export const mockProducts: Record<string, ProductData> = {
  apple: {
    id: 'apple',
    name: 'Apple iPhone 15 Pro Max',
    category: 'Electronics & Smartphones',
    price: '$1,199',
    rating: 4.7,
    totalReviews: 2840,
    healthScore: 89,
    confidenceScore: 94,
    sentimentBreakdown: {
      positive: 74,
      neutral: 14,
      negative: 12
    },
    reviewTrends: [
      { date: 'Jan', sentimentScore: 86, positiveCount: 180, negativeCount: 20 },
      { date: 'Feb', sentimentScore: 88, positiveCount: 210, negativeCount: 18 },
      { date: 'Mar', sentimentScore: 85, positiveCount: 195, negativeCount: 25 },
      { date: 'Apr', sentimentScore: 90, positiveCount: 240, negativeCount: 15 },
      { date: 'May', sentimentScore: 89, positiveCount: 220, negativeCount: 22 },
      { date: 'Jun', sentimentScore: 92, positiveCount: 260, negativeCount: 12 }
    ],
    aspects: [
      { aspect: 'Camera Quality', positive: 88, neutral: 8, negative: 4, score: 92 },
      { aspect: 'Performance', positive: 94, neutral: 4, negative: 2, score: 96 },
      { aspect: 'Display Refresh', positive: 90, neutral: 7, negative: 3, score: 93 },
      { aspect: 'Battery Longevity', positive: 65, neutral: 18, negative: 17, score: 74 },
      { aspect: 'Build & Weight', positive: 82, neutral: 12, negative: 6, score: 88 },
      { aspect: 'Pricing vs Value', positive: 45, neutral: 25, negative: 30, score: 58 }
    ],
    topPositiveKeywords: ['Titanium frame', 'Action button', '5x Zoom lens', 'A17 Pro chip', 'Promotion display', 'Dynamic island'],
    topNegativeKeywords: ['Expensive pricing', 'Thermal throttling', 'Slow charging', 'No charger in box', 'Fragile glass', 'USB-C speed limit'],
    emotions: [
      { name: 'Joy', percentage: 58, color: '#22C55E' },
      { name: 'Surprise', percentage: 16, color: '#7C3AED' },
      { name: 'Neutral', percentage: 12, color: '#F59E0B' },
      { name: 'Anger', percentage: 7, color: '#EF4444' },
      { name: 'Sadness', percentage: 4, color: '#3B82F6' },
      { name: 'Fear', percentage: 3, color: '#64748B' }
    ],
    topics: [
      { topic: 'Titanium Build and Weight Reduction', keywords: ['titanium', 'lightweight', 'premium', 'hand-feel'], weight: 32, sentiment: 'positive' },
      { topic: 'Optical Zoom Camera Features', keywords: ['zoom', '5x', 'detail', 'nightmode', 'portrait'], weight: 28, sentiment: 'positive' },
      { topic: 'Heat Dissipation & Thermal Issues', keywords: ['heat', 'warm', 'throttling', 'gaming', 'charge'], weight: 18, sentiment: 'negative' },
      { topic: 'Battery Cycle Performance', keywords: ['battery', 'capacity', 'charge', 'drain', 'screentime'], weight: 12, sentiment: 'neutral' },
      { topic: 'Transition to USB-C Connector', keywords: ['usb-c', 'cable', 'charger', 'transfer', 'compatible'], weight: 10, sentiment: 'positive' }
    ],
    wordFrequency: [
      { word: 'camera', count: 824 },
      { word: 'battery', count: 710 },
      { word: 'screen', count: 640 },
      { word: 'lightweight', count: 520 },
      { word: 'titanium', count: 480 },
      { word: 'expensive', count: 390 },
      { word: 'fast', count: 320 },
      { word: 'warm', count: 280 },
      { word: 'zoom', count: 250 },
      { word: 'display', count: 210 }
    ],
    aiSummary: {
      overview: 'The Apple iPhone 15 Pro Max receives highly positive feedback, highlighted by its new lightweight titanium build, significant camera zoom enhancements, and leading A17 Pro performance. Users are generally thrilled, although complaints linger around pricing, slow charging protocols, and occasional early-stage thermal throttling under heavy gaming.',
      strengths: [
        'Premium lightweight titanium design makes it noticeably more comfortable to hold than prior models.',
        '5x optical zoom camera yields crystal-clear telephoto shots in various lighting conditions.',
        'A17 Pro silicon handles intensive multitasking, rendering, and high-framerate gaming with ease.',
        'Super Retina XDR display is exceptionally bright and fluid with 120Hz ProMotion.',
        'Action Button customization is highly praised for quick utility shortcuts.',
      ],
      complaints: [
        'Retail price remains exceptionally high, creating a steep entry barrier.',
        'Several users report the phone gets uncomfortable warm under initial indexing or gaming sessions.',
        'USB-C charging rates are capped relatively low compared to Android flagships.',
        'Lack of an included charging adapter in the retail packaging remains a minor customer grievance.',
        'Rear glass panel repairs are costly despite titanium frame reinforcements.',
      ]
    },
    recommendation: {
      status: 'Highly Recommended',
      score: 92,
      reason: 'Customers consistently praise performance, battery life, and display quality while mentioning only minor pricing and thermal concerns.'
    }
  },
  samsung: {
    id: 'samsung',
    name: 'Samsung Galaxy S24 Ultra',
    category: 'Electronics & Smartphones',
    price: '$1,299',
    rating: 4.6,
    totalReviews: 2420,
    healthScore: 87,
    confidenceScore: 92,
    sentimentBreakdown: {
      positive: 71,
      neutral: 17,
      negative: 12
    },
    reviewTrends: [
      { date: 'Jan', sentimentScore: 84, positiveCount: 160, negativeCount: 22 },
      { date: 'Feb', sentimentScore: 85, positiveCount: 180, negativeCount: 20 },
      { date: 'Mar', sentimentScore: 87, positiveCount: 205, negativeCount: 18 },
      { date: 'Apr', sentimentScore: 86, positiveCount: 190, negativeCount: 22 },
      { date: 'May', sentimentScore: 88, positiveCount: 225, negativeCount: 16 },
      { date: 'Jun', sentimentScore: 89, positiveCount: 250, negativeCount: 15 }
    ],
    aspects: [
      { aspect: 'AI Feature Set', positive: 85, neutral: 10, negative: 5, score: 90 },
      { aspect: 'Camera Performance', positive: 89, neutral: 6, negative: 5, score: 92 },
      { aspect: 'Battery Longevity', positive: 80, neutral: 12, negative: 8, score: 86 },
      { aspect: 'Stylus (S-Pen)', positive: 75, neutral: 20, negative: 5, score: 85 },
      { aspect: 'Anti-reflective Screen', positive: 92, neutral: 5, negative: 3, score: 94 },
      { aspect: 'Pricing vs Value', positive: 40, neutral: 28, negative: 32, score: 54 }
    ],
    topPositiveKeywords: ['Galaxy AI', 'Flat screen', 'Anti-reflective glass', 'S-Pen productivity', '50MP zoom camera', 'Titanium build'],
    topNegativeKeywords: ['Expensive pricing', 'Oversaturated photos', 'Muted colors display', 'Heavy in hand', 'Complex settings UI', 'Bloatware pre-installed'],
    emotions: [
      { name: 'Joy', percentage: 54, color: '#22C55E' },
      { name: 'Surprise', percentage: 22, color: '#7C3AED' },
      { name: 'Neutral', percentage: 14, color: '#F59E0B' },
      { name: 'Anger', percentage: 6, color: '#EF4444' },
      { name: 'Sadness', percentage: 3, color: '#3B82F6' },
      { name: 'Fear', percentage: 1, color: '#64748B' }
    ],
    topics: [
      { topic: 'Galaxy AI Translation & Search Features', keywords: ['galaxy ai', 'translation', 'circle to search', 'assistant'], weight: 35, sentiment: 'positive' },
      { topic: 'Anti-Reflective Corning Armor Screen', keywords: ['reflection', 'glare', 'flat', 'screen', 'bright'], weight: 25, sentiment: 'positive' },
      { topic: 'S-Pen Usability and Office Workflow', keywords: ['s-pen', 'stylus', 'notes', 'drawing', 'productivity'], weight: 15, sentiment: 'positive' },
      { topic: 'Muted Colors and Display Calibration Issues', keywords: ['muted', 'colors', 'dull', 'vivid', 'update'], weight: 13, sentiment: 'negative' },
      { topic: 'Camera Shutter Lag Concerns', keywords: ['lag', 'shutter', 'blurry', 'moving', 'kids'], weight: 12, sentiment: 'negative' }
    ],
    wordFrequency: [
      { word: 'ai', count: 910 },
      { word: 'screen', count: 730 },
      { word: 'camera', count: 680 },
      { word: 'battery', count: 520 },
      { word: 'pen', count: 420 },
      { word: 'reflections', count: 390 },
      { word: 'expensive', count: 350 },
      { word: 'colors', count: 280 },
      { word: 'zoom', count: 240 },
      { word: 'heavy', count: 210 }
    ],
    aiSummary: {
      overview: 'The Samsung Galaxy S24 Ultra stands out for its cutting-edge "Galaxy AI" suite, flat screen design, and groundbreaking anti-reflective screen glass. Users appreciate the S-Pen and camera versatility, but some voice irritation regarding muted screen colors in standard mode and the bulky, heavy chassis.',
      strengths: [
        '"Circle to Search" and AI live translation tools are considered highly useful for daily productivity.',
        'Anti-reflective screen glass dramatically reduces glare, enhancing outdoor readability.',
        'Outstanding battery life easily delivers over 1.5 days of moderate usage.',
        'Versatile quad-camera setup captures spectacular detail, particularly using the new 50MP 5x zoom lens.',
        'Flat screen design eliminates accidental edge touches and improves S-Pen corner usability.',
      ],
      complaints: [
        'Priced higher than previous iterations, causing consumer budget hesitation.',
        'Initial display configuration felt "washed out" compared to traditional vivid Samsung panels.',
        'Heavy and boxy frame design can make single-handed operation fatiguing over time.',
        'Noticeable shutter delay when capturing fast-moving subjects indoors.',
        'Pre-loaded duplicate applications (bloatware) clutter the initial software setup.',
      ]
    },
    recommendation: {
      status: 'Highly Recommended',
      score: 90,
      reason: 'Its unmatched productivity utilities (S-Pen, AI translation) and the anti-glare screen glass make it the premier choice for tech enthusiasts, offsetting the premium cost.'
    }
  },
  sony: {
    id: 'sony',
    name: 'Sony WH-1000XM5 Headphones',
    category: 'Electronics & Audio',
    price: '$399',
    rating: 4.8,
    totalReviews: 1980,
    healthScore: 92,
    confidenceScore: 96,
    sentimentBreakdown: {
      positive: 83,
      neutral: 9,
      negative: 8
    },
    reviewTrends: [
      { date: 'Jan', sentimentScore: 90, positiveCount: 140, negativeCount: 10 },
      { date: 'Feb', sentimentScore: 92, positiveCount: 165, negativeCount: 8 },
      { date: 'Mar', sentimentScore: 91, positiveCount: 150, negativeCount: 12 },
      { date: 'Apr', sentimentScore: 93, positiveCount: 175, negativeCount: 7 },
      { date: 'May', sentimentScore: 95, positiveCount: 210, negativeCount: 5 },
      { date: 'Jun', sentimentScore: 94, positiveCount: 190, negativeCount: 9 }
    ],
    aspects: [
      { aspect: 'Active Noise Cancelling', positive: 96, neutral: 2, negative: 2, score: 97 },
      { aspect: 'Sound Stage', positive: 88, neutral: 8, negative: 4, score: 92 },
      { aspect: 'Comfort & Padding', positive: 82, neutral: 10, negative: 8, score: 87 },
      { aspect: 'Microphone Quality', positive: 70, neutral: 20, negative: 10, score: 80 },
      { aspect: 'Foldability Design', positive: 42, neutral: 18, negative: 40, score: 51 },
      { aspect: 'App & Custom EQ', positive: 84, neutral: 12, negative: 4, score: 90 }
    ],
    topPositiveKeywords: ['Industry ANC', 'Featherlight feel', 'Crisp audio treble', 'Clear call quality', 'Rapid quick-charge', 'Multipoint Bluetooth'],
    topNegativeKeywords: ['Non-folding frame', 'Bulky carrying case', 'Sweaty ear cushions', 'Expensive MSRP', 'Sensitive touch controls', 'Auto-NCOptimizer auto-changes'],
    emotions: [
      { name: 'Joy', percentage: 67, color: '#22C55E' },
      { name: 'Surprise', percentage: 11, color: '#7C3AED' },
      { name: 'Neutral', percentage: 10, color: '#F59E0B' },
      { name: 'Anger', percentage: 4, color: '#EF4444' },
      { name: 'Sadness', percentage: 5, color: '#3B82F6' },
      { name: 'Fear', percentage: 3, color: '#64748B' }
    ],
    topics: [
      { topic: 'Industry-Leading Active Noise Cancelling (ANC)', keywords: ['anc', 'noise cancelling', 'quiet', 'plane', 'silence'], weight: 40, sentiment: 'positive' },
      { topic: 'Acoustic Sound Signature and EQ Tuning', keywords: ['bass', 'treble', 'eq', 'sound', 'clarity', 'audio'], weight: 22, sentiment: 'positive' },
      { topic: 'Redesigned Chassis & Non-Folding Hinge', keywords: ['fold', 'hinge', 'flat', 'case', 'bulky', 'travel'], weight: 20, sentiment: 'negative' },
      { topic: 'Microphone Array and Wind Noise Suppression', keywords: ['mic', 'calls', 'zoom', 'wind', 'voice'], weight: 10, sentiment: 'positive' },
      { topic: 'Touch Sensor Controls Sensitivity', keywords: ['touch', 'swipe', 'gesture', 'accidental', 'volume'], weight: 8, sentiment: 'neutral' }
    ],
    wordFrequency: [
      { word: 'anc', count: 780 },
      { word: 'sound', count: 690 },
      { word: 'comfortable', count: 540 },
      { word: 'case', count: 320 },
      { word: 'fold', count: 290 },
      { word: 'battery', count: 270 },
      { word: 'expensive', count: 220 },
      { word: 'calls', count: 180 },
      { word: 'music', count: 160 },
      { word: 'touch', count: 140 }
    ],
    aiSummary: {
      overview: 'The Sony WH-1000XM5 ranks as the premier active noise-cancelling headphone on the market. Reviewers praise the absolute silence it provides, its featherlight build, and its detailed audio performance. The main detractor is the redesigned headband which no longer folds, leading to a much bulkier travel footprint.',
      strengths: [
        'Active Noise Cancelling (ANC) effectively silences deep engine rumbles and high-frequency office chatter.',
        'Featherlight design and soft leather cushions prevent ear fatigue during 8+ hour work sessions.',
        'Multipoint Bluetooth allows seamless switching between a smartphone and a laptop.',
        'Microphone system does an exceptional job filtering wind noise during outdoor voice calls.',
        'Fast charging delivers up to 5 hours of playback from a quick 10-minute plug-in.',
      ],
      complaints: [
        'The earcups rotate flat but the headband does not fold, resulting in a large, inconvenient travel case.',
        'Auto-NC Optimizer dynamically adjusts noise cancelling without manual override, which some users find distracting.',
        'Synthetic leather ear pads can trap heat, causing sweaty ears in warm climates.',
        'Touch controls on the right earcup are highly sensitive, causing accidental track skips or volume adjustments.',
        'Premium price tag represents a significant luxury audio investment.',
      ]
    },
    recommendation: {
      status: 'Highly Recommended',
      score: 95,
      reason: 'If noise cancellation and comfort are your primary goals, this headphone provides the absolute best performance in the class, although travelers might miss the folding design of older models.'
    }
  },
  nike: {
    id: 'nike',
    name: 'Nike Air Max Flyknit Runner',
    category: 'Footwear & Apparel',
    price: '$160',
    rating: 4.4,
    totalReviews: 1240,
    healthScore: 81,
    confidenceScore: 88,
    sentimentBreakdown: {
      positive: 64,
      neutral: 20,
      negative: 16
    },
    reviewTrends: [
      { date: 'Jan', sentimentScore: 78, positiveCount: 75, negativeCount: 15 },
      { date: 'Feb', sentimentScore: 80, positiveCount: 82, negativeCount: 12 },
      { date: 'Mar', sentimentScore: 82, positiveCount: 95, negativeCount: 14 },
      { date: 'Apr', sentimentScore: 81, positiveCount: 88, negativeCount: 15 },
      { date: 'May', sentimentScore: 83, positiveCount: 110, negativeCount: 13 },
      { date: 'Jun', sentimentScore: 85, positiveCount: 125, negativeCount: 12 }
    ],
    aspects: [
      { aspect: 'Cushioning & Bounce', positive: 88, neutral: 7, negative: 5, score: 91 },
      { aspect: 'Breathability', positive: 90, neutral: 6, negative: 4, score: 93 },
      { aspect: 'Durability', positive: 52, neutral: 20, negative: 28, score: 62 },
      { aspect: 'Sizing & Width', positive: 50, neutral: 18, negative: 32, score: 59 },
      { aspect: 'Arch Support', positive: 70, neutral: 22, negative: 8, score: 81 },
      { aspect: 'Aesthetics & Style', positive: 94, neutral: 4, negative: 2, score: 96 }
    ],
    topPositiveKeywords: ['Like walking on air', 'Breathable knit', 'Stunning colors', 'Responsive bounce', 'Super light weight', 'Great arch support'],
    topNegativeKeywords: ['Runs narrow', 'Squeaking sole', 'Mesh tearing early', 'Expensive for runner', 'Difficult to clean', 'Stiff heel collar'],
    emotions: [
      { name: 'Joy', percentage: 51, color: '#22C55E' },
      { name: 'Neutral', percentage: 22, color: '#F59E0B' },
      { name: 'Surprise', percentage: 10, color: '#7C3AED' },
      { name: 'Sadness', percentage: 9, color: '#3B82F6' },
      { name: 'Anger', percentage: 5, color: '#EF4444' },
      { name: 'Fear', percentage: 3, color: '#64748B' }
    ],
    topics: [
      { topic: 'Aesthetics & Streetwear Styling', keywords: ['style', 'looks', 'colors', 'fashion', 'design'], weight: 30, sentiment: 'positive' },
      { topic: 'Flyknit Breathability & Material Comfort', keywords: ['knit', 'breathable', 'comfortable', 'soft', 'mesh'], weight: 26, sentiment: 'positive' },
      { topic: 'Air Unit Cushioning & Support', keywords: ['cushion', 'bounce', 'airmax', 'sole', 'standing', 'walk'], weight: 22, sentiment: 'positive' },
      { topic: 'Narrow Fit and Size Squeezing', keywords: ['narrow', 'tight', 'squeeze', 'sizeup', 'width', 'feet'], weight: 14, sentiment: 'negative' },
      { topic: 'Outsole Squeaking Noise Issues', keywords: ['squeak', 'noise', 'wet', 'sound', 'loud', 'floor'], weight: 8, sentiment: 'negative' }
    ],
    wordFrequency: [
      { word: 'comfortable', count: 480 },
      { word: 'style', count: 320 },
      { word: 'narrow', count: 210 },
      { word: 'cushion', count: 190 },
      { word: 'breathable', count: 180 },
      { word: 'squeak', count: 140 },
      { word: 'size', count: 120 },
      { word: 'wear', count: 110 },
      { word: 'expensive', count: 90 },
      { word: 'running', count: 85 }
    ],
    aiSummary: {
      overview: 'The Nike Air Max Flyknit Runner excels as a fashionable lifestyle runner, praised for its plush bounce, breathable mesh upper, and attractive designs. However, users warningly point out that the fit is quite narrow, and the sole tends to emit a squeaking sound on smooth indoor surfaces.',
      strengths: [
        'Flyknit fabric provides superior ventilation, keeping feet cool during intense workouts.',
        'Iconic Air Max sole offers fantastic impact absorption for long-duration standing or walking.',
        'Sleek visual profile makes it highly versatile for both athletic and casual wear.',
        'Excellent arch profile supports natural foot posture.',
        'Lightweight build reduces leg fatigue during runs.',
      ],
      complaints: [
        'Width profile is extremely narrow, forcing wider-footed customers to size up.',
        'Rubber outsole can produce an annoying squeaking noise on tile or gym floors.',
        'Mesh upper can show signs of tearing around the pinky toe area within a few months.',
        'The light knit fabric absorbs dirt quickly and is difficult to scrub clean.',
        'High price point considering it is often used for casual wear rather than specialized marathon running.',
      ]
    },
    recommendation: {
      status: 'Recommended',
      score: 80,
      reason: 'A exceptionally comfortable and stylish shoe for everyday walking and casual training, provided you try it on first or size up to account for the narrow midfoot.'
    }
  },
  lg: {
    id: 'lg',
    name: 'LG OLED C3 65-Inch Smart TV',
    category: 'Electronics & Home Theater',
    price: '$1,699',
    rating: 4.8,
    totalReviews: 890,
    healthScore: 94,
    confidenceScore: 93,
    sentimentBreakdown: {
      positive: 85,
      neutral: 10,
      negative: 5
    },
    reviewTrends: [
      { date: 'Jan', sentimentScore: 92, positiveCount: 65, negativeCount: 3 },
      { date: 'Feb', sentimentScore: 93, positiveCount: 78, negativeCount: 4 },
      { date: 'Mar', sentimentScore: 91, positiveCount: 70, negativeCount: 5 },
      { date: 'Apr', sentimentScore: 94, positiveCount: 88, negativeCount: 2 },
      { date: 'May', sentimentScore: 96, positiveCount: 115, negativeCount: 3 },
      { date: 'Jun', sentimentScore: 95, positiveCount: 130, negativeCount: 4 }
    ],
    aspects: [
      { aspect: 'OLED Contrast Ratio', positive: 98, neutral: 1, negative: 1, score: 99 },
      { aspect: 'Gaming Features', positive: 95, neutral: 4, negative: 1, score: 97 },
      { aspect: 'HDR Brightness', positive: 78, neutral: 16, negative: 6, score: 86 },
      { aspect: 'Smart OS (webOS)', positive: 60, neutral: 25, negative: 15, score: 72 },
      { aspect: 'Sound Performance', positive: 55, neutral: 35, negative: 10, score: 72 },
      { aspect: 'Aesthetic Profile', positive: 92, neutral: 6, negative: 2, score: 95 }
    ],
    topPositiveKeywords: ['Infinite blacks', '4K 120Hz gaming', 'G-Sync support', 'Ultra thin frame', 'Dolby vision', 'α9 AI Processor'],
    topNegativeKeywords: ['Adfills on WebOS', 'Average tv speakers', 'Reflective screen', 'No stand in box (some bundles)', 'Burn-in anxiety', 'Complex settings menu'],
    emotions: [
      { name: 'Joy', percentage: 70, color: '#22C55E' },
      { name: 'Surprise', percentage: 15, color: '#7C3AED' },
      { name: 'Neutral', percentage: 10, color: '#F59E0B' },
      { name: 'Anger', percentage: 3, color: '#EF4444' },
      { name: 'Sadness', percentage: 1, color: '#3B82F6' },
      { name: 'Fear', percentage: 1, color: '#64748B' }
    ],
    topics: [
      { topic: 'Incredible OLED Picture & Contrast', keywords: ['contrast', 'black', 'picture', 'oled', 'darkroom', 'movies'], weight: 42, sentiment: 'positive' },
      { topic: 'HDMI 2.1 & 120Hz Gaming Features', keywords: ['gaming', 'xbox', 'ps5', 'g-sync', 'latency', 'hdmi'], weight: 28, sentiment: 'positive' },
      { topic: 'webOS Clutter & Promotional Ads', keywords: ['webos', 'ads', 'slow', 'interface', 'apps', 'menus'], weight: 15, sentiment: 'negative' },
      { topic: 'Panel Glossiness & Room Glare', keywords: ['glare', 'reflection', 'window', 'bright', 'room'], weight: 8, sentiment: 'neutral' },
      { topic: 'Onboard Audio Shortfalls', keywords: ['sound', 'audio', 'bass', 'speakers', 'soundbar'], weight: 7, sentiment: 'neutral' }
    ],
    wordFrequency: [
      { word: 'contrast', count: 340 },
      { word: 'picture', count: 320 },
      { word: 'gaming', count: 280 },
      { word: 'blacks', count: 240 },
      { word: 'webos', count: 180 },
      { word: 'soundbar', count: 110 },
      { word: 'thin', count: 95 },
      { word: 'reflections', count: 90 },
      { word: 'ads', count: 85 },
      { word: 'remote', count: 80 }
    ],
    aiSummary: {
      overview: 'The LG OLED C3 65-Inch Smart TV sets the standard for home theater and gaming displays. Reviewers adore the self-lit pixels that create infinite contrast and ink-black scenes, alongside the full HDMI 2.1 support for console gaming. The main complaints involve webOS sponsored advertisements and lackluster built-in audio.',
      strengths: [
        'Infinite contrast ratio creates stunningly lifelike details in dark and moody HDR movie scenes.',
        'Four full-bandwidth HDMI 2.1 ports support VRR, G-Sync, and FreeSync for premium gaming experiences.',
        'The α9 Gen6 AI Processor does an outstanding job upscaling standard 1080p cable feeds.',
        'Incredibly thin panel design looks like a floating canvas when mounted on a wall.',
        'Near-instantaneous response times eliminate motion blur in fast sports.',
      ],
      complaints: [
        'Smart TV OS (webOS) features annoying banner ads that cannot be completely disabled.',
        'Thin design leaves little room for speakers, resulting in tinny, bass-deficient onboard audio.',
        'Glossy screen coating acts like a mirror when placed directly opposite bright windows.',
        'Setting menus are deep and complex, making initial picture adjustments tedious.',
        'Burn-in anxiety remains a minor psychological worry, although actual incidents are rare on modern panels.',
      ]
    },
    recommendation: {
      status: 'Highly Recommended',
      score: 94,
      reason: 'An absolute masterpiece for gamers and cinephiles alike. The visuals are second-to-none, and pairing it with a decent soundbar resolves its speaker shortcomings.'
    }
  }
};

// Generates dynamic, realistic analysis from a URL input
export function generateCustomAnalysis(url: string): ProductData {
  // Extract a clean domain or title representation
  let name = 'Custom Product';
  try {
    const parsed = new URL(url);
    const pathSegments = parsed.pathname.split('/').filter(Boolean);
    if (pathSegments.length > 0) {
      // Try to construct a readable name from url segments
      const segment = pathSegments.find(s => s.length > 4 && s !== 'product' && s !== 'dp') || pathSegments[0];
      name = segment
        .replace(/[-_]+/g, ' ')
        .split(' ')
        .slice(0, 4)
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
    } else {
      name = parsed.hostname.replace('www.', '');
    }
  } catch {
    name = url.replace(/https?:\/\/(www\.)?/, '').split('/')[0] || 'Web Product';
  }

  // Ensure reasonable name
  if (name.length < 3 || name.length > 40) {
    name = 'Analyze Product Review Link';
  }

  // Deterministic randomize based on name hash to keep it stable per URL
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const seededRandom = (seedOffset: number) => {
    const x = Math.sin(hash + seedOffset) * 10000;
    return x - Math.floor(x);
  };

  const rating = Math.round((4.0 + seededRandom(1) * 0.9) * 10) / 10; // 4.0 to 4.9
  const totalReviews = Math.round(500 + seededRandom(2) * 4500);
  const healthScore = Math.round(75 + seededRandom(3) * 20); // 75 to 95
  const confidenceScore = Math.round(85 + seededRandom(4) * 12); // 85 to 97

  const negPercent = Math.round(6 + seededRandom(5) * 15); // 6% to 21%
  const neuPercent = Math.round(10 + seededRandom(6) * 15); // 10% to 25%
  const posPercent = 100 - negPercent - neuPercent;

  // Review trends
  const reviewTrends = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, idx) => {
    const trendSeed = seededRandom(7 + idx);
    const score = Math.round(healthScore - 5 + trendSeed * 10);
    const count = Math.round((totalReviews / 10) + trendSeed * 50);
    const neg = Math.round(count * (negPercent / 100));
    const pos = Math.round(count * (posPercent / 100));
    return {
      date: month,
      sentimentScore: score,
      positiveCount: pos,
      negativeCount: neg
    };
  });

  // Aspects
  const aspects: AspectSentiment[] = [
    { aspect: 'Build & Quality', positive: Math.round(70 + seededRandom(13) * 25), neutral: 12, negative: 8, score: 0 },
    { aspect: 'Performance Speed', positive: Math.round(65 + seededRandom(14) * 30), neutral: 10, negative: 5, score: 0 },
    { aspect: 'Usability & Setup', positive: Math.round(60 + seededRandom(15) * 30), neutral: 15, negative: 5, score: 0 },
    { aspect: 'Battery / Power', positive: Math.round(50 + seededRandom(16) * 40), neutral: 20, negative: 10, score: 0 },
    { aspect: 'Aesthetics & Style', positive: Math.round(75 + seededRandom(17) * 20), neutral: 10, negative: 5, score: 0 },
    { aspect: 'Pricing vs Value', positive: Math.round(35 + seededRandom(18) * 35), neutral: 30, negative: 15, score: 0 }
  ];

  aspects.forEach(a => {
    a.negative = 100 - a.positive - a.neutral;
    a.score = Math.round(a.positive + a.neutral * 0.5);
  });

  const recommendationScore = Math.round(healthScore - 3 + seededRandom(19) * 6);
  let status: ProductData['recommendation']['status'] = 'Recommended';
  let reason = 'A highly reliable purchase option displaying consistent positive feedback for core functionalities and structural design.';

  if (recommendationScore >= 90) {
    status = 'Highly Recommended';
    reason = 'Exceptional review scores highlight outstanding performance, premium build quality, and strong user satisfaction across almost all categories.';
  } else if (recommendationScore < 80) {
    status = 'Recommended with Caution';
    reason = 'While the product holds good utility, customer reviews suggest keeping sizing, pricing options, and potential localized quirks in mind.';
  }

  return {
    id: 'custom-' + Math.abs(hash).toString(36),
    name: `${name}`,
    category: 'Scraped Web Product',
    price: 'N/A (Web Link)',
    rating,
    totalReviews,
    healthScore,
    confidenceScore,
    sentimentBreakdown: {
      positive: posPercent,
      neutral: neuPercent,
      negative: negPercent
    },
    reviewTrends,
    aspects,
    topPositiveKeywords: ['User friendly', 'Sleek appearance', 'Highly responsive', 'Solid packaging', 'Fast shipping', 'Satisfactory results'],
    topNegativeKeywords: ['Instruction gaps', 'Premium markup', 'Plastic materials', 'Heavy load delay', 'Fingerprint magnet', 'No accessories'],
    emotions: [
      { name: 'Joy', percentage: Math.round(posPercent * 0.75), color: '#22C55E' },
      { name: 'Surprise', percentage: Math.round(neuPercent * 0.6), color: '#7C3AED' },
      { name: 'Neutral', percentage: Math.round(neuPercent * 0.4), color: '#F59E0B' },
      { name: 'Anger', percentage: Math.round(negPercent * 0.5), color: '#EF4444' },
      { name: 'Sadness', percentage: Math.round(negPercent * 0.3), color: '#3B82F6' },
      { name: 'Fear', percentage: Math.round(negPercent * 0.2), color: '#64748B' }
    ],
    topics: [
      { topic: 'Core Functionality and Design Comfort', keywords: ['design', 'use', 'feel', 'smooth', 'weight'], weight: 35, sentiment: 'positive' },
      { topic: 'Initial Configuration and Setup Speed', keywords: ['setup', 'instructions', 'manual', 'config', 'easy'], weight: 25, sentiment: 'positive' },
      { topic: 'Price-to-Performance Value Proposition', keywords: ['value', 'price', 'worth', 'cost', 'expensive'], weight: 20, sentiment: 'neutral' },
      { topic: 'Hardware Durability and Plasticity Concerns', keywords: ['plastic', 'durability', 'scratch', 'loose', 'wear'], weight: 12, sentiment: 'negative' },
      { topic: 'Customer Shipping and Packing Integrity', keywords: ['ship', 'pack', 'box', 'damage', 'arrive', 'fast'], weight: 8, sentiment: 'positive' }
    ],
    wordFrequency: [
      { word: 'product', count: Math.round(totalReviews * 0.35) },
      { word: 'good', count: Math.round(totalReviews * 0.28) },
      { word: 'easy', count: Math.round(totalReviews * 0.22) },
      { word: 'price', count: Math.round(totalReviews * 0.18) },
      { word: 'quality', count: Math.round(totalReviews * 0.15) },
      { word: 'fast', count: Math.round(totalReviews * 0.12) },
      { word: 'setup', count: Math.round(totalReviews * 0.10) },
      { word: 'plastic', count: Math.round(totalReviews * 0.08) },
      { word: 'support', count: Math.round(totalReviews * 0.06) },
      { word: 'issues', count: Math.round(totalReviews * 0.05) }
    ],
    aiSummary: {
      overview: `SentiLens AI analyzed ${totalReviews} customer reviews for this URL. The overall sentiment is favorable, with a high concentration of positive reviews regarding user-friendliness, sleek physical appearance, and prompt shipping. However, minor criticisms target instructional documentation gaps and materials feel.`,
      strengths: [
        'Extremely intuitive interface or physical design makes it accessible right out of the box.',
        'Esthetically pleasing silhouette fits modern spaces or preferences perfectly.',
        'Performs core duties reliably with consistent speed and stability.',
        'Shipping speeds and packaging durability are praised by early adopters.',
        'Exceptional value for money compared to market-dominant brand options.',
      ],
      complaints: [
        'Documentation is brief, which makes custom configuration tricky for some buyers.',
        'Noticeable use of plastics or lighter materials in areas where metal or premium finishes would be preferred.',
        'The surface is highly prone to gathering fingerprints, dust, or micro-scratches.',
        'Minor delays when processing heavy workloads or toggling features consecutively.',
        'Doesn\'t include specialized adapter items or accessories in the standard box.',
      ]
    },
    recommendation: {
      status,
      score: recommendationScore,
      reason
    }
  };
}
