import Image from 'next/image';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Work from '@/components/Work'; 
import BlogPreview from '@/components/BlogPreview';
import Footer from '@/components/Footer';

export default function Home() {
  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "about" },
    { name: "WORK", href: "work" }, 
    { name: "BLOGS", href: "blog" },
    { name: "CONTACT", href: "contact" }, 
  ];

  return (
    <main className="min-h-screen bg-white text-brand-text-main selection:bg-brand-green/30">
      
      {/* 1. TOP NOTICE ANNOUNCEMENT BANNER */}
      <div className="bg-brand-green text-brand-dark text-center py-2 text-xs font-semibold tracking-wide px-4">
        Engineering modern, high-performance web applications and headless architecture migrations.
      </div>

      {/* 2. NAVIGATION NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 text-brand-dark transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          
          {/* Logo Brand Frame - Pure Left Aligned */}
          <div className="relative h-12 w-48 flex items-center justify-start shrink-0">
            <Image 
              src="/my_logo.png" 
              alt="Logo"
              fill
              priority
              className="object-contain object-left"
            />
          </div>

          {/* DESKTOP NAVIGATION MENU */}
          <nav className="hidden md:flex items-center gap-10 lg:gap-12 ml-auto">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-medium tracking-wider text-slate-600 hover:text-brand-green transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

        </div>
      </header>

      {/* Main Content Sections */}
      <div className="relative overflow-hidden bg-gradient-to-b from-slate-50/50 to-white">
        <Hero />
      </div>

      {/* ABOUT SECTION */}
      <About />
      
      {/* WORK SHOWCASE SECTION */}
      <Work />
      
      {/* BLOG PREVIEW */}
      <BlogPreview />
      
    

      <Footer />
    </main>
  );
}