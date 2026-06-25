import Image from 'next/image';
import { FaFileArrowDown } from 'react-icons/fa6';

export default function Hero() {
  return (
    /* 1. Parent container spans 100% viewport width with no layout constraints */
    <section className="w-full py-24 px-6 md:px-12 relative overflow-hidden bg-slate-50">
      
      {/* FULLY OPTIMIZED BACKGROUND IMAGE - Spanning edge-to-edge natively */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/my_pattern.jpg" 
          alt="Hero Background Grid Pattern"
          fill
          priority 
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft layout overlay to ensure your text stays perfectly legible over the pattern */}
        <div className="absolute inset-0 bg-white/90 backdrop-blur-[1px]"></div>
      </div>

      {/* 2. Centered Inner Content Wrapper - Restores clean layout grid lines */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Title Headers & Action CTAs */}
        <div className="md:col-span-7 space-y-6">
          <div className="space-y-2">
            <p className="text-sm md:text-base font-bold text-slate-500 uppercase tracking-widest">
              HI, I'M
            </p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-brand-dark leading-[1.1]">
              RAHUL SINGH
            </h1>
            <h2 className="text-2xl md:text-4xl font-extrabold text-brand-green tracking-tight uppercase">
              FULL STACK DEVELOPER
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-xl font-medium leading-relaxed">
            A developer dedicated to mastering the intersection of creative UI and secure backend architecture. I specialize in building custom, high-impact web applications designed to perform at scale.
          </p>
          
          {/* Action Row */}
          <div className="pt-4 flex flex-wrap gap-4 items-center">
            <a 
              href="#tech" 
              className="inline-block bg-brand-dark hover:bg-slate-800 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-md tracking-wide"
            >
              Explore My Work
            </a>
            
            {/* 🎯 UPDATED: RESUME DOWNLOAD CTA */}
            <a 
              href="/updatedresume2026.pdf" 
              download="updatedresume2026.pdf"
              className="inline-flex items-center gap-2.5 bg-white/80 hover:bg-slate-100 border border-slate-300 text-brand-dark font-bold px-8 py-3.5 rounded-xl transition-all tracking-wide shadow-sm"
            >
              <FaFileArrowDown className="text-lg text-brand-green" />
              Download Resume
            </a>
          </div>
        </div>
        
        {/* Right Column: Profile Image Layout Container */}
        <div className="md:col-span-5 flex justify-center items-center">
          <div className="relative w-[320px] h-[320px] md:w-[360px] md:h-[360px]">
            
            {/* Strictly directional bottom shadow (0px horizontal shift, zero spread) */}
            <div className="absolute inset-0 rounded-full shadow-[0_16px_20px_0_rgba(0,0,0,0.12)] z-10"></div>
            
            {/* Crisp circular profile frame layer (White border entirely removed) */}
            <div className="relative w-full h-full rounded-full overflow-hidden z-20">
              <Image 
                src="/myphoto.jpg" 
                alt="Rahul Singh"
                fill
                priority
                className="object-cover"
                sizes="(max-w-768px) 100vw, 360px"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}