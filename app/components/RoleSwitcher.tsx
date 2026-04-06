"use client";

import { useState, useEffect, useCallback } from "react";

const roles = [
  "Instructional Designer",
  "Learning Strategist",
  "Training Developer",
  "Learning Consultant",
  "L&D Professional",
];

export default function RoleSwitcher() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextRole = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
      setIsAnimating(false);
    }, 300);
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextRole();
    }, 3000);
    return () => clearInterval(interval);
  }, [nextRole]);

  return (
    <section className="relative flex h-[60vh] w-full flex-col items-center justify-center bg-gray-50">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 px-4">
        <p className="text-lg font-light text-black/60 md:text-xl">I&apos;m a</p>

        <button
          onClick={nextRole}
          type="button"
          className="group flex items-center gap-4 rounded-full bg-white px-8 py-4 shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:shadow-xl"
        >
          <span
            className={`text-2xl font-light tracking-tight text-black transition-all duration-300 md:text-4xl ${
              isAnimating ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"
            }`}
          >
            {roles[currentIndex]}
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black/40 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>

        <p className="text-sm text-black/40">Click to change</p>
      </div>
    </section>
  );
}
