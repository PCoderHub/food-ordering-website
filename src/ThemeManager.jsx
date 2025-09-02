import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function ThemeManager() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return null;
}

export default ThemeManager;
