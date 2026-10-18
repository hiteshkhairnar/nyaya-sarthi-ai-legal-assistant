# Nyaya Sarthi (न्याय सारथी) — AI Legal Assistant for Indian Law

A web app concept for Indian legal research: ask legal questions, summarise documents, search case law and generate legal drafts, all from one dashboard.

**Live demo:** https://ai-legal-sarthi.netlify.app/

> **Project status: front-end prototype.** The interface, navigation, layout and Word (.docx) export are fully built. The "AI" responses, case search results, history and dashboard figures are **sample data generated in the browser**, so no real AI model or legal database is connected yet. See [Roadmap](#roadmap).

## Features

| Page | What it does |
|---|---|
| **Home / Login** | Landing page and sign-in / sign-up screens (the form is a UI mock; it does not authenticate yet) |
| **Dashboard** | Quick actions and usage overview (sample figures) |
| **Ask a Question** | Chat-style interface for questions on Indian statutes and case law |
| **Summarize Document** | Paste text or upload a file to get a structured summary view |
| **Case Search** | Search interface with result cards for Supreme Court judgments (a few landmark cases are included as sample data) |
| **Draft Generator** | Choose a document type (legal notice, affidavit, writ petition, rent agreement, NDA and more), enter the parties and **download the draft as a .docx file** |
| **History** | List of past activity (sample data) |

## Tech stack

- **React 18** + **TypeScript**, built with **Vite**
- **Tailwind CSS** and **shadcn/ui** (Radix UI) for the interface
- **React Router** for navigation
- **docx** and **file-saver** for Word export
- **Supabase** client (configured, not yet connected to a page)
- **Vitest** and **Playwright** set up for testing
- Deployed on **Netlify**

## Getting started

Requires Node.js 18 or newer.

```bash
git clone https://github.com/<hiteshkhairnar>/nyaya-sarthi-ai-legal-assistant.git
cd nyaya-sarthi-ai-legal-assistant
npm install
cp .env.example .env     # then add your Supabase URL and publishable key
npm run dev
```


### Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm test` | Run unit tests |

## Roadmap

- [ ] Connect a real language model for Q&A, summaries and drafting (through a Supabase Edge Function so API keys stay on the server)
- [ ] Real authentication with Supabase Auth
- [ ] Save history per user in the database
- [ ] Case search backed by a real judgments data source
- [ ] Show sources and citations with every answer
- [ ] Support for Hindi and other Indian languages

## Disclaimer

Nyaya Sarthi is a learning and portfolio project. Nothing it displays is legal advice, and the current sample responses are not based on real analysis of any document or law. Consult a licensed advocate for legal matters.

## License

No license has been added yet, so all rights are reserved by default. To allow others to reuse the code, add a license file such as MIT.
