import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/system/navbar";

const dM_Sans = DM_Sans({
  weights: ["100", "200", "300", "400", "500", "600", "800", "900", "1000"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Arshahdul Ahmed - Nextjs 15 | Framer Motion | Strapi/Sanity | Tailwind",
  description: "I am a web developer with over 5+ years of hands-on experience in building full-stack web applications, websites, and SaaS platforms. My primary expertise lies in Next.js 15, Framer Motion, TypeScript, and Tailwind CSS, with additional experience in both client-side and server-side JavaScript development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" supressHydrationWarning>
      <body className={`${dM_Sans.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
