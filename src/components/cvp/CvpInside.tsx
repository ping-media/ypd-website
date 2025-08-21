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
  {
    icon: FileText,
    title: "Discover your true interests and strengths",
  },
  {
    icon: Lightbulb,
    title: "Reflect on your values, preferences, and learning style",
  },
  {
    icon: Compass,
    title: "Identify career directions that align with who you are",
  },
  {
    icon: File,
    title: "Walk away with your Career Persona Report (PDF)",
  },
  {
    icon: GraduationCap,
    title: "Get guidance on college subjects and stream mapping",
  },
];

const CvpInside: React.FC = () => {
  return (
    <section className="p-6 sm:p-12 lg:p-20 bg-brand-bg flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col items-center gap-10 text-center font-lato">
        {/* Heading */}
        <div className="max-w-7xl flex flex-col justify-between items-center gap-4 text-center">
          <h2 className="font-red-rose text-2xl sm:text-3xl">
            online — but here’s what you’ll go through:
          </h2>
          <p className="text-base sm:text-lg text-brand-gray max-w-4xl">
            What’s Inside (Without Giving It All Away 😉) We don’t reveal every
            step
          </p>
        </div>
        {/* Cards */}
        <div className="w-full">
          {/* First 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-8">
            {features.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="border border-brand-primary rounded-lg bg-white shadow-sm p-8 flex flex-col gap-4 items-start hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-md bg-green-50 flex items-center justify-center text-brand-primary">
                  <feature.icon size={22} />
                </div>
                <h3 className="font-red-rose text-lg text-gray-700">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Last 2 cards centered */}
          <div className="flex justify-center gap-8 flex-wrap">
            {features.slice(3).map((feature, index) => (
              <div
                key={index}
                className="border border-brand-primary rounded-lg bg-white shadow-sm p-8 flex flex-col gap-4 items-start hover:shadow-md transition w-full sm:w-[320px]"
              >
                <div className="w-12 h-12 rounded-md bg-green-50 flex items-center justify-center text-brand-primary">
                  <feature.icon size={22} />
                </div>
                <h3 className="font-red-rose text-lg text-gray-700">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
        {/* CTA */}
        <div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/start"
              className="flex items-center justify-center gap-2 rounded-xl bg-brand-primary border border-brand-accent hover:bg-brand-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 font-medium shadow-sm transition-colors"
            >
              <Zap size={18} /> Start Your Journey Today
            </Link>
          </div>

          {/* Footer note */}
          <p className="text-sm text-brand-gray mt-2 text-center">
            Each capsule is short, engaging, and designed to unlock insights no
            more than 15–20 minutes each.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CvpInside;
