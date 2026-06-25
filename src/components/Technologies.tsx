export default function Technologies() {
  const categories = [
    { title: "Frontend Frameworks", desc: "Building modular interfaces using React and Next.js static optimizations.", tag: "Next.js" },
    { title: "Backend Infrastructure", desc: "Architecting structured, type-safe API platforms using robust core languages.", tag: "Java" },
    { title: "Content Architecture", desc: "Leveraging headless endpoints and decoupling traditional layouts.", tag: "WordPress" }
  ];

  return (
    <section id="tech" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-white">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-text-main tracking-tight">
          Things I am <span className="italic font-normal">really good</span> at
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((item, idx) => (
          <div key={idx} className="bg-brand-gray-bg/60 border border-slate-100 rounded-2xl p-8 space-y-6 flex flex-col justify-between hover:shadow-xl hover:bg-brand-gray-bg/90 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center font-bold text-brand-green text-lg shadow-sm">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold text-brand-text-main">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 bg-white border border-slate-200 px-3 py-1.5 rounded-md self-start">
              {item.tag}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}