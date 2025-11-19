import { Play } from "lucide-react";
import { motion } from "framer-motion";

export default function HighlightCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_20%_10%,rgba(56,189,248,0.15),transparent_60%),radial-gradient(60%_50%_at_80%_90%,rgba(163,230,53,0.12),transparent_60%)]" />
      <div className="relative p-4">
        <div className="relative h-44 rounded-3xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1587385789090-73b3b52a7a00?q=80&w=1400&auto=format&fit=crop"
            alt="match highlight"
            className="w-full h-full object-cover"
          />
          <button className="absolute inset-0 grid place-items-center bg-black/30">
            <span className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 grid place-items-center text-white">
              <Play size={20} />
            </span>
          </button>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-white font-semibold">Match Highlights: JDT vs Selangor</p>
            <p className="text-slate-400 text-sm">Liga Super Malaysia • 3-2 • Last night</p>
          </div>
          <div className="text-right">
            <p className="text-emerald-400 text-sm">Top Plays</p>
            <p className="text-sky-400 text-xs">5 min</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
