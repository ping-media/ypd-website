import Image from "next/image";

interface DecisionCardItemProps {
  image: string;
  heading: string;
}

const DecisionCard: React.FC<DecisionCardItemProps> = ({ image, heading }) => {
  return (
    <div className="border p-2.5 sm:p-3 rounded-lg bg-white border-gray-200 shadow-sm flex flex-col m-1">
      <div className="rounded-lg overflow-hidden border border-gray-200 flex flex-col h-full">
        {/* Image */}
        <div className="w-full h-48 sm:h-56 md:h-64 relative">
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
        <div className="p-4 flex-1 flex items-center justify-center">
          <div className="font-red-rose text-lg text-center sm:text-left break-words min-h-[56px] flex items-center">
            {heading}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecisionCard;
