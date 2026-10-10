# 🚀 AyuBuild AI — AI-Powered Website Builder

**AyuBuild AI** is an advanced, production-grade full-stack web application that empowers creators, designers, and developers to generate, customize, preview, and deploy modern, responsive single-page websites using AI in seconds.

Powered by **DeepSeek (via OpenRouter)**, **React 19**, **Tailwind CSS v4**, **Monaco Editor**, and **Express + MongoDB**, AyuBuild AI turns natural language prompts into clean, zero-dependency, deployable web experiences.

---

## ✨ Features

- 🤖 **Natural Language Website Generation**: Turn ideas into complete, responsive single-page websites using advanced AI system prompts.
- 💻 **In-Browser Monaco Code Editor**: Inspect and manually edit raw HTML/CSS/JS code with real-time live preview and one-click saving.
- 💬 **Iterative AI Assistant**: Request modifications, additions, or styling refinements via an interactive conversational assistant.
- 📱 **Fully Responsive Live Sandbox**: Preview sites in desktop, tablet, and mobile orientations inside a secure sandbox iframe.
- 🚀 **Instant 1-Click Deployment**: Publish websites with unique, permanent public shareable URLs (`/site/:slug`).
- 💳 **Stripe Payment & Credits Engine**: Integrated credit tiers (Free, Pro, Enterprise) powered by Stripe checkout sessions and webhooks.
- 🔐 **Seamless Google Authentication**: Powered by Firebase Google Auth with secure HTTP-only JWT session cookies.

---

## 🛠️ Tech Stack

### Frontend (`/client`)
- **Framework:** React 19 + Vite 7
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Animations:** Motion (`motion/react`)
- **Code Editor:** `@monaco-editor/react`
- **State Management:** Redux Toolkit (`@reduxjs/toolkit` + `react-redux`)
- **Routing:** React Router DOM v7
- **Icons:** Lucide React
- **Auth:** Firebase Auth (Google Provider)
- **HTTP Client:** Axios

### Backend (`/server`)
- **Runtime:** Node.js (ES Modules)
- **Framework:** Express 5
- **Database:** MongoDB via Mongoose 9
- **AI Engine:** OpenRouter API (`deepseek/deepseek-chat`)
- **Payments:** Stripe SDK (`stripe`)
- **Auth & Security:** JSON Web Tokens (`jsonwebtoken`), `cookie-parser`, `cors`

---

## 📁 Project Architecture

```
AyuBuild-AI/
├── client/                     # Frontend React + Vite application
│   ├── src/
│   │   ├── components/         # Reusable UI components (e.g. LoginModal)
│   │   ├── hooks/              # Custom React hooks (e.g. useGetCurrentUser)
│   │   ├── pages/              # Views (Home, Dashboard, Generate, Editor, LiveSite, Pricing)
│   │   ├── redux/              # Redux store & user slice
│   │   ├── App.jsx             # Route definitions & app entry
│   │   ├── firebase.js         # Firebase client config
│   │   └── main.jsx            # React root DOM bootstrap
│   ├── .env.example            # Client environment template
│   └── package.json
│
├── server/                     # Backend Express API
│   ├── config/                 # DB, Stripe, OpenRouter, and Plan configs
│   ├── controllers/            # Auth, Billing, Stripe Webhook, User, and Website controllers
│   ├── middlewares/            # isAuth JWT middleware
│   ├── models/                 # Mongoose schemas (User, Website)
│   ├── routes/                 # Express API routes
│   ├── utils/                  # JSON extraction & sanitization helper
│   ├── index.js                # Express app initialization & server entry
│   ├── .env.example            # Server environment template
│   └── package.json
│
├── .gitignore                  # Root git exclusion rules
└── README.md                   # Project documentation
```

---

## ⚙️ Environment Configuration

### 1. Server Environment (`server/.env`)

Copy `server/.env.example` to `server/.env` and supply your credentials:

```env
PORT=8000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
OPENROUTER_API_KEY=your_openrouter_api_key
FRONTEND_URL=http://localhost:5173
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

### 2. Client Environment (`client/.env`)

Copy `client/.env.example` to `client/.env`:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_SERVER_URL=http://localhost:8000
```

---

## 🚀 Installation & Setup

### Prerequisites
- **Node.js** (v18.0 or higher recommended)
- **npm** or **yarn** / **pnpm**
- **MongoDB** instance (local or MongoDB Atlas)

---

### Step 1: Clone Repository

```bash
git clone https://github.com/Ayushi-Choudhary22/AyuBuild-AI.git
cd AyuBuild-AI
```

---

### Step 2: Install Dependencies

**Install Server Dependencies:**
```bash
cd server
npm install
```

**Install Client Dependencies:**
```bash
cd ../client
npm install
```

---

### Step 3: Run Development Servers

**Start Backend Server:**
```bash
cd server
npm run dev
```
*Backend runs on `http://localhost:8000` (or `PORT` specified in `.env`).*

**Start Frontend Application:**
```bash
cd client
npm run dev
```
*Frontend runs on `http://localhost:5173`.*

---

## 📡 API Endpoints Summary

| Method | Endpoint | Description | Auth Required |
|---|---|---|:---:|
| `POST` | `/api/auth/google` | Google login / user registration | No |
| `GET` | `/api/auth/logout` | Clear auth token cookie | No |
| `GET` | `/api/user/me` | Fetch authenticated user data & credits | Yes |
| `POST` | `/api/website/generate` | Generate website from text prompt | Yes |
| `POST` | `/api/website/update/:id` | Refine website code via AI prompt | Yes |
| `POST` | `/api/website/save/:id` | Save manual code edits | Yes |
| `GET` | `/api/website/get-all` | Retrieve all websites for current user | Yes |
| `GET` | `/api/website/get-by-id/:id` | Retrieve single website and history | Yes |
| `GET` | `/api/website/deploy/:id` | Deploy website & generate public slug | Yes |
| `GET` | `/api/website/get-by-slug/:slug` | Public endpoint for published sites | No |
| `POST` | `/api/billing` | Create Stripe checkout session | Yes |
| `POST` | `/api/stripe/webhook` | Process Stripe payment webhook | Stripe Signature |

---

## 👩‍💻 Author

**Ayushi Choudhary**  
B.Tech CSE | MERN Stack Developer  
GitHub: [Ayushi-Choudhary22](https://github.com/Ayushi-Choudhary22)

---

## 🛡️ License

This project is licensed under the ISC License.
