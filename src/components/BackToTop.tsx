// src/app/components/BackToTop.tsx
"use client"; // This component uses state and effects

import React, { useEffect, useState } from "react";

// BackToTop component that scrolls smoothly to the top when clicked
const BackToTop: React.FC = () => {
  // Local state to manage button visibility based on scroll position
  const [isVisible, setIsVisible] = useState(false);

  // Add scroll event listener when component mounts
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smoothly scroll the window back to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      id="back-to-top"
      aria-label="Back to Top"
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 bg-cta text-cta-text rounded-full w-12 h-12 text-2xl transition-all duration-300 z-50 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      ↑
    </button>
  );
};

export default BackToTop;
