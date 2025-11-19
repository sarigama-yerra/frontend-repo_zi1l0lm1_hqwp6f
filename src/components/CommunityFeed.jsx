import { MessageCircle, Heart, Share2 } from "lucide-react";
import { motion } from "framer-motion";

const posts = [
  {
    user: "Farah",
    avatar: "https://i.pravatar.cc/40?img=12",
    time: "2h",
    text: "Gg JDT! That comeback energy was gila! Siapa MOTM korang?",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200&auto=format&fit=crop",
    likes: 128,
    comments: 34,
  },
  {
    user: "Amir",
    avatar: "https://i.pravatar.cc/40?img=21",
    time: "4h",
    text: "Tactical breakdown: high press in minute 60 changed everything.",
    image: null,
    likes: 89,
    comments: 12,
  },
  {
    user: "Aisha",
    avatar: "https://i.pravatar.cc/40?img=32",
    time: "6h",
    text: "Batik Ultras roll call for next away day! Siapa turun?",
    image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=1200&auto=format&fit=crop",
    likes: 64,
    comments: 19,
  },
];

export default function CommunityFeed() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white font-semibold">Community Feed</h3>
        <button className="text-sky-400 text-sm">New Post</button>
      </div>
      <div className="space-y-3">
        {posts.map((p, i) => (
          <div key={i} className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
            <div className="p-3 flex items-center gap-3">
              <img src={p.avatar} alt={p.user} className="w-9 h-9 rounded-xl" />
              <div className="flex-1">
                <p className="text-white text-sm font-medium">{p.user} <span className="text-slate-500 font-normal">• {p.time}</span></p>
                <p className="text-slate-300 text-sm mt-1">{p.text}</p>
              </div>
            </div>
            {p.image && (
              <div className="h-44">
                <img src={p.image} alt="post" className="w-full h-full object-cover" />
              </div>
            )}
            <div className="p-3 flex items-center gap-4 text-slate-300">
              <button className="inline-flex items-center gap-2 hover:text-emerald-300"><Heart size={16} /> {p.likes}</button>
              <button className="inline-flex items-center gap-2 hover:text-sky-300"><MessageCircle size={16} /> {p.comments}</button>
              <button className="ml-auto inline-flex items-center gap-2 hover:text-amber-300"><Share2 size={16} /> Share</button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
