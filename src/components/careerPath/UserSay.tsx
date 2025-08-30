import Image from "next/image";
import { Quote } from "lucide-react";
import SectionSlider from "../ui/SectionSlider";

interface Review {
  id: number;
  name: string;
  text: string;
  image: string;
  heading?: string;
  education?: string;
}

interface UserSayProps {
  title: string;
  reviews: Review[];
  cardWidth?: number;
  gap?: number;
}

function ReviewCard({ name, text, image, heading, education }: Review) {
  return (
    <div className="flex h-full flex-col justify-between rounded-xl border bg-white shadow-md">
      {/* Quote */}
      <div className="flex-1 p-6">
        <Quote className="text-brand-primary fill-brand-primary h-6 w-6 rotate-180 transform" />
        {heading && (
          <p className="text-brand-gray mt-3 font-semibold">{heading}</p>
        )}
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
        <div>
          <p className="font-medium text-gray-800">{name}</p>
          <p className="text-brand-gray text-xs">{education}</p>
        </div>
      </div>
    </div>
  );
}

export default function UserSay({
  title,
  reviews,
  cardWidth = 460,
  gap = 24,
}: UserSayProps) {
  return (
    <SectionSlider title={title} cardWidth={cardWidth} gap={gap}>
      {reviews.map((t) => (
        <ReviewCard key={t.id} {...t} />
      ))}
    </SectionSlider>
  );
}
