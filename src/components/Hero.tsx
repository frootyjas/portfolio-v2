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
          Aspiring frontend developer — crafting accessible, delightful web experiences with React, TypeScript, and modern web tools.
        </p>

        {/* College Course */}
        <div className="inline-block mb-8 px-6 py-3 bg-white rounded-2xl shadow-lg border border-purple-100">
          <p className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Bachelor of Science in Information Technology Major in Net and Web Application
          </p>
        </div>

        
      </div>
    </section>
  )
}
