import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function PlayerSpotlight() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative rounded-[28px] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_20%,rgba(56,189,248,0.15),transparent_60%),radial-gradient(70%_50%_at_80%_80%,rgba(251,191,36,0.15),transparent_60%)]" />
      <div className="relative p-4 flex gap-4">
        <img
          src="https://images.unsplash.com/photo-1543326727-cf6c39ed4056?q=80&w=800&auto=format&fit=crop"
          alt="player"
          className="w-24 h-24 rounded-3xl object-cover border border-white/10"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-semibold">Akmal Hakim</p>
              <p className="text-slate-400 text-sm">Forward • JDT</p>
            </div>
            <span className="inline-flex items-center gap-1 text-amber-300">
              <Star size={16} fill="#fbbf24" className="text-amber-300" /> 8.9
            </span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              { k: "Goals", v: 18 },
              { k: "Assists", v: 9 },
              { k: "xG", v: 15.2 },
            ].map((i) => (
              <div key={i.k} className="p-2 rounded-xl bg-white/5 border border-white/10">
                <p className="text-slate-400 text-xs">{i.k}</p>
                <p className="text-white font-semibold">{i.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
