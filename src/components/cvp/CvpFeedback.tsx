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
    <div className="flex h-full flex-col justify-between rounded-xl border bg-white shadow-md">
      {/* Quote + Text */}
      <div className="flex-1 p-6">
        <Quote className="h-6 w-6 rotate-180 fill-[#9ec89e] text-[#9ec89e]" />
        <p className="mt-3 leading-relaxed text-gray-700">{text}</p>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-3 rounded-b-xl border-t-2 border-dashed bg-gray-50 p-4">
        <Image
          src={image}
          alt={name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div>
          <p className="font-red-rose font-medium">{name}</p>
          <p className="text-brand-gray text-xs">{education}</p>
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
