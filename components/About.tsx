import React from 'react';
import { Reveal } from './Reveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold-500/20 to-blue-500/20 rounded-xl blur-xl"></div>
              <div className="relative bg-slate-800/50 border border-slate-700 p-8 rounded-xl">
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  About Me
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  My name is <strong className="text-white">Abenezer Mengistu</strong>. I am a Full-Stack Developer with a strong specialization in back-end development.
                </p>
                <p className="text-slate-300 leading-relaxed mb-6">
                  I design and build scalable, secure, and efficient web applications using Python, Django, JavaScript, and modern frameworks. I combine strong API design, database management, and full system architecture with clean, modern front-end implementations.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Passionate about continuous learning and working with fast-growing teams to build impactful software.
                </p>
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={200}>
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg text-center hover:-translate-y-1 transition-transform duration-300">
                    <div className="text-3xl font-bold text-gold-400 mb-2">3+</div>
                    <div className="text-sm text-slate-400 uppercase tracking-wider">Years Coding</div>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg text-center hover:-translate-y-1 transition-transform duration-300">
                    <div className="text-3xl font-bold text-gold-400 mb-2">10+</div>
                    <div className="text-sm text-slate-400 uppercase tracking-wider">Projects</div>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg text-center hover:-translate-y-1 transition-transform duration-300">
                    <div className="text-3xl font-bold text-gold-400 mb-2">5+</div>
                    <div className="text-sm text-slate-400 uppercase tracking-wider">Certificates</div>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg text-center hover:-translate-y-1 transition-transform duration-300">
                    <div className="text-3xl font-bold text-gold-400 mb-2">100%</div>
                    <div className="text-sm text-slate-400 uppercase tracking-wider">Commitment</div>
                </div>
             </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};