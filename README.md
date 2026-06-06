# Raywin Cruz Portfolio

Personal portfolio website for **Raywin Cruz**, M.Sc. Data Science student at the University of Mannheim, currently working in AI Product Management related to SAP HANA Cloud.

* **Live URL**: [https://raywincruz07-collab.github.io](https://raywincruz07-collab.github.io)
* **Target Audience**: Recruiters, hiring managers, and product leaders in Germany looking for working students or graduates with strong technical and product alignment.

---

## 🚀 Overview

This website serves as a recruiter-facing landing page showcasing my background at the intersection of AI product management, data science, and cloud database workflows. It is designed to be highly readable, premium, and performant.

### Core Sections
* **Hero Section**: Positioning details (SAP HANA Cloud, AI PM, GenAI/RAG), location, and clean recruiter CTAs.
* **About Me**: Narrative detailing M.Sc. Data Science studies at the University of Mannheim, product-oriented AI focus, and technical base.
* **Skills Dashboard**: Categorized display of core competency fields (Programming, ML, GenAI/RAG, Data Engineering, and Tools).
* **Featured Projects**: Highlighted project cards detailing the concrete Problem, What I Built, Tech stack, and Outcomes/Learnings.
* **More Projects (Archive)**: A secondary grid showing additional project breadth (Malware classification, Web data scraping, KPI reporting, Sentiment analyzers) labeled as Academic/Internal.
* **Journey Timeline**: Vertical milestone mapping representing SAP HANA Cloud work and academic achievements.
* **Contact Cards**: Copy-to-clipboard email channel (`raywincruz2003@gmail.com`), CV target downloads, and direct social profile redirects.

---

## 🛠️ Tech Stack

* **Core Framework**: React 19, TypeScript
* **Build Tool**: Vite (Vite v8 compiler)
* **Styling**: Tailwind CSS v4 (using the `@tailwindcss/vite` configuration layer)
* **Icons**: Lucide React
* **Hosting**: GitHub Pages
* **Automation**: GitHub Actions (`deploy.yml`)

---

## 💻 Local Development

Follow these steps to run the portfolio website locally on your machine:

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the hot-rebuilding site.

### 3. Build for Production
```bash
npm run build
```
This generates optimized static files inside the `dist/` directory, ready to be deployed.

---

## 📦 Deployment Flow

The project deploys automatically to GitHub Pages using GitHub Actions. The workflow configuration is located in:
`.github/workflows/deploy.yml`

On every push to the **`main`** branch, the workflow:
1. Checks out the code.
2. Sets up Node.js v20 with npm caching.
3. Installs dependencies using `npm ci`.
4. Compiles the TypeScript and generates the production bundle using `npm run build`.
5. Uploads the `dist/` folder as a Pages artifact.
6. Publishes it to the live domain.

> **Note**: To serve your CV PDF, make sure to place `Raywin_CV.pdf` directly inside the `/public` folder at the root of the project.
