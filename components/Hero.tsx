import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Reveal } from './Reveal';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
         <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-900/20 rounded-full blur-3xl"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-gold-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-start justify-center">
          <Reveal>
             <span className="text-gold-400 font-medium tracking-wide uppercase text-sm mb-4 block">
               Hello, my name is
             </span>
          </Reveal>
          
          <Reveal delay={100}>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4 tracking-tight">
              Abenezer Mengistu.
            </h1>
          </Reveal>
          
          <Reveal delay={200}>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-400 mb-8 tracking-tight">
              I build scalable back-end systems.
            </h2>
          </Reveal>

          <Reveal delay={300}>
            <p className="max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed mb-10">
              A Full-Stack Developer specializing in high-performance back-end architectures. 
              I design secure, efficient web applications using Python, Django, and modern JavaScript frameworks.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-charcoal bg-gold-400 hover:bg-gold-500 transition-all duration-300 shadow-lg shadow-gold-500/20"
              >
                View My Work
                <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-gold-400 border border-gold-400/30 hover:bg-gold-400/10 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};