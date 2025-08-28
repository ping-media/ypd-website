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
    <div className="mx-1 h-full rounded-xl border bg-white p-4 shadow-sm sm:h-56 sm:p-8">
      <div className="flex flex-col items-center gap-3 text-center sm:gap-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-md bg-[#ECFDF5] shadow-[1px_1px_2px_rgba(0,0,0,0.1)]">
          <Image src={image} alt={heading} width={36} height={36} />
        </div>

        <div className="space-y-1">
          <h3 className="font-red-rose text-lg leading-tight sm:text-xl">
            {heading}
          </h3>
          <p className="text-brand-gray text-sm leading-snug">{subheading}</p>
        </div>
      </div>
    </div>
  );
};

export default AccreditationCard;
