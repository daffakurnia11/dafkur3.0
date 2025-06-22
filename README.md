<h1 align="center">
dafkur.com
</h1>
<p align="center">
  <img src="https://img.shields.io/badge/version-3.4.5-blue?style=flat-square" />
</p>

<p align="center">
  <img src="https://img.shields.io/github/last-commit/daffakurnia11/dafkur3.0?style=flat-square" />
  <img src="https://img.shields.io/badge/TypeScript-92.3%25-blue?style=flat-square&logo=typescript" />
  <img src="https://img.shields.io/badge/CSS-4.4%25-purple?style=flat-square&logo=css3" />
  <img src="https://img.shields.io/badge/JavaScript-3.3%25-yellow?style=flat-square&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/portfolio-live-blue?style=flat-square&logo=vercel&link=https://dafkur.com" />
  <img src="https://img.shields.io/badge/deployed%20on-vercel-000?style=flat-square&logo=vercel&logoColor=white" />
  <img src="https://img.shields.io/badge/SEO-optimized-brightgreen?style=flat-square" />
</p>

<h3 align="center">
🛠️ Built with the tools and technologies:
</h3>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css" />
  <img src="https://img.shields.io/badge/Jotai-00C7B7?style=flat-square" />
  <img src="https://img.shields.io/badge/Framer_Motion-000000?style=flat-square&logo=framer" />
  <img src="https://img.shields.io/badge/React_Grid_Layout-222222?style=flat-square&logo=react" />
  <img src="https://img.shields.io/badge/React_Hot_Toast-ffcc00?style=flat-square&logo=react" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios" />
  <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass" />
  <img src="https://img.shields.io/badge/PostCSS-DD3A0A?style=flat-square&logo=postcss" />
  <img src="https://img.shields.io/badge/Autoprefixer-EA5E5E?style=flat-square&logo=autoprefixer" />
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint" />
  <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=flat-square&logo=yarn" />
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white" />
  <img src="https://img.shields.io/badge/reCAPTCHA-v3-4285F4?style=flat-square&logo=google&logoColor=white" />
</p>

---

**Dafkur.com** is the personal portfolio website of **Daffa Kurnia Fatah**, built to showcase his projects, technical skills, professional experiences, and personal achievements. The site includes a blog (coming soon), downloadable resume, interactive project grid, and contact form — all optimized for clarity, responsiveness, and performance.

---

## 🌐 Live Website

Visit the live site to explore projects, experiences, resume, and more — all crafted with performance, accessibility, and interactivity in mind.

[https://dafkur.com](https://dafkur.com)

---

## 🚀 Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS**
- **TypeScript**
- **Jotai** – state management
- **Framer Motion** – animations
- **Axios**
- **React Grid Layout** – drag-and-drop project UI
- **React Hot Toast** – notifications
- **PostCSS** + **Autoprefixer**
- **Prisma** – ORM for database communication
- **react-google-recaptcha** – Bot protection on contact forms
- **Vercel** – deployment

---

## 🧰 Additional Tools

- **Figma** – UI Design and wireframes
- **VS Code** – Development environment
- **Vercel CLI** – Local deployment testing
- **Neon** – PostgreSQL serverless database hosting

---

## ✨ Features

- ⚡ Fully responsive design
- 🧱 Drag-and-drop project layout with `react-grid-layout`
- 🖼️ Project showcase with mockup screenshots
- 🧠 Skills and experience sections
- 📩 Contact form with toast notifications
- 📄 Resume access/download
- ✍️ Blog section (coming soon)
- 🎨 Animated UI with Framer Motion
- 🔍 SEO optimized (Open Graph, Twitter Cards, Sitemap, Robots.txt)

---

## 🧩 API Support

This project includes a built-in **API endpoint** using Next.js App Router (`/api/contact`) to handle contact form submissions.

- Accepts `POST` requests with name, email, subject, and message body.
- Validates input and stores data securely using **PostgreSQL via Prisma**.
- Protected with **reCAPTCHA v3** to prevent spam.

📄 See the [`/api/contact`](./src/app/api/contact/route.ts) file for full implementation details.

---

## 📦 Getting Started

To run the project locally:

```bash
# Clone the repository
git clone https://github.com/daffakurnia11/dafkur3.0.git
cd dafkur3.0

# Install dependencies
yarn install

# Create .env file
cp .env.example .env
```

Add your environment variable to `.env`:

```env
NEXT_PUBLIC_GOOGLE_TAG=your-google-tag-id
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-recaptcha-site-key
DATABASE_URL=your-database-url
RECAPTCHA_SECRET_KEY=your-recaptcha-secret-key
```

Then, start the development server:

```bash
yarn dev
```

---

## 📁 Project Structure

```
├── public/                          # Static assets
│   ├── icons/                       # SVG icons
│   ├── mockup/                      # Project screenshots (desktop/mobile)
│   ├── google*.html                 # Google site verification
│   └── og-image.png, sitemap.xml    # SEO & meta files
│
├── prisma/
│   └── schema.prisma                # Prisma schema
│
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── about/, contact/, skills/...
│   │   ├── api/                     # Backend API routes
│   │   ├── projects/, experiences/  # Project/experience pages
│   │   └── layout.tsx, page.tsx     # Root layouts and pages
│   │
│   ├── components/                 # Shared UI components
│   │   ├── Layout/, Card/, Typography/, ReCaptcha/, ...
│   │
│   ├── data/                       # Static JSON data (projects, skills, etc.)
│   ├── hooks/                      # Custom hooks (e.g. useMobile)
│   ├── axios/                      # Axios setup and API functions
│   ├── styles/                     # Tailwind and font imports
│   ├── types/                      # TypeScript interfaces/types
│   └── utils/                      # Atoms, helpers, SEO config
│
├── .env, .env.example              # Environment variables
├── README.md                       # Project documentation
├── next.config.js, tailwind.config.js
├── package.json, yarn.lock         # Dependencies
├── version.json                    # Current build version
└── updateVersion.js                # Auto-bump script for versioning

```

---

### 🛡️ reCAPTCHA v3 Integration

This project uses **Google reCAPTCHA v3** to prevent spam and abuse.

#### 📦 Setup

1. Create a site in [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Choose **reCAPTCHA v3**
3. Add both keys to `.env`:

```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-site-key
RECAPTCHA_SECRET_KEY=your-secret-key
```

#### 🧩 Usage

- `src/components/ReCaptcha/Provider.tsx` handles rendering and execution.
- Wrap your form logic in this component to get a token.
- Token is sent to `/api/contact` for verification via Google’s server.

---

## ☁️ Deployment

This project is hosted on **[Vercel](https://vercel.com/daffakurnia11/dafkur3-0-fnad)**  
Automatic production deployments occur from the `main` branch.

🔗 Live: [www.dafkur.com](https://www.dafkur.com)

---

## 👥 Audience

This portfolio is built for:

- Recruiters & hiring managers
- Clients & collaborators
- General visitors interested in my work

---

## 🧠 Author

**Daffa Kurnia Fatah**

- 🌐 [Website: dafkur.com](https://dafkur.com)
- 📷 [Instagram: @daffakurniaf11](https://www.instagram.com/daffakurniaf11/)
- 👔 [LinkedIn: Daffa Kurnia Fatah](https://www.linkedin.com/in/daffakurniafatah/)
- 📧 [Email: daffakurniaf11@gmail.com](mailto:daffakurniaf11@gmail.com)

---

## 📌 Version

**Dafkur.com v3.4.5**

This version is tracked via `version.json` and represents the latest deployment build.

---

## 🤝 Contributing

Currently, this project is personal and not accepting external contributions.  
However, feel free to fork and explore it for learning or inspiration!

---

> This project is developed with a focus on simplicity, accessibility, and performance. Feel free to explore the code and experience the UI interactions.
> 🔍 This website uses Google Analytics for basic traffic insights. No personal data is collected.
