import { Code, Database, Zap } from 'lucide-react';

export default function AboutCapabilities() {
  const caps = [
    { title: "Full-Stack Engineering", desc: "Decoupled system runtimes and fluid visual state architectures.", icon: Code },
    { title: "Database Automation", desc: "Customized relational schema designs, system hooks, and query optimizations.", icon: Database },
    { title: "Asynchronous Operations", desc: "API connects, reliable webhook parsing, and structured data handling.", icon: Zap }
  ];

  return (
    // 1. Removed bg-slate-50 to make the section transparent
    <section className="w-full py-16 px-6 md:px-12 relative overflow-hidden">
      
      {/* 2. BACKGROUND LAYER: Pattern sits at the bottom */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full opacity-[0.15]" 
          style={{ backgroundImage: "url('/my_pattern.jpg')", backgroundSize: 'cover' }} 
        />
      </div>

      {/* 3. CONTENT CONTAINER */}
      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight text-center">
          Core Proficiencies.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caps.map((cap, idx) => (
            <div 
              key={idx} 
              // 4. CARDS: Using bg-white/80 + backdrop-blur allows pattern visibility
              className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border-[3px] border-[#8cc63f] shadow-[0_4px_20px_-5px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_8px_30px_-5px_rgba(0,0,0,0.12)]"
            >
              <div className="mb-6 p-3 bg-[#8cc63f]/10 rounded-lg text-[#8cc63f] w-fit">
                <cap.icon size={28} strokeWidth={2.5} />
              </div>
              
              <h3 className="text-lg font-semibold text-slate-800 mb-3 tracking-tight">
                {cap.title}
              </h3>
              
              <p className="text-base text-slate-900 font-normal leading-relaxed">
                {cap.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}