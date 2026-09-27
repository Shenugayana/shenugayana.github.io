import { BrandIntro } from "./components/BrandIntro";
import { Header, Footer } from "./components/Layout";
import { Projects } from "./pages/Projects";
import { Home } from "./pages/Home";
import { ProjectDetail } from "./pages/ProjectDetail";
import { projects } from "./data/projects";
export function App({ path }: { path: string }) {
  const clean = path.replace(/\/index\.html$/, "/").replace(/\/$/, "");
  const project = projects.find((p) => clean === "/projects/" + p.id);
  return (
    <div id="top">
      <BrandIntro />
      <Header />
      {project ? (
        <ProjectDetail project={project} />
      ) : clean === "/projects" ? (
        <Projects />
      ) : clean === "" ? (
        <Home />
      ) : (
        <main id="main" className="container not-found">
          <p className="eyebrow">404 / PAGE NOT FOUND</p>
          <h1>This page isn’t here.</h1>
          <p>Explore the portfolio and its two featured case studies.</p>
          <a className="button" href="/">
            Back to portfolio
          </a>
        </main>
      )}
      <Footer />
    </div>
  );
}
