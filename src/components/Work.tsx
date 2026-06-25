"use client";

import Image from 'next/image';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

export default function Work() {
  const projects = [
    {
      title: "She is Elevated",
      subtitle: "Luxury Wellness Retreat Website for Executive Women",
      desc: "She Is Elevated is a luxury one-day wellness and leadership retreat platform for high-achieving women — executives, founders, and C-suite leaders. Built on WordPress + Elementor Pro, it showcases the curated event experience and captures seat reservations for intimate, limited-seat reset experiences.",
      // 🎯 Streamlined core stack
      tech: ["WordPress Backend", "Elementor Pro", "Advanced Custom Fields", "Custom PHP/CSS", "Yoast SEO", "Core Web Vitals Optimization"],
      imageSrc: "/sample1.png", 
      link: "#"
    },
    {
      title: "Fixed-Price Legal Services Platform",
      subtitle: "Dynamic Schemas & Data Hubs",
      desc: "Law by Design is an Australian legal services platform offering fixed-price contracts, templates, and business legal advice for startups and SMEs. Built on WordPress with WooCommerce, Tutor LMS, and Elementor Pro, it combines a legal template shop, online courses, and Calendly-integrated consultation booking in one platform.",
      // 🎯 Balanced to highlight structural functionality rather than raw tracking scripts
      tech: ["WordPress Engine", "WooCommerce Ecosystem", "Tutor LMS Database", "Stripe API Integration", "Calendly System Connect", "Brevo CRM Webhooks"],
      imageSrc: "/sample2.png", 
      link: "#"
    }
  ];

  return (
    <section id="work" className="w-full py-24 px-6 md:px-12 relative overflow-hidden bg-slate-50 text-brand-dark">
      
      {/* BACKGROUND IMAGE FRAME WITH EXACT HERO VISIBILITY LAYER */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/my_pattern.jpg"
          alt="Work Background Grid Pattern"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/90 backdrop-blur-[1px]"></div>
      </div>

      {/* Inner Content Layer */}
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Structural Minimalist Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-20 border-b border-slate-200/60 pb-8">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest text-brand-green uppercase bg-brand-green/10 px-3 py-1 rounded-sm">
              Selected Production Work
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-none text-brand-dark">
              Case Studies.
            </h2>
          </div>
          <p className="text-slate-500 font-medium text-base md:max-w-xs leading-relaxed">
            A deep look at high-speed decoupling, customized API patterns, and database automation.
          </p>
        </div>

        {/* 2-Column Row Layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col p-6 md:p-8 rounded-[2rem] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all duration-300 ease-out"
            >
              
              {/* LIVE IMAGE CONTAINER FRAME */}
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-50">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  sizes="(max-w-768px) 100vw, 600px"
                  className="object-cover object-center group-hover:scale-102 transition-transform duration-500 ease-out"
                />
              </div>

              {/* LABELS & TITLE BLOCK */}
              <div className="space-y-2 mt-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-green tracking-wider uppercase">
                    {project.subtitle}
                  </span>
                  <a 
                    href={project.link}
                    className="text-slate-400 hover:text-brand-green transition-colors"
                    aria-label={`Open system documentation for ${project.title}`}
                  >
                    <FaArrowUpRightFromSquare className="text-xs" />
                  </a>
                </div>
                
                <h3 className="text-xl font-extrabold tracking-tight text-brand-dark group-hover:text-brand-green transition-colors duration-200">
                  {project.title}
                </h3>
              </div>

              {/* PARAGRAPH DESCRIPTION */}
              <p className="text-sm font-medium text-slate-500 leading-relaxed mt-3 flex-grow">
                {project.desc}
              </p>

              {/* MODULAR TECH BADGES */}
              <div className="flex flex-wrap gap-2 pt-6 mt-auto border-t border-slate-100/80">
                {project.tech.map((tag, tagIdx) => (
                  <span 
                    key={tagIdx} 
                    className="text-[10px] font-extrabold uppercase tracking-wider text-slate-600 bg-slate-50 border border-slate-200/40 px-3 py-1.5 rounded-lg transition-colors group-hover:border-brand-green/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}