import {
  GraduationCap,
  Users,
  BookOpen,
  Building2,
  Briefcase,
  Handshake,
} from "lucide-react";

const features = [
  {
    icon: <GraduationCap className="text-brand-primary h-8 w-8" />,
    title: "Students",
    description:
      "From Class 9 to mid-career professionals each building clarity, confidence, and a custom roadmap.",
  },
  {
    icon: <Users className="text-brand-primary h-8 w-8" />,
    title: "Parents",
    description:
      "Critical decision allies, supporting emotional readiness and future mapping through Parent Connect™.",
  },
  {
    icon: <BookOpen className="text-brand-primary h-8 w-8" />,
    title: "Mentors & Educators",
    description:
      "Certified guides delivering personalized learning journeys and adaptive nudges.",
  },
  {
    icon: <Building2 className="text-brand-primary h-8 w-8" />,
    title: "Institutions",
    description:
      "Schools, colleges, and skilling hubs implementing structured guidance across grades and streams.",
  },
  {
    icon: <Briefcase className="text-brand-primary h-8 w-8" />,
    title: "Industry & Hiring Partners",
    description:
      "Co-creating role-to-skill bridges, career exposure, and workplace preparedness.",
  },
  {
    icon: <Handshake className="text-brand-primary h-8 w-8" />,
    title: "Government Collaborations",
    description:
      "Integrating with national skilling missions, NEP objectives, and outcome-linked programs.",
  },
];

export default function Ecosystem() {
  return (
    <section className="flex justify-center p-4 sm:p-10 lg:p-20">
      <div className="font-lato flex w-full max-w-[1440px] flex-col gap-4 sm:gap-10 lg:gap-14">
        {/* Heading */}
        <div className="mx-auto flex max-w-4xl flex-col gap-3 text-center sm:gap-4">
          <h2 className="font-red-rose text-xl sm:text-2xl lg:text-3xl">
            The YPD Ecosystem
          </h2>
          <p className="text-brand-gray text-sm leading-relaxed sm:text-base lg:text-lg">
            At Youth Pulse Digital™, we’re building a transformative career
            ecosystem where learners, mentors, families, and institutions all
            play an active role. Career clarity isn’t a solo journey, but a
            shared, evolving process powered by real-world exposure and
            continuous guidance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-14">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 rounded-xl bg-white p-5 shadow-md transition hover:shadow-lg sm:gap-4 sm:p-6 lg:p-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 sm:h-12 sm:w-12">
                {f.icon}
              </div>
              <h3 className="font-red-rose text-lg sm:text-xl lg:text-2xl">
                {f.title}
              </h3>
              <p className="text-brand-gray text-sm leading-relaxed sm:text-base lg:text-lg">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
