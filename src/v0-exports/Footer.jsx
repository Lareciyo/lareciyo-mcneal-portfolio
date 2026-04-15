import Github from "lucide-react/dist/esm/icons/github"
import Linkedin from "lucide-react/dist/esm/icons/linkedin"
import Twitter from "lucide-react/dist/esm/icons/twitter"
import ArrowUp from "lucide-react/dist/esm/icons/arrow-up"
import Zap from "lucide-react/dist/esm/icons/zap"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <footer className="py-24 px-6 lg:px-8 bg-slate-950 border-t border-slate-900 relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          
          <div className="lg:col-span-2 space-y-10">
            <div className="flex items-center gap-5 group cursor-pointer" onClick={scrollToTop}>
                <div className="p-4 bg-blue-600 rounded-xl">
                    <Zap className="h-6 w-6 text-white fill-white" />
                </div>
                <h5 className="text-3xl font-black tracking-tighter uppercase">L. M. MCNEAL</h5>
            </div>
            <p className="text-slate-500 font-bold text-sm uppercase tracking-[0.25em] max-w-sm leading-loose">
                Architecting resilient software systems for the next generation.
            </p>
          </div>

          <div className="space-y-8">
            <h6 className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-500">Connect</h6>
            <div className="flex flex-wrap gap-5">
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-slate-500 hover:text-blue-500">
                    <Github className="h-6 w-6" />
                </div>
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-slate-500 hover:text-blue-500">
                    <Linkedin className="h-6 w-6" />
                </div>
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-slate-500 hover:text-blue-500">
                    <Twitter className="h-6 w-6" />
                </div>
            </div>
          </div>
        </div>

        <div className="pt-20 border-t border-slate-900/50 flex flex-col md:flex-row items-center justify-between gap-12">
           <p className="text-[11px] font-black uppercase tracking-[0.5em] text-slate-700 text-center">
             © {currentYear} LARECIYO M. MCNEAL // SYSTEM STABLE
           </p>

           <button onClick={scrollToTop} className="group flex items-center gap-4 p-4 bg-slate-900/20 border border-slate-800 rounded-full hover:border-blue-500 transition-all">
              <ArrowUp className="h-5 w-5 text-slate-600 group-hover:text-blue-500 group-hover:-translate-y-1 transition-all" />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-600 group-hover:text-white">Zenith</span>
           </button>
        </div>
      </div>
    </footer>
  )
}