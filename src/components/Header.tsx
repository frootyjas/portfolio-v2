import React from 'react'

type HeaderProps = {
  dark: boolean
  setDark: (v: boolean) => void
}

export default function Header({ dark, setDark }: HeaderProps) {
  return (
    <header className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100 dark:border-slate-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
          JE
        </div>
        <nav className="flex items-center gap-6">
          <button
            onClick={() => setDark(!dark)}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="ml-4 p-2 rounded-full text-sm flex items-center justify-center hover:scale-110 transition-transform"
          >
            {/* screen reader label */}
            <span className="sr-only">{dark ? 'Switch to light mode' : 'Switch to dark mode'}</span>
            {dark ? (
              // sun icon for light mode (visible when currently dark)
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-yellow-400">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="M4.93 4.93l1.41 1.41"></path>
                <path d="M17.66 17.66l1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="M4.93 19.07l1.41-1.41"></path>
                <path d="M17.66 6.34l1.41-1.41"></path>
              </svg>
            ) : (
              // moon icon for dark mode (visible when currently light)
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-800 dark:text-gray-200">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}
