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
    <section className="p-6 sm:p-12 lg:p-20 bg-white flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col items-center gap-14 font-lato">
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

        {/* Text + Image Section */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-14 items-center w-full max-w-7xl">
          {/* Left: Dynamic Image (switches on click) */}
          <div className="flex-1 relative rounded-lg overflow-hidden shadow-lg min-h-[280px] md:min-h-[400px] w-full">
            <Image
              key={activeItem.id} // ensures smooth transition when image changes
              src={activeItem.image}
              alt={activeItem.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-opacity duration-500"
            />
          </div>

          {/* Right: Audience Cards */}
          <div className="flex flex-col gap-4 w-full md:w-1/2">
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
                {/* Icon */}
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

                {/* Text */}
                <div>
                  <h3 className="text-lg sm:text-xl font-red-rose">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-brand-gray">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
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
