"use client";

import Image from 'next/image';
import { FaLinkedinIn, FaGithub, FaXTwitter, FaWordpress, FaReact } from 'react-icons/fa6';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full relative overflow-hidden bg-slate-50 text-brand-dark">
      
      {/* 1. BACKGROUND LAYER */}
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

      {/* 2. MAIN CONTENT WRAPPER: Limits width of your text/icons */}
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col min-h-[60vh]">
        
        {/* UPPER CONTENT AREA */}
        <div className="flex-grow py-20 px-6 md:px-12 text-center space-y-10">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-normal text-brand-dark uppercase leading-[1.2]">
            GET IN TOUCH
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Love to connect with me or just say hi? It's exciting connecting with new people. Shoot me an email! 📨
          </p>

          <div className="pt-2">
            <a 
              href="mailto:rahulsouravsingh0205@gmail.com" 
              className="inline-block border border-slate-300 bg-white/80 hover:bg-white text-slate-700 hover:text-brand-dark font-bold px-10 py-4 rounded-full transition-all duration-200 shadow-sm text-base tracking-wide"
            >
              Send an Email
            </a>
          </div>

          <div className="pt-10 text-base md:text-lg font-bold tracking-wide text-slate-400 flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
            <span>Copyright © All rights reserved. Made with</span>
            <a href="https://react.dev" target="_blank" rel="noreferrer" className="inline-flex items-center text-[#61DAFB] hover:scale-110 transition-transform duration-200" title="React"><FaReact className="text-2xl" /></a>
            <span>,</span>
            <a href="https://nextjs.org" target="_blank" rel="noreferrer" className="inline-flex items-center text-black hover:scale-110 transition-transform duration-200" title="NextJS"><SiNextdotjs className="text-2xl" /></a>
            <span>,</span>
            <a href="https://tailwindcss.com" target="_blank" rel="noreferrer" className="inline-flex items-center text-[#38BDF8] hover:scale-110 transition-transform duration-200" title="TailwindCSS"><SiTailwindcss className="text-2xl" /></a>
            <span>,</span>
            <a href="https://wordpress.org" target="_blank" rel="noreferrer" className="inline-flex items-center text-[#21759B] hover:scale-110 transition-transform duration-200" title="WordPress"><FaWordpress className="text-2xl" /></a>
            <span>and ❤️ by</span>
            <span className="text-slate-700 font-black">Rahul Singh</span>
          </div>
        </div>
      </div> 
      {/* WRAPPER ENDS HERE */}

      {/* 3. LOWER SECTION: SOLID GREEN BAR (Now outside the max-w-7xl wrapper) */}
      <div className="w-full bg-[#8cc63f] py-8 px-6 md:px-12 relative z-10">
        <div className="flex items-center justify-center gap-10">
          {[
            { Icon: FaGithub, link: "https://github.com" },
            { Icon: FaWordpress, link: "https://wordpress.org" },
            { Icon: FaLinkedinIn, link: "https://linkedin.com" },
            { Icon: FaXTwitter, link: "https://x.com" }
          ].map((item, i) => (
            <a key={i} href={item.link} target="_blank" rel="noreferrer" className="text-white hover:scale-110 transition-transform duration-200">
              <item.Icon className="text-2xl" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}