import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  //   return (
  //     <label
  //       className={`container ${isDark ? "IsDark" : "IsLight"}`}
  //       title={isDark ? "Activate light mode" : "Activate dark mode"}
  //       aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
  //     >
  //       <input type="checkbox" checked={isDark} onChange={toggleTheme} />
  //       <div />
  //     </label>
  //   );
};

export default ThemeToggle;
