"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";

interface SectionSliderProps {
  title: string;
  description?: React.ReactNode;
  cardWidth?: number;
  gap?: number;
  children: React.ReactNode;
  buttonIcon?: React.ReactNode;
  buttonText?: string;
  buttonHref?: string;
}

const SectionSlider: React.FC<SectionSliderProps> = ({
  title,
  description,
  cardWidth = 400,
  gap = 20,
  children,
  buttonIcon,
  buttonText,
  buttonHref = "#",
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const tolerance = 4; // fix for p-1 padding (~4px)

    const scrollLeft = Math.round(el.scrollLeft);
    const clientWidth = Math.round(el.clientWidth);
    const scrollWidth = Math.round(el.scrollWidth);

    setCanScrollLeft(scrollLeft > tolerance);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - tolerance);
  };

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({
      left: -cardWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({
      left: cardWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    // initial checks
    checkScroll();
    setTimeout(checkScroll, 100); // mobile needs a little delay

    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  return (
    <div className="p-4 sm:p-10 lg:p-20 max-w-[1440px] mx-auto flex flex-col gap-4 sm:gap-10 lg:gap-14 font-lato">
      <div className="max-w-7xl flex flex-col lg:flex-row justify-between gap-4 sm:gap-6">
        {/* Header */}
        <div className="space-y-2 lg:space-y-4">
          <div className="font-red-rose text-2xl sm:text-3xl">{title}</div>
          <div className="text-base sm:text-lg text-brand-gray">
            {description}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3 sm:mt-2 lg:mt-0 self-end">
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`p-2 border rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-colors
              ${
                canScrollLeft
                  ? "bg-brand-primary text-white border-brand-accent"
                  : "opacity-50 cursor-not-allowed"
              }`}
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`p-2 border rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-colors
              ${
                canScrollRight
                  ? "bg-brand-primary text-white border-brand-accent"
                  : "opacity-50 cursor-not-allowed"
              }`}
          >
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory p-1"
          style={{
            gap: `${gap}px`,
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className="flex-none snap-start"
              style={{
                width: `min(${cardWidth}px, 80vw)`,
              }}
            >
              {child}
            </div>
          ))}
        </div>

        {/* Optional Button */}
        {buttonIcon && buttonText && (
          <div className="flex justify-center py-4 sm:py-10 sm:px-14">
            <Link
              href={buttonHref}
              className="text-brand-fg rounded-lg bg-brand-primary hover:bg-brand-primary/90 border border-brand-accent text-base sm:text-lg flex justify-center items-center py-2.5 sm:py-3 px-4 sm:px-5 space-x-0.5"
            >
              {buttonIcon}
              <span className="pl-0.5 sm:pl-1">{buttonText}</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionSlider;
