import React from 'react'

const badges = [
  {
    title: 'Microsoft Office Specialist: Word',
    issuer: 'Microsoft',
    date: '2025',
    image: '/images/microsoft-office-specialist-word-associate-microsoft-365-apps (1).png',
    credlyUrl: 'https://www.credly.com/badges/26276b5f-b282-4af1-b871-8d7774001778/public_url'
  },
  {
    title: 'Microsoft Office Specialist: PowerPoint',
    issuer: 'Microsoft',
    date: '2025',
    image: '/images/microsoft-office-specialist-powerpoint-associate-microsoft-365-apps.png',
    credlyUrl: 'https://www.credly.com/badges/1cd91d9e-44e1-4a4d-8dc4-11d3ce2392ab/public_url'
  },
  {
    title: 'IT Specialist - Network Security',
    issuer: 'Certiport',
    date: '2025',
    image: '/images/it-specialist-network-security.png',
    credlyUrl: 'https://www.credly.com/badges/d3192a3c-ba7f-4f27-83c6-1e76d4c81f03/public_url'
  },
  {
    title: 'IT Specialist - Cybersecurity',
    issuer: 'Certiport',
    date: '2024',
    image: '/images/it-specialist-cybersecurity.png',
    credlyUrl: 'https://www.credly.com/badges/193cb62c-ba09-4329-85ca-04d9fdaa963b/public_url'
  },
  {
    title: 'IC3 Digital Literacy Certification',
    issuer: 'Certiport',
    date: '2024',
    image: '/images/ic3-digital-literacy-certification-gs6-level-1.png',
    credlyUrl: 'https://www.credly.com/badges/de7ef284-7a95-4c9b-b048-0faedbbdd56e/public_url'
  },
  {
    title: 'Cyber Threat Management',
    issuer: 'Certiport',
    date: '2024',
    image: '/images/cyber-threat-management.png',
    credlyUrl: 'https://www.credly.com/badges/b1a113d9-7d77-4211-820f-6cffe66b90c7/public_url'
  }
]

export default function Badges() {
  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
              Certifications
            </span>
          </div>
          <h3 className="text-4xl font-bold mb-4 text-gray-800">
            Badges & Certifications
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional certifications and achievements from industry-recognized programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge, index) => (
            <a
              key={index}
              href={badge.credlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Badge Image */}
              <div className="bg-gradient-to-br from-purple-50 to-cyan-50 p-8 flex items-center justify-center">
                <img
                  src={badge.image}
                  alt={badge.title}
                  className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Badge Info */}
              <div className="p-5">
                <h4 className="font-bold text-gray-800 mb-2 text-sm leading-tight group-hover:text-purple-600 transition-colors">
                  {badge.title}
                </h4>
                <p className="text-xs text-gray-600 mb-1">
                  {badge.issuer}
                </p>
                <p className="text-xs text-gray-500">
                  {badge.date}
                </p>
              </div>

              {/* Credly Link Indicator */}
              <div className="px-5 pb-4">
                <div className="flex items-center gap-2 text-purple-600 text-xs font-semibold group-hover:gap-3 transition-all">
                  <span>View on Credly</span>
                  <svg
                    className="w-3 h-3 group-hover:translate-x-1 transition-transform"
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
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All Credly Profile Link */}
        <div className="text-center mt-12">
          <a
            href="https://www.credly.com/users/jasmine-enriquez.e996ccfb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-purple-100"
          >
            <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm1-11h4v2h-4v4h-2v-4H7v-2h4V7h2v4z"/>
            </svg>
            <span className="font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              View All Certifications on Credly
            </span>
            <svg
              className="w-5 h-5 text-purple-600"
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
    </section>
  )
}
