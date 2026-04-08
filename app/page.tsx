import Hero from "./sections/Hero";
import About from "./sections/About";
import Achievements from "./sections/Achievements";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Research from "./sections/Research";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Achievements />
      <Projects />
      <Experience />
      <Research />
      <Contact />
    </>
  );
}
