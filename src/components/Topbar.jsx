import { Bell, Search, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-30">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mx-4 mt-4 mb-4 rounded-[24px] bg-white/5 backdrop-blur-xl border border-white/10 p-3 shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 to-emerald-400 shadow-[0_0_35px_rgba(56,189,248,0.35)] grid place-items-center">
              <span className="text-white text-sm font-bold">BJ</span>
            </div>
            <div>
              <p className="text-white font-semibold leading-none">BolaJom</p>
              <p className="text-slate-400 text-xs">Sports-Tech Dashboard</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 flex-1 max-w-xl mx-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                placeholder="Search matches, teams, players..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-2.5 pl-11 pr-4 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-xl hover:bg-white/10">
              <Bell size={18} className="text-slate-300" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </button>
            <button className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl py-1.5 pl-1.5 pr-2">
              <img src="https://i.pravatar.cc/40?img=68" alt="profile" className="w-7 h-7 rounded-xl" />
              <span className="hidden sm:block text-sm text-white">Afiq</span>
              <ChevronDown size={16} className="text-slate-400" />
            </button>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
