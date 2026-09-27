import { createServer } from "vite";
import { renderToString } from "react-dom/server";
import { createElement } from "react";
import { readFile, writeFile, mkdir } from "node:fs/promises";
const server = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});
try {
  const { App } = await server.ssrLoadModule("/src/App.tsx");
  const { projects } = await server.ssrLoadModule("/src/data/projects.ts");
  const template = await readFile("dist/index.html", "utf8");
  const pages = [
    {
      path: "/",
      file: "index.html",
      title: "Shenugayana — Software Engineer",
      description:
        "Software engineering, systems, cybersecurity, and data science. Explore the work of Shenugayana.",
    },
    {
      path: "/projects/",
      file: "projects/index.html",
      title: "Projects — Shenugayana",
      description:
        "A curated catalogue of software engineering, cybersecurity, and data projects by Shenugayana.",
    },
    ...projects.map((p) => ({
      path: "/projects/" + p.id + "/",
      file: "projects/" + p.id + "/index.html",
      title: p.shortTitle + " — Shenugayana",
      description: p.summary,
    })),
    {
      path: "/404",
      file: "404.html",
      title: "Page not found — Shenugayana",
      description: "Return to the portfolio.",
    },
  ];
  const escape = (value) =>
    value
      .replaceAll("&", "&amp;")
      .replaceAll('"', "&quot;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  for (const page of pages) {
    const html = template
      .replace(
        '<div id="root"></div>',
        '<div id="root">' +
          renderToString(createElement(App, { path: page.path })) +
          "</div>",
      )
      .replace(
        /<title>.*?<\/title>/,
        "<title>" + escape(page.title) + "</title>",
      )
      .replace(
        /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
        '<meta name="description" content="' + escape(page.description) + '"/>',
      )
      .replace(
        "</head>",
        '<link rel="canonical" href="https://shenugayana.github.io' +
          page.path +
          '"/></head>',
      );
    await mkdir(
      "dist/" + page.file.substring(0, page.file.lastIndexOf("/") + 1),
      { recursive: true },
    );
    await writeFile("dist/" + page.file, html);
    console.log("Prerendered " + page.path);
  }
} finally {
  await server.close();
}
