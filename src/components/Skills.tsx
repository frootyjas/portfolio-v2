import React from 'react'

const skills = [
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB', bg: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-600' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6', bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600' },
  { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-600' },
  { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26', bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-600' },
  { name: 'CSS3', icon: 'https://cdn.simpleicons.org/css3/1572B6', bg: 'bg-blue-50', border: 'border-blue-300', text: 'text-blue-700' },
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E', bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-600' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933', bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-600' },
  { name: 'Java', icon: 'https://cdn.simpleicons.org/openjdk', bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-600' },
  { name: 'C#', icon: 'https://cdn.simpleicons.org/csharp/512BD4', bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600' },
  { name: 'PHP', icon: 'https://cdn.simpleicons.org/php/777BB4', bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-600' },
  { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E', bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-600' },
]

export default function Skills() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-5 py-1.5 rounded-full text-sm font-semibold shadow-lg">
              Tech Stack
            </span>
          </div>
          <h3 className="text-4xl font-bold mb-4 text-gray-800">
            Skills
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From design to deployment, here are the technologies I use daily to build exceptional digital experiences
          </p>
        </div>

        {/* Floating cards layout */}
        <div className="flex flex-wrap justify-center gap-4 items-center">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group ${skill.bg} ${skill.border} border-2 rounded-2xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-rotate-2 cursor-pointer`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <img 
                    src={skill.icon} 
                    alt={`${skill.name} icon`} 
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <span className={`font-bold text-base ${skill.text}`}>
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
