import {
  GraduationCap,
  Users,
  BookOpen,
  Building2,
  Briefcase,
  Lightbulb,
  Handshake,
} from "lucide-react";

const features = [
  {
    icon: <GraduationCap className="w-8 h-8 text-brand-primary" />,
    title: "Students",
    description:
      "From Class 9 to mid-career professionals each building clarity, confidence, and a custom roadmap.",
  },
  {
    icon: <Users className="w-8 h-8 text-brand-primary" />,
    title: "Parents",
    description:
      "Critical decision allies, supporting emotional readiness and future mapping through Parent Connect™.",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-brand-primary" />,
    title: "Mentors & Educators",
    description:
      "Certified guides delivering personalized learning journeys and adaptive nudges.",
  },
  {
    icon: <Building2 className="w-8 h-8 text-brand-primary" />,
    title: "Institutions",
    description:
      "Schools, colleges, and skilling hubs implementing structured guidance across grades and streams.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-brand-primary" />,
    title: "Industry & Hiring Partners",
    description:
      "Co-creating role-to-skill bridges, career exposure, and workplace preparedness.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-brand-primary" />,
    title: "Innovation & Research Teams",
    description:
      "Continuously evolving AI logic, frameworks, and learner models for relevance and scale.",
  },
  {
    icon: <Handshake className="w-8 h-8 text-brand-primary" />,
    title: "Government Collaborations",
    description:
      "Integrating with national skilling missions, NEP objectives, and outcome-linked programs.",
  },
];

export default function Ecosystem() {
  return (
    <section className="p-4 sm:p-10 lg:p-20 flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col gap-4 sm:gap-10 lg:gap-14 font-lato">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto flex flex-col gap-3 sm:gap-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-red-rose">
            The YPD Ecosystem
          </h2>
          <p className="text-brand-gray text-sm sm:text-base lg:text-lg leading-relaxed">
            At Youth Pulse Digital™, we’re building a transformative career
            ecosystem where learners, mentors, families, and institutions all
            play an active role. Career clarity isn’t a solo journey, but a
            shared, evolving process powered by real-world exposure and
            continuous guidance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10 lg:gap-14">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-5 sm:p-6 lg:p-8 bg-white rounded-xl shadow-md flex flex-col gap-3 sm:gap-4 hover:shadow-lg transition"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-green-50 rounded-lg">
                {f.icon}
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-red-rose">
                {f.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
