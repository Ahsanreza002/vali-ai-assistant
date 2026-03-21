# Lumina — AI Knowledge Assistant

> A production-grade, ChatGPT-style RAG application with premium dark UI.
> Built with React + Vite + Tailwind + Framer Motion (frontend) and FastAPI + Gemini (backend).

---

## 🚀 Quick Start

### 1. Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Add your Gemini API key
export GEMINI_API_KEY="your_key_here"   # Windows: set GEMINI_API_KEY=your_key_here

# Run the server
uvicorn main:app --reload --port 8000
```

Get your free Gemini API key at: https://aistudio.google.com/app/apikey

---

### 2. Frontend Setup

```bash
# From the project root
npm install
npm run dev
```

Open http://localhost:5173

---

## 📁 Project Structure

```
lumina/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx        # File upload + document list
│   │   ├── Chat.jsx           # Main chat layout + topbar
│   │   ├── ChatBubble.jsx     # Message bubbles (user + AI)
│   │   ├── ChatInput.jsx      # Bottom input with animations
│   │   ├── TypingIndicator.jsx
│   │   └── EmptyState.jsx
│   ├── hooks/
│   │   ├── useChat.js         # Message state + API calls
│   │   └── useDocuments.js    # Upload + document management
│   ├── utils/
│   │   └── api.js             # Axios client
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── backend/
│   ├── main.py                # FastAPI app + RAG engine
│   └── requirements.txt
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 🧠 How RAG Works

1. **Upload** — File is sent to `/api/upload`
2. **Extract** — Text pulled from PDF/DOCX/TXT/CSV/MD
3. **Chunk** — Split into ~400-word overlapping windows
4. **Index** — TF-IDF vectors built in memory (no vector DB needed)
5. **Query** — User question vectorized + cosine similarity search
6. **Generate** — Top chunks injected into Gemini prompt
7. **Stream** — Answer returned to chat UI

---

## 🎨 Design System

| Token         | Value       |
|---------------|-------------|
| Background    | `#080c14`   |
| Surface       | `#0d1117`   |
| Card          | `#161b27`   |
| Border        | `#1e2836`   |
| Accent blue   | `#3b82f6`   |
| Accent violet | `#7c3aed`   |
| Font          | DM Sans     |
| Mono font     | JetBrains Mono |

---

## ✨ Features

- **Dark mode** premium UI (ChatGPT/Perplexity inspired)
- **Drag & drop** file upload with progress bar
- **Multi-document** RAG — query across all uploaded files
- **Markdown rendering** — headers, lists, code blocks, inline formatting
- **Message actions** — copy, export conversation
- **Source citations** — collapsible source list per AI message
- **Typing indicator** — animated dots while AI thinks
- **Suggested queries** — clickable prompts on empty state
- **Responsive** — mobile sidebar with overlay

---

## 🔧 Supported File Types

| Format | Library       |
|--------|---------------|
| PDF    | pdfplumber    |
| DOCX   | python-docx   |
| TXT    | built-in      |
| MD     | built-in      |
| CSV    | built-in      |

---

## 🚢 Production Deployment

### Frontend (Vercel / Netlify)
```bash
npm run build
# Deploy the dist/ folder
```

Update `vite.config.js` proxy to point to your deployed backend URL.

### Backend (Railway / Render / Fly.io)
```bash
uvicorn main:app --host 0.0.0.0 --port $PORT
```

Set `GEMINI_API_KEY` as an environment variable on your platform.

---

## 📦 Tech Stack

| Layer     | Technology                            |
|-----------|---------------------------------------|
| UI        | React 18, Vite, Tailwind CSS          |
| Animation | Framer Motion                         |
| Icons     | Lucide React                          |
| HTTP      | Axios                                 |
| Backend   | FastAPI, Uvicorn                      |
| LLM       | Google Gemini 1.5 Flash               |
| RAG       | Custom TF-IDF (zero vector DB deps)   |
| Parsing   | pdfplumber, python-docx               |
