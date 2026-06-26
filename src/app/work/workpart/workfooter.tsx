"use client";

import Image from 'next/image';
import { FaLinkedinIn, FaGithub, FaXTwitter, FaWordpress, FaReact } from 'react-icons/fa6';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

export default function Footer() {
  return (
    <footer id="contact" className="w-full relative overflow-hidden bg-slate-50 text-brand-dark">
      
      {/* 1. UPPER SECTION: GET IN TOUCH & ATTRIBUTION CREDITS */}
      <div className="w-full py-20 px-6 md:px-12 text-center relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/my_pattern.jpg"
            alt="Footer Background Grid Pattern"
            fill
            sizes="100vw"  
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-white/90 backdrop-blur-[1px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-10">

          <h2 className="text-4xl md:text-6xl font-extrabold tracking-normal text-brand-dark uppercase leading-[1.2]">
            GET IN TOUCH
          </h2>
          
          {/* Increased Paragraph Font Size */}
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Love to connect with me or just say hi? It's exciting connecting with new people. Shoot me an email! 📨
          </p>

          <div className="pt-2">
            <a 
              href="mailto:your-email@example.com" 
              // Increased Button Text Size
              className="inline-block border border-slate-300 bg-white/80 hover:bg-white text-slate-700 hover:text-brand-dark font-bold px-12 py-5 rounded-full transition-all duration-200 shadow-sm text-lg tracking-wide"
            >
              Send an Email
            </a>
          </div>

          {/* Increased Attribution Font Size */}
          <div className="pt-10 text-lg md:text-xl font-bold tracking-wide text-slate-400 flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
            <span>Copyright © All rights reserved. Made with</span>
            
            <a href="https://react.dev" target="_blank" rel="noreferrer" className="inline-flex items-center text-[#61DAFB] hover:scale-110 transition-transform duration-200 mx-0.5" title="React">
              <FaReact className="text-3xl" />
            </a>
            <span>,</span>

            <a href="https://nextjs.org" target="_blank" rel="noreferrer" className="inline-flex items-center text-black hover:scale-110 transition-transform duration-200 mx-0.5" title="NextJS">
              <SiNextdotjs className="text-3xl" />
            </a>
            <span>,</span>

            <a href="https://tailwindcss.com" target="_blank" rel="noreferrer" className="inline-flex items-center text-[#38BDF8] hover:scale-110 transition-transform duration-200 mx-0.5" title="TailwindCSS">
              <SiTailwindcss className="text-3xl" />
            </a>
            <span>,</span>

            <a href="https://wordpress.org" target="_blank" rel="noreferrer" className="inline-flex items-center text-[#21759B] hover:scale-110 transition-transform duration-200 mx-0.5" title="WordPress">
              <FaWordpress className="text-3xl" />
            </a>

            <span>and ❤️ by</span>
            <span className="text-slate-700 font-black">Rahul Singh</span>
          </div>
        </div>
      </div>

      {/* 2. LOWER SECTION: SOCIAL LINKS */}
      <div className="w-full bg-brand-green py-8 px-6 md:px-12 relative z-10">
        <div className="flex items-center justify-center gap-10">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white hover:scale-110 transition-transform duration-200" aria-label="GitHub">
            <FaGithub className="text-3xl" />
          </a>
          <a href="https://wordpress.org" target="_blank" rel="noreferrer" className="text-white hover:scale-110 transition-transform duration-200" aria-label="WordPress">
            <FaWordpress className="text-3xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white hover:scale-110 transition-transform duration-200" aria-label="LinkedIn">
            <FaLinkedinIn className="text-3xl" />
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer" className="text-white hover:scale-110 transition-transform duration-200" aria-label="Twitter">
            <FaXTwitter className="text-3xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}