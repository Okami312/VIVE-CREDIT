import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border border-slate-300 dark:border-slate-600
                 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300
                 hover:bg-slate-50 dark:hover:bg-slate-700 transition"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
