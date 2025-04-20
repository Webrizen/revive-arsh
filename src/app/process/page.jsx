import React from "react";

export default function page() {
  return (
    <main className="overflow-x-hidden">
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
            My process
          </h2>
          <h1 className="text-4xl md:text-6xl font-medium mb-6">
            How I work with clients.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            I don’t waste time — mine or yours. Every project is designed,
            built, and delivered with clarity, speed, and brutal precision. I
            work with people who are serious about outcomes, not excuses.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 lg:px-8 group/section [counter-increment:section]">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
            <div className="flex justify-center">
              <div
                className="w-[20rem] flex-none lg:w-[40rem]"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="justify-center lg:justify-end lg:group-even/section:justify-start relative flex aspect-[719/680] w-full grayscale hover:grayscale-0 transition-all duration-500">
                  <svg
                    viewBox="0 0 655 680"
                    fill="none"
                    className="h-full overflow-visible"
                  >
                    <g clipPath="url(#clip)">
                      <g className="origin-center scale-100 transition-transform duration-500 group-hover/section:scale-105">
                        <foreignObject width="655" height="680">
                          <img
                            alt=""
                            loading="lazy"
                            width="2400"
                            height="1800"
                            decoding="async"
                            className="w-full bg-neutral-100 object-cover transition-transform duration-500"
                            sizes="(min-width: 1024px) 41rem, 31rem"
                            src="https://picsum.photos/400/600?grayscale"
                            style={{
                              color: "transparent",
                              aspectRatio: "655 / 680",
                            }}
                          />
                        </foreignObject>
                      </g>
                      <use
                        href="#shape"
                        strokeWidth="2"
                        className="stroke-neutral-950/10"
                      ></use>
                    </g>
                    <defs>
                      <clipPath id="clip">
                        <path
                          id="shape"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm-512 160A11.5 11.5 0 0 1 37.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 311H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Z"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
              <div style={{ opacity: 1, transform: "none" }}>
                <div
                  className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
                  aria-hidden="true"
                ></div>
                <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                  Discover
                </h2>
                <div className="mt-6 space-y-6 text-base text-neutral-600">
                  <p>
                    First, I ask the right questions. What’s broken? What’s
                    costing you time, money, or sanity? Once I understand the
                    pain, I map out the fastest route to fix it.
                  </p>
                  <p>
                    I don’t do vague. If your goals are unclear, I’ll make them
                    clear. If you’re uncertain about what you want — I’ll
                    challenge you until you are.
                  </p>
                  <p>
                    Once I have full context, I decide whether this project
                    deserves my time. If it does — we build.
                  </p>
                </div>
                <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
                  Included in this phase
                </h3>
                <ul role="list" className="mt-4 flex flex-wrap gap-4">
                  {[
                    "One-on-one strategy call",
                    "Pain-point deep dive",
                    "Goal alignment",
                    "Tech stack recommendation",
                    "Risk assessment",
                    "Timeline definition",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 lg:px-8 group/section [counter-increment:section] py-20 md:py-48">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
            {/* Image */}
            <div className="flex justify-center">
              <div className="w-[20rem] flex-none lg:w-[40rem]">
                <div className="relative flex aspect-[719/680] w-full grayscale justify-center lg:justify-end lg:group-even/section:justify-start">
                  <svg viewBox="0 0 719 680" fill="none" className="h-full">
                    <g clipPath="url(#build-clip)" className="group">
                      <g className="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
                        <foreignObject width="719" height="680">
                          <img
                            src="https://picsum.photos/200/300?grayscale"
                            alt="Image of process"
                            loading="lazy"
                            decoding="async"
                            className="w-full bg-neutral-100 object-cover"
                            style={{
                              color: "transparent",
                              aspectRatio: "719 / 680",
                            }}
                          />
                        </foreignObject>
                      </g>
                      <use
                        href="#build-shape"
                        strokeWidth="2"
                        className="stroke-neutral-950/10"
                      />
                    </g>
                    <defs>
                      <clipPath id="build-clip">
                        <path
                          id="build-shape"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M89.827 9.245A11.5 11.5 0 0 1 101.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 138.87 151H75.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Zm-64 321A11.5 11.5 0 0 1 37.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 472H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128ZM526.795 470a15.999 15.999 0 0 0-15.689 12.862l-32.032 160.159c-4.3 21.502-23.18 36.979-45.107 36.979H115.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C177.096 91.477 195.975 76 217.902 76h318.465c29.028 0 50.8 26.557 45.107 55.021l-33.768 168.841c-1.98 9.901 5.592 19.138 15.689 19.138h17.075c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981l24.754-123.771A11.5 11.5 0 0 1 644.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 681.87 311H623c-22.866 0-28.984 7.98-31.989 25.931l-24.759 123.798A11.5 11.5 0 0 1 554.87 470h-28.075Z"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
              <div>
                <div
                  className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
                  aria-hidden="true"
                ></div>
                <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                  Build
                </h2>
                <div className="mt-6 space-y-6 text-base text-neutral-600">
                  <p>
                    No endless meetings. No fluff. I break the project into
                    rapid sprints, each with clear deliverables. You’ll get
                    progress updates, not surprises.
                  </p>
                  <p>
                    I build with the best tools in the ecosystem — Next.js,
                    Tailwind, Firebase, and more. Performance, security, and
                    scale are baked in from day one.
                  </p>
                  <p>
                    You give feedback, I adjust. Fast. My builds are modular,
                    maintainable, and designed to grow with your business, not
                    break under pressure.
                  </p>
                </div>
                <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
                  Included in this phase
                </h3>
                <ul role="list" className="mt-4 flex flex-wrap gap-4">
                  {[
                    "Wireframes & prototypes",
                    "Frontend & backend dev",
                    "Responsive & SEO-ready design",
                    "API integrations",
                    "Performance optimization",
                    "Weekly status reports",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Quote */}
                <div className="pl-8 mt-12 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                  <figure className="text-sm">
                    <blockquote className="text-neutral-600 [&>*]:relative [&>:first-child]:before:absolute [&>:first-child]:before:right-full [&>:first-child]:before:content-['“'] [&>:last-child]:after:content-['”']">
                      <p>
                        Arshahdul & team was a pleasure to work with. They were
                        timely, efficient, and delivered top-notch work. I
                        highly recommend them to anyone in need of their
                        services.
                      </p>
                    </blockquote>
                    <figcaption className="mt-6 font-semibold text-neutral-950">
                      Harshit Jaiswal, Owner of CodeCashFlow
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 lg:px-8 group/section [counter-increment:section]">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
            <div className="flex justify-center">
              <div className="w-[20rem] flex-none lg:w-[40rem]">
                <div className="relative flex aspect-[719/680] w-full grayscale justify-center lg:justify-end lg:group-even/section:justify-start">
                  <svg viewBox="0 0 719 680" fill="none" className="h-full">
                    <g clipPath="url(#clip-deliver)" className="group">
                      <g className="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
                        <foreignObject width="719" height="680">
                          <img
                            alt="Meeting"
                            src="https://picsum.photos/400/600?grayscale"
                            width={2400}
                            height={1600}
                            className="w-full bg-neutral-100 object-cover"
                          />
                        </foreignObject>
                      </g>
                      <use
                        href="#shape-deliver"
                        strokeWidth="2"
                        className="stroke-neutral-950/10"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip-deliver">
                        <path
                          id="shape-deliver"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M632.827 9.245A11.5 11.5 0 0 1 644.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 681.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-95.832 479.159c-4.3 21.502-23.18 36.979-45.107 36.979H178.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C240.096 91.477 258.975 76 280.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm0 479A11.5 11.5 0 0 1 644.104 479h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 681.87 630h-63.366c-7.257 0-12.7-6.639-11.277-13.755l25.6-128ZM37.104 159a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C-1.196 303.361 4.247 310 11.504 310H74.87a11.5 11.5 0 0 0 11.277-9.245l24.76-123.798a.03.03 0 0 1 .052-.012c.015.021.048.012.052-.014C114.016 158.98 120.134 151 143 151h58.87a11.5 11.5 0 0 0 11.277-9.245l25.6-128C240.17 6.64 234.727 0 227.47 0h-63.366a11.5 11.5 0 0 0-11.277 9.245l-24.754 123.771c-.002.011-.016.015-.024.006-.007-.009-.021-.005-.023.007-3.469 18.452-13.551 25.107-24.88 25.981-.848.065-1.699 0-2.549-.009l-.127-.001H37.104Z"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
              <div>
                <div
                  className="font-display text-base font-semibold
                before:text-neutral-300 before:content-['/_']
                after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
                  aria-hidden="true"
                />
                <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                  Launch & Iterate
                </h2>
                <div className="mt-6 space-y-6 text-base text-neutral-600">
                  <p>
                    When the product is live, I don’t disappear. I monitor real
                    usage, fix any bugs instantly, and optimize based on actual
                    data. Iteration is where 10x results come from — not during
                    design reviews.
                  </p>
                  <p>
                    We move fast, respond to feedback, and make decisions backed
                    by user behavior — not opinions.
                  </p>
                </div>
                <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
                  Included in this phase
                </h3>
                <ul role="list" className="mt-4 flex flex-wrap gap-4">
                  {[
                    "Production deployment",
                    "Performance tracking",
                    "Post-launch fixes",
                    "User behavior analytics",
                    "Ongoing improvements (optional)",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
