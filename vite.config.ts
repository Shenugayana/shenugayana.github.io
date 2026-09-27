import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "preview-static-directory-redirects",
      configurePreviewServer(server) {
        // Match GitHub Pages' directory redirects instead of Vite's SPA fallback.
        server.middlewares.use((request, response, next) => {
          const url = new URL(request.url || "/", "http://localhost");
          if (
            /^\/projects(?:\/[a-z0-9-]+)?$/.test(url.pathname) &&
            existsSync(resolve("dist", "." + url.pathname, "index.html"))
          ) {
            response.writeHead(302, {
              Location: url.pathname + "/" + url.search,
            });
            response.end();
            return;
          }
          next();
        });
      },
    },
  ],
  base: "/",
});
