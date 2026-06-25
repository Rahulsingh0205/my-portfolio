"use client";

import { FaLinkedinIn, FaGithub, FaXTwitter, FaWordpress } from 'react-icons/fa6';

export default function BlogFooter() {
  return (
    <footer id="blog-footer" className="w-full relative overflow-hidden bg-slate-50">
      
      {/* 1. PATTERN LAYER - Identical to BlogContent */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundImage: "url('/my_pattern.jpg')",
          backgroundRepeat: 'repeat',
          backgroundSize: '1300px' // Same size as BlogContent
        }} 
      />

      {/* 2. OVERLAY LAYER - Identical to BlogContent */}
      <div className="absolute inset-0 z-[1] bg-white/85"></div>
      
      {/* 3. ATTRIBUTION SECTION - Relative z-[2] to sit above layers */}
      <div className="w-full py-20 px-6 md:px-12 text-center relative z-[2]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Let's Build Something Premium.
          </h2>
          <p className="text-lg text-slate-700 font-medium">
            Ready to design scalable full-stack systems? Let's connect and start building.
          </p>
        </div>
      </div>

      {/* 4. SOLID GREEN BAR - Retains its own z-index for visibility */}
      <div className="w-full bg-[#8cc63f] py-8 px-6 md:px-12 relative z-[3]">
        <div className="flex items-center justify-center gap-10">
          {[
            { Icon: FaGithub, link: "https://github.com", label: "GitHub" },
            { Icon: FaWordpress, link: "https://wordpress.org", label: "WordPress" },
            { Icon: FaLinkedinIn, link: "https://linkedin.com", label: "LinkedIn" },
            { Icon: FaXTwitter, link: "https://x.com", label: "Twitter" }
          ].map(({ Icon, link, label }) => (
            <a 
              key={label}
              href={link} 
              target="_blank" 
              rel="noreferrer" 
              className="text-white hover:scale-110 transition-transform duration-200" 
              aria-label={label}
            >
              <Icon className="text-2xl" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}