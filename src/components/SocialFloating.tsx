import React from 'react'

export default function SocialFloating() {
  // Always visible on md+ screens. Hidden on small screens via `hidden md:flex`.
  return (
    <div className={`hidden md:flex fixed left-6 top-1/2 transform -translate-y-1/2 z-30 flex-col gap-3 items-center transition-all duration-300 opacity-100 translate-x-0`}>
      <a href="https://github.com/frootyjas" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md bg-white/90 dark:bg-slate-800/80 shadow-md hover:scale-110 transition-transform">
        <svg className="w-5 h-5 text-gray-800 dark:text-gray-100" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1-.02-1.95-3.2.7-3.88-1.39-3.88-1.39-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18A11.1 11.1 0 0112 6.8c.99.01 1.99.13 2.92.38 2.21-1.5 3.19-1.18 3.19-1.18.63 1.59.23 2.76.11 3.05.75.81 1.2 1.84 1.2 3.1 0 4.43-2.69 5.4-5.25 5.68.42.36.8 1.08.8 2.18 0 1.58-.01 2.85-.01 3.24 0 .3.21.66.8.55A10.52 10.52 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
        </svg>
      </a>

      <a href="https://linkedin.com/in/frootyjas" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md bg-white/90 dark:bg-slate-800/80 shadow-md hover:scale-110 transition-transform">
        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.07-.02-2.44-1.49-2.44-1.49 0-1.72 1.16-1.72 2.36v4.58h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.74z"/>
        </svg>
      </a>

      <a href="https://facebook.com/frootyjas" target="_blank" rel="noreferrer" aria-label="Facebook" className="p-2 rounded-md bg-white/90 dark:bg-slate-800/80 shadow-md hover:scale-110 transition-transform">
        <svg className="w-5 h-5 text-blue-700 dark:text-blue-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 2.9h-2v7A10 10 0 0022 12.073z"/>
        </svg>
      </a>

      <a href="mailto:jasminedenriquez@gmail.com" aria-label="Email" className="p-2 rounded-md bg-white/90 dark:bg-slate-800/80 shadow-md hover:scale-110 transition-transform">
        <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 12.713l11.985-9.713h-23.97l11.985 9.713zm0 2.574l-12-9.714v12.427c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-12.427l-12 9.714z" />
        </svg>
      </a>
    </div>
  )
}
