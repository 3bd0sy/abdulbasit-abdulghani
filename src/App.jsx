import Header from "./Components/Header";
import Hero from "./Components/Hero";
import SvgSpritesIcons from "./assets/SvgSpritesIcons";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Certification from "./Components/Certification";
import CallUs from "./Components/CallUs";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <SvgSpritesIcons />
      <Header />
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Certification />
      <CallUs />
      <Footer />
    </>
  );
}

export default App;
