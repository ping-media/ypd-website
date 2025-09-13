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
    <section className="flex justify-center bg-gradient-to-b from-[#f0fff7] via-white to-[#f0fff7] p-4 sm:p-10 lg:p-20">
      <div className="font-lato flex w-full max-w-[1440px] flex-col items-center justify-center gap-4 sm:gap-10 lg:gap-14">
        {/* Heading */}
        <div className="flex max-w-7xl flex-col items-center justify-between gap-4 text-center">
          <div className="font-red-rose text-2xl sm:text-3xl">
            What Students & Parents Say
          </div>
          <div className="text-brand-gray max-w-4xl text-base sm:text-lg">
            We believe our journeys should empower students & parents equally.
          </div>
        </div>

        {/* Cards */}
        <div className="flex w-full max-w-7xl flex-col items-center gap-4">
          <div className="grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
          <div className="border-brand-gray/10 flex w-full flex-col items-center justify-center gap-4 rounded-lg border bg-white p-4 shadow-[inset_0_0_30px_#eeeeee] sm:gap-8 sm:p-8 md:gap-10 md:p-10">
            <div className="flex flex-col gap-2 text-center">
              <div className="font-red-rose text-2xl sm:text-3xl">
                Experience your Aspired Career Roles
              </div>
              <div className="text-brand-gray max-w-5xl text-sm sm:text-base">
                Start your immersive journey to experience a real career role
                with real-life like scenarios, tasks, challenges & get a Career
                Role Fit score — World&apos;s first Fully AI Driven, Adaptive,
                Personalized & Industry Expert Curated Career Role Simulator
              </div>
            </div>
            <div className="flex justify-center">
              <Link href="/careerverse" className="btn-primary btn-size">
                <Search className="h-4 w-4 sm:h-5 sm:w-5" />
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
