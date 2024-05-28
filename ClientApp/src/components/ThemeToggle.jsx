import React from "react";
import { Button } from "reactstrap";
import { useTheme } from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} color={theme === "light" ? "dark" : "light"}>
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </Button>
  );
};

export default ThemeToggle;
