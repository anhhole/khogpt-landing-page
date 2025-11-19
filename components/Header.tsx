import React from 'react';
import { Mic, Menu } from 'lucide-react';
import { cn } from '../lib/utils';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
            <Mic className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">KhoGPT</span>
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
            className="bg-white text-zinc-950 px-4 py-2 rounded-md text-sm font-bold hover:bg-zinc-200 transition-colors"
          >
            Đăng ký sớm
          </a>
          <button className="md:hidden text-zinc-400">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};