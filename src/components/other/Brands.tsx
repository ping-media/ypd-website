import Image from "next/image";

const logos = [
  "/brand1.png",
  "/brand2.png",
  "/brand3.png",
  "/brand4.png",
  "/brand5.png",
  "/brand6.png",
];

export default function Brands() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-10 sm:gap-8 sm:py-14 md:py-16">
      {/* Heading */}
      <div className="flex max-w-5xl flex-col items-center justify-center gap-2 px-4 text-center sm:gap-4">
        <div className="font-red-rose text-2xl sm:text-3xl">Trusted by</div>
        <div className="text-brand-gray text-sm sm:text-base md:text-lg">
          Over 32K+ software business growing with Stratix
        </div>
      </div>

      {/* Logo slider */}
      <div className="font-lato relative mx-auto w-full max-w-[1440px] overflow-hidden bg-white py-4 sm:py-5 md:py-6">
        {/* Left fade overlay */}
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-10 bg-gradient-to-r from-white to-transparent sm:w-12 md:w-16" />

        {/* Right fade overlay */}
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-10 bg-gradient-to-l from-white to-transparent sm:w-12 md:w-16" />

        {/* Scrolling container */}
        <div className="animate-scroll flex gap-8 px-4 hover:[animation-play-state:paused] sm:gap-12 md:gap-14 lg:gap-20">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="relative h-[40px] w-[80px] flex-shrink-0 sm:h-[50px] sm:w-[100px] md:h-[60px] md:w-[120px]"
            >
              <Image
                src={logo}
                alt={`Brand ${i + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
