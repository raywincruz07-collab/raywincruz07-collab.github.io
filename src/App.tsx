import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { WorkFocus } from "./components/WorkFocus";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { MoreProjects } from "./components/MoreProjects";
import { Journey } from "./components/Journey";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { VerticalNav } from "./components/VerticalNav";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-violet-500/30 selection:text-violet-200 overflow-x-hidden">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Desktop vertical scroll progress navigator */}
      <VerticalNav />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* 01 / Command Center */}
        <Hero />

        {/* 02 / Profile */}
        <About />

        {/* 03 / Product Operating System */}
        <WorkFocus />

        {/* 04 / Capability Stack */}
        <Skills />

        {/* 05 / Evidence Board */}
        <Projects />

        {/* 05b / Project Archive */}
        <MoreProjects />

        {/* 06 / Signal Trail */}
        <Journey />

        {/* 07 / Collaboration Console */}
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
}

export default App;

