"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import SectionSlider from "../ui/SectionSlider";
import React from "react";

interface Review {
  id: number;
  name: string;
  education: string;
  text: React.ReactNode;
  image: string;
}

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

interface CvpFeedbackProps {
  reviews: Review[];
}

export default function CvpFeedback({ reviews }: CvpFeedbackProps) {
  return (
    <SectionSlider
      title="New Success Stories Everyday"
      cardWidth={460}
      gap={24}
    >
      {reviews.map((t) => (
        <ReviewCard key={t.id} {...t} />
      ))}
    </SectionSlider>
  );
}
