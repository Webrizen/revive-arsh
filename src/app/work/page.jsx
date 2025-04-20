import { colorMap, projects } from '@/enums/data';
import Link from 'next/link';
import React from 'react'

export default function page() {
  return (
    <section className="bg-white py-24 space-y-12 relative">
        <div className="absolute -top-12 right-4 left-auto inset-0 z-0 overflow-hidden md:blur-[200px] blur-[500px] md:w-auto w-xl">
          <svg id="blob-svg" viewBox="0 0 400 400" width="400" height="400">
            <path
              d="M322.5,285Q298,370,204.5,362Q111,354,61,277Q11,200,64.5,129.5Q118,59,203.5,52.5Q289,46,318,123Q347,200,322.5,285Z"
              fill="#6B7280"
              className="transition-all duration-500 ease-in-out"
            ></path>
          </svg>
        </div>
        <div className="absolute -bottom-12 left-4 right-auto inset-0 z-0 overflow-hidden md:blur-[200px] blur-[500px] md:w-auto w-xl">
          <svg id="blob-svg" viewBox="0 0 400 400" width="400" height="400">
            <path
              d="M322.5,285Q298,370,204.5,362Q111,354,61,277Q11,200,64.5,129.5Q118,59,203.5,52.5Q289,46,318,123Q347,200,322.5,285Z"
              fill="#6B7280"
              className="transition-all duration-500 ease-in-out"
            ></path>
          </svg>
        </div>
        <div className="space-y-4 max-w-7xl mx-auto text-center">
          <p className="text-sm text-zinc-600 font-medium">My work</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
            It wasn't easy, but I made it.
          </h1>
          <p className="text-zinc-600 leading-relaxed max-w-3xl mx-auto">
            I have worked with various clients, from startups to established
            brands. Here are some of my projects that showcase my skills and
            creativity.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3 max-w-7xl mx-auto">
          {projects.map((project) => {
            const color = colorMap[project.color] || colorMap.indigo;

            return (
              <Link
                key={project.id}
                href={project.link || "/"}
                target="_blank"
                className={`group relative flex flex-col overflow-hidden rounded-xl border border-zinc-300 bg-zinc-50 transition md:col-span-${
                  project.colSpan || 1
                }`}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-4">
                    <span
                      className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${color.bg} ${color.text} ${color.ring}`}
                    >
                      {project.tags.join(" · ")}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
  )
}
