"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "CAPABILITIES", href: "#tech" },
    { name: "WORK", href: "#work" },
    { name: "CONTACT", href: "#contact" }, // Rendered identically as a standard nav link
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 text-brand-dark transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* LOGO AREA */}
        <Link href="/" className="text-xl font-black tracking-tighter hover:opacity-80 transition-opacity">
          RAHUL<span className="text-brand-green">.</span>
        </Link>

        {/* DESKTOP NAVIGATION MENU */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs font-bold tracking-widest text-slate-600 hover:text-brand-green transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* MOBILE HAMBURGER TRIGGER */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-700 hover:text-brand-green focus:outline-none transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>

      {/* MOBILE DROP-DOWN MENU OVERLAY */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <nav className="flex flex-col p-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-xs font-bold tracking-widest text-slate-600 hover:text-brand-green transition-colors duration-200 py-2"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}