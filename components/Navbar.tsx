import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-charcoal/90 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="font-display font-bold text-xl sm:text-2xl tracking-tighter text-slate-100 group">
              AM<span className="text-gold-400 group-hover:text-gold-500 transition-colors">.</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-300 hover:text-gold-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com/Abenezer-Mengistu/" className="text-slate-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/abenezer-mengistu-1a239526a/" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-charcoal border-b border-slate-800">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium"
            >
              {item.label}
            </a>
          ))}
          <div className="flex gap-4 px-3 py-2 mt-4 border-t border-slate-800 pt-4">
             <a href="https://github.com/Abenezer-Mengistu/" className="text-slate-400 hover:text-white"><Github size={20} /></a>
             <a href="https://www.linkedin.com/in/abenezer-mengistu-1a239526a/" className="text-slate-400 hover:text-white"><Linkedin size={20} /></a>
             <a href="mailto:abenezermengistu60@gmail.com" className="text-slate-400 hover:text-white"><Mail size={20} /></a>
          </div>
        </div>
      </div>
    </nav>
  );
};
