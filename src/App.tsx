import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Disciplines } from './components/Disciplines';
import { Timeline } from './components/Timeline';
import { Showcase } from './components/Showcase';
import { SkillsMatrix } from './components/SkillsMatrix';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b0e14] text-[#f8fafc] font-sans selection:bg-amber-500/30 selection:text-amber-200">
      <Header />
      <main>
        <Hero />
        <Disciplines />
        <Timeline />
        <Showcase />
        <SkillsMatrix />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
