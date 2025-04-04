
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Publications from "@/components/Publications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CompTiles from "@/components/CompTiles";

const Index = () => {
  return (
    <>
      <CompTiles />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Publications />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
