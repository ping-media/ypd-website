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
    <div className="rounded-xl shadow-md border bg-white flex flex-col justify-between h-full">
      {/* Quote */}
      <div className="p-6 flex-1">
        <Quote className="w-6 h-6 text-brand-primary transform rotate-180 fill-brand-primary" />
        <p className="text-brand-gray mt-3">{text}</p>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-b-xl">
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
    <SectionSlider
      title=" WHAT USERS ACROSS INDIA SAY ABOUT YPD"
      cardWidth={460}
      gap={24}
    >
      {Reviews.map((t) => (
        <ReviewCard key={t.id} {...t} />
      ))}
    </SectionSlider>
  );
}
