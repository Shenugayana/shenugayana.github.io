import {
  ArrowDown,
  ArrowUpRight,
  GitBranch as Github,
  Code2,
  Database,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";
import { profile } from "../data/profile";
import { featuredProjects } from "../data/projects";
import { experience } from "../data/experience";
import { education } from "../data/education";
import { skills } from "../data/skills";
import {
  Contact,
  ExternalLink,
  SectionHeading,
  Tags,
} from "../components/Layout";
import { ProjectCard } from "../components/ProjectCard";
export function Home() {
  return (
    <main id="main">
      <section id="home" className="hero container">
        <div className="hero-intro">
          <p className="eyebrow">SOFTWARE ENGINEER / MSc DATA SCIENCE & AI</p>
          <span className="hero-index">PORTFOLIO — 2026</span>
        </div>
        <div className="hero-display">
          <h1>
            Shenugayana<span className="hero-period">.</span>
          </h1>
          <p className="hero-outline" aria-hidden="true">
            DEVELOPER<span className="outline-slash">/</span>
          </p>
          <span className="hero-coordinate" aria-hidden="true">
            SOFTWARE → SYSTEMS → INTELLIGENCE
          </span>
        </div>
        <div className="hero-bottom">
          <p>
            Engineering reliable software.
            <br />
            <span>Exploring data, AI & cybersecurity.</span>
          </p>
          <div className="hero-actions">
            <a className="button" href="#projects">
              View projects <ArrowDown size={17} />
            </a>
            <ExternalLink
              className="button button-outline"
              href={profile.github}
            >
              <Github size={17} />
              GitHub
            </ExternalLink>
          </div>
        </div>
        <div className="progression">
          {[
            { icon: Code2, label: "Software engineering" },
            { icon: Database, label: "Systems & databases" },
            { icon: ShieldCheck, label: "Cybersecurity" },
            { icon: BrainCircuit, label: "Data science & AI" },
          ].map(({ icon: Icon, label }, i) => (
            <div key={label}>
              <span className="progression-number">0{i + 1}</span>
              <Icon size={19} strokeWidth={1.4} />
              <span>{label}</span>
              {i < 3 && (
                <ArrowUpRight className="progression-arrow" size={15} />
              )}
            </div>
          ))}
        </div>
      </section>
      <section id="projects" className="section container">
        <SectionHeading
          number="01 / SELECTED WORK"
          title="Featured projects"
          note="Two perspectives on better systems. Individual research and collaborative engineering."
        />
        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <section id="about" className="about-section">
        <div className="container about-grid">
          <div>
            <p className="eyebrow">02 / ABOUT</p>
            <h2>
              An engineering foundation.
              <br />
              <span>An intelligent systems focus.</span>
            </h2>
          </div>
          <div>
            <p className="about-copy">{profile.about}</p>
            <p className="about-secondary">
              My current work connects these interests through a
              password-security dissertation and IntelliOps, a collaborative IT
              operations and incident intelligence platform.
            </p>
            <a className="text-link" href="#experience">
              Explore my experience <ArrowDown size={17} />
            </a>
          </div>
        </div>
      </section>
      <section id="experience" className="section container">
        <SectionHeading
          number="03 / EXPERIENCE"
          title="Built on real-world work"
          note="From application development to the systems that keep it running."
        />
        <div className="experience-list">
          {experience.map((job, i) => (
            <article className="experience-row" key={job.role}>
              <div className="job-meta">
                <span className="eyebrow">{job.dates}</span>
                <h3>{job.company}</h3>
                <span className="job-number">0{experience.length - i}</span>
              </div>
              <div>
                <h4>{job.role}</h4>
                <p>{job.description}</p>
                <ul>
                  {job.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <Tags items={job.technologies} />
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="education" className="section education-section container">
        <SectionHeading
          number="04 / EDUCATION"
          title="Continuing the learning"
        />
        <div className="education-grid">
          {education.map((item) => (
            <article key={item.degree}>
              <p className="eyebrow">{item.dates}</p>
              <h3>{item.degree}</h3>
              <p>{item.institution}</p>
              <span className="education-note">{item.note}</span>
            </article>
          ))}
        </div>
      </section>
      <section id="skills" className="skills-section">
        <div className="section container">
          <SectionHeading
            number="05 / TOOLKIT"
            title="Skills, with context"
            note="A foundation in software and databases, expanding through current research and project work."
          />
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <article key={skill.title}>
                <span className="skill-number">0{i + 1}</span>
                <h3>{skill.title}</h3>
                <p>{skill.note}</p>
                <Tags items={skill.items} />
              </article>
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
}
