"use client";

import { useState } from "react";
import Image from "next/image";
import { Users, GraduationCap, School, HelpCircle, Zap } from "lucide-react";
import Link from "next/link";

const audience = [
  {
    id: 1,
    title: "Students in Class 8–12 thinking about stream/college fit",
    description:
      "Lorem ipsum dolor sit amet, elit cursus finibus. Vitae nulla tempor sed.",
    icon: GraduationCap,
    image: "/cvplite/cvpworks.png",
  },
  {
    id: 2,
    title: "Parents who want to guide their children confidently",
    description:
      "Lorem ipsum dolor sit amet, elit cursus finibus. Vitae nulla tempor sed.",
    icon: Users,
    image: "/cvplite/uses.png",
  },
  {
    id: 3,
    title: "Schools looking for a structured but flexible clarity tool",
    description:
      "Lorem ipsum dolor sit amet, elit cursus finibus. Vitae nulla tempor sed.",
    icon: School,
    image: "/cvplite/cvpworks.png",
  },
  {
    id: 4,
    title: 'Any student unsure about "what comes next"',
    description:
      "Lorem ipsum dolor sit amet, elit cursus finibus. Vitae nulla tempor sed.",
    icon: HelpCircle,
    image: "/cvplite/uses.png",
  },
];

export default function CvpLiteWorks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = audience[activeIndex];

  return (
    <section className="p-4 sm:p-10 lg:p-20 bg-white flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col items-center gap-4 sm:gap-10 lg:gap-14 font-lato">
        {/* Heading */}
        <div className="max-w-7xl flex flex-col justify-between items-center gap-4 text-center">
          <h2 className="font-red-rose text-2xl sm:text-3xl">
            Why CVP Lite Works
          </h2>
          <p className="text-base sm:text-lg text-brand-gray max-w-4xl">
            Because you shouldn’t choose your career based on guesswork or
            generic quizzes.
          </p>
        </div>

        {/* Responsive Layout */}
        <div className="w-full max-w-7xl">
          {/* Desktop (lg: side by side) */}
          <div className="hidden lg:flex gap-4 sm:gap-10 items-center">
            {/* Left: Image */}
            <div className="flex-1 relative rounded-lg overflow-hidden shadow-lg min-h-[400px]">
              <Image
                key={activeItem.id}
                src={activeItem.image}
                alt={activeItem.title}
                fill
                className="object-cover transition-opacity duration-500"
              />
            </div>

            {/* Right: Cards */}
            <div className="grid grid-cols-1 gap-4 flex-1">
              {audience.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`p-4 rounded-lg border flex gap-4 items-start cursor-pointer transition-all duration-200
                    ${
                      index === activeIndex
                        ? "border-brand-primary bg-green-50 shadow-sm"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                >
                  {/* Icon Circle (unchanged size) */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0
                    ${
                      index === activeIndex
                        ? "bg-green-100 text-brand-primary"
                        : "bg-gray-100 text-brand-gray"
                    }`}
                  >
                    <item.icon size={20} />
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-red-rose">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-brand-gray">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tablet (md–lg: image top + 2x2 grid) */}
          <div className="hidden md:flex lg:hidden flex-col gap-8">
            {/* Image */}
            <div className="relative rounded-lg overflow-hidden shadow-lg min-h-[300px] w-full">
              <Image
                key={activeItem.id}
                src={activeItem.image}
                alt={activeItem.title}
                fill
                className="object-cover transition-opacity duration-500"
              />
            </div>

            {/* 2x2 Cards */}
            <div className="grid grid-cols-2 gap-4">
              {audience.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`p-4 rounded-lg border flex gap-3 items-start cursor-pointer transition-all duration-200
                    ${
                      index === activeIndex
                        ? "border-brand-primary bg-green-50 shadow-sm"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0
                    ${
                      index === activeIndex
                        ? "bg-green-100 text-brand-primary"
                        : "bg-gray-100 text-brand-gray"
                    }`}
                  >
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-red-rose">{item.title}</h3>
                    <p className="text-sm text-brand-gray">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile (<md: stacked cards + image at bottom) */}
          <div className="flex flex-col gap-6 md:hidden">
            {/* Cards */}
            <div className="flex flex-col gap-4">
              <div className="relative rounded-lg overflow-hidden shadow-lg min-h-[220px] w-full">
                <Image
                  key={activeItem.id}
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  className="object-cover transition-opacity duration-500"
                />
              </div>
              {audience.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`p-3 rounded-lg border flex gap-3 items-start cursor-pointer transition-all duration-200
                    ${
                      index === activeIndex
                        ? "border-brand-primary bg-green-50 shadow-sm"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0
                    ${
                      index === activeIndex
                        ? "bg-green-100 text-brand-primary"
                        : "bg-gray-100 text-brand-gray"
                    }`}
                  >
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-red-rose">{item.title}</h3>
                    <p className="text-sm text-brand-gray">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Image at bottom */}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-6">
          <Link
            href="/start"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-primary border border-brand-accent hover:bg-brand-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 font-medium shadow-sm transition-colors"
          >
            <Zap size={18} /> Start Your Journey Today
          </Link>

          <h2 className="font-red-rose text-base sm:text-lg text-center">
            Perfect first step before college, entrance exams, or big decisions.
          </h2>
        </div>
      </div>
    </section>
  );
}
