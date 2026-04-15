import { ShieldCheck, Zap, Code2, Layers } from "lucide-react"

const experiences = [
  { 
    year: "2024 — PRESENT", 
    role: "Lead Systems Architect", 
    company: "MetaScale Engineering", 
    desc: "Spearheading the transition to distributed micro-frontend architectures for enterprise clients. Focused on reducing build-time latency by 45% and implementing robust CI/CD security protocols.",
    stack: ["React", "Go", "Kubernetes", "Redis"],
    icon: <ShieldCheck className="h-6 w-6" />
  },
  { 
    year: "2022 — 2024", 
    role: "Senior Full-Stack Engineer", 
    company: "Vortex Digital Labs", 
    desc: "Architected the core API engine for Sentinel, a fintech platform handling over $5M in daily volume. Optimized PostgreSQL execution plans to handle 10,000+ concurrent requests.",
    stack: ["Next.js", "PostgreSQL", "Prisma", "AWS S3"],
    icon: <Zap className="h-6 w-6" />
  },
  { 
    year: "2020 — 2022", 
    role: "Full-Stack Developer", 
    company: "Studio Alpha", 
    desc: "Engineered headless commerce solutions for Fortune 500 retailers. specialized in integrating complex third-party logistics APIs with custom Shopify Plus storefronts.",
    stack: ["Vue.js", "Shopify", "GraphQL", "Tailwind"],
    icon: <Code2 className="h-6 w-6" />
  }
]

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-40 px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-32">
        
        {/* Bio Segment: Professional Narrative */}
        <div className="lg:w-1/2 space-y-16">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3">
               <div className="h-px w-8 bg-blue-600" />
               <span className="text-xs font-black uppercase tracking-[0.4em] text-blue-500">Core Philosophy</span>
            </div>
            <h3 className="text-5xl sm:text-7xl font-bold text-white tracking-tighter leading-none">
              Engineering with <br /> <span className="text-slate-700 italic">No Compromise.</span>
            </h3>
          </div>
          
          <div className="space-y-8 text-xl text-slate-400 leading-relaxed font-medium">
            <p className="border-l-4 border-blue-600/20 pl-8">
              My technical journey is defined by the pursuit of structural integrity. I don’t just write code; I architect systems that bridge the gap between high-level business strategy and low-level machine performance.
            </p>
            <p className="pl-8">
              I specialize in the gray area between the server and the screen. Whether it's crafting a recursive database schema or perfecting a physics-based UI transition, I bring a meticulous eye for detail to every line of code.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 pt-12 border-t border-slate-900">
            <div className="group cursor-default">
              <p className="text-5xl font-black text-white group-hover:text-blue-500 transition-colors">06+</p>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 mt-2">Years of Deep Tech Experience</p>
            </div>
            <div className="group cursor-default">
              <p className="text-5xl font-black text-white group-hover:text-blue-500 transition-colors">45+</p>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 mt-2">Production Systems Deployed</p>
            </div>
          </div>
        </div>

        {/* Timeline Segment: Professional Path */}
        <div className="lg:w-1/2 relative">
          {/* Vertical Architectural Line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-slate-800 to-transparent opacity-50" />
          
          <div className="space-y-20">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-16 group">
                
                {/* Visual Anchor Dot */}
                <div className="absolute -left-[6px] top-3 h-3 w-3 rounded-full bg-slate-950 border-2 border-blue-600 group-hover:bg-blue-500 group-hover:scale-[1.75] transition-all duration-700 shadow-[0_0_20px_rgba(37,99,235,0.6)]" />
                
                <div className="space-y-6 bg-slate-900/20 p-10 rounded-[3rem] border border-slate-900/50 backdrop-blur-md transition-all duration-500 hover:border-blue-500/30 hover:bg-slate-900/40 hover:-translate-y-2">
                  <div className="flex items-center justify-between">
                     <span className="text-blue-500 font-black text-xs uppercase tracking-[0.3em]">
                        {exp.year}
                     </span>
                     <div className="p-3 bg-slate-950 rounded-2xl text-slate-600 group-hover:text-blue-500 transition-colors">
                        {exp.icon}
                     </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-3xl font-bold text-white tracking-tight">{exp.role}</h4>
                    <p className="text-slate-500 font-black text-xs uppercase tracking-widest">{exp.company}</p>
                  </div>
                  
                  <p className="text-slate-400 leading-relaxed font-medium italic">
                    "{exp.desc}"
                  </p>
                  
                  <div className="flex flex-wrap gap-3 pt-4">
                    {exp.stack.map(s => (
                      <span key={s} className="text-[9px] font-black uppercase tracking-widest text-slate-500 bg-slate-950/80 px-3 py-1.5 rounded-xl border border-slate-800 group-hover:border-blue-500/20 group-hover:text-slate-300 transition-colors">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}