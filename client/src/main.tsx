import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Initialize theme from localStorage or set default
const initializeTheme = () => {
  const theme = localStorage.getItem('portfolio-theme');
  const root = document.documentElement;
  
  if (theme === 'light') {
    root.classList.remove('dark');
    root.classList.add('light');
  } else {
    // Default to dark theme
    root.classList.remove('light');
    root.classList.add('dark');
    localStorage.setItem('portfolio-theme', 'dark');
  }
};

// Apply theme immediately to prevent flash
initializeTheme();

createRoot(document.getElementById("root")!).render(
  <App />
);
