import { motion } from "framer-motion";

const stats = [
  { label: "Possession", value: 62, color: "from-sky-500 to-emerald-400" },
  { label: "Goals", value: 38, color: "from-amber-400 to-rose-400" },
  { label: "Ranking", value: 1, color: "from-purple-500 to-sky-500" },
];

export default function TeamStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] p-4"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white font-semibold">Team Stats Overview</h3>
        <span className="text-slate-400 text-xs">Season 2025</span>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl p-3 bg-white/5 border border-white/10">
            <div className="flex items-center justify-between">
              <p className="text-slate-300 text-sm">{s.label}</p>
              <span className="text-white font-semibold">{s.value}{s.label === 'Possession' ? '%' : ''}</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${s.color}`}
                style={{ width: `${Math.min(100, s.value)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
