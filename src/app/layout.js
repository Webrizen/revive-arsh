import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/system/navbar";
import Link from "next/link";
import StripTransition from "@/components/system/Transition";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title:
    "Arshahdul Ahmed - Nextjs 15 | Framer Motion | Strapi/Sanity | Tailwind",
  description:
    "I am a web developer with over 5+ years of hands-on experience in building full-stack web applications, websites, and SaaS platforms. My primary expertise lies in Next.js 15, Framer Motion, TypeScript, and Tailwind CSS, with additional experience in both client-side and server-side JavaScript development.",
  keywords:
    "Next.js 15, Framer Motion, TypeScript, Tailwind CSS, web developer, full-stack development, web applications, websites, SaaS platforms",
  authors: [{ name: "Arshahdul Ahmed", url: "https://arshahdul.webrizen.com" }],
  creator: "Arshahdul Ahmed",
  publisher: "Arshahdul Ahmed",
  openGraph: {
    title:
      "Arshahdul Ahmed - Nextjs 15 | Framer Motion | Strapi/Sanity | Tailwind",
    description:
      "I am a web developer with over 5+ years of hands-on experience in building full-stack web applications, websites, and SaaS platforms. My primary expertise lies in Next.js 15, Framer Motion, TypeScript, and Tailwind CSS, with additional experience in both client-side and server-side JavaScript development.",
    url: "https://arshahdul.webrizen.com",
    siteName: "Arshahdul Ahmed",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Arshahdul Ahmed - Nextjs 15 | Framer Motion | Strapi/Sanity | Tailwind",
    description:
      "I am a web developer with over 5+ years of hands-on experience in building full-stack web applications, websites, and SaaS platforms. My primary expertise lies in Next.js 15, Framer Motion, TypeScript, and Tailwind CSS, with additional experience in both client-side and server-side JavaScript development.",
    images: "/images/og-image.png",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "google-site-verification=your-google-verification-code",
    yandex: "your-yandex-verification-code",
    other: "your-other-verification-code",
  },
  twitterCard: {
    site: "@arshahdul",
    creator: "@arshahdul",
  },
  applicationName: "Arshahdul Ahmed",
  category: "website",
  classification: "personal",
  publisher: "Arshahdul Ahmed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bricolage.className} antialiased`}>
      <StripTransition />
        <Navbar />
        {children}
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
              <div className="mx-auto text-center max-w-xl md:max-w-2xl relative space-y-8">
                <h1 className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight font-bold text-zinc-950">
                  Say Hi 👋,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 from-20% via-indigo-400 via-30% to-teal-600">
                    Get started
                  </span>{" "}
                  and Complete.
                </h1>
                <p className="text-zinc-700">
                  I’m always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision. Let’s connect and
                  explore how we can work together!
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
      </body>
    </html>
  );
}
