import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-primary/30">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;