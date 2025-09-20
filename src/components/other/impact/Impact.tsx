import SectionSlider from "@/components/ui/SectionSlider";
import ImpactCard from "./ImpactCard";

const cardData = [
  {
    icon: "/icons/ai4.svg",
    title: "Student Guidance in Action",
    description:
      "Career Clarity with CVP Lite™ or CVP Advance helping students to make smarter decisions, make the right choices, understand the alternatives.",
  },
  {
    icon: "/icons/ai5.svg",
    title: "Parent Alignment Activated",
    description:
      "With our Student-Parent framework families see what otherwise resulted in waste of money, career burns.",
  },
  {
    icon: "/icons/ai6.svg",
    title: "Professional Reinvention",
    description:
      "Professionals embarking into personalized learning with real scenarios and unique pedagogy blending Critical Thinking, Problem Solving and Innovative Mindset.",
  },
  {
    icon: "/icons/ai1.svg",
    title: "Institutional Pilots Running",
    description:
      "Partner schools & colleges co-testing readiness dashboards and mentor-guided assessments.",
  },
  {
    icon: "/icons/ai2.svg",
    title: "Mentor Network Curated",
    description:
      "Academicians, counselors, and experts integrated into AI-moderated guidance flows.",
  },
  {
    icon: "/icons/ai3.svg",
    title: "MSME Engagement In Progress",
    description:
      "Local businesses onboarded for simulation internships and career-readiness validation.",
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
