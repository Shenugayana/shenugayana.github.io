import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { join } from "node:path";
const routes = [
  "index.html",
  "projects/index.html",
  "projects/password-auditor/index.html",
  "projects/intelliops/index.html",
  "404.html",
  "projects.html",
  "resume.html",
];
const htmlByPath = new Map(
  await Promise.all(
    routes.map(async (path) => [
      path,
      await readFile(join("dist", path), "utf8"),
    ]),
  ),
);
let checked = 0;
for (const [file, html] of htmlByPath) {
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, file + ": one h1");
  assert.match(html, /<main(?: id="main")?[ >]/, file + ": main landmark");
  assert(
    !html.includes('src="/src/'),
    file + ": production source entry removed",
  );
  for (const [, value] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|data:)/.test(value)) continue;
    const [pathname, fragment] = value.split("#");
    const target = pathname
      ? pathname.endsWith("/")
        ? pathname.slice(1) + "index.html"
        : pathname.slice(1)
      : file;
    await access(join("dist", target));
    if (fragment) {
      const targetHtml =
        htmlByPath.get(target) ||
        (await readFile(join("dist", target), "utf8"));
      assert(
        targetHtml.includes('id="' + fragment + '"'),
        file + ": missing anchor " + value,
      );
    }
    checked++;
  }
}
assert.equal(
  (htmlByPath.get("index.html").match(/class="project-card"/g) || []).length,
  2,
);
assert.match(
  htmlByPath.get("projects/password-auditor/index.html"),
  /In development/,
);
assert.match(
  htmlByPath.get("projects/intelliops/index.html"),
  /Team-level functionality/,
);
console.log(
  `PASS: ${routes.length} static pages; ${checked} local links, anchors and assets; exactly two featured cards.`,
);

const home = htmlByPath.get("index.html");
const catalogue = htmlByPath.get("projects/index.html");
assert.match(home, /DEVELOPER/);
assert(!home.includes('id="other-projects"'), "Homepage excludes the old archive");
for (const section of ["case-study", "selected", "archive"]) {
  assert(catalogue.includes(`id="${section}"`), `Catalogue includes ${section}`);
}
for (const [id, repository] of [["password-auditor", "securepass-password-auditor"], ["intelliops", "IntelliOps"]]) {
  const href = `href="https://github.com/Shenugayana/${repository}"`;
  for (const page of [home, catalogue, htmlByPath.get(`projects/${id}/index.html`)]) {
    assert(page.includes(href), `${repository} linked in home, catalogue, and case study`);
  }
}
console.log("PASS: catalogue hierarchy, homepage separation, and featured repository links.");
