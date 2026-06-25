import { FaGithub, FaLinkedin, FaWordpress, FaCode, FaServer, FaTerminal, FaArrowRight } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="w-full py-24 px-6 md:px-12 bg-brand-green text-white relative overflow-hidden">
      
      {/* Increased column spacing using gap-16 and lg:gap-20 to pull the sections apart */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
        
        {/* LEFT COLUMN: Clean Structural Typography */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-widest text-brand-dark uppercase bg-white/20 px-3 py-1 rounded-sm">
              About Me
            </span>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1]">
              Headless. Backend. Scale.
            </h3>
          </div>

          <p className="text-xl font-medium text-white/90 leading-relaxed">
            I am a full-stack engineer focused on building clean Next.js interfaces powered by optimized WordPress backends and custom Java microservices.
          </p>

          {/* Clean Classical Links */}
          <div className="space-y-3 pt-4 border-t border-white/20">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between font-bold text-lg transition-colors hover:text-brand-dark py-1">
              <span className="flex items-center gap-3"><FaGithub /> GitHub</span>
              <FaArrowRight className="text-xs transform -rotate-45 group-hover:rotate-0 transition-transform" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between font-bold text-lg transition-colors hover:text-brand-dark py-1">
              <span className="flex items-center gap-3"><FaLinkedin /> LinkedIn</span>
              <FaArrowRight className="text-xs transform -rotate-45 group-hover:rotate-0 transition-transform" />
            </a>
            <a href="https://wordpress.org" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between font-bold text-lg transition-colors hover:text-brand-dark py-1">
              <span className="flex items-center gap-3"><FaWordpress /> WordPress</span>
              <FaArrowRight className="text-xs transform -rotate-45 group-hover:rotate-0 transition-transform" />
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Premium White Card with Raw Impact Technical Details */}
        <div className="lg:col-span-7 bg-white text-brand-dark p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-100 space-y-10">
          
          {/* Big Stat Header */}
          <div className="flex items-center gap-6 border-b border-slate-100 pb-8">
            <div className="text-6xl md:text-7xl font-black text-brand-green tracking-tighter">
              2+
            </div>
            <div>
              <h4 className="text-xl font-extrabold tracking-tight">Years Professional Experience</h4>
              <p className="text-sm font-medium text-slate-500 mt-0.5">Shipping clean structural layouts and secure dynamic setups.</p>
            </div>
          </div>

          {/* Crisp, Direct Skill Tracks */}
          <div className="space-y-6">
            {/* Track 1 */}
            <div className="flex gap-5 items-start">
              <div className="bg-brand-green/10 w-10 h-10 rounded-xl flex items-center justify-center text-brand-green text-base shrink-0 mt-0.5">
                <FaCode />
              </div>
              <div>
                <h5 className="font-extrabold text-lg">Front-End & UI Architecture</h5>
                <p className="text-sm font-medium text-slate-500 mt-0.5">Next.js • React • JavaScript • Tailwind CSS • REST/GraphQL Integration</p>
              </div>
            </div>

            {/* Track 2 */}
            <div className="flex gap-5 items-start">
              <div className="bg-brand-green/10 w-10 h-10 rounded-xl flex items-center justify-center text-brand-green text-base shrink-0 mt-0.5">
                <FaServer />
              </div>
              <div>
                <h5 className="font-extrabold text-lg">WordPress Backend Frameworks</h5>
                <p className="text-sm font-medium text-slate-500 mt-0.5">Custom Content Engines • ACF Pro Data Pipes • Elementor Hooks • Custom PHP</p>
              </div>
            </div>

            {/* Track 3 */}
            <div className="flex gap-5 items-start">
              <div className="bg-brand-green/10 w-10 h-10 rounded-xl flex items-center justify-center text-brand-green text-base shrink-0 mt-0.5">
                <FaTerminal />
              </div>
              <div>
                <h5 className="font-extrabold text-lg">Java Integration Core</h5>
                <p className="text-sm font-medium text-slate-500 mt-0.5">Data Engineering • System Logic • Custom Internal Utilities</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}