import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Areas from './components/Areas';
import Team from './components/Team';
import Locations from './components/Locations';
import AiConsultant from './components/AiConsultant';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Areas />
        <Team />
        <Locations />
        <AiConsultant />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;