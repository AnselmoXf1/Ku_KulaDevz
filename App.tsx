import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Team from './components/Team';
import Partners from './components/Partners';
import Sponsors from './components/Sponsors';
import Events from './components/Events';
import Contact from './components/Contact';
import { translations, teamMembers, projects, partners } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('pt');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-green selection:text-white">
      <Navbar lang={lang} setLang={setLang} t={t.nav} />
      
      <main>
        <Hero t={t.hero} />
        <About t={t.about} stats={t.stats} />
        <Projects t={t.projects} projects={projects} />
        <Team t={t.team} members={teamMembers} />
        <Partners t={t.partners} partners={partners} />
        <Sponsors t={t.sponsors} sponsors={partners} />
        <Events t={t.events} />
        <Contact t={t.contact} />
      </main>
    </div>
  );
};

export default App;
