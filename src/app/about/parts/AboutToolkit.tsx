import Image from 'next/image';

export default function AboutToolkit() {
  const tools = [
    { name: "Next.js", src: "/images/tools/nextjs.png" },
    { name: "TypeScript", src: "/images/tools/ts.png" },
    { name: "Tailwind", src: "/images/tools/tailwind.png" },
    { name: "Java", src: "/images/tools/java.png" },
    { name: "WordPress", src: "/images/tools/wp.png" },
    { name: "WooCommerce", src: "/images/tools/woocommerce.png" },
    { name: "MySQL", src: "/images/tools/mysql.png" },
    { name: "Git", src: "/images/tools/git.png" },
    { name: "Docker", src: "/images/tools/docker.png" },
    { name: "Figma", src: "/images/tools/figma.png" }
  ];

  return (
    <section className="w-full py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">
        <h2 className="text-xl font-black text-slate-400 uppercase tracking-[0.2em] text-center">
          Technical Arsenal
        </h2>
        
        {/* Full-width responsive grid */}
        <div className="grid grid-cols-5 md:grid-cols-10 gap-4 md:gap-8 items-center justify-items-center">
          {tools.map((tool, idx) => (
            <div 
              key={idx} 
              className="relative w-12 h-12 md:w-16 md:h-16 transition-transform hover:scale-110"
            >
              <Image 
                src={tool.src} 
                alt={tool.name}
                fill
                sizes="(max-width: 768px) 48px, 64px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}