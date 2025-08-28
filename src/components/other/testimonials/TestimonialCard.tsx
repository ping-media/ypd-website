import Image from "next/image";

interface TestimonialCardProps {
  rating: number;
  review: string;
  name: string;
  avatar: string;
}

export default function TestimonialCard({
  rating,
  review,
  name,
  avatar,
}: TestimonialCardProps) {
  return (
    <div className="flex h-full flex-col justify-between rounded-xl border bg-white p-4 shadow sm:gap-6">
      <div className="flex flex-col gap-3 sm:gap-6">
        {/* Rating Row */}
        <div className="flex items-center gap-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`text-lg ${
                  i < Math.round(rating) ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-600">{rating.toFixed(1)}</span>
        </div>

        {/* Review */}
        <p className="text-brand-gray mt-2 flex-grow text-sm">{review}</p>

        {/* Avatar & Name */}
      </div>
      <div className="mt-4 flex items-center gap-2">
        <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full">
          <Image src={avatar} alt={name} fill className="object-cover" />
        </div>
        <p className="text-sm leading-none font-semibold">{name}</p>
      </div>
    </div>
  );
}
