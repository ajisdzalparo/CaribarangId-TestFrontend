import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { GlobalProvider } from "./context";

createRoot(document.getElementById("root")).render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
);