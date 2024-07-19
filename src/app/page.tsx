"use client";
import Skills from "./Components/skills";
import Title from "./Components/title";
import AboutMe from "./Components/aboutme";
import Experiences from "./Components/experiences";
import Projects from "./Components/projects";

/**
 * Top level component for the home page
 * @returns {JSX.Element} The home page
 */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-20 overflow-y-scroll">
      <Title />
      <AboutMe/>
      <Experiences/>
      <Projects/>
      <Skills />
    </main>
  );
}
