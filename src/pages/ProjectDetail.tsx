import {
  ArrowLeft,
  ArrowUpRight,
  GitBranch as Github,
  ExternalLink as ExternalIcon,
} from "lucide-react";
import { projects, type Project } from "../data/projects";
import { ExternalLink, Tags } from "../components/Layout";
import { ProjectVisual } from "../components/ProjectVisual";
export function ProjectDetail({ project: p }: { project: Project }) {
  const other = projects.find((x) => x.id !== p.id)!;
  return (
    <main id="main">
      <div className="container">
        <a className="back-link" href="/#projects">
          <ArrowLeft size={16} /> Back to portfolio
        </a>
        <section className="detail-hero">
          <div className="detail-labels">
            <p className="eyebrow">CASE STUDY / {p.number}</p>
            <span className="status">{p.status}</span>
          </div>
          <p className="project-category">{p.category}</p>
          <h1>{p.title}</h1>
          <p className="detail-summary">{p.summary}</p>
          <div className="detail-facts">
            <div>
              <span>ROLE</span>
              <p>{p.role}</p>
            </div>
            <div>
              <span>PROJECT</span>
              <p>{p.team}</p>
            </div>
            <div>
              <span>FOCUS</span>
              <p>
                {p.id === "intelliops"
                  ? "Engineering · UX · AI"
                  : "Security · Privacy · Analysis"}
              </p>
            </div>
          </div>
        </section>
        <ProjectVisual id={p.id} />
        <div className="detail-layout">
          <aside>
            <nav aria-label="Case study sections">
              <a href="#overview">01 Overview</a>
              <a href="#approach">02 Approach</a>
              <a href="#architecture">03 Architecture</a>
              <a href="#contribution">04 My contribution</a>
              <a href="#status">05 Development status</a>
              <a href="#links">06 Project links</a>
            </nav>
          </aside>
          <div className="detail-content">
            <section id="overview">
              <p className="eyebrow">01 / CONTEXT</p>
              <h2>Overview</h2>
              <p>{p.overview}</p>
              <h3>The problem</h3>
              <p>{p.problem}</p>
            </section>
            <section id="approach">
              <p className="eyebrow">02 / DESIGN & DEVELOPMENT</p>
              <h2>The approach</h2>
              <p>{p.approach}</p>
              {p.research && (
                <div className="research-grid">
                  {p.research.map((item) => (
                    <article key={item.title}>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </article>
                  ))}
                </div>
              )}
            </section>
            <section id="architecture">
              <p className="eyebrow">03 / TECHNICAL OVERVIEW</p>
              <h2>
                {p.id === "intelliops"
                  ? "Team platform architecture"
                  : "From input to feedback"}
              </h2>
              <div className="architecture-list">
                {p.architecture.map((item, i) => (
                  <article key={item.title}>
                    <span>0{i + 1}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
              <h3>Technologies</h3>
              <div className="stack-list">
                {p.stack.map((group) => (
                  <div key={group.title}>
                    <p>{group.title}</p>
                    <Tags items={group.items} />
                  </div>
                ))}
              </div>
            </section>
            <section id="contribution">
              <p className="eyebrow">04 / OWNERSHIP</p>
              <h2>My contribution</h2>
              <div className="contribution-list">
                {p.contributions.map((item) => (
                  <article key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
              <div className="functionality">
                <h3>
                  {p.id === "intelliops"
                    ? "Team-level functionality & scope"
                    : "Current prototype functionality"}
                </h3>
                {p.id === "intelliops" && (
                  <p>
                    The following describes the shared platform scope; it is not
                    a list of components individually implemented by me.
                  </p>
                )}
                <ul>
                  {p.functionality.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>
            <section id="status">
              <p className="eyebrow">05 / DEVELOPMENT STATUS</p>
              <h2>A work in progress</h2>
              <p>{p.current}</p>
              <h3>
                {p.id === "intelliops"
                  ? "Next development areas"
                  : "Planned evaluation & next steps"}
              </h3>
              <ul>
                {p.planned.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section id="links">
              <p className="eyebrow">06 / EXPLORE</p>
              <h2>Project links</h2>
              <div className="project-links">
                {p.github ? (
                  <ExternalLink className="button" href={p.github}>
                    GitHub
                  </ExternalLink>
                ) : (
                  <div>
                    <Github size={19} />
                    <span>
                      GitHub repository<small>Link to be added</small>
                    </span>
                  </div>
                )}
                {p.demo ? (
                  <ExternalLink className="button" href={p.demo}>
                    Live demo
                  </ExternalLink>
                ) : (
                  <div>
                    <ExternalIcon size={19} />
                    <span>
                      Live demo<small>Not publicly available yet</small>
                    </span>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
        <section className="related-project">
          <div>
            <p className="eyebrow">CONTINUE EXPLORING / RELATED PROJECT</p>
            <h2>{other.shortTitle}</h2>
          </div>
          <a
            className="button button-outline"
            href={"/projects/" + other.id + "/"}
          >
            View Project <ArrowUpRight size={17} />
          </a>
        </section>
      </div>
    </main>
  );
}
