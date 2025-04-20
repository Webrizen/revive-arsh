import Image from 'next/image'
import React from 'react'
import ArshAbout from "@/assets/arsh.png";

export default function page() {
  return (
     <section className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0 blur-[600px]"
            >
              <circle
                r={512}
                cx={512}
                cy={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                {/* Left column with decorative SVG */}
                <div className="lg:pr-8 lg:pt-4">
                  <div className="lg:max-w-lg">
                    <h2 className="text-base font-semibold leading-7 text-zinc-900">
                      (👉ﾟヮﾟ)👉 About Me
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                      Unknown Past, Clear Intent, Silent Execution.
                    </p>
    
                    <p className="mt-6 text-lg leading-8 text-zinc-600">
                      I'm an 18-year-old self-taught developer from India, building
                      high-performance web apps with Next.js 15, TypeScript, and
                      Tailwind CSS. I specialize in crafting scalable frontends,
                      clean UI/UX, and solving real-world problems through code.
                    </p>
    
                    <p className="mt-6 text-lg leading-8 text-zinc-600">
                      Freelancer by day, product builder by night — I’ve been
                      writing code since class 8 and never looked back. I don’t just
                      build websites. I build systems, brands, and leverage the web
                      to escape mediocrity.
                      <br />
                      <br />I lead Webrizen, a modern web studio focused on
                      websites, SaaS, and digital products. If you’re looking for
                      someone who can think, design, and execute — you’re in the
                      right place.
                    </p>
    
                    {/* Timeline-like experience */}
                    <div className="mt-10 max-w-xl space-y-8 text-base leading-7 text-zinc-600 lg:max-w-none">
                      <div className="relative pl-9">
                        <dt className="inline font-semibold text-zinc-900">
                          <svg
                            className="absolute left-1 top-1 h-5 w-5 text-zinc-900"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Technical Skills
                        </dt>
                        <dd className="inline">
                          : React, Next.js, TypeScript, Node.js, Tailwind CSS,
                          GraphQL, PostgreSQL
                        </dd>
                      </div>
                      <div className="relative pl-9">
                        <dt className="inline font-semibold text-zinc-900">
                          <svg
                            className="absolute left-1 top-1 h-5 w-5 text-zinc-900"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Design Approach
                        </dt>
                        <dd className="inline">
                          : User-centered design, accessibility-first, performance
                          optimized
                        </dd>
                      </div>
                      <div className="relative pl-9">
                        <dt className="inline font-semibold text-zinc-900">
                          <svg
                            className="absolute left-1 top-1 h-5 w-5 text-zinc-900"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Philosophy
                        </dt>
                        <dd className="inline">
                          : Build solutions that are maintainable, scalable, and
                          delightful to use
                        </dd>
                      </div>
                    </div>
                  </div>
                </div>
    
                {/* Right column with decorative SVG pattern */}
                <div className="flex flex-col gap-2 items-start justify-end">
                  <Image
                    src={ArshAbout}
                    placeholder="blur"
                    alt="Arshahdul Ahmed"
                    width={400}
                    height={600}
                    className="rounded-xl w-full h-full aspect-square object-cover object-top mb-4 zincscale-100"
                  />
                  <div className="grid grid-cols-2 gap-4 w-full">
                      <a href="https://github.com/webrizen" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-2 rounded-lg bg-white hover:bg-zinc-100 transition-colors h-20">
                        <svg className="w-6 h-6 text-zinc-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a href="https://x.com/shadow_jsx" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-2 rounded-lg bg-white hover:bg-zinc-100 transition-colors h-20">
                        <svg className="w-6 h-6 text-zinc-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                    </div>
                </div>
              </div>
            </div>
          </section>
  )
}
