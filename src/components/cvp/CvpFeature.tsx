import { FileText, Layers, BarChart3, Brain, Zap } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: FileText,
    title: "Deep Clarity",
    description:
      "Discover your true career fit through a structured 10-step experience. Interest, strength, stream, and mindset all mapped clearly, all in one place.",
  },
  {
    icon: Layers,
    title: "Adaptive Journey",
    description:
      "Every student is different so is their path. CVP Lite adjusts to your learning style, pace, and academic stage without forcing a fixed template.",
  },
  {
    icon: BarChart3,
    title: "Instant Insights",
    description:
      "No waiting, no confusion. Get your personalized CVP Lite Report the moment you finish: clear, action-ready, and parent-friendly.",
  },
  {
    icon: Brain,
    title: "True AI",
    description:
      "This isn’t just a chatbot or quiz. Our engine uses real frameworks, real-time logic, and your real inputs not scraped suggestions or generic lists.",
  },
];

const CvpFeature = () => {
  return (
    <section className="p-4 sm:p-10 lg:p-20 flex justify-center bg-white">
      <div className="max-w-[1440px] w-full flex flex-col justify-center items-center gap-8 sm:gap-12 font-lato">
        {/* Heading */}
        <div className="max-w-7xl flex flex-col justify-between items-center gap-4 text-center">
          <h2 className="font-red-rose text-2xl sm:text-3xl">
            Key Features That Empower Your Career Journey
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl bg-white shadow-sm p-6 flex flex-col gap-3 hover:shadow-md transition"
            >
              <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-brand-primary">
                <feature.icon size={20} />
              </div>
              <h3 className="font-red-rose text-lg">{feature.title}</h3>
              <p className="text-sm text-brand-gray leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <Link
            href="/#"
            className="flex items-center justify-center gap-2 rounded-xl bg-brand-primary border border-brand-accent hover:bg-brand-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 font-medium shadow-sm transition-colors"
          >
            <Zap size={18} /> Start Your Journey Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CvpFeature;
