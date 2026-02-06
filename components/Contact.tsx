import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { Reveal } from './Reveal';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
       <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              I'm currently open to new opportunities as a Full-Stack Developer or Freelance Copywriter.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Reveal delay={100}>
            <div className="space-y-8">
               <div className="bg-slate-800/30 border border-slate-700/50 p-8 rounded-2xl hover:border-gold-500/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-900 rounded-lg text-gold-400">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                      <p className="text-slate-400">Addis Ababa, Ethiopia</p>
                      <p className="text-slate-500 text-sm mt-1">Open to remote work globally</p>
                    </div>
                  </div>
               </div>

               <div className="bg-slate-800/30 border border-slate-700/50 p-8 rounded-2xl hover:border-gold-500/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-900 rounded-lg text-gold-400">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                      <p className="text-slate-400">
                         <a href="mailto:Abenezermengistu60@gmail.com" className="hover:text-gold-400 transition-colors">
                           abenezer.mengistu@example.com
                         </a>
                      </p>
                      <p className="text-slate-500 text-sm mt-1">Response time: Within 24 hours</p>
                    </div>
                  </div>
               </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <form onSubmit={handleSubmit} className="bg-slate-800/30 border border-slate-700/50 p-8 rounded-2xl space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                  placeholder="How can I help you?"
                />
              </div>
              
              <button
                type="submit"
                disabled={status !== 'idle'}
                className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-medium text-charcoal transition-all duration-300 ${
                  status === 'success' ? 'bg-green-500 hover:bg-green-600' : 'bg-gold-400 hover:bg-gold-500'
                }`}
              >
                {status === 'idle' && <>Send Message <Send size={18} className="ml-2" /></>}
                {status === 'sending' && 'Sending...'}
                {status === 'success' && 'Message Sent!'}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};