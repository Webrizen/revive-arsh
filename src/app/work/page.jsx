import { colorMap, projects } from '@/enums/data';
import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <section className="relative min-h-screen py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-8">
          <div className="md:w-1/2">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-zinc-500/20 text-zinc-800 mb-4">
              Creative Portfolio
            </span>
            <h1 className="text-5xl font-bold tracking-tight text-zinc-950 sm:text-6xl leading-tight">
              Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 to-zinc-800">Artifacts</span> & Experiments
            </h1>
          </div>
          <div className="md:w-1/3">
            <p className="text-zinc-400 text-lg">
              Each project is a unique journey through design, code, and creative problem-solving.
            </p>
          </div>
        </div>

        {/* Dynamic masonry layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(200px,auto)]">
          {projects.map((project, index) => {
            const color = colorMap[project.color] || colorMap.indigo;
            const rowSpan = index % 3 === 0 ? 'md:row-span-2' : 'md:row-span-1 h-[400px]';
            
            return (
              <Link
                key={project.id}
                href={project.link || "/"}
                target="_blank"
                className={`group relative md:col-span-6 ${rowSpan} rounded-3xl overflow-hidden shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500`}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                {/* 3D tilt effect container */}
                <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.02]">
                  {/* Project image with parallax effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      style={{
                        transform: 'translateZ(0)'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent" />
                  </div>
                  
                  {/* Floating content */}
                  <div className="relative h-full flex flex-col justify-end p-6">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-zinc-300 text-sm line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${color.bg} ${color.text}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Hover accent */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-400/50 rounded-3xl transition-all duration-500 pointer-events-none" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  )
}