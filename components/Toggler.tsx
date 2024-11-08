/* eslint-disable */
"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const Themetoggle = ({mobileshow}) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check the theme from localStorage only on the client side
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []); // Run only once on mount

  useEffect(() => {
    // Update the theme in local storage and document class based on darkMode
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      onClick={() => setDarkMode((prev) => !prev)}
      className={`${mobileshow ? "flex" : "hidden"} lg:flex bg-neutral-700 text-white  items-center justify-center p-3 rounded-full dark:bg-neutral-300 dark:text-black cursor-pointer`}
    >
      <button>{darkMode ? <Sun /> : <Moon />}</button>
    </div>
  );
};

export default Themetoggle;
