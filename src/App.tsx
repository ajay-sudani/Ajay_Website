import { Hero } from "./sections/Hero";
import { AboutMe } from "./sections/AboutMe";
import { Experiences } from "./sections/Experiences";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Recommendations } from "./sections/Recommendations";
import { Contact } from "./sections/Contact";
import { SecondaryCursor } from "./utils/SecondaryCursor";
import { getGrainsSvg } from "./utils/getGrainsSvg";

function CreatorBanner() {
  return (
    <p className="from-[#911c] to-[#114a] bg-gradient-to-b text-white shadow-2xl text-center py-4 font-extralight italic text-opacity-60 hover:text-opacity-100 transition-colors cursor-default">
      Designed and developed by <strong>Ajay Sudani</strong>.{" "}
      <span className="animate-ping inline-block not-italic">💓</span>
    </p>
  );
}

export function App() {
  return (
    <div className="group" style={{ backgroundImage: getGrainsSvg() }}>
      <SecondaryCursor />
      <div
        className="relative z-20"
        style={{ backgroundImage: getGrainsSvg(1) }}
      >
        <Hero />
        <AboutMe />
        <Experiences />
        <Skills />
        <Projects />
        <Recommendations />
        <Contact />
        <CreatorBanner />
      </div>
    </div>
  );
}
