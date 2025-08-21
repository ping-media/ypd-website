import SectionSlider from "@/components/ui/SectionSlider";
import BenchCard from "../benchmark/BenchCards";

const cardData = [
  {
    image: "/icons/b1.png",
    heading: "Beyond Assessment Reports",
    subheading:
      "Dynamic blueprints help to make data-driven decisions, not just PDFs.",
  },
  {
    image: "/icons/b2.png",
    heading: "AI Human Synergy",
    subheading:
      "Behavioral science meets AI mentorship for adaptability and agility.",
  },
  {
    image: "/icons/b3.png",
    heading: "Role Skill Mapping",
    subheading:
      "Linking real job roles to real-world skills and future requirements.",
  },
  {
    image: "/icons/b1.png",
    heading: "Advanced Analytics",
    subheading:
      "Deep insights into metrics and growth patterns for strategic planning.",
  },
  {
    image: "/icons/b2.png",
    heading: "Personalized Learning",
    subheading:
      "Tailored learning paths adapting to strengths and development needs.",
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
