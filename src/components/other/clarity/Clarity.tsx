import ClarityCard, { ClarityCardProps } from "./ClarityCard";

const clarityCards: ClarityCardProps[] = [
  {
    image: "/clarity1.png",
    text: "Career Vision Program™",
    href: "/career-vision",
    icon: "/icons/c1.svg",
  },
  {
    image: "/clarity2.png",
    text: "Sneak Peek",
    href: "/coming-soon",
    icon: "/icons/c2.svg",
  },
  {
    image: "/clarity3.png",
    text: "Career Reinvention Program™",
    href: "/career-reinvention",
    icon: "/icons/c3.svg",
  },
];

const Clarity = () => {
  return (
    <div className="bg-brand-bg font-lato p-4 sm:p-10 lg:p-20">
      <div className="flex flex-col items-center justify-center">
        <div className="flex max-w-7xl flex-col text-center">
          <div className="flex max-w-2xl flex-col gap-5">
            <div className="font-red-rose flex-1 text-center text-2xl leading-snug sm:text-3xl">
              Choose Your Clarity Track
            </div>
            <div className="text-brand-gray flex-1 text-center text-base sm:text-lg">
              Whether you&apos;re exploring options, ready to dive deep, or want
              to try mentoring in action Youth Pulse Digital™ gives you a
              tailored path to get started.
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-4 py-4 sm:grid-cols-2 sm:py-14 lg:grid-cols-3">
        {clarityCards.map((card, index) => (
          <ClarityCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Clarity;
