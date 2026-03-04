import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AgenticPatterns from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AgenticPatterns />
  </StrictMode>
);
