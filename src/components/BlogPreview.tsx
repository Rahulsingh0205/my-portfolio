"use client";

import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';

export default function BlogPreview() {
  const mockBlogs = [
    { 
      title: 'Architecting Headless Content Systems with Next.js', 
      category: 'Headless', 
      readings: '5 min read' 
    },
    { 
      title: 'A Pragmatic Shift from Core Platforms to Enterprise Frameworks', 
      category: 'Architecture', 
      readings: '8 min read' 
    },
    { 
      title: 'Optimizing Asynchronous Data Pipes for High-Traffic Nodes', 
      category: 'Backend', 
      readings: '6 min read' 
    },
  ];

  return (
    /* Parent section wrapping the identical hero pattern setup */
    <section id="blogs" className="w-full py-24 px-6 md:px-12 relative overflow-hidden bg-slate-50 text-brand-dark">
      
      {/* BACKGROUND IMAGE FRAME WITH EXACT HERO VISIBILITY LAYER */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/my_pattern.jpg"
          alt="Blog Background Grid Pattern"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/90 backdrop-blur-[1px]"></div>
      </div>

      {/* Inner Content Wrapper */}
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Clean Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6 border-b border-slate-200/60 pb-8">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest text-brand-green uppercase bg-brand-green/10 px-3 py-1 rounded-sm">
              Publication Insights
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-none text-brand-dark">
              Latest Insights.
            </h2>
          </div>
          
          <button className="bg-brand-dark hover:bg-slate-800 text-white font-bold px-6 py-3.5 rounded-xl transition-all text-sm self-start sm:self-auto shadow-sm">
            Read more insights
          </button>
        </div>

        {/* 3-Column Boxless Minimalist Layout */}
        <div className="grid md:grid-cols-3 gap-12">
          {mockBlogs.map((blog, idx) => (
            <article 
              key={idx} 
              className="group cursor-pointer flex flex-col justify-between py-2 bg-transparent"
            >
              <div className="space-y-4">
                {/* Meta Category Row */}
                <div className="flex items-center gap-2 text-xs font-bold text-brand-green uppercase tracking-wider">
                  <span>{blog.category}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-400 normal-case font-medium">{blog.readings}</span>
                </div>
                
                {/* Clean, Frameless Title */}
                <h3 className="text-xl font-extrabold text-brand-dark group-hover:text-brand-green transition-colors duration-200 leading-snug tracking-tight">
                  {blog.title}
                </h3>
              </div>

              {/* Minimal Text Action Trigger */}
              <div className="text-sm font-bold text-brand-dark mt-8 flex items-center gap-1.5 group-hover:text-brand-green transition-colors">
                <span>Read Post</span>
                <FaArrowRight className="text-xs text-brand-green group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}