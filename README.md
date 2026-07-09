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

## Author

Chaitra D Murthy

---

