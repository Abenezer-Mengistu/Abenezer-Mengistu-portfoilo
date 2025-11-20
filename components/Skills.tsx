import React from 'react';
import { SKILLS } from '../constants';
import { Reveal } from './Reveal';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-slate-700 flex-1"></div>
            <h2 className="text-3xl font-display font-bold text-white">Technical Expertise</h2>
            <div className="h-px bg-slate-700 flex-1"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((category, index) => (
            <Reveal key={category.title} delay={index * 100}>
              <div className="h-full bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 p-6 rounded-xl hover:border-gold-500/30 transition-colors duration-300 group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-slate-900 rounded-lg text-gold-400 group-hover:text-gold-300 transition-colors">
                    <category.icon size={24} />
                  </div>
                  <h3 className="font-semibold text-slate-100">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="text-sm px-3 py-1 rounded-full bg-slate-900/50 text-slate-400 border border-slate-700 hover:border-slate-500 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};