"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const name = "Karthik";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-background"
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-2 px-4 text-center">
        {/* Name - Serif font with scroll animation */}
        <h1 className="font-serif text-8xl font-normal tracking-tight text-foreground md:text-9xl lg:text-[12rem]">
          {name.split("").map((letter, index) => (
            <span
              key={index}
              className="inline-block"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(50px)",
                transition: `all 0.6s ease ${index * 0.08}s`,
              }}
            >
              {letter}
            </span>
          ))}
        </h1>
      </div>

      {/* Made by myself badge - bottom right */}
      <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm text-foreground shadow-sm">
        <span className="font-serif text-lg">K</span>
        <span className="text-muted">Made by myself</span>
      </div>
    </section>
  );
}
