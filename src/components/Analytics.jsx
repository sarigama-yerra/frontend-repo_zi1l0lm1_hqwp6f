import { Line, Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Legend } from 'chart.js'
import { motion } from 'framer-motion'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Legend)

const lineData = {
  labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6'],
  datasets: [
    {
      label: 'Win Rate %',
      data: [55, 62, 70, 66, 74, 81],
      borderColor: 'rgba(56,189,248,1)',
      backgroundColor: 'rgba(56,189,248,0.15)',
      tension: 0.4,
      fill: true,
    },
  ],
}

const barData = {
  labels: ['JDT', 'SELANGOR', 'TERENGGANU', 'SABAH', 'PAHANG'],
  datasets: [
    {
      label: 'Goals',
      data: [38, 29, 25, 22, 20],
      backgroundColor: 'rgba(163,230,53,0.5)',
      borderRadius: 8,
    },
  ],
}

const options = {
  plugins: { legend: { labels: { color: '#cbd5e1' } }, tooltip: { enabled: true } },
  scales: {
    x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(148,163,184,0.1)' } },
    y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(148,163,184,0.1)' } },
  },
}

function Heatmap() {
  const rows = 5
  const cols = 10
  const cells = Array.from({ length: rows * cols }, (_, i) => Math.random())
  return (
    <div className="grid grid-cols-10 gap-1">
      {cells.map((v, i) => (
        <div key={i} className="h-4 rounded" style={{ background: `linear-gradient(90deg, rgba(56,189,248,${v*0.6}), rgba(163,230,53,${(1-v)*0.6}))` }} />
      ))}
    </div>
  )
}

export default function Analytics() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white font-semibold">Charts & Analytics</h3>
        <span className="text-slate-400 text-xs">Live</span>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl p-3 bg-white/5 border border-white/10">
          <p className="text-slate-300 text-sm mb-2">Win/Loss Streak</p>
          <Line data={lineData} options={options} height={120} />
        </div>
        <div className="rounded-2xl p-3 bg-white/5 border border-white/10">
          <p className="text-slate-300 text-sm mb-2">Goals by Team</p>
          <Bar data={barData} options={options} height={120} />
        </div>
        <div className="md:col-span-2 rounded-2xl p-3 bg-white/5 border border-white/10">
          <p className="text-slate-300 text-sm mb-2">Player Activity Heatmap</p>
          <Heatmap />
        </div>
      </div>
    </motion.div>
  )
}
