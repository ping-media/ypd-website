"use client";
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
    <div className="py-10 sm:py-14 md:py-16 flex flex-col justify-center items-center gap-6 sm:gap-8">
      {/* Heading */}
      <div className="max-w-5xl flex flex-col justify-center items-center gap-2 sm:gap-4 px-4 text-center">
        <div className="font-red-rose text-2xl sm:text-3xl">Trusted by</div>
        <div className="text-brand-gray text-sm sm:text-base md:text-lg">
          Over 32K+ software business growing with Stratix
        </div>
      </div>

      {/* Logo slider */}
      <div className="relative max-w-[1440px] w-full mx-auto overflow-hidden bg-white py-4 sm:py-5 md:py-6 font-lato">
        {/* Left fade overlay */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-10 sm:w-12 md:w-16 bg-gradient-to-r from-white to-transparent z-10" />

        {/* Right fade overlay */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-10 sm:w-12 md:w-16 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling container */}
        <div className="flex gap-8 sm:gap-12 md:gap-14 lg:gap-20 animate-scroll hover:[animation-play-state:paused] px-4">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[80px] sm:w-[100px] md:w-[120px] h-[40px] sm:h-[50px] md:h-[60px] relative"
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
