"use client";

import { useState } from "react";
import { WHATSAPP_URL } from "./site";

const LINKS = [
  { href: "#about", label: "אודות" },
  { href: "#services", label: "טיפולים" },
  { href: "#gallery", label: "גלריה" },
  { href: "#testimonials", label: "המלצות" },
  { href: "#contact", label: "צור קשר" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E8DFD3]">
      <nav className="max-w-6xl mx-auto px-5 h-[68px] flex items-center justify-between">
        <a href="#top" className="text-2xl font-bold text-[#2B2622]">
          ויקטוריה <span className="text-[#C9A96A]">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#2B2622] hover:text-[#C9A96A] transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-[#C9A96A] text-white font-medium px-6 py-2.5 rounded-full hover:bg-[#b8965a] transition-colors"
        >
          קבעי תור
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-[#2B2622]"
          aria-label="תפריט"
        >
          {open ? "×" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#E8DFD3] px-5 py-4 flex flex-col gap-3">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-lg text-[#2B2622] font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C9A96A] text-white text-center font-medium px-6 py-2.5 rounded-full"
          >
            קבעי תור
          </a>
        </div>
      )}
    </header>
  );
}
