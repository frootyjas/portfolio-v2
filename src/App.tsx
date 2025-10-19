import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Badges from './components/Badges'
import SocialFloating from './components/SocialFloating'

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

  // back-to-top visibility
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
  <SocialFloating />
      <main className="container mx-auto p-6 relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Badges />
      </main>

      <footer className="relative z-10 mt-12 text-center py-6 text-sm text-gray-600 dark:text-gray-300">
        <div className="container mx-auto">© {new Date().getFullYear()} Jasmine Enriquez — Built with React + Tailwind</div>
      </footer>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`fixed right-6 bottom-6 z-50 p-3 rounded-full shadow-lg bg-white/90 dark:bg-slate-800/80 text-gray-800 dark:text-gray-100 transition-opacity transform ${showTop ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M12 19V6"></path>
          <path d="M5 12l7-7 7 7"></path>
        </svg>
      </button>
    </div>
    </div>
  )
}
