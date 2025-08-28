import Image from "next/image";

interface Stat {
  value: string;
  description: string;
}

interface CvpImpactProps {
  heading: string;
  description: string;
  stats: Stat[];
  image: {
    src: string;
    alt: string;
  };
}

const CvpImpact = ({ heading, description, stats, image }: CvpImpactProps) => {
  return (
    <section className="flex justify-center p-4 sm:p-10 lg:p-20">
      <div className="font-lato flex w-full max-w-[1440px] flex-col items-center gap-4 sm:gap-10 lg:gap-14">
        <div className="flex w-full flex-col items-center gap-4 rounded-xl bg-gray-50 p-4 sm:gap-10 sm:p-10 lg:flex-row lg:gap-14">
          {/* Left Column - Text */}
          <div className="flex w-full flex-col gap-6 lg:w-1/2">
            {/* Heading */}
            <h2 className="font-red-rose text-2xl sm:text-3xl lg:text-4xl">
              {heading}
            </h2>
            {/* Description */}
            <p className="text-brand-gray text-base leading-relaxed sm:text-lg">
              {description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-6 pt-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h3 className="font-red-rose border-b-2 text-3xl sm:text-4xl">
                    {stat.value}
                  </h3>
                  <p className="text-brand-gray text-sm sm:text-base">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative mt-6 min-h-[280px] w-full overflow-hidden rounded-3xl shadow-md sm:min-h-[400px] lg:mt-0 lg:min-h-[520px] lg:w-1/2">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CvpImpact;
