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
          <ul className="flex gap-6">
            <li>
              <a href="#home" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium">
                Home
              </a>
            </li>
            <li>
              <a href="#skills" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium">
                Contact
              </a>
            </li>
          </ul>
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle dark mode"
            className="ml-4 px-3 py-1 rounded-full bg-gray-100 dark:bg-slate-700 text-sm"
          >
            {dark ? 'Light' : 'Dark'}
          </button>
        </nav>
      </div>
    </header>
  )
}
