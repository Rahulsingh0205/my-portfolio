import Image from 'next/image';

export default function AboutBanner() {
  return (
    // Changed py-20 to py-12 for a compact look
    <section className="w-full py-12 px-6 md:px-16 bg-[#8cc63f] text-white relative overflow-hidden">
      
      {/* BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bannerabout.jpg" 
          alt="Banner Background"
          fill
          priority
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[#8cc63f]/30"></div>
      </div>

      {/* CONTENT LAYER */}
      <div className="max-w-4xl mx-auto relative z-10">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase bg-white/20 px-3 py-1 rounded-full inline-block mb-3">
          Behind The Code
        </span>
        
        {/* Adjusted heading size for better proportion in a smaller container */}
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1]">
          ABOUT ME.
        </h1>
      </div>
    </section>
  );
}