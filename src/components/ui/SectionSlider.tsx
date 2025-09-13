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
  buttonHref = "/coming-soon",
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
    <div className="font-lato mx-auto flex max-w-[1440px] flex-col gap-4 p-4 sm:gap-10 sm:p-10 lg:gap-14 lg:p-20">
      <div className="flex max-w-7xl flex-col justify-between gap-4 sm:gap-6 lg:flex-row">
        {/* Header */}
        <div className="space-y-2 lg:space-y-4">
          <div className="font-red-rose text-2xl sm:text-3xl">{title}</div>
          <div className="text-brand-gray text-base sm:text-lg">
            {description}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 self-end sm:mt-2 lg:mt-0">
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`flex h-10 w-10 items-center justify-center rounded-lg border p-2 transition-colors sm:h-12 sm:w-12 ${
              canScrollLeft
                ? "bg-brand-primary border-brand-accent cursor-pointer text-white"
                : "cursor-not-allowed opacity-50"
            }`}
          >
            <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`flex h-10 w-10 items-center justify-center rounded-lg border p-2 transition-colors sm:h-12 sm:w-12 ${
              canScrollRight
                ? "bg-brand-primary border-brand-accent cursor-pointer text-white"
                : "cursor-not-allowed opacity-50"
            }`}
          >
            <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="scrollbar-hide flex snap-x snap-mandatory overflow-x-auto p-1"
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
          <div className="flex justify-center py-4 sm:px-14 sm:py-10">
            <Link
              href={buttonHref}
              className="btn-primary btn-size space-x-0.5"
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
