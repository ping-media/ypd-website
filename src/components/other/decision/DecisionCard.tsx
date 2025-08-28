import Image from "next/image";

interface DecisionCardItemProps {
  image: string;
  heading: string;
}

const DecisionCard: React.FC<DecisionCardItemProps> = ({ image, heading }) => {
  return (
    <div className="m-1 flex flex-col rounded-lg border border-gray-200 bg-white p-2.5 shadow-sm sm:p-3">
      <div className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200">
        {/* Image */}
        <div className="relative h-48 w-full sm:h-56 md:h-64">
          <Image
            src={image}
            alt={heading}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={false}
          />
        </div>

        {/* Text */}
        <div className="flex flex-1 items-center justify-center p-4">
          <div className="font-red-rose flex min-h-[56px] items-center text-center text-lg break-words sm:text-left">
            {heading}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecisionCard;
