import React, { useState } from 'react'

const projects = [
  {
    number: '01',
    title: 'E-Commerce Platform',
    description: 'A full-stack online shopping platform with real-time inventory management, payment integration, and responsive design. Built with React, Node.js, and MongoDB.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    images: [
      'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop'
    ],
    link: '#'
  },
  {
    number: '02',
    title: 'Task Management Dashboard',
    description: 'An intuitive project management tool featuring drag-and-drop functionality, team collaboration, and real-time updates. Designed with modern UI/UX principles.',
    tags: ['TypeScript', 'React', 'Tailwind', 'Firebase'],
    images: [
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=500&fit=crop'
    ],
    link: '#'
  },
  {
    number: '03',
    title: 'Portfolio Website Builder',
    description: 'A no-code platform allowing creatives to build stunning portfolio websites with customizable templates and drag-and-drop editor.',
    tags: ['React', 'CSS3', 'Node.js', 'PostgreSQL'],
    images: [
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&h=500&fit=crop'
    ],
    link: '#'
  },
  {
    number: '04',
    title: 'Social Media Analytics',
    description: 'A comprehensive analytics dashboard for tracking social media performance across multiple platforms with data visualization and insights.',
    tags: ['JavaScript', 'D3.js', 'React', 'API Integration'],
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop'
    ],
    link: '#'
  }
]

function ImageCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative group/carousel">
      <img
        src={images[currentIndex]}
        alt={`Screenshot ${currentIndex + 1}`}
        className="w-full h-[250px] object-cover"
      />
      
      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 shadow-lg hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 shadow-lg hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Dots Indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-white w-6' : 'bg-white/60 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
              Portfolio
            </span>
          </div>
          <h3 className="text-4xl font-bold mb-4 text-gray-800">
            Featured Projects
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A selection of recent work showcasing my skills in web development and design
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.number}
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Large Number */}
              <div className="flex-shrink-0">
                <div className="text-[150px] lg:text-[240px] font-black leading-none bg-gradient-to-br from-purple-200 to-cyan-200 bg-clip-text text-transparent select-none">
                  {project.number}
                </div>
              </div>

              {/* Project Card with Image Beside Number */}
              <div className="flex-1 group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col lg:flex-row">
                    {/* Image Carousel */}
                    <div className="lg:w-[400px] flex-shrink-0">
                      <ImageCarousel images={project.images} />
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-6 flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-gradient-to-r from-purple-50 to-cyan-50 text-purple-700 text-xs font-medium rounded-full border border-purple-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-purple-600 text-sm font-semibold hover:gap-3 transition-all group/link"
                    >
                      View Project
                      <svg
                        className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
