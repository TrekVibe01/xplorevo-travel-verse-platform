A friendly, human‑readable overview of the entire Xplorevo platform — what it is, how it works, the tech behind it, and how everything fits together.


🚀 What is Xplorevo?

Xplorevo is a digital travel ecosystem designed to make exploring India simple, safe, and exciting. It connects:

* Travelers looking for authentic experiences
* Verified tour operators
* Vehicle rental partners
* Student communities
* Creators sharing reels
* Admins keeping everything safe and smooth

Think of it as **India’s travel super‑app** — tours, reels, rentals, community, AI tools, all in one place.

🧩 How the Platform Is Built

We use a clean, modern, scalable setup designed for fast updates and safe user experiences.

Frontend (What users see)

* React / Next.js
* TailwindCSS for styling
* Framer Motion for smooth animations
* ShadCN UI components
* React Query / SWR for data

Backend (What powers the system)

* Node.js + Express or Next.js API
* PostgreSQL database
* Prisma for database models
* JWT authentication
* Email + optional SMS alerts

Storage & Media
AWS S3 / Cloudflare R2 for images and reels

AI Tools Integrated

Gemini API** for Smart Travel Planning (AI itineraries)
Adventure Guardian AI** (external safety system)

🔑 Environment Variables (Simple Version)

Developers must set these before running the project:


DATABASE_URL=
JWT_SECRET=
S3_ACCESS_KEY=
S3_SECRET_KEY=
GEMINI_API_KEY=
GOOGLE_API_KEY=
SMTP_HOST=
SMTP_USER=
ADVENTURE_GUARDIAN_URL=



📦 Key Features

Tours & Treks

* Explore curated treks and trips
* Book instantly
* See what’s included

Travel Reels

* Watch portrait-style reels (like Instagram)
* Upload your own reels

Rentals

* Rent bikes, scooties, or cars
* Hourly/daily pricing
* Home delivery toggle

Community

* Join groups
* Attend events
* Post on forums in Marathi / Hindi / English

Smart Planning (AI)

 AI builds your full travel plan based on budget + days

Safety & Solo Travel Support

* Women‑only groups
* SOS with live location
* Verified accommodations

Adventure Guardian AI

* Checks trek safety, health risk, and fraud
* Redirects to official tool

Admin Dashboard

* Manage tours, reels, rentals, users, alerts
* View analytics and performance

 🧪 Testing & Quality

We aim to keep the platform reliable:

* Automated tests (API + UI)
* Lighthouse performance checks
* Media optimization
* Error and crash monitoring

---

 🚀 Deployment

* Frontend on Vercel / Netlify
* Backend on Railway / Render
* Database on PostgreSQL
* S3 bucket for media uploads

 📂 Project Structure (Simple)

---
xplorevo/
  frontend/
  backend/
  docs/
---

---

🌱 Roadmap (Short Version)

* Mobile App (iOS/Android)
* VR-based trek previews
* AI-based safety scoring
* College travel ecosystem expansion

---

📞 Support

[connect@xplorevo.com](mailto:connect@xplorevo.com) | +91 9763262025 | Pune

© 2025 Xplorevo Pvt Ltd. All rights reserved.
