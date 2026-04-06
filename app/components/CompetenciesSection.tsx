"use client";

import { useEffect, useRef, useState } from "react";
import { competencies } from "../data/competencies";

export default function CompetenciesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="relative w-full bg-background py-24"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        {/* Section Header - Italic serif like reference */}
        <h2 
          className="mb-16 text-center font-serif text-4xl italic text-foreground md:text-5xl"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.6s ease",
          }}
        >
          I can help you with
        </h2>

        {/* Service Cards Grid - White rectangular cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {competencies.map((comp, index) => (
            <div
              key={index}
              className="group flex h-24 cursor-pointer items-center justify-center rounded-lg bg-card p-4 text-center transition-all duration-300 hover:bg-card-hover card-shadow hover:scale-105"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.5s ease ${index * 0.05}s`,
              }}
            >
              <span className="text-sm font-medium text-foreground">
                {comp.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
