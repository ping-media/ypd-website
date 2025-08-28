"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import SectionSlider from "../ui/SectionSlider";

interface Review {
  id: number;
  name: string;
  text: string;
  image: string;
}

const Reviews: Review[] = [
  {
    id: 1,
    name: "Courtney Henry",
    text: "The Team Truly Understood My Financial Goals As An Expat. Their Personalized Advice Made Me Feel Confident And Secure About My Future.",
    image: "/about/c1.png",
  },
  {
    id: 2,
    name: "Courtney Henry",
    text: "The Team Truly Understood My Financial Goals As An Expat. Their Personalized Advice Made Me Feel Confident And Secure About My Future.",
    image: "/about/c2.png",
  },
  {
    id: 3,
    name: "Courtney Henry",
    text: "The Team Truly Understood My Financial Goals As An Expat. Their Personalized Advice Made Me Feel Confident And Secure About My Future.",
    image: "/about/c1.png",
  },
];

function ReviewCard({ name, text, image }: Review) {
  return (
    <div className="flex h-full flex-col justify-between rounded-xl border bg-white shadow-md">
      {/* Quote */}
      <div className="flex-1 p-6">
        <Quote className="text-brand-primary fill-brand-primary h-6 w-6 rotate-180 transform" />
        <p className="text-brand-gray mt-3">{text}</p>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-3 rounded-b-xl bg-gray-50 p-4">
        <Image
          src={image}
          alt={name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <p className="font-medium text-gray-800">{name}</p>
      </div>
    </div>
  );
}

export default function Review() {
  return (
    <SectionSlider title="WHAT OUR CLIENT SAY" cardWidth={460} gap={24}>
      {Reviews.map((t) => (
        <ReviewCard key={t.id} {...t} />
      ))}
    </SectionSlider>
  );
}
