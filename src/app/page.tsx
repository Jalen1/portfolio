"use client";
import Skills from "./Components/skills";
import Title from "./Components/title";
import AboutMe from "./Components/aboutme";
import Experiences from "./Components/experiences";
import Projects from "./Components/projects";
import { useEffect } from "react";

/**
 * Top level component for the home page
 * @returns {JSX.Element} The home page
 */
export default function Home() {

  /** To return the user to the top of the page on refresh. */
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="flex min-h-screen flex-col justify-between p-20 overflow-y-scroll scroll-smooth space-y-32">
      <Title />
      <AboutMe />
      <Experiences />
      <Projects />
      <Skills />
    </div>
  );
}
