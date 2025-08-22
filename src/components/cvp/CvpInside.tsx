import React from "react";
import Link from "next/link";
import {
  Zap,
  FileText,
  Lightbulb,
  Compass,
  File,
  GraduationCap,
} from "lucide-react";

const features = [
  { icon: FileText, title: "Discover your true interests and strengths" },
  {
    icon: Lightbulb,
    title: "Reflect on your values, preferences, and learning style",
  },
  {
    icon: Compass,
    title: "Identify career directions that align with who you are",
  },
  { icon: File, title: "Walk away with your Career Persona Report (PDF)" },
  {
    icon: GraduationCap,
    title: "Get guidance on college subjects and stream mapping",
  },
];

const CvpInside: React.FC = () => {
  return (
    <section className="p-4 sm:p-10 lg:p-20 flex justify-center bg-brand-bg">
      {/* <div className="w-full max-w-[1440px] flex flex-col items-center gap-12 text-center font-lato px-4 md:px-8 lg:px-16"> */}
      <div className="max-w-[1440px] w-full flex flex-col justify-center items-center gap-8 sm:gap-12 font-lato">
        {/* Heading */}
        <div className="max-w-7xl flex flex-col items-center gap-4 text-center">
          <h2 className="font-red-rose text-2xl sm:text-3xl md:text-4xl">
            online — but here’s what you’ll go through:
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-brand-gray max-w-4xl">
            What’s Inside (Without Giving It All Away 😉) We don’t reveal every
            step
          </p>
        </div>

        {/* === For XL and above: original 3 + 2 layout === */}
        <div className="w-full hidden xl:flex flex-col gap-10">
          {/* First 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
            {features.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="border border-brand-primary rounded-lg bg-white shadow-sm p-6 sm:p-8 flex flex-col gap-4 items-start hover:shadow-md transition w-full"
              >
                <div className="w-12 h-12 rounded-md bg-green-50 flex items-center justify-center text-brand-primary">
                  <feature.icon size={22} />
                </div>
                <h3 className="font-red-rose text-lg sm:text-xl text-gray-700 text-start">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Last 2 cards centered */}
          <div className="flex justify-center gap-6 sm:gap-8 flex-wrap">
            {features.slice(3).map((feature, index) => (
              <div
                key={index}
                className="border border-brand-primary rounded-lg bg-white shadow-sm p-6 sm:p-8 flex flex-col gap-4 items-start hover:shadow-md transition w-full sm:w-[320px] md:w-[360px]"
              >
                <div className="w-12 h-12 rounded-md bg-green-50 flex items-center justify-center text-brand-primary">
                  <feature.icon size={22} />
                </div>
                <h3 className="font-red-rose text-lg sm:text-xl text-gray-700 text-start">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* === For below XL: single responsive grid === */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 xl:hidden">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-brand-primary rounded-lg bg-white shadow-sm p-6 sm:p-8 flex flex-col gap-4 items-start hover:shadow-md transition w-full"
            >
              <div className="w-12 h-12 rounded-md bg-green-50 flex items-center justify-center text-brand-primary">
                <feature.icon size={22} />
              </div>
              <h3 className="font-red-rose text-lg sm:text-xl text-gray-700 text-start">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4">
          <Link
            href="/start"
            className="flex items-center justify-center gap-2 rounded-xl bg-brand-primary border border-brand-accent hover:bg-brand-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 font-medium shadow-sm transition-colors"
          >
            <Zap size={18} /> Start Your Journey Today
          </Link>
          <p className="text-sm sm:text-base text-brand-gray mt-2 text-center max-w-2xl mx-auto">
            Each capsule is short, engaging, and designed to unlock insights no
            more than 15–20 minutes each.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CvpInside;
