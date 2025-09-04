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
        className="pointer-events-none absolute hidden sm:block"
        style={{ top: "45%", left: "10%" }}
      />

      <Image
        src="/icons/element.svg"
        alt="decoration"
        width={50}
        height={50}
        className="pointer-events-none absolute hidden sm:block"
        style={{ top: "3%", left: "78%" }}
      />

      <Image
        src="/icons/elements.svg"
        alt="decoration"
        width={120}
        height={120}
        className="pointer-events-none absolute hidden sm:block"
        style={{ top: "60%", left: "83%" }}
      />
      {/* Main Content */}
      <div className="font-lato relative z-10 container mx-auto flex min-h-[48vh] max-w-4xl flex-col items-center justify-center gap-4 px-4 pt-4 sm:min-h-0 sm:gap-5 sm:px-6">
        {/* Tagline */}
        <div className="w-fit rounded-sm border border-[#E1E4EB] bg-[#F6F7F9] px-2 py-1 text-center text-xs sm:text-sm">
          ✨ Backed by AI. Guided by Mentors. Built for Bharat.
        </div>

        <div className="flex flex-col gap-6 sm:gap-10">
          {/* Heading & subtext */}
          <div className="flex flex-col items-center space-y-3 text-center sm:space-y-4">
            <div className="font-red-rose text-2xl leading-snug sm:text-3xl lg:text-[42px]">
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
            <div className="text-brand-gray max-w-3xl text-base sm:text-lg lg:text-xl">
              Youth Pulse Digital™ creates ultra-personalized journeys that
              unlock clarity, career readiness, and critical thinking in every
              learner.
            </div>
          </div>

          {/* Buttons */}
          <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
            <Link
              href={"/#"}
              className="btn-transparent btn-size max-sm:w-full"
            >
              <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
              I&apos;m a Student
            </Link>
            <Link href={"/#"} className="btn-primary btn-size max-sm:w-full">
              <UserRound className="h-5 w-5 sm:h-6 sm:w-6" />
              I&apos;m a Parent
            </Link>
            <Link
              href={"/#"}
              className="btn-transparent btn-size max-sm:w-full"
            >
              <Briefcase className="h-5 w-5 sm:h-6 sm:w-6" />
              I&apos;m a Professional
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
