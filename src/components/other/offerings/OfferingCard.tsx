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
    <div className="m-1 flex flex-col rounded-xl border bg-white p-6 shadow-sm hover:border-[#A7DCBB] hover:bg-[#F0FFF7] max-sm:h-[220px] sm:h-[250px] sm:p-10">
      <div className="flex flex-grow flex-col gap-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#ECFDF5] shadow-[1px_1px_2px_rgba(0,0,0,0.1)] sm:h-14 sm:w-14">
          <Image src={image} alt={heading} width={36} height={36} />
        </div>

        <div className="space-y-1">
          <h3 className="font-red-rose text-lg leading-tight sm:text-[22px]">
            {heading}
          </h3>
          <p className="text-brand-gray line-clamp-3 text-sm leading-snug sm:text-base">
            {subheading}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfferingCard;
