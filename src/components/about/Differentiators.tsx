import {
  Target,
  Users,
  Heart,
  GitBranch,
  RefreshCw,
  Building2,
  Compass,
  BookOpen,
} from "lucide-react";
import Image from "next/image";

export default function Differentiators() {
  const differentiators = [
    {
      title: "Clarity Beyond Scores",
      description:
        "Deep insights that go beyond traditional assessment metrics",
      icon: Target,
    },
    {
      title: "AI + Human Synergy",
      description:
        "Perfect blend of artificial intelligence and human expertise",
      icon: Users,
    },
    {
      title: "Emotion-Centric Design",
      description:
        "User experience crafted with emotional intelligence at its core",
      icon: Heart,
    },
    {
      title: "Alternate Pathways Engine",
      description: "Dynamic routing system for diverse career possibilities",
      icon: GitBranch,
    },
    {
      title: "Self-Paced with Feedback Loops",
      description: "Adaptive learning with continuous improvement cycles",
      icon: RefreshCw,
    },
    {
      title: "Real Industry Alignment",
      description:
        "Direct connection to current market demands and opportunities",
      icon: Building2,
    },
    {
      title: "Inclusive Ecosystem",
      description:
        "Welcoming environment designed for diverse backgrounds and needs",
      icon: Compass,
    },
    {
      title: "Research-Driven Logic",
      description: "Evidence-based methodology backed by scientific research",
      icon: BookOpen,
    },
  ];

  return (
    <section className="flex justify-center bg-gradient-to-t from-green-50 to-white p-4 sm:p-10 lg:px-20 lg:py-16">
      <div className="font-lato flex w-full max-w-[1440px] flex-col items-center justify-center gap-6 sm:gap-10">
        {/* Heading */}
        <div className="flex w-full max-w-7xl flex-col items-center justify-between gap-4 pb-6 sm:pb-10">
          <h2 className="font-red-rose text-center text-2xl leading-snug sm:text-3xl lg:text-[42px]">
            Our Differentiators
          </h2>
          <p className="text-brand-gray text-center text-base sm:text-lg lg:text-xl">
            At Youth Pulse Digital, we don&apos;t just run assessments or just
            train you — we build living, breathing ecosystems of clarity,
            structure, and career transformation. Here&apos;s what sets us apart
            from conventional EdTech or generic career testing tools:
          </p>
        </div>

        {/* Main Content - 30/40/30 Layout */}
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-4 sm:gap-8 lg:grid-cols-10 lg:gap-10">
          {/* Left Side - First 4 Differentiators (30%) */}
          <div className="space-y-4 lg:col-span-3">
            {differentiators.slice(0, 4).map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-brand-bg hover:bg-brand-bg/80 relative overflow-hidden rounded-xl p-5 shadow-md transition-colors"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="bg-brand-primary flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg shadow-md">
                      <Icon className="h-5 w-5 text-white" />
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <h3 className="mb-1 text-base font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Image (40%) */}
          <div className="flex justify-center lg:col-span-4">
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl shadow-xl lg:max-w-lg">
              <Image
                src="/about/diff.png"
                alt="Career Differentiators - Professional team collaborating on career development"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Side - Last 4 Differentiators (30%) */}
          <div className="space-y-4 lg:col-span-3">
            {differentiators.slice(4, 8).map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-brand-bg hover:bg-brand-bg/80 relative overflow-hidden rounded-xl p-5 shadow-md transition-colors"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="bg-brand-primary flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg shadow-md">
                      <Icon className="h-5 w-5 text-white" />
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <h3 className="mb-1 text-base font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
