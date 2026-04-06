"use client";

import { experience } from "../data/experience";
import { useState } from "react";

export default function ExperienceTimeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="relative w-full bg-gray-50 py-20">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-sm font-light tracking-widest text-black/40">
            JOURNEY
          </p>
          <h2 className="mt-2 text-3xl font-thin tracking-tight text-black md:text-4xl">
            Work Experience
          </h2>
          <p className="mt-4 text-black/60">
            10+ years of L&D expertise across industries
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 h-full w-px bg-black/10 md:left-1/2 md:-translate-x-1/2" />

          {experience.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-8 pl-8 md:pl-0 ${
                index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
              }`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute left-0 top-2 h-3 w-3 rounded-full bg-black md:left-1/2 md:-translate-x-1/2 ${
                  index === 0 ? "ring-4 ring-black/10" : ""
                }`}
              />

              {/* Card */}
              <div
                className={`cursor-pointer rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:shadow-lg ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
              >
                <div
                  className={`flex items-start justify-between gap-4 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 0 ? "md:text-right" : ""}>
                    <span className="inline-block rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-black/60">
                      {exp.period}
                    </span>
                    <h3 className="mt-2 text-xl font-medium text-black">
                      {exp.company}
                    </h3>
                    <p className="mt-1 text-sm text-black/60">{exp.role}</p>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedIndex(expandedIndex === index ? null : index);
                    }}
                    className={`flex-shrink-0 rounded-full bg-black/5 p-2 transition-all duration-300 hover:bg-black/10 ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-black/60"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>

                {/* Expanded Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    expandedIndex === index ? "max-h-96 mt-4" : "max-h-0"
                  }`}
                >
                  <ul className="flex flex-col space-y-2 text-sm text-black/60 text-left">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-left"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-black/30" />
                        <span className="text-left">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
