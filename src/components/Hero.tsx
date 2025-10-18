import React from 'react'
import Avatar from '../assets/avatar.svg'

export default function Hero() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto text-center">
        <div className="relative inline-block mb-8">
          <img 
            src={Avatar} 
            alt="Jasmine Enriquez avatar" 
            className="w-48 h-48 mx-auto rounded-3xl shadow-2xl ring-4 ring-purple-100" 
          />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-400 to-cyan-400 opacity-20 animate-pulse"></div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
          Jasmine Enriquez
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Frontend engineer — building accessible, delightful web experiences with modern technologies.
        </p>

        {/* College Course */}
        <div className="inline-block mb-8 px-6 py-3 bg-white rounded-2xl shadow-lg border border-purple-100">
          <p className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Bachelor of Science in Information Technology Major in Net and Web Application
          </p>
        </div>

        <div className="flex justify-center gap-3">
          <a 
            href="https://github.com/" 
            aria-label="GitHub" 
            className="p-3 rounded-xl bg-white shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 border border-gray-100"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-gray-700">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1-.02-1.95-3.2.7-3.88-1.39-3.88-1.39-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18A11.1 11.1 0 0112 6.8c.99.01 1.99.13 2.92.38 2.21-1.5 3.19-1.18 3.19-1.18.63 1.59.23 2.76.11 3.05.75.81 1.2 1.84 1.2 3.1 0 4.43-2.69 5.4-5.25 5.68.42.36.8 1.08.8 2.18 0 1.58-.01 2.85-.01 3.24 0 .3.21.66.8.55A10.52 10.52 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
            </svg>
          </a>

          <a 
            href="https://www.linkedin.com/" 
            aria-label="LinkedIn" 
            className="p-3 rounded-xl bg-white shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 border border-gray-100"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-blue-600">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.07-.02-2.44-1.49-2.44-1.49 0-1.72 1.16-1.72 2.36v4.58h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.74z" />
            </svg>
          </a>

          <a 
            href="https://twitter.com/" 
            aria-label="Twitter" 
            className="p-3 rounded-xl bg-white shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 border border-gray-100"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-sky-500">
              <path d="M24 4.56c-.89.39-1.85.65-2.86.77a4.9 4.9 0 002.15-2.7 9.8 9.8 0 01-3.1 1.18 4.88 4.88 0 00-8.3 4.45A13.86 13.86 0 011.67 3.15a4.88 4.88 0 001.51 6.52c-.8-.03-1.56-.25-2.22-.62v.06c0 2.36 1.68 4.33 3.9 4.78-.41.11-.84.17-1.28.17-.31 0-.62-.03-.92-.09.63 1.97 2.46 3.4 4.63 3.44a9.8 9.8 0 01-6.07 2.09c-.39 0-.78-.02-1.16-.07a13.84 13.84 0 007.5 2.2c9 0 13.93-7.46 13.93-13.93 0-.21 0-.42-.02-.63A9.9 9.9 0 0024 4.56z" />
            </svg>
          </a>

          <a 
            href="mailto:hello@example.com" 
            aria-label="Email" 
            className="p-3 rounded-xl bg-white shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 border border-gray-100"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-purple-600">
              <path d="M12 12.713l11.985-9.713h-23.97l11.985 9.713zm0 2.574l-12-9.714v12.427c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-12.427l-12 9.714z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
