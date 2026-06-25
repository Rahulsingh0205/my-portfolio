"use client";

import Image from 'next/image';

export default function BlogBanner() {
  return (
    <section className="w-full py-16 px-6 md:px-16 bg-[#8cc63f] text-white relative overflow-hidden">
      
      {/* 1. BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bannerabout.jpg" // You can change this to a new image like '/bannerblog.jpg'
          alt="Blog Banner Background"
          fill
          priority
          className="object-cover opacity-20"
        />
        {/* Subtle color tint to match your brand */}
        <div className="absolute inset-0 bg-[#8cc63f]/30"></div>
      </div>

      {/* 2. CONTENT LAYER */}
      <div className="max-w-4xl mx-auto relative z-10">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase bg-white/20 px-3 py-1 rounded-full inline-block mb-3">
          Technical Insights
        </span>
        
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1]">
          BLOG.
        </h1>
      </div>
    </section>
  );
}