import { useContext } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { ThemeProviderContext } from "./theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeProviderContext);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
      className="focus:outline-none"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
