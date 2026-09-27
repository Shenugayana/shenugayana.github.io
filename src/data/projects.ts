export type PresentationLevel = "case-study" | "selected" | "archive";
export type CatalogueEntry = {
  id: string;
  title: string;
  category: string;
  summary: string;
  tags: string[];
  presentationLevel: PresentationLevel;
  detailPath?: string;
  github?: string;
  secondRepo?: string;
  status?: string;
};
export type Project = {
  presentationLevel: PresentationLevel;
  featured: boolean;
  detailPath: string;
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  category: string;
  status: string;
  summary: string;
  role: string;
  team: string;
  tags: string[];
  overview: string;
  problem: string;
  approach: string;
  architecture: { title: string; text: string }[];
  contributions: { title: string; text: string }[];
  functionality: string[];
  current: string;
  planned: string[];
  stack: { title: string; items: string[] }[];
  github?: string;
  demo?: string;
  research?: { title: string; text: string }[];
};
export const projects: Project[] = [
  {
    id: "password-auditor",
    presentationLevel: "case-study",
    featured: true,
    detailPath: "/projects/password-auditor/",
    github: "https://github.com/Shenugayana/securepass-password-auditor",
    number: "01",
    title: "Password Strength Auditor & Breach Checker",
    shortTitle: "Password Strength Auditor & Breach Checker",
    category:
      "MSc Dissertation · Cybersecurity · Data Science · Software Engineering",
    status: "In development",
    summary:
      "A research prototype combining password-strength analysis, privacy-aware breach checking, and actionable feedback.",
    role: "Individual researcher & developer",
    team: "Individual dissertation",
    tags: ["Python", "Flask", "React", "zxcvbn", "HIBP API"],
    overview:
      "SecurePass is my MSc dissertation project at Aston University. It investigates how strength estimation and breach checking can be brought together in a usable, privacy-aware web application. The local prototype is implemented; research evaluation and deployment preparation remain ongoing.",
    problem:
      "Password length and character variety alone do not explain predictable patterns or exposure in known breaches. The project aims to give users more useful feedback while limiting disclosure during breach lookup.",
    approach:
      "Combine zxcvbn scoring, pattern feedback and crack-time estimates with the Have I Been Pwned range API. Keep strength analysis separate from breach checking and provide a browser-local password generator for stronger alternatives.",
    architecture: [
      {
        title: "React interface",
        text: "Collects input and presents strength, pattern feedback, crack-time estimates, and recommendations.",
      },
      {
        title: "Flask analysis API",
        text: "Processes the submitted password in memory with zxcvbn. The current entropy value is a character-pool estimate, not measured guessing entropy.",
      },
      {
        title: "HIBP range lookup",
        text: "Flask hashes the password and sends only the first five SHA-1 hash characters to HIBP. Returned suffixes are matched in the backend.",
      },
      {
        title: "Browser-local generator",
        text: "Uses Web Crypto to generate alternatives without sending generated passwords to the backend.",
      },
    ],
    contributions: [
      {
        title: "Application implementation",
        text: "Individual development of the React interface, Flask endpoints, strength analysis, breach integration, and local password generator.",
      },
      {
        title: "Security-focused design",
        text: "Input validation, request-size limits, CORS allowlisting, no-store responses, and process-local rate limiting are present in the prototype.",
      },
      {
        title: "Research & analysis",
        text: "Developing the evaluation of scoring, latency, feedback usability, and privacy-aware architecture. Final dissertation outcomes are not yet available.",
      },
    ],
    functionality: [
      "zxcvbn strength score and pattern feedback",
      "Character-pool entropy estimate and crack-time estimates",
      "HIBP hash-prefix breach lookup",
      "Strength recommendations and browser-local password generation",
    ],
    current:
      "Local research prototype — in development. Source inspection confirms the core analysis and breach-checking implementation. This is not a deployed service or an independently validated security product.",
    planned: [
      "Controlled benchmarking and documented analysis of results",
      "Usability evaluation, subject to ethics approval and participant consent",
      "Independent security review and hosted-environment controls",
      "Final dissertation evaluation and outcomes",
    ],
    stack: [
      {
        title: "Implemented prototype",
        items: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Python",
          "Flask",
          "zxcvbn",
          "Have I Been Pwned API",
          "Web Crypto",
        ],
      },
    ],
    research: [
      {
        title: "Research direction",
        text: "Design and evaluation of a privacy-preserving password strength auditor and breach detection system.",
      },
      {
        title: "Planned methodology",
        text: "The proposal uses Design Science Research: iterative design, implementation, and quantitative and qualitative evaluation.",
      },
      {
        title: "Security focus",
        text: "Data minimisation and privacy-aware breach lookup. The password reaches the local Flask backend; only a hash prefix reaches HIBP. No compliance certification is claimed.",
      },
      {
        title: "Data & analysis focus",
        text: "Planned comparison of scores, length, patterns, crack-time estimates, and latency using controlled inputs. Research results will be added once evaluated.",
      },
    ],
  },
  {
    id: "intelliops",
    presentationLevel: "case-study",
    featured: true,
    detailPath: "/projects/intelliops/",
    github: "https://github.com/Shenugayana/IntelliOps",
    number: "02",
    title:
      "IntelliOps — AI-Powered IT Operations & Incident Intelligence Platform",
    shortTitle: "IntelliOps",
    category:
      "Team Project · Software Engineering · UI/UX · AI · IT Operations",
    status: "In development",
    summary:
      "A collaborative platform for infrastructure monitoring, incident management, and AI-assisted operational investigation.",
    role: "Frontend architecture, UX & AI development",
    team: "Three-person team",
    tags: ["React", "TypeScript", "Python", "Spring Boot", "PostgreSQL"],
    overview:
      "IntelliOps is a three-person engineering project designed around enterprise IT operations. The platform brings together infrastructure health, alerts, incidents, operational analytics, and AI-assisted investigation. My focus is frontend architecture and UX, alongside development of the data science and AI layer.",
    problem:
      "Operational teams must interpret metrics, events, alerts, and service dependencies across a complex environment. IntelliOps is designed to organise that information into incident workflows and evidence-led investigation.",
    approach:
      "Build reusable interfaces and TypeScript contracts around realistic operational datasets. Mock API workflows support independent frontend development and are designed to be replaced by REST integrations. Develop AI analysis alongside the broader team platform.",
    architecture: [
      {
        title: "Operational frontend",
        text: "React, TypeScript, Vite, Tailwind, shadcn/ui, and Recharts. My contribution centres on the interfaces and frontend data contracts.",
      },
      {
        title: "Team service architecture",
        text: "Java / Spring Boot REST APIs, Spring Security, PostgreSQL and TimescaleDB form the specified backend and data architecture.",
      },
      {
        title: "AI layer — developing",
        text: "Python, Pandas, NumPy, Scikit-learn, and FastAPI for anomaly detection, classification, risk scoring, and investigation.",
      },
      {
        title: "Team platform scope",
        text: "Containerised deployment, monitoring, messaging, identity, and CI/CD are part of the overall architecture. Integration maturity is not independently verified.",
      },
    ],
    contributions: [
      {
        title: "Frontend architecture & UX",
        text: "Designed and developed reusable interfaces for dashboards, incidents, infrastructure, alerts, AI analysis, analytics, knowledge base, and audit logs.",
      },
      {
        title: "TypeScript contracts & mock services",
        text: "Created models for incidents, alerts, resources, services, metrics, AI analyses, recommendations, knowledge articles, and audit events, with realistic mock API workflows.",
      },
      {
        title: "AI incident analysis UX",
        text: "Worked on interfaces for anomaly indicators, probable causes, confidence scores, supporting evidence, related incidents, and remediation recommendations.",
      },
      {
        title: "Data science & integration",
        text: "Developing anomaly detection, incident classification, and risk scoring. Contributing to integration, testing, deployment, and documentation.",
      },
    ],
    functionality: [
      "Infrastructure and service monitoring across servers, VMs, databases, applications, and networks",
      "ITIL-aligned incident workflows, severity, priority, and escalation rules",
      "Alert detection and correlation, service health, and operational analytics",
      "Historical incident and knowledge-base analysis, audit logging, and REST integration",
    ],
    current:
      "Collaborative project — in development. Frontend and mock API contributions are described from supplied project information. Team architecture is presented as project scope, not as individually delivered or production-verified functionality.",
    planned: [
      "Continue the data science / AI layer and REST API integration",
      "Validate the integrated platform through testing and deployment work",
      "Explore knowledge-grounded analysis and a future AI Incident Copilot using vector search / RAG",
    ],
    stack: [
      {
        title: "My frontend work",
        items: [
          "React",
          "TypeScript",
          "Vite",
          "Tailwind CSS",
          "shadcn/ui",
          "Recharts",
        ],
      },
      {
        title: "AI development",
        items: ["Python", "Pandas", "NumPy", "Scikit-learn", "FastAPI"],
      },
      {
        title: "Team backend & data architecture",
        items: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "REST APIs",
          "PostgreSQL",
          "TimescaleDB",
        ],
      },
      {
        title: "Team infrastructure & platform scope",
        items: [
          "Docker",
          "VMware",
          "Linux",
          "Windows Server",
          "Prometheus",
          "Grafana",
          "Loki",
          "Kafka",
          "Keycloak",
          "GitHub Actions",
        ],
      },
    ],
  },
];
export const otherProjects: CatalogueEntry[] = [
  {
    id: "internal-management",
    presentationLevel: "selected",
    title: "Internal Management System",
    category: "Desktop application",
    summary:
      "A WPF application for projects, clients, invoices, messaging, and user profiles, with SQL-backed project scheduling.",
    tags: ["C#", "WPF", "SQL"],
    github: "https://github.com/Shenugayana/InternalManagementSystem",
  },
  {
    id: "ecommerce",
    presentationLevel: "selected",
    title: "E-commerce Web Application",
    category: "Web application · HCLTech",
    summary:
      "An ASP.NET Core MVC application with product and category management, carts, orders, and user administration.",
    tags: [".NET Core", "Entity Framework", "SQL Server"],
    github: "https://github.com/Shenugayana/ECommerceWebApp",
  },
  {
    id: "institute-management",
    presentationLevel: "selected",
    title: "Institute Management App",
    category: "Android · Akkenum Interactive",
    summary:
      "An institute app for student and teacher management, attendance, fee records, and role-based access.",
    tags: ["Java", "Android", "Firebase"],
  },
  {
    id: "cab-booking",
    presentationLevel: "selected",
    title: "Cab Booking Application",
    category: "Web application · HCLTech",
    summary:
      "Admin and customer portals with REST APIs for users, cabs, and destinations, and relational data handling.",
    tags: [".NET Core Web API", "Entity Framework"],
  },
  {
    id: "rmi-chat",
    presentationLevel: "archive",
    title: "RMI Chat",
    category: "Client–server project",
    summary:
      "A Java chat application using Remote Method Invocation, with user lists, messages, and join/leave events held by the server.",
    tags: ["Java", "RMI", "Swing"],
    github: "https://github.com/Shenugayana/RMI-Chat",
    secondRepo: "https://github.com/Shenugayana/RMI-Server",
  },
  {
    id: "streamlit-snowflake",
    presentationLevel: "archive",
    title: "Streamlit & Snowflake",
    category: "Course exercise",
    summary:
      "A Snowflake DBAW course app exploring interactive data tables, fruit API data, and database reads and inserts.",
    tags: ["Python", "Pandas", "Streamlit", "Snowflake"],
    github: "https://github.com/Shenugayana/first_streamlit_app",
  },
];

export const catalogueProjects: CatalogueEntry[] = [
  ...projects,
  ...otherProjects,
];
export const featuredProjects = projects.filter((project) => project.featured);
