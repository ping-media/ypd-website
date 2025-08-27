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
    <section className="p-4 sm:p-10 lg:p-20 flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col items-center gap-4 sm:gap-10 lg:gap-14 font-lato">
        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-10 lg:gap-14 w-full bg-gray-50 rounded-xl p-4 sm:p-10">
          {/* Left Column - Text */}
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-red-rose">
              {heading}
            </h2>
            {/* Description */}
            <p className="text-base sm:text-lg text-brand-gray leading-relaxed">
              {description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h3 className="text-3xl sm:text-4xl font-red-rose border-b-2">
                    {stat.value}
                  </h3>
                  <p className="text-sm sm:text-base text-brand-gray">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full lg:w-1/2 relative rounded-3xl overflow-hidden shadow-md min-h-[280px] sm:min-h-[400px] lg:min-h-[520px] mt-6 lg:mt-0">
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
