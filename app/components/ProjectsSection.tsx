"use client";

import AnimatedText from "./AnimatedText";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative flex h-[70vh] w-full flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(45deg, #333 25%, transparent 25%), 
                              linear-gradient(-45deg, #333 25%, transparent 25%), 
                              linear-gradient(45deg, transparent 75%, #333 75%), 
                              linear-gradient(-45deg, transparent 75%, #333 75%)`,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-center">
        <p className="text-sm font-light tracking-widest text-white/40">
          PORTFOLIO
        </p>

        <h2 className="text-5xl font-thin tracking-tighter text-white md:text-7xl lg:text-8xl">
          <AnimatedText text="MY LEARNING" delay={200} />
          <br />
          <AnimatedText text="PROJECTS" delay={400} />
        </h2>

        <a
          href="#"
          className="mt-8 flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition-all duration-300 hover:bg-white/90 hover:gap-5"
        >
          Coming Soon
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
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>

        <p className="mt-4 text-sm text-white/40">
          Project case studies will be added soon
        </p>
      </div>
    </section>
  );
}
