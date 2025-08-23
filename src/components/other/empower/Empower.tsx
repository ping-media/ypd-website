import SectionSlider from "@/components/ui/SectionSlider";
import EmpowerCard from "./EmpowerCard";

const cardData = [
  {
    icon: "/icons/ai1.svg",
    title: "Find Your Best-Fit Career",
    description:
      "Identify your interest with CVP Lite, Decide with CVP Advance",
  },
  {
    icon: "/icons/g2.png",
    title: "Experience Your Future",
    description:
      "Experience Your Future Before You Live It. CareerVerse™ ,India’s first AI-powered career role simulation. Not a test. Not a lecture. A real, guided journey into 'Life in a Day of a Career Role you pick.'",
  },
  {
    icon: "/icons/ai3.svg",
    title: "Bridge to College",
    description:
      "Meet India's first AI powered Career Counselor 'Counseling Guru' and make decisions based on your needs 100% unbiased & tailor made.",
  },
  {
    icon: "/icons/ai1.svg",
    title: "Find Your Best-Fit Career",
    description:
      "Identify your interest with CVP Lite, Decide with CVP Advance",
  },
  {
    icon: "/icons/g2.png",
    title: "Experience Your Future",
    description:
      "Experience Your Future Before You Live It. CareerVerse™ ,India’s first AI-powered career role simulation. Not a test. Not a lecture. A real, guided journey into 'Life in a Day of a Career Role you pick.'",
  },
];

const Empower = () => {
  return (
    <div className="bg-[#fafafa]">
      <SectionSlider
        title="How YPD Empowers You"
        description={
          <>
            YPD isn’t just a career tool. It’s a personalized, real-world ready
            experience for students, parents, <br className="hidden md:block" />
            institutions, and professionals all powered by our proprietary AI +
            human mentorship platform.
          </>
        }
        cardWidth={390} // cards fit in 1280px
        gap={5}
        buttonText="Explore Counseling Guru™"
        buttonHref="/counseling"
      >
        {cardData.map((item, index) => (
          <EmpowerCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </SectionSlider>
    </div>
  );
};

export default Empower;
