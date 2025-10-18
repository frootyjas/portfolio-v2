import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Badges from './components/Badges'

export default function App() {
  const [dark, setDark] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved) return saved === 'dark'
    } catch { }
    return false
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      try { localStorage.setItem('theme', 'dark') } catch {}
    } else {
      root.classList.remove('dark')
      try { localStorage.setItem('theme', 'light') } catch {}
    }
  }, [dark])

  return (
    <div className={`${dark ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-br dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 from-purple-50 via-white to-cyan-50 text-gray-900 dark:text-gray-100 relative overflow-hidden">
  {/* generated blobs */}
  {(() => {
  const NUM_BLOBS = 40
    // simple seeded RNG for reproducible layout
    const seededRng = (seed: number) => {
      let s = seed >>> 0
      return () => {
        // LCG parameters
        s = (s * 1664525 + 1013904223) >>> 0
        return s / 4294967296
      }
    }

    const rand = seededRng(12345)
    const colors = [
      '#C4B5FD', // purple-300
      '#93C5FD', // cyan-300
      '#FBCFE8', // pink-300
      '#FDE68A', // amber-300
      '#C7B8FF', // violet-ish
      '#F0ABFC', // fuchsia-300
      '#FBCACA', // rose-300
      '#C7D2FE', // indigo-300
      '#99F6E4', // teal-300
      '#FDBA74'  // orange-300
    ]

    const blobs = Array.from({ length: NUM_BLOBS }).map((_, i) => {
      // biased sizes: small (25%), medium (40%), large (25%), huge (10%)
      const r = rand()
      let size
      if (r < 0.25) size = Math.round(64 + rand() * 56) // 64 - 120 (small)
      else if (r < 0.65) size = Math.round(120 + rand() * 120) // 120 - 240 (medium)
      else if (r < 0.9) size = Math.round(240 + rand() * 160) // 240 - 400 (large)
      else size = Math.round(420 + rand() * 300) // 420 - 720 (huge)

      const left = Math.round(rand() * 100)
      const top = Math.round(rand() * 100)

      // bigger blobs slightly less opaque
      const baseOpacity = r > 0.9 ? 0.08 : r > 0.65 ? 0.11 : 0.16
      const opacity = +(baseOpacity + rand() * 0.28).toFixed(3)

      const bg = colors[i % colors.length]
      const delay = `${(rand() * 6).toFixed(2)}s`
      return { id: i, size, left, top, opacity, bg, delay, huge: r > 0.9 }
    })

    // boost some blobs near the top to be larger for more visual weight there
    const topCandidates = blobs.filter(b => b.top < 30)
    for (let j = 0; j < Math.min(6, topCandidates.length); j++) {
      const idx = Math.floor(rand() * topCandidates.length)
      const b = topCandidates[idx]
      if (b) {
        b.size = Math.max(b.size, Math.round(300 + rand() * 420))
        b.opacity = Math.min(0.35, b.opacity + 0.05)
        b.huge = true
      }
    }

    return blobs.map(b => {
      // vary duration by size to make big blobs move slower
      const duration = b.huge ? `${18 + Math.round(rand() * 12)}s` : b.size > 240 ? `${14 + Math.round(rand() * 10)}s` : `${8 + Math.round(rand() * 8)}s`
      return (
        <div
          key={b.id}
          className={`absolute rounded-full mix-blend-multiply filter ${b.huge ? 'blur-2xl' : 'blur-3xl'} blob-float blob-transition`}
          style={{
            left: `${b.left}%`,
            top: `${b.top}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            backgroundColor: b.bg,
            opacity: b.opacity,
            transform: 'translate(-50%, -50%)',
            animationDelay: b.delay,
            animationDuration: duration,
            zIndex: 0
          }}
        />
      )
    })
  })()}

      <Header dark={dark} setDark={setDark} />
      <main className="container mx-auto p-6 relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Badges />
      </main>
    </div>
    </div>
  )
}
