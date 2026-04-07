"use client";

import { useEffect, useRef, useState } from "react";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
    },
    {
      name: "Email",
      href: "mailto:idfacilitator@outlook.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
    },
    {
      name: "Phone",
      href: "tel:+917036541365",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative flex min-h-[70vh] w-full flex-col items-center justify-center bg-background py-20"
    >
      <div className="flex flex-col items-center gap-8 px-4 text-center">
        {/* Subtitle */}
        <p 
          className="font-serif text-2xl italic text-muted-light md:text-3xl lg:text-4xl"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          Ready to start your next project?
        </p>

        {/* CLICK HERE - Large text with email icon */}
        <a
          href="mailto:idfacilitator@outlook.com"
          className="group flex items-center gap-2"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.6s ease 0.2s",
          }}
        >
          <span className="font-serif text-6xl tracking-tight text-foreground transition-all duration-300 group-hover:opacity-70 md:text-8xl lg:text-9xl">
            CLICK
          </span>
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background transition-all duration-300 group-hover:scale-110 md:h-20 md:w-20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </span>
          <span className="font-serif text-6xl tracking-tight text-foreground transition-all duration-300 group-hover:opacity-70 md:text-8xl lg:text-9xl">
            HERE
          </span>
        </a>

        {/* Social Icons Row */}
        <div 
          className="mt-16 flex items-center gap-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease 0.4s",
          }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex h-14 w-14 items-center justify-center rounded-full text-foreground transition-all duration-300 hover:scale-110 hover:opacity-70"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
