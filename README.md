# Rishi Kesh Portfolio
# 🌐 Website - [Rishi.codes](https://rishi.codes)

> A modern, responsive developer portfolio and resume website for showcasing skills, projects, experience, education, and professional contact links.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=000)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 🚀 Overview

This project is a premium personal portfolio website built with **Next.js 14**, **Tailwind CSS**, **TypeScript**, **Framer Motion**, and **Lucide React**.

It is designed to present a recruiter-friendly profile with separate pages for About, Skills, Projects, Experience, Resume, and Contact.

---

## 🧠 Problem It Solves

Many personal portfolios mix all content into one long page, making it harder for recruiters to scan quickly.

This project solves that by organizing professional information into clean, focused pages with strong visual hierarchy, responsive design, and direct resume access.

---

## ⚙️ Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 14 |
| UI Library | React 18 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| Deployment | Vercel / Static hosting compatible |

---

## ✨ Features

- Modern dark neon portfolio UI
- Responsive desktop, tablet, and mobile layout
- Separate pages for clean content organization
- Premium active-tab navigation
- Resume view and download support
- Project cards with tech stack and key features
- Experience page focused on professional impact
- Contact form layout with email, LinkedIn, and GitHub links
- Optimized profile image and static assets
- SEO-ready metadata
- Beginner-friendly project structure

---

## 📸 Screenshots

Screenshots are not included in the repository to keep it lightweight.

You can add screenshots later inside:

```txt
public/screenshots/
```

Example:

```md
![Home Page](public/screenshots/home.png)
```

---

## 🛠️ Installation Steps

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

### 2. Go into the project folder

```bash
cd YOUR_REPO_NAME
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open in browser

```txt
http://localhost:3000
```

---

## ▶️ Usage Instructions

Use the navigation bar to explore:

- `/` - Home page
- `/about` - About and academic profile
- `/skills` - Technical skills
- `/projects` - Project showcase
- `/experience` - Professional experience
- `/resume` - Resume view/download
- `/contact` - Contact form and professional links

To update portfolio content, edit:

```txt
lib/data.ts
```

To update the profile image, replace:

```txt
public/assets/rishi-profile.jpg
```

To update the resume, replace:

```txt
public/resume/rishi-kesh-resume.pdf
public/resume/rishi-kesh-resume.html
```

---

## 🌐 Deployment Guide

### Deploy on Vercel

1. Push the project to GitHub.
2. Go to [Vercel](https://vercel.com).
3. Click **New Project**.
4. Import your GitHub repository.
5. Keep framework as **Next.js**.
6. Click **Deploy**.

Vercel will automatically run:

```bash
npm run build
```

### Build locally

```bash
npm run build
```

### Start production server locally

```bash
npm run start
```

---

## 📂 Folder Structure

```txt
.
|-- app/
|   |-- about/
|   |-- contact/
|   |-- experience/
|   |-- projects/
|   |-- resume/
|   |-- skills/
|   |-- globals.css
|   |-- layout.tsx
|   `-- page.tsx
|-- components/
|   |-- sections/
|   |   |-- about-section.tsx
|   |   |-- contact-section.tsx
|   |   |-- experience-section.tsx
|   |   |-- footer.tsx
|   |   |-- hero-section.tsx
|   |   |-- navbar.tsx
|   |   |-- projects-section.tsx
|   |   |-- resume-section.tsx
|   |   `-- skills-section.tsx
|   `-- ui/
|       |-- button-link.tsx
|       |-- project-card.tsx
|       |-- project-preview.tsx
|       |-- reveal.tsx
|       |-- section-heading.tsx
|       `-- skill-icon.tsx
|-- lib/
|   `-- data.ts
|-- public/
|   |-- assets/
|   |   `-- rishi-profile.jpg
|   `-- resume/
|       |-- rishi-kesh-resume.html
|       `-- rishi-kesh-resume.pdf
|-- package.json
|-- tailwind.config.ts
|-- tsconfig.json
`-- README.md
```

---

## 🔐 Environment Variables

This project does not require environment variables by default.

If you add a backend contact form, create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
CONTACT_SERVICE_API_KEY=your_api_key_here
CONTACT_RECEIVER_EMAIL=your_email@example.com
```

Do not commit real secrets to GitHub.

---

## 🧪 Testing Instructions

Run linting:

```bash
npm run lint
```

Run production build:

```bash
npm run build
```

Manual checks before deployment:

- Test all routes
- Check mobile responsiveness
- Verify resume download works
- Check external links
- Confirm no private contact details are accidentally visible
- Confirm images and assets load correctly

---

## 📈 Future Improvements

- Add live project demo links
- Connect contact form to EmailJS, Resend, or a backend API
- Add blog or articles page
- Add project filtering by tech stack
- Add analytics with privacy-friendly tracking
- Add Open Graph preview image
- Add automated UI tests

---

## 🤝 Contribution Guidelines

Contributions are welcome.

To contribute:

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature/your-feature-name
```

3. Make your changes.
4. Run checks.

```bash
npm run lint
npm run build
```

5. Commit and push.
6. Open a pull request.

---

## 📜 License

This project is licensed under the **MIT License**.

You are free to use, modify, and distribute it with attribution.

---

## 👨‍💻 Author

**Rishi Kesh**  
MCA Student | Full Stack Developer & ML Enthusiast

- Email: [rishikesh2230@gmail.com](mailto:rishikesh2230@gmail.com)
- LinkedIn: [linkedin.com/in/rishikesh-k-756b1a236](https://linkedin.com/in/rishikesh-k-756b1a236)
- GitHub: [github.com/githubrishi2230](https://github.com/githubrishi2230)

---

⭐ If you like this project, consider starring the repository.
