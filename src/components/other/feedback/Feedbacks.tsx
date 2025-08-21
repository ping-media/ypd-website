import React from "react";
import FeedbackCard from "./FeedbackCard";
import Link from "next/link";
import { Search } from "lucide-react";

const Feedbacks: React.FC = () => {
  const feedbackData = [
    {
      image: "/avatar1.png",
      name: "Avinash",
      classInfo: "BA Student, Data Analysis",
      traits: "Scored low on Excel + data tasks",
      recommendation: "Flagged for adaptability weakness",
      verdict: "Generated plan : Excel → Simulation → Coaching",
    },
    {
      image: "/avatar2.png",
      name: "Meera",
      classInfo: "Class 11, Psychology Interest",
      traits: "High cognitive empathy, low report writing",
      recommendation: "Mentor recommended: Writing Labs + Case Study Modules",
      parentNote: "Parent invited for guided collaboration",
      verdict: "Verdict: “Strong Fit, Needs Presentation Training”",
    },
    {
      image: "/avatar3.png",
      name: "Karan",
      classInfo: "Working Professional, Career Pivot",
      traits: "Strong leadership, weak technical confidence",
      recommendation:
        "Reinvention Plan: Self Audit → Confidence Building → Tech Upskilling",
      verdict: "Verdict: “Ready for Product Management”",
    },
  ];

  return (
    <section className="p-4 sm:p-10 lg:p-20 bg-gradient-to-b from-[#f0fff7] via-white to-[#f0fff7] flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col justify-center items-center gap-4 sm:gap-10 lg:gap-14 font-lato">
        {/* Heading */}
        <div className="max-w-7xl flex flex-col justify-between items-center gap-4 text-center">
          <div className="font-red-rose text-2xl sm:text-3xl">
            Your Path, Your Way: Programs for Every Stage
          </div>
          <div className="text-base sm:text-lg text-brand-gray max-w-4xl">
            Start your journey with the program that matches your readiness.
            From high school discovery to professional reinvention Youth Pulse
            Digital™ has a track built for you.
          </div>
        </div>

        {/* Cards */}
        <div className="flex max-w-7xl flex-col items-center gap-4 w-full">
          <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {feedbackData.map((item, idx) => (
              <FeedbackCard
                key={idx}
                {...item}
                className={
                  // If in 2-column layout and this is the last odd card, span both columns
                  feedbackData.length % 2 === 1 &&
                  idx === feedbackData.length - 1
                    ? "sm:col-span-2 lg:col-span-1"
                    : ""
                }
              />
            ))}
          </div>

          {/* Last Lines & Button */}
          <div className="w-full border border-brand-gray/10 bg-white shadow-[inset_0_0_30px_#eeeeee] rounded-lg p-4 sm:p-8 md:p-10 flex flex-col justify-center items-center gap-4 sm:gap-8 md:gap-10">
            <div className="flex flex-col gap-2 text-center">
              <div className="font-red-rose text-2xl sm:text-3xl">
                Experience your Aspired Career Roles
              </div>
              <div className="text-sm sm:text-base text-brand-gray max-w-5xl">
                Start your immersive journey to experience a real career role
                with real-life like scenarios, tasks, challenges & get a Career
                Role Fit score — World&apos;s first Fully AI Driven, Adaptive,
                Personalized & Industry Expert Curated Career Role Simulator
              </div>
            </div>
            <div className="flex justify-center">
              <Link
                href="#"
                className="text-brand-fg rounded-lg bg-brand-primary border border-brand-accent text-sm sm:text-lg flex justify-center items-center py-2.5 sm:py-3 px-4 sm:px-5 gap-1"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Explore Career Verse™</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;
