import { Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex justify-center bg-gradient-to-t from-green-50 to-white px-4 pb-4 sm:px-10 sm:pb-10 lg:px-20">
      <div className="font-lato flex w-full max-w-[1440px] flex-col items-center justify-center gap-4 sm:gap-14">
        {/* Heading */}
        <div className="flex w-full max-w-7xl flex-col items-center justify-between gap-4">
          <h2 className="font-red-rose text-center text-2xl leading-snug sm:text-3xl lg:text-[42px]">
            Reinvent Your Career. Redefine Your Future.
          </h2>
          <p className="text-brand-gray text-center text-base sm:text-lg lg:text-xl">
            The Career Reinvention Program™ helps you rediscover your
            strengths, uncover new opportunities, and create a future you’re
            excited to live.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative h-[280px] w-full max-w-7xl overflow-hidden rounded-3xl shadow-md sm:h-[360px] lg:h-[420px]">
          <Image
            src="/career-reinvention/hero.png"
            alt="Youth Pulse Digital"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* CTA Button */}
        <Link href={"/#"} className="btn-primary btn-size max-sm:w-full">
          <Zap className="h-5 w-5 sm:h-6 sm:w-6" />
          Try the CVP Advance
        </Link>
      </div>
    </section>
  );
}
