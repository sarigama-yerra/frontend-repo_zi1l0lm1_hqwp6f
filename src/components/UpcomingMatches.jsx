import { CalendarDays, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const matches = [
  { teams: "JDT vs Kedah", date: "Fri, 7:45 PM", venue: "Larkin Stadium", tag: "Liga Super" },
  { teams: "Selangor vs Perak", date: "Sat, 9:00 PM", venue: "Shah Alam", tag: "Piala FA" },
  { teams: "Terengganu vs Pahang", date: "Sun, 5:30 PM", venue: "Sultan Mizan", tag: "Liga Super" },
  { teams: "Sabah vs Kelantan", date: "Sun, 8:45 PM", venue: "Likas", tag: "Piala Malaysia" },
];

export default function UpcomingMatches() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] p-4"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white font-semibold">Upcoming Matches</h3>
        <button className="text-sky-400 text-sm">View All</button>
      </div>
      <ul className="space-y-2">
        {matches.map((m, i) => (
          <li key={i} className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/10">
            <div>
              <p className="text-slate-200 font-medium">{m.teams}</p>
              <div className="flex items-center gap-3 text-slate-400 text-xs mt-1">
                <span className="inline-flex items-center gap-1"><Clock size={14} />{m.date}</span>
                <span className="inline-flex items-center gap-1"><MapPin size={14} />{m.venue}</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">{m.tag}</span>
              </div>
            </div>
            <button className="px-3 py-1.5 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs">Follow</button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
