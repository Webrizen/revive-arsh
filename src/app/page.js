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
    <main className="flex min-h-screen flex-col items-center justify-between px-4">
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
                and I make Next.js 15 Websites.
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8 overflow-x-hidden">
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
