import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // On mount, detect current theme
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newIsDark = !isDark;
    
    // Toggle class
    if (newIsDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
    
    setIsDark(newIsDark);
    console.log("Theme toggled to:", newIsDark ? "dark" : "light");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="focus:outline-none"
    >
      <Sun className={`h-5 w-5 transition-all ${isDark ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} />
      <Moon className={`absolute h-5 w-5 transition-all ${!isDark ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
