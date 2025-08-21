import Image from "next/image";

interface OfferingCardProps {
  image: string;
  heading: string;
  subheading: string;
}

const OfferingCard: React.FC<OfferingCardProps> = ({
  image,
  heading,
  subheading,
}) => {
  return (
    <div className="p-6 sm:p-10 rounded-xl border bg-white shadow-sm max-sm:h-[220px] sm:h-[250px] hover:border-[#A7DCBB] hover:bg-[#F0FFF7] flex flex-col m-1">
      <div className="flex flex-col gap-5 flex-grow">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#ECFDF5] flex items-center justify-center rounded-md shadow-[1px_1px_2px_rgba(0,0,0,0.1)]">
          <Image src={image} alt={heading} width={36} height={36} />
        </div>

        <div className="space-y-1">
          <h3 className="font-red-rose text-lg sm:text-[22px] leading-tight">
            {heading}
          </h3>
          <p className="text-sm sm:text-base text-brand-gray leading-snug line-clamp-3">
            {subheading}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfferingCard;
