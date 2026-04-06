"use client";

import { useEffect, useRef, useState } from "react";

const roles = [
  "Designer",
  "Facilitator", 
  "Developer",
  "Strategist",
];

export default function RoleSection() {
  const [currentRole, setCurrentRole] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-background"
    >
      {/* Watercolor blobs - decorative */}
      <div className="absolute inset-0 overflow-hidden opacity-60">
        {/* Left blob - orange/yellow */}
        <div 
          className="absolute -left-20 top-1/4 h-96 w-96 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(255,180,100,0.4) 0%, rgba(255,200,150,0.2) 50%, transparent 70%)",
          }}
        />
        {/* Right blob - pink/coral */}
        <div 
          className="absolute -right-20 top-1/3 h-96 w-96 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(255,120,130,0.4) 0%, rgba(255,180,170,0.2) 50%, transparent 70%)",
          }}
        />
        {/* Bottom right blob */}
        <div 
          className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(255,200,100,0.3) 0%, rgba(255,180,120,0.15) 50%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-4 px-4 text-center">
        <p 
          className="font-serif text-lg italic text-muted-light md:text-xl"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease 0.2s",
          }}
        >
          I&apos;m a
        </p>

        {/* Role with switch animation */}
        <div className="relative h-24 overflow-hidden md:h-32">
          {roles.map((role, index) => (
            <h2
              key={role}
              className="font-serif text-6xl font-normal tracking-tight text-foreground md:text-7xl lg:text-8xl"
              style={{
                position: index === currentRole ? "relative" : "absolute",
                opacity: index === currentRole && isVisible ? 1 : 0,
                transform: index === currentRole && isVisible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.5s ease",
              }}
            >
              {role}
            </h2>
          ))}
        </div>

        {/* Switch button */}
        <button
          type="button"
          onClick={() => setCurrentRole((prev) => (prev + 1) % roles.length)}
          className="mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-card shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg"
          aria-label="Switch role"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
            />
          </svg>
        </button>

        {/* Tagline */}
        <p 
          className="mt-8 font-serif text-2xl italic text-muted-light md:text-3xl"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease 0.4s",
          }}
        >
          Crafting learning experiences since 2014
        </p>
      </div>
    </section>
  );
}
