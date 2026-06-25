"use client";

import { FaLinkedinIn, FaGithub, FaXTwitter, FaWordpress } from 'react-icons/fa6';

export default function AboutCta() {
  return (
    <section id="cta" className="w-full relative overflow-hidden">
      
      {/* 1. UNIFIED STYLIZED BACKGROUND LAYER */}
      {/* This fills the whole section so the pattern is visible everywhere */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full opacity-[0.15] mix-blend-multiply" 
          style={{ backgroundImage: "url('/my_pattern.jpg')", backgroundSize: 'cover' }} 
        />
      </div>
      
      {/* 2. ATTRIBUTION SECTION (Now Transparent) */}
      {/* Removed bg-white/80 and backdrop-blur-sm to make it transparent */}
      <div className="w-full py-20 px-6 md:px-12 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Let's Build Something Premium.
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Ready to design scalable full-stack systems? Let's connect and start building.
          </p>
        </div>
      </div>

      {/* 3. SOLID GREEN BAR (Preserved) */}
      <div className="w-full bg-[#8cc63f] py-8 px-6 md:px-12 relative z-20">
        <div className="flex items-center justify-center gap-10">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white hover:scale-110 transition-transform duration-200" aria-label="GitHub">
            <FaGithub className="text-2xl" />
          </a>
          <a href="https://wordpress.org" target="_blank" rel="noreferrer" className="text-white hover:scale-110 transition-transform duration-200" aria-label="WordPress">
            <FaWordpress className="text-2xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white hover:scale-110 transition-transform duration-200" aria-label="LinkedIn">
            <FaLinkedinIn className="text-2xl" />
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer" className="text-white hover:scale-110 transition-transform duration-200" aria-label="Twitter">
            <FaXTwitter className="text-2xl" />
          </a>
        </div>
      </div>

    </section>
  );
}