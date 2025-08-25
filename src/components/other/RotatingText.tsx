"use client";
import { useEffect, useState } from "react";

export function RotatingText({
  words,
  duration = 3000,
  className = "",
}: {
  words: string[];
  duration?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fading out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length); // switch word
        setFade(true); // fade in new word
      }, 500); // half of the fade duration
    }, duration);
    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <span
      className={`inline-block transition-opacity duration-500 ${
        fade ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      {words[index]}
    </span>
  );
}
