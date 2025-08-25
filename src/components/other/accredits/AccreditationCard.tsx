import Image from "next/image";

interface AccreditationCardProps {
  image: string;
  heading: string;
  subheading: string;
}

const AccreditationCard: React.FC<AccreditationCardProps> = ({
  image,
  heading,
  subheading,
}) => {
  return (
    <div className="p-4 sm:p-8 rounded-xl border bg-white shadow-sm sm:h-56 h-full mx-1">
      <div className="flex flex-col items-center gap-3 sm:gap-6 text-center">
        <div className="w-14 h-14 bg-[#ECFDF5] flex items-center justify-center rounded-md shadow-[1px_1px_2px_rgba(0,0,0,0.1)]">
          <Image src={image} alt={heading} width={36} height={36} />
        </div>

        <div className="space-y-1">
          <h3 className="font-red-rose text-lg sm:text-xl leading-tight">
            {heading}
          </h3>
          <p className="text-sm text-brand-gray leading-snug">{subheading}</p>
        </div>
      </div>
    </div>
  );
};

export default AccreditationCard;
