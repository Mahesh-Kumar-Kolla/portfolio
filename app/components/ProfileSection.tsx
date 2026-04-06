"use client";

import { useState } from "react";
import { skills } from "../data/skills";
import { education } from "../data/education";
import { certifications } from "../data/certifications";
import { experience } from "../data/experience";

const tabs = ["Skills", "Education", "Career", "CV"];

export default function ProfileSection() {
  const [activeTab, setActiveTab] = useState("Skills");

  return (
    <section id="profile" className="relative w-full bg-background py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative h-80 w-80 overflow-hidden bg-foreground">
              {/* Placeholder for profile image - grayscale artistic style */}
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-foreground to-muted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-32 w-32 text-background/30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            {/* Tab Navigation */}
            <div className="mb-8 flex flex-wrap items-center gap-6 border-b border-foreground/10">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-1 py-3 text-base transition-all duration-300 ${
                    activeTab === tab
                      ? "text-foreground"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {tab === "CV" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-1 inline h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  )}
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {/* Skills Tab */}
              {activeTab === "Skills" && (
                <div className="flex flex-col gap-4">
                  <h3 className="font-serif text-2xl text-foreground">
                    Technical Skills
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="rounded-lg bg-card px-4 py-2 text-sm text-foreground transition-all duration-300 hover:bg-card-hover card-shadow"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Education Tab */}
              {activeTab === "Education" && (
                <div className="flex flex-col gap-6">
                  <h3 className="font-serif text-2xl italic text-foreground">
                    Education Background
                  </h3>
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="border-l-2 border-foreground pl-4"
                    >
                      <h4 className="text-lg font-medium text-foreground">
                        {edu.degree}
                      </h4>
                      <p className="text-muted">{edu.institution}</p>
                      <p className="text-sm text-muted-light">{edu.year}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Career Tab - Numbered cards like reference */}
              {activeTab === "Career" && (
                <div className="flex flex-col gap-4">
                  {experience.map((exp, index) => (
                    <div key={index} className="flex gap-4">
                      {/* Number badge */}
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-muted text-sm text-muted">
                        {index + 1}
                      </div>
                      {/* Card */}
                      <div className="flex-1 rounded-lg bg-card p-5 transition-all duration-300 hover:bg-card-hover card-shadow">
                        <h4 className="text-lg font-semibold text-foreground">
                          {exp.role}
                        </h4>
                        <p className="font-medium text-foreground">{exp.company}</p>
                        <p className="text-sm text-muted-light">{exp.period}</p>
                        {exp.achievements && exp.achievements.length > 0 && (
                          <p className="mt-2 text-sm text-muted">
                            {exp.achievements[0]}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* CV Tab */}
              {activeTab === "CV" && (
                <div className="flex flex-col items-center justify-center gap-6 py-12">
                  <p className="text-center text-muted">
                    Download my complete resume to learn more about my experience
                  </p>
                  <a
                    href="#"
                    className="flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-background transition-all duration-300 hover:opacity-90"
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
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download CV
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
