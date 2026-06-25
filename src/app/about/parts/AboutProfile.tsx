import Image from 'next/image';

export default function AboutProfile() {
  return (
    <section className="w-full py-24 px-6 md:px-12 relative overflow-hidden bg-slate-50 text-slate-900">
      <div className="absolute inset-0 z-0">
        <Image
          src="/my_pattern.jpg"
          alt="Profile Background Grid"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/90 backdrop-blur-[1px]"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Side: Circular Image with Shadow */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-full overflow-hidden shadow-2xl bg-white border-none p-0">
            <Image 
              src="/myphoto.jpg" 
              alt="Profile Photo"
              fill
              sizes="(max-width: 768px) 100vw, 340px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="md:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest text-[#8cc63f] uppercase">
              The Engineering Mindset
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">
              Bridging Secure Backend Architecture with Creative UI.
            </h2>
          </div>
          
          {/* Increased font size slightly with 'text-lg' */}
          <div className="space-y-4 text-slate-600 font-medium leading-relaxed text-lg">
            <p>
              I am a dedicated developer focused on mastering full-stack web engineering, specialized in transforming abstract technical systems into robust, production-grade logic. 
            </p>
            <p>
              Whether structuring highly optimized schema infrastructures, integrating webhooks, or designing seamless dynamic UI modules, I place clean code and performance scaling at the core of everything I deploy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}