import { Home, Trophy, Users, Shield, Settings, CalendarDays, Activity } from "lucide-react";
import { motion } from "framer-motion";

const menu = [
  { icon: Home, label: "Dashboard" },
  { icon: CalendarDays, label: "Matches" },
  { icon: Shield, label: "Teams" },
  { icon: Users, label: "Players" },
  { icon: Activity, label: "Community" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-72 shrink-0 gap-4 p-4">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[24px] bg-white/5 backdrop-blur-xl border border-white/10 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.25)] relative overflow-hidden"
      >
        <div className="absolute -top-24 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-sky-500/20 via-emerald-400/10 to-amber-400/10 blur-3xl" />
        <div className="flex items-center gap-3 relative">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 to-emerald-400 shadow-[0_0_35px_rgba(56,189,248,0.35)] grid place-items-center">
            <Trophy className="text-white" size={20} />
          </div>
          <div>
            <p className="text-slate-200 font-semibold leading-none">BolaJom</p>
            <p className="text-slate-400 text-xs">Malaysia Football</p>
          </div>
        </div>
      </motion.div>

      <nav className="rounded-[24px] bg-white/5 backdrop-blur-xl border border-white/10 p-3 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
        <ul className="space-y-1">
          {menu.map((item, i) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * i }}
            >
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-300 hover:text-white hover:bg-white/10 transition group">
                <item.icon size={18} className="text-slate-400 group-hover:text-white" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            </motion.li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto rounded-[24px] bg-gradient-to-br from-sky-500/15 via-emerald-400/10 to-amber-400/10 border border-white/10 p-4 backdrop-blur-2xl">
        <p className="text-slate-300 text-sm">
          Selamat Datang! Gear up for match day with live insights and community vibes.
        </p>
      </div>
    </aside>
  );
}
