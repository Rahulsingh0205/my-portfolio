import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 1. OPTIMIZED FONT LOADING
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Prevents layout shifts while loading
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// 2. ADVANCED RESPONSIVE VIEWPORT CONFIGURATION
export const viewport: Viewport = {
  themeColor: "#05050a", // Matches your brand background context
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// 3. ADVANCED SEO & OPEN GRAPH METADATA
export const metadata: Metadata = {
  title: {
    default: "Rahul Singh | Full-Stack & Headless Developer",
    template: "%s | Rahul Singh", // Automatically handles inner sub-pages cleanly (e.g., "About | Rahul Singh")
  },
  description: "Specializing in building high-performance headless architecture web apps, robust backend APIs, and modern decoupled full-stack ecosystems.",
  keywords: ["Rahul Singh", "rhldev", "WordPress Developer", "Headless WordPress", "Next.js Developer", "Java Backend Developer", "Full Stack Engineer"],
  authors: [{ name: "Rahul Singh", url: "https://github.com/rahulsingh" }],
  creator: "Rahul Singh",
  metadataBase: new URL("https://yourportfolio.com"), // Replace with your domain when ready
  
  // Open Graph configs for high-fidelity link shares on Discord, LinkedIn, WhatsApp
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Rahul Singh | Full-Stack & Headless Developer",
    description: "Specializing in high-performance headless architecture web apps and modern full-stack engineering.",
    siteName: "Rahul Singh Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Create a clean image asset in your public folder later
        width: 1200,
        height: 630,
        alt: "Rahul Singh Developer Profile Layout Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Singh | Full-Stack & Headless Developer",
    description: "Building fast, dynamic frontends coupled with secure standalone backends.",
    creator: "@your_twitter_handle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// 4. PRODUCTION ENGINE LAYOUT PRIMER
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 'scroll-smooth' implements native hardware-accelerated viewport transitions 
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-white text-slate-900 selection:bg-brand-green selection:text-white flex flex-col overflow-x-hidden">
        
        {/* Main core layout grid layer handling full height flex spacing constraints */}
        <div className="flex flex-col flex-1 w-full">
          {children}
        </div>

      </body>
    </html>
  );
}