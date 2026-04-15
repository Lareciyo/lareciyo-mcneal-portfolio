import { useState } from "react"
import * as Icons from "lucide-react"

export function Contact() {
  const [formStatus, setFormStatus] = useState("idle")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus("loading")
    await new Promise(r => setTimeout(r, 2000))
    setFormStatus("success")
  }

  return (
    <section id="contact" className="py-32 px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          <div className="space-y-16">
            <div className="space-y-6">
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-blue-500 underline decoration-blue-500/20 underline-offset-8">Transmission</h2>
              <h3 className="text-6xl sm:text-8xl font-black text-white tracking-tighter leading-none">
                LET'S BUILD <br /> THE <span className="italic text-slate-700">NEXT.</span>
              </h3>
            </div>
            
            <div className="space-y-10">
               {[
                 { icon: Icons.Mail, label: "Correspondence Hub", val: "hello@mcneal.dev" },
                 { icon: Icons.MapPin, label: "Geographic HQ", val: "San Francisco, CA" },
                 { icon: Icons.Globe, label: "Timezone Alignment", val: "PST (UTC-8)" }
               ].map((item, i) => (
                 <div key={i} className="flex gap-8 group cursor-pointer">
                   <div className="p-6 bg-slate-900 border border-slate-800 rounded-[2rem] text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-xl">
                     <item.icon className="h-8 w-8" />
                   </div>
                   <div className="space-y-2 pt-1">
                     <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">{item.label}</p>
                     <p className="text-3xl font-bold text-white group-hover:text-blue-500 transition-colors">{item.val}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 p-12 sm:p-16 rounded-[4.5rem] backdrop-blur-3xl relative">
            {formStatus === "success" ? (
              <div className="h-[500px] flex flex-col items-center justify-center text-center space-y-8 animate-in zoom-in duration-700">
                <div className="h-28 w-28 bg-blue-600/20 text-blue-500 rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-blue-500/20">
                  <Icons.Send className="h-12 w-12 animate-pulse" />
                </div>
                <h4 className="text-4xl font-black text-white uppercase tracking-tighter">Broadcast Sent</h4>
                <button onClick={() => setFormStatus("idle")} className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 hover:text-blue-400">New Transmission</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid sm:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-4">Full Name</label>
                    <input required className="w-full bg-slate-950 border border-slate-800 rounded-[1.5rem] px-8 py-6 text-white focus:outline-none focus:border-blue-600 font-bold" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-4">Email Address</label>
                    <input required type="email" className="w-full bg-slate-950 border border-slate-800 rounded-[1.5rem] px-8 py-6 text-white focus:outline-none focus:border-blue-600 font-bold" />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-4">Project Brief</label>
                  <textarea required rows="6" className="w-full bg-slate-950 border border-slate-800 rounded-[2rem] px-8 py-6 text-white focus:outline-none focus:border-blue-600 font-bold resize-none" />
                </div>
                <button disabled={formStatus === "loading"} className="group relative w-full bg-blue-600 py-8 rounded-[2rem] font-black text-white text-sm uppercase tracking-[0.4em] hover:bg-blue-500 transition-all flex items-center justify-center gap-6 overflow-hidden">
                  {formStatus === "loading" ? "PROCESSING..." : "DEPLOY BROADCAST"}
                  <Icons.ArrowUpRight className="h-6 w-6 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 duration-500" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}