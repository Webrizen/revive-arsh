import React from "react";
import { Github, Instagram, Youtube } from "lucide-react";

export default function page() {
  return (
    <>
      <section className="bg-white py-12 relative">
        <div
          className="absolute inset-x-0 top-0 left-0 md:w-[500px] w-[200px] h-[500px] blur-[300px] bg-gradient-to-t from-indigo-300  to-red-300"
        >
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
              Let’s work together
            </h2>
            <p className="mt-4 text-lg leading-8 text-zinc-600">
              I can’t wait to hear from you.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* LEFT SIDE */}
            <div className="space-y-12 text-base leading-7 text-zinc-600 ">
              <div className="md:pt-42">
                <h3 className="text-sm font-semibold text-zinc-900">
                  Build something timeless with me.
                </h3>
                <p className="mt-2">
                  Whether you're a startup chasing disruption, or a founder
                  crafting your next digital empire — I can bring your ideas to
                  life with clarity, speed, and craft.
                </p>
                <div className="mt-6 space-y-4">
                  <div>
                    <strong className="text-zinc-900">My home</strong>
                    <br />
                    Kolkata, West Bengal,
                    <br />
                    (Not Exactly a city of dreams, but close enough)
                  </div>
                  <div>
                    <strong className="text-zinc-900 ">Working Hours</strong>
                    <br />
                    Monday – Saturday
                    <br />
                    10:00 AM – 6:00 PM IST
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-zinc-900">
                  Connect with me...
                </h3>
                <ul className="mt-2 space-y-2">
                  <li>
                    let's talk —{" "}
                    <a
                      href="mailto:careers@webrizen.com"
                      className="text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      webrizen@gmail.com
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-zinc-900">
                  Follow us
                </h3>
                <div className="mt-4 flex space-x-6 text-zinc-400">
                  <a
                    target="_blank"
                    href="https://github.com/Webrizen"
                    className="hover:text-indigo-500"
                  >
                    <Github />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/shadow_architect_jsx"
                    className="hover:text-indigo-500"
                  >
                    <Instagram />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/@Arshahdul_ahmed"
                    className="hover:text-indigo-500"
                  >
                    <Youtube />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <form
              action={`https://formsubmit.co/webrizen@gmail.com`}
              method="POST"
              className="space-y-6"
            >
              <h1 className="md:text-4xl font-bold text-zinc-700">
                Connect with us
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input sm:col-span-2 !rounded-t-3xl"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input sm:col-span-2"
                />
                <input
                  type="hidden"
                  name="_autoresponse"
                  value="Thanks for reaching out! We'll get back to you soon."
                />
                <input
                  type="hidden"
                  name="_next"
                  value="https://revive-arsh.vercel.app/contact/thanks"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  className="input sm:col-span-2"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className="input sm:col-span-2"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  className="input sm:col-span-2 !rounded-b-3xl"
                />
                <fieldset className="sm:col-span-2 p-4 mt-8 rounded-xl bg-white/50 backdrop-blur-sm border border-zinc-300 transition-all duration-200">
                  <legend className="px-3 py-1 text-sm font-medium text-zinc-900 bg-white rounded-lg border border-zinc-300">
                    Project Budget
                  </legend>
                  <div className="mt-4 grid md:grid-cols-2 grid-cols-1 gap-4">
                    {[
                      "$100 – $500",
                      "$1K – $10K",
                      "$50K – $150K",
                      "More than $150K",
                    ].map((range, i) => (
                      <label
                        key={i}
                        className="relative flex items-start p-3 space-x-3 rounded-lg bg-white hover:bg-zinc-50  cursor-pointer transition-colors duration-150"
                      >
                        <div className="flex items-center h-5">
                          <input
                            type="radio"
                            name="budget"
                            className="peer absolute opacity-0"
                          />
                          <div className="h-4 w-4 rounded-full border border-zinc-300 dark:border-zinc-600 flex items-center justify-center transition-all duration-200 peer-checked:border-indigo-500 peer-checked:bg-indigo-500 peer-focus:ring-2 peer-focus:ring-indigo-500/30">
                            <div className="h-1.5 w-1.5 rounded-full bg-white opacity-0 transition-opacity duration-200 peer-checked:opacity-100"></div>
                          </div>
                        </div>
                        <div className="min-w-0 flex-1 text-sm">
                          <span className="font-medium text-zinc-900">
                            {range}
                          </span>
                          {i === 3 && (
                            <p className="mt-1 text-xs text-zinc-500">
                              Enterprise-level projects
                            </p>
                          )}
                        </div>
                      </label>
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-zinc-500">
                    This will helps me scope the project appropriately*
                  </p>
                </fieldset>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-white text-sm font-semibold hover:bg-zinc-800 cursor-pointer"
              >
                Let’s work together
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
