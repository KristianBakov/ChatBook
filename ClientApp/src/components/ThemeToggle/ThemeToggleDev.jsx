import React from "react";
import { Button } from "reactstrap";
import { useTheme } from "../../contexts/ThemeContext";

const ThemeToggleDev = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} color={theme === "light" ? "light" : "dark"}>
      {theme === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
};

export default ThemeToggleDev;
