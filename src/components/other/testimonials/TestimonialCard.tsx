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
    <div className="bg-white rounded-xl shadow p-4 flex flex-col justify-between h-full border sm:gap-6">
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
          <span className="text-gray-600 text-sm">{rating.toFixed(1)}</span>
        </div>

        {/* Review */}
        <p className="text-brand-gray text-sm mt-2 flex-grow">{review}</p>

        {/* Avatar & Name */}
      </div>
      <div className="flex items-center gap-2 mt-4">
        <div className="w-8 h-8 relative rounded-full overflow-hidden shrink-0">
          <Image src={avatar} alt={name} fill className="object-cover" />
        </div>
        <p className="font-semibold text-sm leading-none">{name}</p>
      </div>
    </div>
  );
}
