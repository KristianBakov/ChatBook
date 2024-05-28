import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <label className="toggle">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <span className="slider">
        <span className="icon sun">🔆</span>
        <span className="icon moon">🌙</span>
        <span className="slider-thumb"></span>
      </span>
    </label>
  );
};

export default ThemeToggle;
