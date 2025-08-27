import { Briefcase, GraduationCap, UserRound } from "lucide-react";
import Link from "next/link";
import { RotatingText } from "@/components/other/RotatingText";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#ffffff] to-[#f0fff7] pb-4 sm:pb-10 lg:pb-20">
      {/* Sparkle Decorations */}
      <Image
        src="/icons/elements.svg"
        alt="decoration"
        width={100}
        height={100}
        className="hidden sm:block absolute pointer-events-none"
        style={{ top: "45%", left: "10%" }}
      />

      <Image
        src="/icons/element.svg"
        alt="decoration"
        width={50}
        height={50}
        className="hidden sm:block absolute pointer-events-none"
        style={{ top: "3%", left: "78%" }}
      />

      <Image
        src="/icons/elements.svg"
        alt="decoration"
        width={120}
        height={120}
        className="hidden sm:block absolute pointer-events-none"
        style={{ top: "60%", left: "83%" }}
      />
      {/* Main Content */}
      <div className="container font-lato max-w-4xl pt-4 mx-auto flex flex-col justify-center items-center gap-4 sm:gap-5 px-4 sm:px-6 min-h-[57vh] sm:min-h-0 relative z-10">
        {/* Tagline */}
        <div className="bg-[#F6F7F9] border border-[#E1E4EB] text-xs sm:text-sm rounded-sm w-fit py-1 px-2 text-center">
          ✨ Backed by AI. Guided by Mentors. Built for Bharat.
        </div>

        <div className="flex flex-col gap-6 sm:gap-10">
          {/* Heading & subtext */}
          <div className="text-center space-y-3 sm:space-y-4 flex flex-col items-center">
            <div className="font-red-rose text-2xl sm:text-3xl lg:text-[42px] leading-snug">
              Not Just Another Career Guidance.
              <br className="hidden sm:block" />
              <RotatingText
                words={[
                  "A Vision-Mapping System for the 21st-Century Learner.",
                  "Up-skilling India, Empowering Nation, Realizing Dreams.",
                ]}
                duration={3000}
              />
            </div>
            <div className="max-w-3xl text-brand-gray text-base sm:text-lg lg:text-xl">
              Youth Pulse Digital™ creates ultra-personalized journeys that
              unlock clarity, career readiness, and critical thinking in every
              learner.
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5 text-sm sm:text-base lg:text-lg w-full">
            <Link
              href={"/#"}
              className="flex justify-center items-center gap-2 border border-black rounded-lg py-3 px-4 sm:py-3.5 sm:px-5 w-full sm:w-auto hover:bg-green-100"
            >
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
              I&apos;m a Student
            </Link>
            <Link
              href={"/#"}
              className="flex justify-center items-center gap-2 rounded-lg text-brand-fg bg-brand-primary border border-brand-accent py-3 px-4 sm:py-3.5 sm:px-5 w-full sm:w-auto hover:bg-brand-primary/90"
            >
              <UserRound className="w-5 h-5 sm:w-6 sm:h-6" />
              I&apos;m a Parent
            </Link>
            <Link
              href={"/#"}
              className="flex justify-center items-center gap-2 border border-black rounded-lg py-3 px-4 sm:py-3.5 sm:px-5 w-full sm:w-auto hover:bg-green-100"
            >
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
              I&apos;m a Professional
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
