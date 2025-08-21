interface PathwayProps {
  title: string;
  cvp: string;
  inclination: string;
  description: string;
  alternate: string;
  duration: string;
}

const PathwaysCard = ({
  title,
  cvp,
  inclination,
  description,
  alternate,
  duration,
}: PathwayProps) => {
  return (
    <div className="w-full max-w-[380px] h-full flex flex-col rounded-lg border hover:border-brand-accent bg-white hover:bg-[#f0fff7] shadow-sm overflow-hidden mx-auto transition-colors duration-200">
      {/* Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <h2 className="text-lg sm:text-xl md:text-2xl font-poppins leading-snug">
          {title}
        </h2>

        <p className="mt-2 sm:mt-3 text-brand-primary font-medium text-sm sm:text-base">
          {cvp} | {inclination}
        </p>

        <p className="mt-3 sm:mt-4 text-brand-gray font-lato text-sm sm:text-base leading-relaxed flex-grow">
          {description}
        </p>

        <div className="mt-3 sm:mt-4">
          <p className="text-gray-600 text-xs sm:text-sm">
            <span className="text-gray-700 font-medium">
              Alternate Pathway:
            </span>
          </p>
          <p className="mt-1 font-semibold text-xs sm:text-sm">{alternate}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-brand-accent text-white text-center p-3 sm:p-4">
        <p className="font-medium text-xs sm:text-sm">
          Program Duration: {duration}
        </p>
      </div>
    </div>
  );
};

export default PathwaysCard;
