import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Site } from "./Site";
import "./styles.css";

document.documentElement.classList.add("js");
document.documentElement.dataset.page = window.location.pathname.replace(/\/+$/, "").endsWith("/passion")
  ? "passion"
  : "analyst";

const root = document.getElementById("root");
if (!root) {
  throw new Error("Root element #root was not found.");
}

createRoot(root).render(
  <StrictMode>
    <Site />
  </StrictMode>,
);
