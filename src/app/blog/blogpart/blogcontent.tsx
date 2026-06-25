export default function BlogContent() {
  const posts = [1, 2, 3];

  return (
    <section className="w-full py-24 px-6 md:px-12 relative overflow-hidden bg-slate-50">
      
      {/* 1. PATTERN LAYER */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundImage: "url('/my_pattern.jpg')",
          backgroundRepeat: 'repeat',
          backgroundSize: '1300px'
        }} 
      />

      {/* 2. OVERLAY LAYER */}
      <div className="absolute inset-0 z-[1] bg-white/85"></div>

      {/* 3. CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto relative z-[2]">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight text-center mb-16">
          Blogs.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post} 
              // Changed to a softer, more professional shadow
              className="bg-white/90 backdrop-blur-md p-8 rounded-2xl border-[3px] border-[#8cc63f] shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              <span className="text-xs font-bold text-[#8cc63f] mb-3 uppercase tracking-widest block">
                June 25, 2026
              </span>
              <h3 className="text-lg font-semibold text-slate-800 mb-3 tracking-tight">
                Mastering WordPress Hooks {post}
              </h3>
              <p className="text-base text-slate-900 font-normal leading-relaxed">
                A deep dive into custom development and scaling high-impact web applications using modern frameworks.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}