import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/system/navbar";
import Link from "next/link";
import StripTransition from "@/components/system/Transition";
import { NavigationProvider } from "@/components/context/navigation-context";
import Footer from "@/components/system/footer";

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
  authors: [{ name: "Arshahdul Ahmed", url: "https://revive-arsh.vercel.app" }],
  creator: "Arshahdul Ahmed",
  publisher: "Arshahdul Ahmed",
  openGraph: {
    title:
      "Arshahdul Ahmed - Nextjs 15 | Framer Motion | Strapi/Sanity | Tailwind",
    description:
      "I am a web developer with over 5+ years of hands-on experience in building full-stack web applications, websites, and SaaS platforms. My primary expertise lies in Next.js 15, Framer Motion, TypeScript, and Tailwind CSS, with additional experience in both client-side and server-side JavaScript development.",
    url: "https://revive-arsh.vercel.app",
    siteName: "Arshahdul Ahmed",
    images: [
      {
        url: "https://revive-arsh.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arshahdul Ahmed - Nextjs 15 | Framer Motion | Strapi/Sanity | TailwindCSS',
    description: 'I am a web developer with over 5+ years of hands-on experience in building full-stack web applications, websites, and SaaS platforms. My primary expertise lies in Next.js 15, Framer Motion, TypeScript, and Tailwind CSS, with additional experience in both client-side and server-side JavaScript development.',
    creator: '@shadow_jsx',
    images: ['https://revive-arsh.vercel.app/images/og-image.png'],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  manifest: "/manifest.json",
  metadataBase: new URL("https://revive-arsh.vercel.app"),
  robots: {
    index: true,
    follow: true,
  },
  applicationName: "Arshahdul Ahmed",
  category: "website",
  classification: "personal",
  publisher: "Arshahdul Ahmed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bricolage.className} antialiased`} suppressHydrationWarning>
        <NavigationProvider>
        <StripTransition>
          <Navbar />
          {children}
          <Footer />
        </StripTransition>
        </NavigationProvider>
      </body>
    </html>
  );
}
