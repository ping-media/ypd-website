import SectionSlider from "@/components/ui/SectionSlider";
import BenchCard from "../benchmark/BenchCards";

const cardData = [
  {
    image: "/icons/b1.svg",
    heading: "Beyond Assessment Reports",
    subheading:
      "Dynamic blueprints help to make data-driven decisions, not just PDFs.",
  },
  {
    image: "/icons/b2.svg",
    heading: "AI Human Synergy",
    subheading:
      "Behavioral science meets AI mentorship for adaptability and agility.",
  },
  {
    image: "/icons/b3.svg",
    heading: "Role Skill Mapping",
    subheading:
      "Clear Linking of Real Job Roles to Real World Skills, awareness for future roles and skills requirement",
  },
  {
    image: "/icons/b4.svg",
    heading: "Career Fitness",
    subheading:
      "We test how you think, adapt, and evolve — not just what you know.",
  },
  {
    image: "/icons/b5.svg",
    heading: "Career Vision + Reinvention",
    subheading:
      "Full lifecycle support — from early career pathways to mid-career reinvention.",
  },
  {
    image: "/icons/b6.svg",
    heading: "Role-Skill Mapping",
    subheading:
      "Clear linking of job roles to real-world skills and certifications for future sectors.",
  },
  {
    image: "/icons/b7.svg",
    heading: "Parent-Student Collaboration",
    subheading:
      "Building career decisions through shared understanding, not pressure.",
  },
  {
    image: "/icons/b8.svg",
    heading: "Future-Ready Mindset",
    subheading:
      "Confidence, skills, and clarity to thrive in tomorrow’s world, without fear.",
  },
];

export default function Benchmark() {
  return (
    <SectionSlider
      title="YPD Benchmark"
      description={
        <>
          Most platforms offer tests. Some offer mentors. A few offer job
          pathways.
          <br className="hidden md:block" />
          YPD brings them together intelligently, personally, and purposefully.
        </>
      }
      cardWidth={395}
      gap={20}
    >
      {cardData.map((item, index) => (
        <BenchCard
          key={index}
          image={item.image}
          heading={item.heading}
          subheading={item.subheading}
        />
      ))}
    </SectionSlider>
  );
}
