"use client";

import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#profile" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12">
        {/* Logo - circular badge with rotating text */}
        <a 
          href="#home" 
          className="group relative flex h-16 w-16 items-center justify-center"
        >
          {/* Outer rotating ring with text */}
          <div className="absolute inset-0 animate-spin-slow">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <defs>
                <path
                  id="circlePath"
                  d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text className="fill-foreground text-[10px] uppercase tracking-widest">
                <textPath href="#circlePath">
                  KARTHIK • KARTHIK • KARTHIK • 
                </textPath>
              </text>
            </svg>
          </div>
          {/* Center letter */}
          <span className="font-serif text-2xl text-foreground">K</span>
        </a>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5 transition-all duration-300"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${
              isMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${
              isMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </header>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`font-serif text-4xl font-normal tracking-tight text-foreground transition-all duration-300 hover:opacity-60 md:text-6xl ${
                isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#"
            onClick={() => setIsMenuOpen(false)}
            className={`mt-4 flex items-center gap-2 text-lg text-muted transition-all duration-300 hover:text-foreground ${
              isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{
              transitionDelay: isMenuOpen ? `${navLinks.length * 100}ms` : "0ms",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download CV
          </a>
        </nav>
      </div>
    </>
  );
}
