import { GraduationCap } from "lucide-react";
import ClarityCard, { ClarityCardProps } from "./ClarityCard";

const clarityCards: ClarityCardProps[] = [
  {
    image: "/clarity1.png",
    text: "Career Vision Program™",
    href: "/#",
    Icon: GraduationCap,
  },
  {
    image: "/clarity2.png",
    text: "👀 Sneak Peek",
    href: "/#",
  },
  {
    image: "/clarity3.png",
    text: "🤖 Career Reinvention Program™",
    href: "/#",
  },
];

const Clarity = () => {
  return (
    <div className="p-4 sm:p-10 lg:p-20 bg-brand-bg font-lato">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col max-w-7xl text-center">
          <div className="max-w-2xl flex flex-col gap-5">
            <div className="flex-1 font-red-rose text-2xl sm:text-3xl leading-snug text-center">
              Choose Your Clarity Track
            </div>
            <div className="flex-1 text-brand-gray text-base sm:text-lg text-center">
              Whether you&apos;re exploring options, ready to dive deep, or want
              to try mentoring in action Youth Pulse Digital™ gives you a
              tailored path to get started.
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 sm:py-14 max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto items-stretch">
        {clarityCards.map((card, index) => (
          <ClarityCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Clarity;
