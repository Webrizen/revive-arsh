import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <>
     <section className="py-24 w-full">
            <div className="max-w-7xl w-full mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
              <div className="w-full relative py-8 md:py-10 px-6 md:px-8 rounded-2xl bg-gradient-to-tr from-zinc-100 to-zinc-200">
                <div className="absolute right-0 top-0 h-full w-full flex justify-end">
                  <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
                    <span className="absolute w-16 h-16 -top-1 -right-1 bg-blue-500 rounded-md rotate-45" />
                    <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-teal-500 rounded-md rotate-45" />
                    <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-indigo-300 rounded-md rotate-45" />
                  </div>
                </div>
                <div className="absolute left-0 bottom-0 h-full w-full flex items-end">
                  <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
                    <span className="absolute w-16 h-16 -top-1 -right-1 bg-blue-500 rounded-md rotate-45" />
                    <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-teal-500 rounded-md rotate-45" />
                    <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-indigo-300 rounded-md rotate-45" />
                  </div>
                </div>
                <div className="mx-auto text-center max-w-xl md:max-w-3xl relative space-y-8">
                  <h1 className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight font-bold text-zinc-950">
                    If you scrolled this far, It's time to{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 from-20% via-indigo-400 via-30% to-teal-600">
                      LEVEL UP
                    </span>{" "}
                    your project!
                  </h1>
                  <p className="text-zinc-700">
                    I’m always open to discussing new projects, creative ideas,
                    or opportunities to be part of your vision. Let’s connect
                    and explore how we can work together!
                  </p>
                  <div className="mx-auto max-w-md sm:max-w-xl flex justify-center">
                    <Link
                      href="/contact"
                      className="outline-none h-12 px-5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white flex items-center"
                    >
                      Get In touch
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer className="w-full text-center py-4">
            <div className="text-zinc-500">
              © {new Date().getFullYear()} Arshahdul Ahmed. All rights reserved.
            </div>
          </footer> 
    </>
  )
}
