import { ArrowUpRight, ArrowDown } from "lucide-react";
import {
  catalogueProjects,
  type CatalogueEntry,
  type PresentationLevel,
} from "../data/projects";
import { ExternalLink, Tags } from "../components/Layout";

function ProjectLinks({ project }: { project: CatalogueEntry }) {
  return (
    <div className="catalogue-links">
      {project.detailPath && (
        <a className="text-link" href={project.detailPath}>
          View case study <ArrowUpRight size={17} />
        </a>
      )}
      {project.github && (
        <ExternalLink href={project.github}>GitHub</ExternalLink>
      )}
      {project.secondRepo && (
        <ExternalLink href={project.secondRepo}>Server source</ExternalLink>
      )}
      {!project.detailPath && !project.github && (
        <span>Source not publicly linked</span>
      )}
    </div>
  );
}
const sections: { level: PresentationLevel; title: string; note: string }[] = [
  {
    level: "case-study",
    title: "Featured case studies",
    note: "Individual research. Collaborative engineering.",
  },
  {
    level: "selected",
    title: "Selected work",
    note: "Applications across desktop, web, and mobile.",
  },
  {
    level: "archive",
    title: "Project archive",
    note: "Focused experiments and academic explorations.",
  },
];
export function Projects() {
  let number = 0;
  return (
    <main id="main" className="catalogue container">
      <header className="catalogue-hero">
        <div className="catalogue-kicker">
          <p className="eyebrow">PROJECTS / ENGINEERING & EXPLORATION</p>
          <span>
            {String(catalogueProjects.length).padStart(2, "0")} PROJECTS
          </span>
        </div>
        <h1>
          Things I’ve built,
          <br />
          <span>explored,</span> and engineered.
        </h1>
        <div className="catalogue-intro">
          <p>
            From software foundations to intelligent systems.
            <br />A collection of applications, research, and work in progress.
          </p>
          <a className="text-link" href="#case-study">
            Explore the collection <ArrowDown size={17} />
          </a>
        </div>
      </header>
      {sections.map(({ level, title, note }) => {
        const entries = catalogueProjects.filter(
          (project) => project.presentationLevel === level,
        );
        if (!entries.length) return null;
        return (
          <section
            id={level}
            key={level}
            className={`catalogue-section catalogue-${level}`}
            aria-labelledby={`${level}-title`}
          >
            <div className="catalogue-section-heading">
              <h2 id={`${level}-title`}>{title}</h2>
              <p>{note}</p>
            </div>
            <div className="catalogue-entries">
              {entries.map((project) => {
                const index = String(++number).padStart(2, "0");
                return (
                  <article key={project.id} className="catalogue-entry">
                    <span className="catalogue-number" aria-hidden="true">
                      {index}
                    </span>
                    <div className="catalogue-entry-content">
                      <div className="catalogue-meta">
                        <p className="eyebrow">{project.category}</p>
                        {project.status && (
                          <span className="status">{project.status}</span>
                        )}
                      </div>
                      <h3>
                        {project.detailPath ? (
                          <a href={project.detailPath}>{project.title}</a>
                        ) : (
                          project.title
                        )}
                      </h3>
                      <p className="catalogue-summary">{project.summary}</p>
                      <Tags items={project.tags} />
                      <ProjectLinks project={project} />
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}
      <div className="catalogue-end">
        <span className="eyebrow">SOFTWARE → SYSTEMS → INTELLIGENCE</span>
        <a className="text-link" href="/">
          Back to portfolio <ArrowUpRight size={17} />
        </a>
      </div>
    </main>
  );
}
