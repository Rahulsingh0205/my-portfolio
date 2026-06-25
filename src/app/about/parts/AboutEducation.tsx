export default function AboutEducation() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 border-t border-slate-100">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-2xl font-black text-slate-900 uppercase tracking-wide">
          Academic Foundations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/60 shadow-sm">
            <span className="text-[10px] font-bold text-[#22c55e] bg-emerald-50 px-2.5 py-1 rounded-md uppercase tracking-wider">
              Advanced Technical Track
            </span>
            <h3 className="text-lg font-extrabold text-slate-900 mt-3">
              Computer Science & Data Analytics
            </h3>
            <p className="text-xs text-slate-400 font-semibold mt-0.5">GO Classes Platform</p>
            <p className="text-sm font-medium text-slate-500 mt-3 leading-relaxed">
              Specialized in runtime data structures, algorithmic complexity, computer networking, and core systems logic.
            </p>
          </div>

      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/60 shadow-sm">
           <span className="text-[10px] font-bold text-[#8cc63f] bg-[#8cc63f]/10 px-2.5 py-1 rounded-md uppercase tracking-wider">
  Advanced Technical Track
</span>
            <h3 className="text-lg font-extrabold text-slate-900 mt-3">
              Computer Science & Engineering
            </h3>
            <p className="text-xs text-slate-400 font-semibold mt-0.5">University Studies</p>
            <p className="text-sm font-medium text-slate-500 mt-3 leading-relaxed">
              Established formal training in relational math foundations, programming frameworks, and systematic problem solving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}