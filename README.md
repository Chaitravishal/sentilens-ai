# SentiLens AI

**NLP-powered product review analyzer** that extracts sentiment, key aspects, and topic clusters from customer reviews to help buyers make faster, more confident decisions.

🔗 **Live Demo:** [sentilens-ai.vercel.app](https://sentilens-2urkpv8vv-chaitravishals-projects.vercel.app)

---

## Overview

SentiLens AI takes product review data and runs it through a modular NLP pipeline — sentiment classification, aspect-based extraction, and topic modeling — to generate an easy-to-read health score and executive summary for any product, instead of making users read hundreds of raw reviews.

## Features

- **Sentiment Analysis** — DistilBERT-based classification (positive/negative/neutral) with confidence scoring
- **Aspect-Based Extraction** — Identifies what customers are actually talking about (battery, build quality, price, etc.)
- **Topic Modeling** — LDA clustering to surface recurring themes across reviews
- **Visual Verdict** — Health score + summary breakdown per product
- **Demo Mode** — Pre-loaded sample products for instant exploration without needing live scraping

## Pipeline

1. **URL Parser** — Extracts product identifiers from input URL
2. **Data Crawling** — Gathers review data
3. **Transformer Model** — DistilBERT for sentiment/aspect classification
4. **Data Visualizer** — Aggregates results into charts and scores
5. **Executive Summary** — Generates a final human-readable verdict

## Tech Stack

- **Framework:** Next.js 16
- **NLP Model:** DistilBERT (Base, Uncased)
- **Techniques:** TF-IDF, Latent Dirichlet Allocation (LDA)
- **Deployment:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

## Project Status

This is an academic/portfolio project demonstrating an end-to-end NLP pipeline. Demo products use pre-computed results; live URL analysis is in active development.

## SentiLens AI - Dashboard Screenshots

### 1. Homepage / Landing Page
![Homepage](https://github.com/user-attachments/assets/614cb183-5052-415e-92e6-85e649d0f484)

### 2. Product Analysis Input
![Product URL Input](https://github.com/user-attachments/assets/7036d2a3-040a-4823-9355-6d25fdb304e1)

### 3. Overall Analytics Dashboard
![Analytics Dashboard](https://github.com/user-attachments/assets/6a7a7a14-3637-417a-a147-62e788c05d38)

### 4. Sentiment Analysis View
![Sentiment Breakdown](https://github.com/user-attachments/assets/feb2b417-cd62-403e-b386-e6a38789de91)

### 5. Aspect-wise & Topic Analysis
![Aspect & Topic Modeling](https://github.com/user-attachments/assets/68a62ebd-4a6a-4140-a459-29d926e24e6e)

### 6. AI Recommendation & Health Score
![AI Summary & Recommendation](https://github.com/user-attachments/assets/6177dbaa-266c-47a8-86f3-0ddfc45b8490)


## Author

Chaitra D Murthy

---

