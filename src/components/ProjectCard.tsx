import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";
import { Tags, ExternalLink } from "./Layout";
import { ProjectVisual } from "./ProjectVisual";
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <a
        href={"/projects/" + project.id + "/"}
        className="visual-link"
        aria-label={"View project: " + project.shortTitle}
      >
        <ProjectVisual id={project.id} />
      </a>
      <div className="project-card-body">
        <div className="card-meta">
          <span>
            {project.number} / {project.team}
          </span>
          <span className="status">{project.status}</span>
        </div>
        <p className="project-category">{project.category}</p>
        <h3>
          <a href={"/projects/" + project.id + "/"}>
            {project.shortTitle}
            {project.id === "intelliops" && (
              <span className="project-subtitle">
                AI-Powered IT Operations &<br />
                Incident Intelligence Platform
              </span>
            )}
          </a>
        </h3>
        <p className="project-summary">{project.summary}</p>
        <Tags items={project.tags} />
        <div className="card-availability">
          {project.github && (
            <ExternalLink href={project.github}>GitHub</ExternalLink>
          )}
          <span>Demo not yet public</span>
        </div>
        <div className="card-end">
          <a className="text-link" href={"/projects/" + project.id + "/"}>
            View Project <ArrowUpRight size={18} />
          </a>
          <span>Case study {project.number}</span>
        </div>
      </div>
    </article>
  );
}
