import { useState, useMemo } from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import HighlightCard from './components/HighlightCard'
import UpcomingMatches from './components/UpcomingMatches'
import TeamStats from './components/TeamStats'
import PlayerSpotlight from './components/PlayerSpotlight'
import Analytics from './components/Analytics'
import CommunityFeed from './components/CommunityFeed'
import MobileNav from './components/MobileNav'

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('bj-theme') || 'dark'
    }
    return 'dark'
  })

  const isLight = theme === 'light'
  const toggleTheme = () => {
    const next = isLight ? 'dark' : 'light'
    setTheme(next)
    if (typeof window !== 'undefined') localStorage.setItem('bj-theme', next)
  }

  const bgClass = useMemo(() => (
    isLight
      ? 'bg-slate-50 text-slate-900'
      : 'bg-slate-950 text-slate-100'
  ), [isLight])

  return (
    <div className={`min-h-screen ${bgClass} relative transition-colors duration-300`}>      
      <div className="absolute inset-0 pointer-events-none">
        {isLight ? (
          <>
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-sky-400/10 blur-3xl" />
            <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-emerald-300/10 blur-3xl" />
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 10% 10%, #22d3ee 1px, transparent 1px), radial-gradient(circle at 90% 20%, #a3e635 1px, transparent 1px), radial-gradient(circle at 30% 80%, #f59e0b 1px, transparent 1px)", backgroundSize: '120px 120px' }} />
          </>
        ) : (
          <>
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-3xl" />
            <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 10% 10%, #22d3ee 1px, transparent 1px), radial-gradient(circle at 90% 20%, #a3e635 1px, transparent 1px), radial-gradient(circle at 30% 80%, #f59e0b 1px, transparent 1px)", backgroundSize: '120px 120px' }} />
          </>
        )}
      </div>

      <div className="relative flex">
        <Sidebar />
        <main className="flex-1 pb-24 lg:pb-10">
          <Topbar isLight={isLight} onToggleTheme={toggleTheme} />

          <div className="mx-4 grid grid-cols-1 xl:grid-cols-3 gap-4">
            <div className="xl:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
              <HighlightCard />
              <TeamStats />
              <Analytics />
              <CommunityFeed />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <UpcomingMatches />
              <PlayerSpotlight />

              <div className={`rounded-[28px] ${isLight ? 'bg-white/70 text-slate-900' : 'bg-white/5 text-white'} border border-white/10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] p-4`}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`${isLight ? 'text-slate-900' : 'text-white'} font-semibold`}>Real-time Score</h3>
                  <span className="px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-600 dark:text-amber-300 border border-amber-400/20 text-xs">Live</span>
                </div>
                <div className="space-y-2">
                  {[['JDT',2,'Kedah',1],['Sabah',0,'Perak',0]].map((m,i)=> (
                    <div key={i} className={`flex items-center justify-between p-3 rounded-2xl ${isLight ? 'bg-white/60' : 'bg-white/5'} border border-white/10`}>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-xl ${isLight ? 'bg-sky-400/15 text-slate-900' : 'bg-sky-500/20 text-white'} border ${isLight ? 'border-sky-400/30' : 'border-sky-500/30'}`}>{m[0]}</span>
                        <span className={`${isLight ? 'text-slate-900' : 'text-white'} font-bold`}>{m[1]}</span>
                      </div>
                      <span className="text-slate-500 text-xs">45'</span>
                      <div className="flex items-center gap-2">
                        <span className={`${isLight ? 'text-slate-900' : 'text-white'} font-bold`}>{m[3]}</span>
                        <span className={`px-2 py-1 rounded-xl ${isLight ? 'bg-emerald-300/20 text-slate-900' : 'bg-emerald-400/20 text-white'} border ${isLight ? 'border-emerald-300/30' : 'border-emerald-400/30'}`}>{m[2]}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`rounded-[28px] ${isLight ? 'bg-white/70 text-slate-900' : 'bg-white/5 text-white'} border border-white/10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] p-4`}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`${isLight ? 'text-slate-900' : 'text-white'} font-semibold`}>Batik Accent</h3>
                  <span className="text-slate-400 text-xs">Culture</span>
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {Array.from({ length: 18 }).map((_, i) => (
                    <div key={i} className="aspect-square rounded-xl border border-white/10 bg-[conic-gradient(from_45deg,rgba(56,189,248,0.15),rgba(163,230,53,0.15),rgba(245,158,11,0.15),transparent_60%)]" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <MobileNav />
    </div>
  )
}

export default App
