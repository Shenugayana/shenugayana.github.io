# Shenugayana — Developer Portfolio

Personal portfolio website for **Shenugayana**, showcasing software engineering, data science, AI, cybersecurity, and full-stack development work.

* **🌐 Live Portfolio:** [https://shenugayana.github.io/](https://shenugayana.github.io/)
* **💻 GitHub:** [https://github.com/Shenugayana](https://github.com/Shenugayana)
* **🔗 LinkedIn:** [https://www.linkedin.com/in/shenugayana/](https://www.linkedin.com/in/shenugayana/)

---

## Overview

This portfolio is designed as a multi-page digital showcase of my technical work, projects, education, experience, and areas of interest.

Rather than presenting projects as a simple collection of cards, the portfolio uses an **editorial and case-study-oriented structure** to give larger projects room to communicate their technical depth, architecture, contribution, and development process.

The site includes:

* A focused homepage introducing my background and technical interests
* Dedicated project catalogue
* Detailed project case studies
* Professional experience
* Education
* Technical skills
* Contact information
* Dark and light themes
* Responsive layouts for desktop, tablet, and mobile

---

## Design

The visual identity is built around a **monochrome foundation with an acid/electric green accent**.

### Design principles

* Minimal and technical
* Strong typography
* High contrast
* Editorial project presentation
* Controlled use of accent colour
* Subtle animations and interactions
* Responsive design
* Accessibility-conscious UI
* Dark theme as the default experience

The portfolio also uses **outline/stroke typography** as a visual element to create depth while maintaining a clean developer-focused aesthetic.

---

## Portfolio Structure

```text
/
├── Home
│   ├── Hero
│   ├── Featured Projects
│   ├── About
│   ├── Experience
│   ├── Education
│   ├── Skills
│   └── Contact
│
├── Projects
│   ├── Featured Case Studies
│   ├── Selected Work
│   └── Project Archive
│
└── Project Case Studies
    ├── Password Strength Auditor & Breach Checker
    └── IntelliOps
```

The project catalogue is designed to scale as new projects are added.

Projects can be presented at different levels:

```text
Case Study
    ↓
Selected Work
    ↓
Project Archive
```

This allows future projects to be added without changing the overall portfolio architecture.

---

## Featured Projects

### Password Strength Auditor & Breach Checker

**MSc Dissertation · Cybersecurity · Data Science · Software Engineering**

A web application focused on password security assessment.

The project analyses password characteristics, evaluates password strength, checks passwords against known breach data, estimates cracking difficulty, and provides recommendations for stronger passwords.

**Repository:**
https://github.com/Shenugayana/securepass-password-auditor

---

### IntelliOps

**Team Project · Software Engineering · UI/UX · AI · IT Operations**

An AI-powered IT operations and incident intelligence platform designed around infrastructure monitoring, incident management, operational analytics, and AI-assisted investigation.

The platform models enterprise infrastructure including servers, virtual machines, databases, applications, networks, and service dependencies.

**Repository:**
https://github.com/Shenugayana/IntelliOps

---

## Technologies

The portfolio and showcased projects cover a broad range of technologies and development areas, including:

### Programming

* Java
* C#
* C/C++
* TypeScript
* JavaScript
* Python
* SQL

### Web Development

* React
* Vite
* HTML
* CSS
* Tailwind CSS
* REST APIs

### Backend & Software Engineering

* .NET
* Spring Boot
* Flask
* FastAPI
* Firebase

### Data & AI

* Pandas
* NumPy
* Scikit-learn
* Data Analysis
* Machine Learning
* Anomaly Detection
* AI-assisted Investigation
* RAG / Knowledge-grounded Systems

### Infrastructure & DevOps

* Docker
* Linux
* Windows Server
* PostgreSQL
* TimescaleDB
* Prometheus
* Grafana
* Kafka
* GitHub Actions

---

## Development

The portfolio is structured as a maintainable and scalable web project rather than a static collection of pages.

Key development principles include:

* Reusable UI components
* Data-driven project presentation
* Responsive layouts
* Accessible interactions
* Consistent design tokens
* Reusable typography system
* Theme support
* Progressive enhancement
* Component-based architecture

Project information is structured so that new work can be added without rebuilding the project catalogue or individual page layouts.

---

## Running Locally

Clone the repository:

```bash
git clone https://github.com/Shenugayana/Shenugayana.github.io.git
```

Navigate into the project:

```bash
cd Shenugayana.github.io
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The development server will provide a local URL where the portfolio can be viewed.

---

## Production Build

Create a production build with:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Deployment

The portfolio is designed for deployment through **GitHub Pages**.

Production updates can be published from the repository after building the application according to the project's deployment configuration.

---

## Repository

**Portfolio:**
https://github.com/Shenugayana/Shenugayana.github.io

**GitHub Profile:**
https://github.com/Shenugayana

---

## Contact

**Shenugayana**

Software Developer | Data Science & AI

📧 [arulshen@gmail.com](mailto:arulshen@gmail.com)
🔗 https://www.linkedin.com/in/shenugayana/

---

## License

This repository contains the source code for my personal portfolio.

The portfolio content, personal branding, project descriptions, and original visual assets are intended for personal use and should not be reproduced as another person's portfolio.

## Hero portrait

The supplied PNG portraits are preserved unchanged in `public/images/profile-dark.png` and `public/images/profile-light.png`. Their paths and shared accessible description are configured in `src/data/profile.ts`. CSS follows the existing saved theme, so the matching portrait is visible immediately on load and when the theme is toggled. The frame trims the supplied images' transparent top/side margins using CSS without editing the originals. If replacing them with differently framed images, update `.hero-portrait img` sizing and positioning in `src/identity.css`.
