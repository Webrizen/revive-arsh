import Image from "next/image";
import Arsh from "@/assets/arsh.png";
import ArshAbout from "@/assets/arsh-about.png";
import { colorMap, projects } from "@/enums/data";
import Link from "next/link";
import TestimonialSlider from "@/components/system/testimonial-slider";
import Marquee from "@/components/system/marquee";

const stats = [
  { id: 1, name: "Businesses Served", value: "24+" },
  { id: 2, name: "Websites Shipped", value: "101+" },
  { id: 3, name: "Satisfied Clients", value: "22+" },
  { id: 4, name: "Freelance Experience", value: "5+ yrs" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen w-full overflow-x-hidden flex-col items-center justify-between px-4">
      <section className="bg-zinc-100 border-x border-t border-zinc-300 rounded-t-4xl w-full pt-24 relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-[20%] [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-zinc-300"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-zinc-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="py-12 md:py-20">
            <div className="flex flex-col gap-6 pb-12">
              <Image
                src={Arsh}
                placeholder="blur"
                alt="Arshahdul Ahmed"
                width={400}
                height={600}
                className="rounded-full w-24 h-24 object-cover object-top mb-4"
              />
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-4">
                Hi, I'm{" "}
                <span
                  className={`bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-600`}
                >
                  Arshahdul Ahmed
                </span>{" "}
                and I make Next.js Websites.
              </h1>
              <div className="max-w-3xl">
                <p className="text-2xl text-zinc-600 mb-8">
                  I know what it feels like to be misunderstood by code... or clients.
                  That’s why I build websites that speak clearly — to both machines and people.
                </p>
                <p className="text-2xl text-zinc-600 mb-8">
                  No flashy promises. No empty buzzwords. Just clean, fast, and reliable websites
                  that do exactly what you need — quietly and without drama.
                </p>
                <p className="text-2xl text-zinc-600">
                  If you're tired of developers who overcomplicate things,
                  maybe we should talk. I listen first. I act second.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="w-full px-6 lg:px-8 overflow-x-hidden relative">
          <Marquee />
          <dl className="grid grid-cols-1 gap-x-0 gap-y-6 h-full text-center lg:grid-cols-4 mt-4 mx-auto max-w-7xl">
            {stats.map((stat, index) => {
              const isFirst = index === 0;
              const isLast = index === stats.length - 1;

              return (
                <div
                  key={stat.id}
                  className={`flex w-full h-full flex-col gap-y-4 md:px-4 ${!isFirst && !isLast ? "border-x border-zinc-200" : ""
                    }`}
                >
                  <dt className="text-base/7 text-zinc-600">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
                    {stat.value}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </section>
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
                  The 18-Year-Old Hustle: No Days Off Since 15
                </p>

                <p className="mt-6 text-lg leading-8 text-zinc-600">
                  I’m Arshahdul. I code because it gives me control over something.  I started at 15 — not because I loved computers, but because I wanted to build something that could run without me.
                </p>

                <p className="mt-6 text-lg leading-8 text-zinc-600">
                  I’ve been told I'm too young to know what I’m doing. That works in my favor. People underestimate me. Then they wonder why their project is done early, clean, and working better than expected.
                </p>

                <p className="mt-6 text-lg leading-8 text-zinc-600">
                  I specialize in Next.js, TypeScript, and building systems that scale quietly — the way things should.
                  <br />
                  <br />
                  I run Webrizen. It's not a company. It's a mindset. If you're tired of developers who talk more than they code, let’s have a conversation.
                </p>

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
                    <dd className="inline">: React, Next.js, TypeScript, Tailwind CSS, Node.js</dd>
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
                    <dd className="inline">: Clean, fast, functional. Built for humans.</dd>
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
                      : Build things that last. Don't waste time on noise.
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
                <a
                  href="https://github.com/webrizen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-2 rounded-lg bg-white hover:bg-zinc-100 transition-colors h-20"
                >
                  <svg
                    className="w-6 h-6 text-zinc-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/shadow_jsx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-2 rounded-lg bg-white hover:bg-zinc-100 transition-colors h-20"
                >
                  <svg
                    className="w-6 h-6 text-zinc-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                className={`group relative flex flex-col overflow-hidden rounded-xl border border-zinc-300 bg-zinc-50 transition md:col-span-${project.colSpan || 1
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
      <section className="relative isolate bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-gradient-to-r from-indigo-100/20 to-purple-100/20 blur-3xl animate-float-slow"></div>
          <div className="absolute -left-40 bottom-1/3 w-60 h-60 rounded-full bg-gradient-to-r from-emerald-100/20 to-cyan-100/20 blur-3xl animate-float-medium"></div>

          <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,white_10%,transparent_70%)]">
            <svg
              className="absolute inset-0 h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="grid-pattern"
                  width="60"
                  height="60"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 60 0 L 0 0 0 60"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.3"
                    className="text-zinc-100"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
          </div>
        </div>
        <div className="absolute -bottom-12 top-auto right-0 left-0 mx-auto inset-0 z-0 overflow-hidden md:blur-[500px] blur-[500px] md:w-auto w-xl">
          <svg id="blob-svg" viewBox="0 0 400 400" width="400" height="400">
            <path
              d="M322.5,285Q298,370,204.5,362Q111,354,61,277Q11,200,64.5,129.5Q118,59,203.5,52.5Q289,46,318,123Q347,200,322.5,285Z"
              fill="#6B7280"
              className="transition-all duration-500 ease-in-out"
            ></path>
          </svg>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-x-1.5 rounded-full bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 ring-1 ring-inset ring-zinc-200/80">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-600"></span>
              </span>
              Professional Journey
            </span>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
              <span className="bg-gradient-to-r from-zinc-600 to-zinc-400 bg-clip-text text-transparent">
                My Career Path
              </span>
            </h1>
            <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
              A timeline of my professional growth, education, and key
              milestones that shaped my expertise.
            </p>
          </div>
          <div className="mt-16 sm:mt-20">
            <div className="relative pl-2 sm:pl-0">
              {" "}
              <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-indigo-200/0 via-indigo-200 to-emerald-200/0 sm:left-[49.6%] sm:-ml-0.5"></div>
              <div className="mb-12 sm:mb-16">
                <div className="sticky top-24 z-10 flex justify-center py-4 sm:top-32 sm:py-0">
                  <div className="inline-flex items-center rounded-full bg-indigo-600/5 px-3 py-1.5 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200 backdrop-blur-sm sm:px-4 sm:py-2">
                    <svg
                      className="h-4 w-4 mr-2 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z"
                        clipRule="evenodd"
                      />
                      <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" />
                    </svg>
                    Work Experience
                  </div>
                </div>

                <div className="mt-8 space-y-8 sm:mt-12">
                  <div className="relative">
                    <div className="group flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-6">
                      <div className="absolute left-0 top-2 -ml-2 h-3 w-3 rounded-full bg-indigo-600 ring-4 ring-indigo-200/50 transform -translate-x-1/2 sm:left-1/2 sm:-ml-1.5"></div>

                      <div className="sm:w-[45%] sm:pr-4 sm:text-right pl-4 sm:pl-0">
                        <time className="text-sm font-medium text-zinc-500">
                          Sep 2020 - Present
                        </time>
                        <h3 className="mt-1 text-lg font-bold text-zinc-900 sm:text-xl">
                          Full-stack Developer (Freelance)
                        </h3>
                        <p className="mt-1 text-sm font-medium text-indigo-600">
                          Upwork • Remote
                        </p>
                      </div>

                      {/* Right Card */}
                      <div className="sm:w-[45%] p-4 sm:p-6 rounded-lg sm:rounded-xl bg-white border border-zinc-200/50  transition-all duration-300 sm:hover:-translate-y-1 group-hover:border-indigo-200/80">
                        <p className="text-sm sm:text-base text-zinc-600">
                          Completed projects that meet and exceed client
                          expectations, with positive feedback and consistent
                          skill growth. Collaborated with clients to design and
                          develop websites, optimizing for performance and SEO.
                        </p>
                        <div className="mt-3 sm:mt-4 flex flex-wrap gap-2 justify-end">
                          <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200/50">
                            Next.js
                          </span>
                          <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200/50">
                            React
                          </span>
                          <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200/50">
                            Full-stack
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Full Stack Engineer */}
                  <div className="relative">
                    <div className="group flex flex-col sm:flex-row-reverse sm:justify-between gap-4 sm:gap-6">
                      {/* Dot Indicator */}
                      <div className="absolute left-0 top-2 -ml-2 h-3 w-3 rounded-full bg-indigo-600 ring-4 ring-indigo-200/50 transform -translate-x-1/2 sm:left-1/2 sm:-ml-1.5"></div>

                      {/* Right Content */}
                      <div className="sm:w-[45%] sm:pl-4 pl-4 sm:pl-0">
                        <time className="text-sm font-medium text-zinc-500">
                          Aug 2023 - Feb 2024
                        </time>
                        <h3 className="mt-1 text-lg font-bold text-zinc-900 sm:text-xl">
                          Full Stack Engineer
                        </h3>
                        <p className="mt-1 text-sm font-medium text-indigo-600">
                          Vijetha Softwares Pvt. Ltd. • Vishakhapatnam
                        </p>
                      </div>

                      {/* Left Card */}
                      <div className="sm:w-[45%] p-4 sm:p-6 rounded-lg sm:rounded-xl bg-white border border-zinc-200/50  transition-all duration-300 sm:hover:-translate-y-1 group-hover:border-indigo-200/80">
                        <p className="text-sm sm:text-base text-zinc-600">
                          Worked on software infrastructure and full-stack
                          development projects. Contributed to building and
                          maintaining web applications with modern technologies.
                        </p>
                        <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
                          <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200/50">
                            JavaScript
                          </span>
                          <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200/50">
                            Node.js
                          </span>
                          <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200/50">
                            MongoDB
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Education Section */}
              <div className="mb-12 sm:mb-16">
                <div className="sticky top-24 z-10 flex justify-center py-4 sm:top-32 sm:py-0">
                  <div className="inline-flex items-center rounded-full bg-emerald-600/5 px-3 py-1.5 text-sm font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200 backdrop-blur-sm sm:px-4 sm:py-2">
                    <svg
                      className="h-4 w-4 mr-2 text-emerald-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10.75 16.82A7.462 7.462 0 0115 15.5c.71 0 1.396.098 2.046.282A.75.75 0 0018 15.06v-11a.75.75 0 00-.546-.721A9.006 9.006 0 0015 3a8.963 8.963 0 00-4.25 1.065V16.82zM9.25 4.065A8.963 8.963 0 005 3c-.85 0-1.673.118-2.454.339A.75.75 0 002 4.06v11a.75.75 0 00.954.721A7.506 7.506 0 015 15.5c1.579 0 3.042.487 4.25 1.32V4.065z" />
                    </svg>
                    Education
                  </div>
                </div>

                {/* Timeline Items */}
                <div className="mt-8 space-y-8 sm:mt-12">
                  {/* CS50 */}
                  <div className="relative">
                    <div className="group flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-6">
                      {/* Dot Indicator */}
                      <div className="absolute left-0 top-2 -ml-2 h-3 w-3 rounded-full bg-emerald-600 ring-4 ring-emerald-200/50 transform -translate-x-1/2 sm:left-1/2 sm:-ml-1.5"></div>

                      {/* Left Content */}
                      <div className="sm:w-[45%] sm:pr-4 sm:text-right pl-4 sm:pl-0">
                        <time className="text-sm font-medium text-zinc-500">
                          Apr 2025 - Oct 2025
                        </time>
                        <h3 className="mt-1 text-lg font-bold text-zinc-900 sm:text-xl">
                          CS50's Introduction to Computer Science
                        </h3>
                        <p className="mt-1 text-sm font-medium text-emerald-600">
                          Harvard University (Online)
                        </p>
                      </div>

                      {/* Right Card */}
                      <div className="sm:w-[45%] p-4 sm:p-6 rounded-lg sm:rounded-xl bg-white border border-zinc-200/50  transition-all duration-300 sm:hover:-translate-y-1 group-hover:border-emerald-200/80">
                        <p className="text-sm sm:text-base text-zinc-600">
                          Introduction to computer science and programming,
                          covering abstraction, algorithms, data structures,
                          encapsulation, resource management, security, and web
                          development.
                        </p>
                        <div className="mt-3 sm:mt-4 flex flex-wrap gap-2 justify-end">
                          <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200/50">
                            Python
                          </span>
                          <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200/50">
                            Data Structures
                          </span>
                          <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200/50">
                            Algorithms
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Secondary Education */}
                  <div className="relative">
                    <div className="group flex flex-col sm:flex-row-reverse sm:justify-between gap-4 sm:gap-6">
                      {/* Dot Indicator */}
                      <div className="absolute left-0 top-2 -ml-2 h-3 w-3 rounded-full bg-emerald-600 ring-4 ring-emerald-200/50 transform -translate-x-1/2 sm:left-1/2 sm:-ml-1.5"></div>

                      {/* Right Content */}
                      <div className="sm:w-[45%] sm:pl-4 pl-4 sm:pl-0">
                        <time className="text-sm font-medium text-zinc-500">
                          Mar 2022 - Mar 2023
                        </time>
                        <h3 className="mt-1 text-lg font-bold text-zinc-900 sm:text-xl">
                          Secondary Education (AISSE)
                        </h3>
                        <p className="mt-1 text-sm font-medium text-emerald-600">
                          Kendriya Vidyalaya - India
                        </p>
                      </div>

                      {/* Left Card */}
                      <div className="sm:w-[45%] p-4 sm:p-6 rounded-lg sm:rounded-xl bg-white border border-zinc-200/50  transition-all duration-300 sm:hover:-translate-y-1 group-hover:border-emerald-200/80">
                        <p className="text-sm sm:text-base text-zinc-600">
                          Completed Class 10 (AISSE) with 77% marks. Studied a
                          comprehensive curriculum including Mathematics,
                          Science, Social Studies, English, and Hindi.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Senior Secondary */}
                  <div className="relative">
                    <div className="group flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-6">
                      {/* Dot Indicator */}
                      <div className="absolute left-0 top-2 -ml-2 h-3 w-3 rounded-full bg-emerald-600 ring-4 ring-emerald-200/50 transform -translate-x-1/2 sm:left-1/2 sm:-ml-1.5"></div>

                      {/* Left Content */}
                      <div className="sm:w-[45%] sm:pr-4 sm:text-right pl-4 sm:pl-0">
                        <time className="text-sm font-medium text-zinc-500">
                          Mar 2023 - May 2025
                        </time>
                        <h3 className="mt-1 text-lg font-bold text-zinc-900 sm:text-xl">
                          Senior Secondary Education
                        </h3>
                        <p className="mt-1 text-sm font-medium text-emerald-600">
                          Delhi Public School - India
                        </p>
                      </div>

                      {/* Right Card */}
                      <div className="sm:w-[45%] p-4 sm:p-6 rounded-lg sm:rounded-xl bg-white border border-zinc-200/50  transition-all duration-300 sm:hover:-translate-y-1 group-hover:border-emerald-200/80">
                        <p className="text-sm sm:text-base text-zinc-600">
                          Business/Commerce track with focus on developing
                          analytical and problem-solving skills.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 sm:py-32 relative">
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
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base/7 font-semibold text-zinc-600">
            Build better, faster
          </h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-4xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-5xl">
            Modern web solutions tailored to your needs
          </p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            {/* Mobile-First Development */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-zinc-950 max-lg:text-center">
                    Responsive by Design
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-zinc-600 max-lg:text-center">
                    Every project is built mobile-first, ensuring flawless
                    performance across all devices. I implement modern
                    responsive patterns that adapt beautifully from smartphones
                    to 4K displays.
                  </p>
                </div>
                <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-zinc-700 bg-zinc-900 shadow-2xl">
                    <img
                      className="size-full object-cover object-top"
                      src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                      alt="Responsive design example showing multiple device sizes"
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>

            {/* Performance Optimization */}
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-zinc-950 max-lg:text-center">
                    Lightning Fast
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-zinc-600 max-lg:text-center">
                    Optimized Next.js applications with 90+ Lighthouse scores. I
                    leverage ISR, edge functions, and intelligent caching to
                    deliver instant page loads.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 pt-10">
                  <img
                    className="w-full rounded-t-3xl"
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Performance metrics showing fast load times"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>

            {/* Security */}
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-zinc-950 max-lg:text-center">
                    Secure Foundations
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-zinc-600 max-lg:text-center">
                    Enterprise-grade security with protected API routes, CSRF
                    protection, and strict Content Security Policies. All
                    projects include automated dependency updates.
                  </p>
                </div>
                <div className="flex flex-1 items-center pt-8 px-8">
                  <img
                    className="w-full rounded-t-3xl"
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Security shield icon with lock"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
            </div>

            {/* Full-Stack Capabilities */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-zinc-950 max-lg:text-center">
                    Full-Stack Solutions
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-zinc-600 max-lg:text-center">
                    From pixel-perfect UIs to robust backend systems. I build
                    complete solutions with Next.js, TypeScript, and modern
                    databases like PostgreSQL and MongoDB.
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow">
                  <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-zinc-900 shadow-2xl">
                    <div className="flex bg-zinc-800/40 ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm/6 font-medium text-zinc-400">
                        <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                          api/user/route.ts
                        </div>
                        <div className="border-r border-zinc-600/10 px-4 py-2">
                          components/button.tsx
                        </div>
                      </div>
                    </div>
                    <div className="px-6 pt-6 pb-14 text-sm text-zinc-300">
                      <pre className="w-full p-2">
                        <code>
                          {`import { auth } from "@clerk/nextjs/server";
import connectToDB from "@/lib/db";
import Goal from "@/lib/models/Goal";

export async function GET(req) {
  const { userId } = await auth();
  if (!userId) return new Response("Unauthorized", { status: 401 });

  try {
    await connectToDB();
    const goals = await Goal.find({ userId });
    return Response.json(goals);
  } catch (err) {
    console.error("[GET GOALS ERROR]", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export async function POST(req) {
  const { userId } = await auth();
  if (!userId) return new Response("Unauthorized", { status: 401 });

  try {
    await connectToDB();
    const body = await req.json();
    const { title, description, deadline } = body;

    const newGoal = await Goal.create({
      userId,
      title,
      description,
      deadline: deadline || null,
      completed: false,
    });

    return Response.json({ insertedId: newGoal._id });
  } catch (err) {
    console.error("[POST GOAL ERROR]", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}`}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-24 space-y-12 relative">
        <div className="md:absolute hidden -top-12 right-4 left-auto inset-0 z-0 overflow-hidden md:blur-[200px] blur-[500px] md:w-auto w-xl">
          <svg id="blob-svg" viewBox="0 0 400 400" width="400" height="400">
            <path
              d="M322.5,285Q298,370,204.5,362Q111,354,61,277Q11,200,64.5,129.5Q118,59,203.5,52.5Q289,46,318,123Q347,200,322.5,285Z"
              fill="#6B7280"
              className="transition-all duration-500 ease-in-out"
            ></path>
          </svg>
        </div>
        <div className="md:absolute hidden -bottom-12 left-4 right-auto inset-0 z-0 overflow-hidden md:blur-[200px] blur-[500px] md:w-auto w-xl">
          <svg id="blob-svg" viewBox="0 0 400 400" width="400" height="400">
            <path
              d="M322.5,285Q298,370,204.5,362Q111,354,61,277Q11,200,64.5,129.5Q118,59,203.5,52.5Q289,46,318,123Q347,200,322.5,285Z"
              fill="#6B7280"
              className="transition-all duration-500 ease-in-out"
            ></path>
          </svg>
        </div>
        <div className="space-y-4 max-w-7xl mx-auto text-center">
          <p className="text-sm text-zinc-600 font-medium">Testimonials</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
            What my clients say about me.
          </h1>
          <p className="text-zinc-600 leading-relaxed max-w-3xl mx-auto">
            I believe in building long-lasting relationships with my clients.
            Here are some testimonials from my satisfied clients.
          </p>
        </div>
        <TestimonialSlider />
      </section>
    </main>
  );
}
