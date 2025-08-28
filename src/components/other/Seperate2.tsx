import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Seperate2 = () => {
  return (
    <div className="font-lato mx-auto flex max-w-[1440px] flex-col gap-4 p-4 sm:gap-10 sm:p-10 lg:gap-14 lg:p-20">
      {/* wrapper */}
      <div className="from-brand-accent via-brand-primary to-brand-accent flex min-h-[400px] w-full max-w-7xl flex-col items-center justify-between rounded-2xl bg-gradient-to-r p-4 sm:p-10 md:flex-row">
        {/* Left Content */}
        <div className="flex max-w-xl flex-col justify-center text-left">
          <h2 className="font-red-rose text-2xl leading-snug font-bold text-white sm:text-3xl md:text-4xl">
            Shape Your Future with <br /> Personalized Career Guidance
          </h2>
          <p className="mt-3 text-base text-white sm:mt-4 sm:text-lg">
            AI-driven vision mapping and expert mentorship to help students,
            parents, and professionals unlock clarity, confidence, and career
            success.
          </p>

          <Link
            href="/#"
            className="btn-size mt-4 w-fit bg-white text-black hover:bg-white/90 sm:mt-6"
          >
            View More
            <ArrowRight size={24} className="shrink-0" />
          </Link>
        </div>

        {/* Right Side */}
        <div className="relative mt-4 flex h-[250px] w-full items-center justify-center sm:mt-6 sm:h-[300px] md:mt-0 md:h-[400px]">
          <Image
            src="/seperate2.png"
            alt="img"
            fill
            className="rounded-lg object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Seperate2;
