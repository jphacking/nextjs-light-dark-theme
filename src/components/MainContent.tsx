// src/app/components/MainContent.tsx
"use client"; // Uses props for dynamic rendering based on theme

import React from "react";
import Image from "next/image";

interface MainContentProps {
  isDarkMode: boolean;
}

const MainContent: React.FC<MainContentProps> = ({ isDarkMode }) => {
  // Use a suffix to choose the correct image file based on the theme.
  const themeSuffix = isDarkMode ? "dark" : "light";

  return (
    <main id="main-content" className="mt-24">
      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center"
      >
        <div className="title-group text-center">
          <h1 className="font-kaushan-script text-7xl mb-0">
            Light / Dark Theme Example
          </h1>
          <h2 className="text-2xl text-copy-secondary font-normal">
            Switch The Theme To What You Like
          </h2>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center items-center"
      >
        <h1 className="text-4xl mb-6">Undraw Illustrations</h1>
        <div className="about-container flex space-x-6">
          <div className="image-container border border-secondary rounded-lg p-4 bg-card shadow-lg">
            <h2 className="text-2xl mb-2">Web Innovation</h2>
            <Image
              src={`/images/undraw_proud_coder_${themeSuffix}.svg`}
              alt="Web Innovation"
              width={288}
              height={288}
              className="object-contain"
            />
          </div>
          <div className="image-container border border-secondary rounded-lg p-4 bg-card shadow-lg">
            <h2 className="text-2xl mb-2">Problem Solving</h2>
            <Image
              src={`/images/undraw_feeling_proud_${themeSuffix}.svg`}
              alt="Problem Solving"
              width={288}
              height={288}
              className="object-contain"
            />
          </div>
          <div className="image-container border border-secondary rounded-lg p-4 bg-card shadow-lg">
            <h2 className="text-2xl mb-2">High Concept</h2>
            <Image
              src={`/images/undraw_conceptual_idea_${themeSuffix}.svg`}
              alt="High Concept"
              width={288}
              height={288}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex flex-col justify-center items-center"
      >
        <h1 className="text-4xl mb-6">Buttons</h1>
        <div className="buttons mb-12 flex space-x-4">
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-disabled" disabled>
            Disabled
          </button>
          <button className="btn btn-outline-primary">Outline-Primary</button>
          <button className="btn btn-alt-outline">Alt-Outline</button>
          <button className="btn btn-outline-disabled" disabled>
            Outline-Disabled
          </button>
        </div>
        <div
          id="text-box"
          className="text-box w-2/5 text-justify bg-black/50 text-cta-text rounded-lg p-8"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            repudiandae corporis tempore reiciendis voluptatum magnam deserunt,
            sed ratione porro id, iure laudantium repellendus ea temporibus
            explicabo odit vel laboriosam ipsam.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center"
      >
        <div className="social-icons flex space-x-12">
          <i className="fab fa-github text-7xl text-cta hover:text-copy-primary"></i>
          <i className="fab fa-codepen text-7xl text-cta hover:text-copy-primary"></i>
          <i className="fab fa-linkedin-in text-7xl text-cta hover:text-copy-primary"></i>
          <i className="fab fa-medium text-7xl text-cta hover:text-copy-primary"></i>
          <i className="fab fa-instagram text-7xl text-cta hover:text-copy-primary"></i>
          <i className="fab fa-youtube text-7xl text-cta hover:text-copy-primary"></i>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
