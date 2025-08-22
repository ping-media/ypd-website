"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import SectionSlider from "../ui/SectionSlider";
import React from "react";

interface Review {
  id: number;
  name: string;
  education: string; // added for role/education line
  text: React.ReactNode;
  image: string;
}

const highlight = (content: string) => (
  <span className="bg-[#ebf3eb] px-1 rounded">{content}</span>
);

const Reviews: Review[] = [
  {
    id: 1,
    name: "Rishabh Mehta",
    education: "Class 11 Student, Nagpur",
    text: (
      <>
        I Never Thought Career Guidance Could Feel So Personal. The{" "}
        {highlight(
          "AI Mentor Actually Made Me Think Deeper Like A Real Teacher Who Knows Me. I Finally Figured Out"
        )}{" "}
        Why I Enjoy Solving Logic Puzzles I’m Now Exploring Data Analytics!
      </>
    ),
    image: "/cvplite/feedback.png",
  },
  {
    id: 2,
    name: "Sangeeta Raghavan",
    education: "Parent, Bengaluru",
    text: (
      <>
        {highlight("We Were Overwhelmed With Career Choices For Our Daughter")}.
        CVP Lite Helped Us Match Her Creative Side With Real Job Paths. The
        Detailed Final Report Gave Us Clarity And Peace As Parents.
      </>
    ),
    image: "/cvplite/feedback1.png",
  },
  {
    id: 3,
    name: "Priyanka Joshi",
    education: "B.Com Final Year, Jaipur",
    text: (
      <>
        The Emotional Intelligence Part Opened My Eyes It’s Not Just Marks, It’s
        Mindset. {highlight("I Now Have A Clear Action Plan")} To Build The
        Skills My Dream Job Actually Needs. Total Game-Changer!
      </>
    ),
    image: "/cvplite/feedback2.png",
  },
];

function ReviewCard({ name, education, text, image }: Review) {
  return (
    <div className="rounded-xl shadow-md border bg-white flex flex-col justify-between h-full">
      {/* Quote + Text */}
      <div className="p-6 flex-1">
        <Quote className="w-6 h-6 text-[#9ec89e] rotate-180 fill-[#9ec89e]" />
        <p className="text-gray-700 mt-3 leading-relaxed">{text}</p>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-b-xl border-t-2 border-dashed">
        <Image
          src={image}
          alt={name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div>
          <p className="font-medium font-red-rose">{name}</p>
          <p className="text-xs text-brand-gray">{education}</p>
        </div>
      </div>
    </div>
  );
}

export default function CvpFeedback() {
  return (
    <SectionSlider
      title="New Success Stories Everyday"
      cardWidth={460}
      gap={24}
    >
      {Reviews.map((t) => (
        <ReviewCard key={t.id} {...t} />
      ))}
    </SectionSlider>
  );
}
