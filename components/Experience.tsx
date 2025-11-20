import React from 'react';
import { Briefcase, GraduationCap, Calendar, Award } from 'lucide-react';
import { EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../constants';
import { Reveal } from './Reveal';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Experience */}
        <div className="mb-24">
          <Reveal>
            <h2 className="text-3xl font-display font-bold text-white mb-12 flex items-center gap-3">
              <Briefcase className="text-gold-400" /> Professional Experience
            </h2>
          </Reveal>
          
          <div className="border-l-2 border-slate-800 ml-3 space-y-12">
            {EXPERIENCE.map((job, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="relative pl-8 md:pl-12">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-charcoal border-2 border-gold-400"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{job.role}</h3>
                    <span className="text-sm font-mono text-gold-400 flex items-center gap-2 mt-1 sm:mt-0">
                      <Calendar size={14} /> {job.period}
                    </span>
                  </div>
                  
                  <h4 className="text-lg text-slate-400 mb-4 font-medium">{job.company}</h4>
                  
                  <ul className="space-y-2 mb-6">
                    {job.description.map((point, idx) => (
                      <li key={idx} className="text-slate-400 text-sm md:text-base leading-relaxed flex items-start gap-2">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-600 flex-shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  {job.techStack && (
                    <div className="flex flex-wrap gap-2">
                      {job.techStack.map(tech => (
                        <span key={tech} className="text-xs font-mono px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education */}
          <div>
            <Reveal>
              <h2 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
                <GraduationCap className="text-gold-400" /> Education
              </h2>
            </Reveal>
            
            <Reveal delay={100}>
              <div className="bg-slate-800/30 border border-slate-700/50 p-6 rounded-xl">
                 <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white">{EDUCATION.institution}</h3>
                    <span className="text-xs bg-gold-500/10 text-gold-400 px-2 py-1 rounded border border-gold-500/20 whitespace-nowrap ml-2">
                      {EDUCATION.period}
                    </span>
                 </div>
                 <p className="text-slate-300 mb-4 font-medium">{EDUCATION.degree}</p>
                 <div>
                   <p className="text-sm text-slate-500 mb-2 font-semibold">Key Coursework:</p>
                   <div className="flex flex-wrap gap-2">
                      {EDUCATION.courses.map(course => (
                        <span key={course} className="text-xs text-slate-400 bg-slate-900/50 px-2 py-1 rounded border border-slate-800">
                          {course}
                        </span>
                      ))}
                   </div>
                 </div>
              </div>
            </Reveal>
          </div>

          {/* Certifications */}
          <div>
            <Reveal>
              <h2 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
                <Award className="text-gold-400" /> Certifications
              </h2>
            </Reveal>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, index) => (
                <Reveal key={index} delay={index * 100}>
                  <div className="flex items-center gap-4 bg-slate-800/20 border border-slate-700/50 p-4 rounded-lg hover:bg-slate-800/40 transition-colors">
                     <div className="p-2 bg-slate-900 rounded-md text-gold-400">
                        <Award size={20} />
                     </div>
                     <div>
                       <h4 className="text-sm font-bold text-slate-200">{cert.title}</h4>
                       <p className="text-xs text-slate-500">{cert.issuer}</p>
                     </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};