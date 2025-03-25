// src/app/components/Header.tsx
"use client"; // This component uses event handlers and props

import React from "react";

// Define the expected props for Header
interface HeaderProps {
  onThemeToggle: (isDark: boolean) => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ onThemeToggle, isDarkMode }) => {
  return (
    <header className="relative">
      {/* Dark Mode Toggle */}
      <div className="theme-switch-wrapper fixed right-6 top-6 flex items-center z-50">
        <span id="toggle-icon" className="flex items-center mr-2">
          <span className="toggle-text">
            {isDarkMode ? "Dark Mode" : "Light Mode"}
          </span>
          <i
            className={`fas ${isDarkMode ? "fa-moon" : "fa-sun"} text-xl ml-1`}
          ></i>
        </span>
        {/* Accessible toggle switch */}
        <label className="theme-switch relative inline-block w-14 h-8">
          <input
            type="checkbox"
            aria-label="Toggle dark mode"
            checked={isDarkMode}
            onChange={(e) => onThemeToggle(e.target.checked)}
            className="opacity-0 w-0 h-0"
          />
          <span className="slider absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full transition-all duration-400">
            <span className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-400"></span>
          </span>
        </label>
      </div>

      {/* Navigation Bar */}
      <nav
        id="nav"
        className="fixed top-0 w-full z-40 text-center py-6 font-oswald text-lg tracking-widest bg-background/50"
      >
        <a
          href="#home"
          className="mr-6 font-bold text-cta hover:text-copy-primary hover:border-b-2"
        >
          HOME
        </a>
        <a
          href="#about"
          className="mr-6 font-bold text-cta hover:text-copy-primary hover:border-b-2"
        >
          ABOUT
        </a>
        <a
          href="#projects"
          className="mr-6 font-bold text-cta hover:text-copy-primary hover:border-b-2"
        >
          PROJECTS
        </a>
        <a
          href="#contact"
          className="font-bold text-cta hover:text-copy-primary hover:border-b-2"
        >
          CONTACT
        </a>
      </nav>
    </header>
  );
};

export default Header;
