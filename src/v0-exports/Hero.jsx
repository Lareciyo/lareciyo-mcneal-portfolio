import * as Icons from "lucide-react"
// Ensure your image is named profile.png and sits in the src folder!
import myImage from "../profile.png" 

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-8 bg-slate-950 overflow-hidden text-white">
      {/* Background Mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col items-start space-y-10">
            <div className="group inline-flex items-center space-x-3 rounded-full border border-slate-800 bg-slate-900/40 px-5 py-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
                System Active // Q3 2026
              </span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-6xl sm:text-7xl lg:text-[8.5rem] font-black tracking-tighter leading-[0.8]">
                LARECIYO <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600">
                  MCNEAL
                </span>
              </h1>
              <div className="flex items-center gap-3 text-slate-400">
                <Icons.Sparkles className="h-5 w-5 text-blue-500" />
                <h2 className="text-2xl font-bold tracking-tight uppercase">Software Architect</h2>
              </div>
            </div>

            <p className="text-slate-400 text-xl max-w-2xl leading-relaxed border-l-2 border-slate-900 pl-8">
              I engineer resilient, high-integrity digital systems. Specialized in 
              high-performance architectures and immersive UI.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <a href="#contact" className="rounded-2xl bg-blue-600 px-10 py-5 text-xs font-black uppercase tracking-widest hover:bg-blue-500 transition-all">
                Contact Me
              </a>
              <a href="#projects" className="rounded-2xl border border-slate-800 px-10 py-5 text-xs font-black uppercase tracking-widest hover:border-blue-500 transition-all">
                The Archives
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative aspect-[4/5] bg-slate-900 rounded-[3rem] border border-slate-800 overflow-hidden shadow-2xl">
                <img 
                  src={myImage} 
                  alt="Lareciyo McNeal" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
                    console.log("Profile image not found, using placeholder.")
                  }}
                />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}