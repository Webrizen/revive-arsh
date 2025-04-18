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
      <section className="bg-zinc-100 border-x border-t border-zinc-300 rounded-t-4xl w-full py-24 relative">
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
                  A passionate full-stack developer crafting beautiful and
                  functional digital experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 overflow-x-hidden relative">
          <Marquee />
          <dl className="grid grid-cols-1 gap-x-0 gap-y-6 h-full text-center lg:grid-cols-4 mt-4">
            {stats.map((stat, index) => {
              const isFirst = index === 0;
              const isLast = index === stats.length - 1;

              return (
                <div
                  key={stat.id}
                  className={`flex w-full h-full flex-col gap-y-4 md:px-4 ${
                    !isFirst && !isLast ? "border-x border-zinc-200" : ""
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
                  Unknown Past, Clear Intent, Silent Execution.
                </p>
                <p className="mt-6 text-lg leading-8 text-zinc-600">
                  I'm a passionate full-stack developer with 5+ years of
                  experience building modern web applications. I specialize in
                  React, Next.js, and Node.js ecosystems.
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
            <div className="flex items-start justify-end">
              <Image
                src={ArshAbout}
                placeholder="blur"
                alt="Arshahdul Ahmed"
                width={400}
                height={600}
                className="rounded-xl w-full h-full aspect-square object-cover object-top mb-4 grayscale-100"
              />
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
      <section className="relative isolate bg-white px-6 py-24 sm:py-32 w-full">
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
        <div className="mx-auto max-w-4xl">
          <div className="space-y-4 max-w-7xl mx-auto text-center">
            <p className="text-sm text-zinc-600 font-medium">
              My work & Education
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
              Long story, Professional Journey
            </h1>
            <p className="text-zinc-600 leading-relaxed max-w-3xl mx-auto">
              My career path and academic background that shaped my expertise
              and passion for web development. I have worked on various
              projects, collaborated with talented teams, and continuously honed
              my skills to deliver high-quality solutions.
            </p>
          </div>

          {/* Combined timeline for work and education */}
          <div className="mt-16 flow-root">
            <div className="-mb-8">
              {/* Work Experience */}
              <div className="relative pb-8">
                <span
                  className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                ></span>
                <div className="relative flex space-x-3">
                  <div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600">
                      <svg
                        className="h-5 w-5 text-white"
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
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between pt-1.5">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Senior Frontend Developer
                      </h3>
                      <p className="text-sm text-gray-500">
                        TechCorp Solutions • Full-time
                      </p>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <time dateTime="2020-01">Jan 2020</time> -{" "}
                      <time dateTime="2023-12">Present</time>
                    </div>
                  </div>
                </div>
                <div className="ml-12 mt-2">
                  <p className="text-gray-600">
                    Led a team of 5 developers to build responsive web
                    applications using React and Next.js. Improved performance
                    by 40% through code optimization and implemented CI/CD
                    pipelines.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700">
                      React
                    </span>
                    <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700">
                      TypeScript
                    </span>
                    <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700">
                      GraphQL
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative pb-8">
                <span
                  className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                ></span>
                <div className="relative flex space-x-3">
                  <div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600">
                      <svg
                        className="h-5 w-5 text-white"
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
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between pt-1.5">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Frontend Developer
                      </h3>
                      <p className="text-sm text-gray-500">
                        Digital Innovations Inc. • Full-time
                      </p>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <time dateTime="2017-06">Jun 2017</time> -{" "}
                      <time dateTime="2019-12">Dec 2019</time>
                    </div>
                  </div>
                </div>
                <div className="ml-12 mt-2">
                  <p className="text-gray-600">
                    Developed and maintained multiple React applications with
                    Redux state management. Collaborated with UX designers to
                    implement responsive interfaces and accessibility features.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700">
                      JavaScript
                    </span>
                    <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700">
                      Redux
                    </span>
                    <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700">
                      Sass
                    </span>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="relative pb-8">
                <span
                  className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                ></span>
                <div className="relative flex space-x-3">
                  <div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600">
                      <svg
                        className="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10.75 16.82A7.462 7.462 0 0115 15.5c.71 0 1.396.098 2.046.282A.75.75 0 0018 15.06v-11a.75.75 0 00-.546-.721A9.006 9.006 0 0015 3a8.963 8.963 0 00-4.25 1.065V16.82zM9.25 4.065A8.963 8.963 0 005 3c-.85 0-1.673.118-2.454.339A.75.75 0 002 4.06v11a.75.75 0 00.954.721A7.506 7.506 0 015 15.5c1.579 0 3.042.487 4.25 1.32V4.065z" />
                      </svg>
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between pt-1.5">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Master of Computer Science
                      </h3>
                      <p className="text-sm text-gray-500">
                        Stanford University
                      </p>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <time dateTime="2015-09">2015</time> -{" "}
                      <time dateTime="2017-05">2017</time>
                    </div>
                  </div>
                </div>
                <div className="ml-12 mt-2">
                  <p className="text-gray-600">
                    Specialized in Human-Computer Interaction and Web
                    Technologies. Thesis on "Optimizing React Component
                    Performance in Large-Scale Applications".
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">
                      GPA: 3.8/4.0
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative pb-8">
                <div className="relative flex space-x-3">
                  <div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600">
                      <svg
                        className="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10.75 16.82A7.462 7.462 0 0115 15.5c.71 0 1.396.098 2.046.282A.75.75 0 0018 15.06v-11a.75.75 0 00-.546-.721A9.006 9.006 0 0015 3a8.963 8.963 0 00-4.25 1.065V16.82zM9.25 4.065A8.963 8.963 0 005 3c-.85 0-1.673.118-2.454.339A.75.75 0 002 4.06v11a.75.75 0 00.954.721A7.506 7.506 0 015 15.5c1.579 0 3.042.487 4.25 1.32V4.065z" />
                      </svg>
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between pt-1.5">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Bachelor of Science in Software Engineering
                      </h3>
                      <p className="text-sm text-gray-500">MIT</p>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <time dateTime="2011-09">2011</time> -{" "}
                      <time dateTime="2015-05">2015</time>
                    </div>
                  </div>
                </div>
                <div className="ml-12 mt-2">
                  <p className="text-gray-600">
                    Focused on full-stack development and software architecture.
                    President of the Web Development Club and lead developer for
                    campus mobile app.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">
                      Graduated with Honors
                    </span>
                  </div>
                </div>
              </div>
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
