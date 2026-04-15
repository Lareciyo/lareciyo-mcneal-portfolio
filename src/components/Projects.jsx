import React from 'react';
/* Note the 'as' keyword below. This fixes the capital H issue permanently */
import { Github as GitHubIcon, ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "DevFlow Engine v5",
    desc: "A massive-scale collaborative code review platform built with Next.js and Prisma.",
    tech: ["Next.js", "TypeScript", "Prisma"],
    github: "#",
    live: "#"
  },
  {
    title: "NeuralScribe AI",
    desc: "Proprietary content generation suite leveraging OpenAI's latest models.",
    tech: ["React", "OpenAI", "Node.js"],
    github: "#",
    live: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 lg:px-8 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black mb-16 tracking-tighter uppercase text-blue-500">
          Selected Archives
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="p-10 rounded-[3rem] bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all">
              <div className="flex justify-between items-start mb-6">
                <Code2 className="h-10 w-10 text-blue-500" />
                <div className="flex gap-4">
                  <GitHubIcon className="h-6 w-6 text-slate-500 hover:text-white cursor-pointer" />
                  <ExternalLink className="h-6 w-6 text-slate-500 hover:text-white cursor-pointer" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
              <p className="text-slate-400 mb-8 leading-relaxed italic">"{project.desc}"</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-black uppercase tracking-widest bg-slate-950 px-3 py-1 rounded-lg border border-slate-800 text-slate-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;