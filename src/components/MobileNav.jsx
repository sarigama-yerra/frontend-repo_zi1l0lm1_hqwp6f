import { Home, CalendarDays, Shield, Users, Activity } from "lucide-react";

const items = [
  { icon: Home, label: "Home" },
  { icon: CalendarDays, label: "Matches" },
  { icon: Shield, label: "Teams" },
  { icon: Users, label: "Players" },
  { icon: Activity, label: "Community" },
];

export default function MobileNav() {
  return (
    <nav className="lg:hidden fixed bottom-3 left-0 right-0 px-4 z-40">
      <div className="mx-auto max-w-screen-sm rounded-3xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
        <ul className="grid grid-cols-5">
          {items.map((it, idx) => (
            <li key={it.label} className="">
              <button className="w-full py-3.5 flex flex-col items-center gap-1 text-slate-300 hover:text-white">
                <it.icon size={18} />
                <span className="text-[10px]">{it.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
