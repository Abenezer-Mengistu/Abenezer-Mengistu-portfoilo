import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Reveal } from './Reveal';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A selection of projects demonstrating secure backend architectures, full-stack integration, and clean user interfaces.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="group relative bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-gold-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50">
                {/* Image Overlay & Actions */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                    <a 
                      href={project.githubUrl} 
                      className="p-3 bg-white rounded-full text-charcoal hover:bg-gold-400 transition-colors shadow-lg"
                      title="View Code"
                    >
                      <Github size={22} />
                    </a>
                    <a 
                      href={project.liveUrl || '#'} 
                      className="p-3 bg-white rounded-full text-charcoal hover:bg-gold-400 transition-colors shadow-lg"
                      title="Live Demo"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};