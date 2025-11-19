import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary/30 overflow-x-hidden">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay"
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}>
      </div>
      
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