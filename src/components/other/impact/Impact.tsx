import SectionSlider from "@/components/ui/SectionSlider";
import ImpactCard from "./ImpactCard";

const cardData = [
  {
    icon: "/icons/ai1.png",
    title: "Student Guidance in Action",
    description:
      "Career Clarity with CVP Lite or CVP Advance helping students to make smarter decisions, make the right choices, understand the alternatives.",
  },
  {
    icon: "/icons/ai2.png",
    title: "Parent Alignment Activated",
    description:
      "With our Student-Parent framework families see what otherwise resulted in waste of money, career burns.",
  },
  {
    icon: "/icons/ai3.png",
    title: "Professional Reinvention",
    description:
      "Professionals embarking into personalized learning with real scenarios and unique pedagogy blending Critical Thinking, Problem Solving and Innovative Mindset.",
  },
  {
    icon: "/icons/ai1.png",
    title: "Parent Alignment Activated",
    description:
      "With our Student-Parent framework families see what otherwise resulted in waste of money, career burns.",
  },
  {
    icon: "/icons/ai3.png",
    title: "Professional Reinvention",
    description:
      "Professionals embarking into personalized learning with real scenarios and unique pedagogy blending Critical Thinking, Problem Solving and Innovative Mindset.",
  },
];

const Impact = () => {
  return (
    <div className="bg-[#fafafa]">
      <SectionSlider
        title="YPD Drives Impact Where It Matters"
        cardWidth={390} // cards fit in 1280px
        gap={20}
        buttonText="Explore Counseling Guru™"
        buttonHref="/counseling"
      >
        {cardData.map((item, index) => (
          <ImpactCard
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

export default Impact;
