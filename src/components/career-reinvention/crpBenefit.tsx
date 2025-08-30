import { BriefcaseBusiness, Lightbulb, HandCoins } from "lucide-react";

const features = [
  {
    icon: <BriefcaseBusiness className="text-brand-primary h-8 w-8" />,
    title: "PIP Candidates",
    description:
      "Professionals placed under Performance Improvement Plans needing urgent turnaround support",
  },
  {
    icon: <Lightbulb className="text-brand-primary h-8 w-8" />,
    title: "Career Switchers",
    description:
      "Mid-career professionals looking to pivot into new industries or roles with new skills.",
  },
  {
    icon: <HandCoins className="text-brand-primary h-8 w-8" />,
    title: "Stagnant Professionals",
    description:
      "Creates a personalized Career Vision Map™ with career zones, skill focus, and portfolio tips.",
  },
  {
    icon: <BriefcaseBusiness className="text-brand-primary h-8 w-8" />,
    title: "Relaunching Mothers",
    description:
      "Mothers seeking structured, respectful re-entry pathways into professional workstreams after career breaks.",
  },
  {
    icon: <Lightbulb className="text-brand-primary h-8 w-8" />,
    title: "Burnout Survivors",
    description:
      "Professionals who faced emotional exhaustion, seeking to rebuild confidence, balance, and strategy.",
  },
  {
    icon: <HandCoins className="text-brand-primary h-8 w-8" />,
    title: "Lost Early Professionals",
    description:
      "Freshers and early professionals unsure how to build strategic, sustainable careers not just survive jobs.",
  },
];

export default function Ecosystem() {
  return (
    <section className="flex justify-center p-4 sm:p-10 lg:p-20">
      <div className="font-lato flex w-full max-w-[1440px] flex-col gap-4 sm:gap-10 lg:gap-14">
        {/* Heading */}
        <div className="mx-auto flex max-w-4xl flex-col gap-3 text-center sm:gap-4">
          <h2 className="font-red-rose text-xl sm:text-2xl lg:text-3xl">
            Who Will Benefit from the YPD Career Reinvention Program™
          </h2>
          {/* <p className="text-brand-gray text-sm leading-relaxed sm:text-base lg:text-lg">
           description
          </p> */}
        </div>

        {/* Features Grid */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-14">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 transition hover:shadow-md sm:gap-4 sm:p-6 lg:p-8"
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
