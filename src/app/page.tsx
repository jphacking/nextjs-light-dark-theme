// src/app/page.tsx
"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

// HomePage: Main page component for your app.
// This component manages the light/dark theme state and renders the Header,
// MainContent, Footer, and BackToTop components.
export default function HomePage() {
  // Initialize theme state with a default value (false = light mode)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // On mount, safely retrieve the stored theme from localStorage
  // (localStorage is only available on the client)
  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem("theme");
      // If the stored theme is "dark", update the state accordingly
      if (storedTheme === "dark") {
        setIsDarkMode(true);
      }
    } catch (error) {
      console.error("Error retrieving theme from localStorage:", error);
    }
  }, []);

  // Whenever the theme state changes, update the HTML's data-theme attribute
  // and store the new theme in localStorage
  useEffect(() => {
    const mode = isDarkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", mode);
    try {
      localStorage.setItem("theme", mode);
    } catch (error) {
      console.error("Error saving theme:", error);
    }
  }, [isDarkMode]);

  // Handler function to toggle the theme state, passed down to the Header
  const handleThemeToggle = (isDark: boolean) => {
    setIsDarkMode(isDark);
  };

  return (
    <div className="App">
      {/* Header: Includes the theme toggle and navigation bar */}
      <Header onThemeToggle={handleThemeToggle} isDarkMode={isDarkMode} />

      {/* MainContent: Contains sections for Home, About, Projects, Contact, etc. */}
      <MainContent isDarkMode={isDarkMode} />

      {/* Footer: Displays copyright or other footer information */}
      <Footer />

      {/* BackToTop: Button that appears when scrolling to quickly return to the top */}
      <BackToTop />
    </div>
  );
}
