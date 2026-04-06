"use client";

import { useEffect, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function AnimatedText({
  text,
  className = "",
  delay = 0,
}: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block transition-all duration-500 ease-out"
          style={{
            transitionDelay: `${index * 50}ms`,
            transform: isVisible
              ? "translateY(0) rotateZ(0)"
              : "translateY(20px) rotateZ(2deg)",
            opacity: isVisible ? 1 : 0,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
