import React from 'react';
import { Code2, Palette, Server, Cloud } from "lucide-react";

const categories = [
  {
    title: "Engineering Fundamentals",
    icon: <Code2 className="h-7 w-7" />,
    skills: ["TypeScript", "JavaScript", "Python", "Go", "C++", "Rust", "HTML5/CSS3"],
    description: "Core programming paradigms and type-safe systems architecture.",
    accent: "text-blue-500"
  },
  {
    title: "Platform & Frontend",
    icon: <Palette className="h-7 w-7" />,
    skills: ["React 19", "Next.js 15", "Tailwind CSS", "Framer Motion", "Three.js", "Redux Toolkit"],
    description: "High-performance user interfaces and immersive digital experiences.",
    accent: "text-indigo-500"
  },
  {
    title: "Backend & Systems",
    icon: <Server className="h-7 w-7" />,
    skills: ["Node.js", "PostgreSQL", "Redis", "Prisma ORM", "GraphQL", "Socket.io", "Express"],
    description: "Scalable server-side logic and distributed database management.",
    accent: "text-cyan-500"
  },
  {
    title: "Infrastructure & DevOps",
    icon: <Cloud className="h-7 w-7" />,
    skills: ["AWS (EC2/S3/Lambda)", "Docker", "Kubernetes", "CI/CD Actions", "Vercel", "Terraform"],
    description: "Cloud-native deployment and automated pipeline orchestration.",
    accent: "text-purple-500"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-32 px-6 lg:px-8 bg-slate-950 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-24 space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] font-black uppercase tracking-[0.4em] text-blue-400">
            <span>Competency Matrix</span>
          </div>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">Powers</span>
          </h2>
          <p className="max-w-2xl text-slate-500 text-lg font-medium leading-relaxed">
            A specialized stack engineered for modern performance demands. I prioritize tools 
            that offer superior type-safety, modular scalability, and developer velocity.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="group relative p-10 rounded-[3rem] bg-slate-900/20 border border-slate-900 transition-all duration-700 hover:bg-slate-900/40 hover:border-blue-500/30 hover:-translate-y-3">
              <div className="absolute -top-12 -right-12 h-40 w-40 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-all duration-700" />
              
              <div className={`mb-10 p-6 bg-slate-950 rounded-2xl w-fit border border-slate-800 transition-all duration-700 group-hover:scale-110 group-hover:border-blue-500/40 shadow-2xl ${cat.accent}`}>
                {cat.icon}
              </div>
              
              <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">{cat.title}</h4>
              <p className="text-xs text-slate-500 font-medium mb-8 leading-relaxed italic">{cat.description}</p>
              
              <div className="flex flex-wrap gap-2.5 relative z-10">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-4 py-2 rounded-xl bg-slate-950/80 border border-slate-800 text-[10px] font-black uppercase tracking-widest text-slate-400 transition-all duration-300 hover:text-blue-300 hover:border-blue-500/30 hover:bg-slate-900 shadow-sm">
                    {skill}
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

export default Skills;