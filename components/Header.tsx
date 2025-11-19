import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { cn } from '../lib/utils';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 transition-all duration-500 w-full flex justify-center pointer-events-none",
        scrolled ? "pt-4" : "pt-0"
      )}
    >
      <div className={cn(
        "flex items-center justify-between transition-all duration-500 pointer-events-auto",
        scrolled 
          ? "w-[90%] max-w-5xl bg-zinc-900/80 backdrop-blur-xl border border-zinc-800/50 rounded-full px-6 py-3 shadow-2xl shadow-black/50" 
          : "w-full container mx-auto px-6 py-6 bg-transparent border-transparent"
      )}>
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-10 h-10 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl flex items-center justify-center shadow-inner border border-zinc-700/50 group-hover:border-primary/50 transition-colors duration-300">
             <Logo className="w-6 h-6 text-white group-hover:text-primary transition-colors duration-300" monochrome={false} />
          </div>
          <span className="text-xl font-heading font-bold tracking-tight text-white">KhoGPT</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#features" className="hover:text-white transition-colors">Tính năng</a>
          <a href="#problem" className="hover:text-white transition-colors">Giải pháp</a>
          <a href="#pricing" className="hover:text-white transition-colors">Bảng giá</a>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a 
            href="#waitlist" 
            className={cn(
              "hidden md:block bg-white text-zinc-950 px-5 rounded-full text-sm font-bold hover:bg-zinc-200 transition-all hover:scale-105",
              scrolled ? "py-2" : "py-2.5"
            )}
          >
            Đăng ký sớm
          </a>
          <button className="md:hidden p-2 text-zinc-400 hover:text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};