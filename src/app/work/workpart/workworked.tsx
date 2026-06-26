import Image from 'next/image';

const WorkCard = ({ title, desc, skills, image, link }: { title: string; desc: string; skills: string[]; image: string; link: string }) => (
  <div className="group bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col">
    <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" 
      />
    </div>
    <div className="flex-grow">
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 mb-4 text-sm leading-relaxed">{desc}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {skills.map((skill) => (
          <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </div>
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-full py-3 bg-brand-dark hover:bg-[#8cc63f] text-white font-bold rounded-xl text-center transition-colors duration-300"
    >
      Preview Project
    </a>
  </div>
);

export default function WorkWorked() {
  const worksworked = [
    { title: "She is Elevated", desc: "Short description.", skills: ["React"], image: "/sample1.png", link: "#" },
    { title: "Law By Design", desc: "Short description.", skills: ["Next.js"], image: "/sample2.png", link: "#" },
    { title: "Progressive Refractory", desc: "Short description.", skills: ["Tailwind"], image: "/sample3.png", link: "#" },
    { title: "Kainaat", desc: "Short description.", skills: ["JavaScript"], image: "/sample4.png", link: "#" },
    { title: "Garaitz", desc: "Short description.", skills: ["TypeScript"], image: "/sample5.png", link: "#" },
    { title: "Vibe Connect", desc: "Short description.", skills: ["Node.js"], image: "/sample6.png", link: "#" },
  ];

  return (
    <section className="relative w-full py-20 px-6 overflow-hidden">
      {/* Background Image Container with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/my_pattern.jpg"
          alt="Work Background Grid Pattern"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/90 backdrop-blur-[1px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-black mb-12 uppercase tracking-tight text-center md:text-left">Works Worked</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {worksworked.map((item, i) => (
            <WorkCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}