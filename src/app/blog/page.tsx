"use client";

import BlogBanner from './blogpart/blogbanner';
import BlogContent from './blogpart/blogcontent';
import BlogFooter from './blogpart/blogfooter';

export default function BlogPage() {
  return (
    <main className="w-full min-h-screen bg-slate-50">
      
      {/* 1. HERO/BANNER SECTION */}
      {/* Keeping your original banner styling */}
      <div className="bg-white">
        <BlogBanner />
      </div>

      {/* 2. CONTENT SECTION */}
      {/* BlogContent handles its own background pattern internally */}
      <BlogContent />

      {/* 3. FOOTER SECTION */}
      {/* BlogFooter handles its own background pattern internally */}
      <BlogFooter />

    </main>
  );
}