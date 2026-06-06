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

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-violet-500/30 selection:text-violet-200 overflow-x-hidden">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Intro Hero banner */}
        <Hero />

        {/* Biography Context */}
        <About />

        {/* Current Work Focus */}
        <WorkFocus />

        {/* Skill Category Badges */}
        <Skills />

        {/* Engineering Projects Grid */}
        <Projects />

        {/* Secondary Project Archive */}
        <MoreProjects />

        {/* Education & Experience Timeline */}
        <Journey />

        {/* Working-Student Availability / Message form */}
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
}

export default App;
