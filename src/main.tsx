import { StrictMode } from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import { App } from "./App";
import "./styles.css";
import "./identity.css";
import "./catalogue.css";
const element = (
  <StrictMode>
    <App path={window.location.pathname} />
  </StrictMode>
);
const root = document.getElementById("root")!;
if (root.hasChildNodes()) hydrateRoot(root, element);
else createRoot(root).render(element);
