# 🤖 AyuBuild AI – AI-Powered Website Generator

An AI-powered web application that generates modern, responsive website components from natural language prompts using Gemini AI. Built with the MERN stack, React, Tailwind CSS, and Monaco Editor.

---

## 📁 Project Structure

```
AyuBuild-AI/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── server/
    ├── config/
    │   └── db.js
    ├── controllers/
    ├── middleware/
    ├── models/
    │   └── User.js
    ├── routes/
    ├── index.js
    ├── package.json
    └── .env
```

---

## ⚙️ Prerequisites

- Node.js v18+
- MongoDB Atlas / MongoDB Local
- Gemini API Key
- npm

---

## 🚀 Installation & Setup

### Step 1: Clone Repository

```bash
git clone https://github.com/Ayushi-Choudhary22/AyuBuild-AI.git
cd AyuBuild-AI
```

---

### Step 2: Setup Backend

```bash
cd server
npm install
```

Create a `.env` file:

```env
MONGO_URI=YOUR_MONGODB_URI
JWT_SECRET=YOUR_SECRET_KEY
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
PORT=5000
```

---

### Step 3: Setup Frontend

```bash
cd ../client
npm install
```

---

### Step 4: Run Project

**Terminal 1 – Backend**

```bash
cd server
npm run dev
```

**Terminal 2 – Frontend**

```bash
cd client
npm run dev
```

Open:

```
http://localhost:5173
```

---

## ✨ Features

- AI-powered website generation using Gemini AI
- Generate responsive UI components from natural language prompts
- Monaco Editor for live code editing
- Live Preview of generated websites
- Export generated code as HTML
- Copy generated code with one click
- Open generated website in a new browser tab
- Secure user authentication using JWT and HTTP-only cookies

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- Monaco Editor
- React Toastify

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Cookie Parser
- CORS

### AI

- Google Gemini API

---

## 📦 Libraries Used

### Frontend

- react
- react-router-dom
- axios
- tailwindcss
- @monaco-editor/react
- react-toastify

### Backend

- express
- mongoose
- dotenv
- cors
- jsonwebtoken
- cookie-parser
- bcryptjs

---

## 🔒 Authentication

- JWT-based Authentication
- HTTP-only Cookies
- Protected Routes
- User Registration & Login

---

## 🎯 Future Enhancements

- Multi-file project generation
- AI chat assistant
- Project history
- User dashboard
- Multiple framework support (React, Next.js, Vue)
- Dark/Light theme
- Deployment integration

---

## 👩‍💻 Author

**Ayushi Choudhary**

B.Tech CSE | MERN Stack Developer

GitHub: https://github.com/Ayushi-Choudhary22
