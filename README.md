# 🚀 Xplorevo — Travel Super-App + Adventure Guardian AI  
### India’s First Real-Time Truth, Health & Fraud Safety Engine for Travellers

---

# 📌 Introduction

Xplorevo is an integrated travel ecosystem built to make exploring India **safer, smarter, and more authentic**. The platform solves the biggest problems modern travellers face: misinformation from reels, health risks during treks, and rising travel fraud.

To address these challenges, Xplorevo introduces:

### ⭐ **Adventure Guardian AI** — A real-time safety engine that:
- Verifies whether trek/reel information is truthful  
- Predicts health risks for any trek  
- Detects fraud in UPI IDs, invoices, and travel agents  
- Generates one final **Verified Trek Score (0–100)**

At the same time, the main Xplorevo platform provides:
- Tour bookings  
- Vehicle rentals  
- Travel reels  
- Community groups  
- AI-based itinerary planning  
- An admin dashboard  

Together, they form **India’s first all-in-one travel super-app** tailored for the next generation of explorers.

---

# 🎯 Core Problem

Indian travellers face a unique combination of safety challenges:

## 1️⃣ Misinformation Epidemic  
Travel reels often use:
- Outdated footage  
- Edited skies, colors, or snow  
- Cropped dangerous sections  
- Fake or exaggerated difficulty levels  

This creates unrealistic expectations and leads to accidents.

## 2️⃣ Predictable Yet Ignored Health Risks  
Most incidents at high altitude are preventable:
- AMS  
- Hypothermia  
- Fatigue shocks  
- Dehydration  
- Rapid altitude gain  

Yet travellers rarely understand the risk before starting.

## 3️⃣ Rapidly Growing Fraud  
Scammers use:
- Fake UPI handles  
- AI-edited invoices  
- Fake tour operators  
- Phishing websites  
- Social media impersonation  

Losses are growing every year—especially among solo travellers.

👉 **No unified system exists that verifies truth, checks health danger, and flags fraud.**

---

# 💡 Our Solution

## ⚡ Adventure Guardian AI (AG-AI)

AG-AI is a safety engine built using **Gemini AI**, geodata APIs, weather intelligence, rule-based fraud analysis, and misinformation patterns.

It operates through three parallel systems:

---

# 🔍 1. Misinformation Scanner (Truth Engine)

**Input:** Trek poster, reel screenshot, or travel image  
**Checks:**
- Weather correctness  
- Edited sky or color boosting  
- AI-generated segments  
- Overcrowding  
- Terrain mismatch  
- Altitude mismatch  
- Old vs current trail  
- Fake/unverified guide names  

**Output:**  
- **Truth Score (0–100)**  
- Detailed explanation of misleading elements  
- Recommendations for safe preparation  

---

# 🩺 2. Health Risk Predictor (Medical Safety Engine)

**Input:**  
- Altitude  
- Duration (days)  
- Temperature  
- Fitness level  
- Time of year  

**Predicts:**  
- AMS risk  
- Hypothermia probability  
- Hydration needs  
- Fatigue likelihood  
- Weather danger  

**Output:**  
- **Health Score (0–100)**  
- Personalized medical safety advice  
- Packing suggestions  
- Recommended acclimatization steps  

---

# 🛡 3. Fraud & Scam Detector (Security Engine)

**Input:** UPI ID, invoice file, website link, phone number  

**Checks:**  
- Invalid UPI patterns  
- Edited or fake invoice markers  
- Suspicious metadata  
- Risky keywords  
- Fake domain behaviour  
- Phone reputation fingerprints  
- Pricing anomalies  

**Output:**  
- **Fraud Score (0–100)**  
- Safe / Unsafe Label  
- Possible scam reasons  

---

# ⭐ Final Output — Verified Trek Score (0–100)

The final safety rating combines:

```
40% Truth Score  
40% Health Score  
20% Fraud Score
```

This single number helps users decide:
- Should I go?
- Do I need preparation?
- Is this reel/post reliable?
- Is the agent real or fake?

---

# 🌍 Xplorevo Platform Overview

Beyond safety, the full Xplorevo ecosystem includes:

## 📦 Tours & Treks  
- Curated and verified treks  
- Instant booking  
- Clear inclusions/exclusions  
- Verified operators  

## 🎥 Travel Reels  
- Instagram-like reel feed  
- Upload and share  
- Auto-tagging via AI  

## 🛵 Rentals  
- Cars, bikes, scooters  
- Hourly/daily pricing  
- Add-ons like home delivery  

## 🧑‍🤝‍🧑 Community  
- City-wise groups  
- Events and meetups  
- Forum posts (Hindi, Marathi, English)  

## 🤖 AI Travel Planner  
- Full itinerary creation  
- Budget-based optimization  
- Seasonal recommendations  

## 🛡 Safety Tools  
- SOS with live location  
- Women-only travel groups  
- Guide verification  

## 🧠 Admin Dashboard  
- Manage tours  
- Handle reels/moderation  
- Check user reports  
- Analytics and performance  

---

# 🧩 Tech Stack

## Frontend  
- React.js / Next.js  
- TailwindCSS  
- ShadCN UI  
- Framer Motion  
- React Query / SWR  

## Backend  
- Node.js + Express  
- REST API architecture  
- Prisma ORM  
- PostgreSQL  
- JWT Authentication  
- Multer for file uploads  

## AI Layer  
- Google Gemini 1.5 Flash / Pro  
- Vision analysis  
- Text interpretation  
- Fraud detection rules  
- Image metadata evaluation  

## Free External APIs (0 Billing)  
- **OpenWeatherMap** (weather)  
- **OpenTopoData** (elevation)  
- **OpenStreetMap** (routing)  
- **EXIF-js** (image metadata)  
- **Custom UPI/phone rule engine**  

---

# 🏗 System Architecture

```
 ┌──────────────────────┐
 │     Frontend UI      │ (React/Next.js)
 └──────────┬───────────┘
            │
            ▼
 ┌──────────────────────┐
 │      Backend API     │ (Node.js + Express)
 └──────────┬───────────┘
            │
            ▼
 ┌──────────────────────┐
 │      AI Layer        │ (Gemini APIs)
 └──────────┬───────────┘
            │
            ▼
 ┌─────────────────────────────────────────┐
 │ External APIs (OWM, OpenTopo, OSM, EXIF)│
 └─────────────────────────────────────────┘
```

---

# ⚙ Environment Variables

Create `.env`:

```
DATABASE_URL=
JWT_SECRET=
S3_ACCESS_KEY=
S3_SECRET_KEY=
GEMINI_API_KEY=
GOOGLE_API_KEY=
SMTP_HOST=
SMTP_USER=
ADVENTURE_GUARDIAN_URL=
```

---

# 🧪 Demo Data (Hackathon Mode)

### Misinformation  
- Fake reel with brightened sky  
- Trek poster with enhanced snow  
- Old high-altitude trail image  

### Health  
- Altitude: 5200m  
- Temp: –8°C  
- Duration: 2 days  
- Beginner fitness  

### Fraud  
- Fake UPI: abc@yblx  
- Edited invoice PNG  
- Phishing travel domain  

---

# 📦 API Routes

### `POST /misinfo`
- Accepts image  
- Vision analysis  
- Weather + elevation cross-check  

### `POST /health`
- Accepts trek form  
- Computes health risk  

### `POST /fraud`
- Accepts UPI/website/invoice  
- Fraud probability  

### `GET /trek-score`
- Combines all three scores  

---

# 🧠 Scoring Logic

### Truth Score (40%)
- Weather mismatch  
- Edited/AI-generated detection  
- Route inconsistency  
- Overcrowding evaluation  

### Health Score (40%)
- AMS probability  
- Temperature risk  
- Fatigue prediction  
- Hydration needs  

### Fraud Score (20%)
- UPI pattern validation  
- Metadata anomalies  
- Scam indicators  

---

# 🔧 Local Development Setup

### 1. Clone Repo  
```bash
git clone https://github.com/xplorevo/adventure-guardian-ai.git
cd adventure-guardian-ai
```

### 2. Backend  
```bash
cd backend
npm install
npm start
```

### 3. Frontend  
```bash
cd ../frontend
npm install
npm run dev
```

---

# 🚀 Deployment

### Frontend  
- Vercel / Netlify  

### Backend  
- Railway / Render  

### Database  
- PostgreSQL  

### Storage  
- AWS S3 / Cloudflare R2  

---

# 📂 Folder Structure

```
xplorevo/
 ├── frontend/
 ├── backend/
 ├── docs/
 └── README.md
```

---

# 🌱 Roadmap (2025)

- Android & iOS app  
- AI-based danger scoring  
- VR trek walkthroughs  
- Advanced fraud prevention  
- College travel ecosystem expansion  

---

# 📞 Support

📧 Email: connect@xplorevo.com  
📍 Location: Pune, India  

© 2025 Xplorevo Pvt. Ltd. All rights reserved.
