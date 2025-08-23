import SectionSlider from "@/components/ui/SectionSlider";
import OfferingCard from "./OfferingCard";

const offerings = [
  {
    icon: "/icons/o6.svg",
    heading: "Skill Gap Radar",
    subheading:
      "Evaluate your skills against industry benchmarks. Spot & fix Aptitudes. Learn what Fortune 500 does.",
  },
  {
    icon: "/icons/o5.svg",
    heading: "Mindset Coaching",
    subheading:
      "Train with our highly trained AI Mentors for ambiguity, fluency, strategy, critical thinking, innovation what modern workplaces demand.",
  },
  {
    icon: "/icons/o4.svg",
    heading: "Personalized Learning Plans",
    subheading:
      "Role connected & personalized learning at every step. No more Herd Training. Learn in your space 24/7.",
  },
  {
    icon: "/icons/o1.svg",
    heading: "Career Simulations",
    subheading:
      "Practice tasks - emails, data analysis, decision making - before recruiters test you.",
  },
  {
    icon: "/icons/o2.svg",
    heading: "Resume & LinkedIn Building",
    subheading:
      "Mentor-driven ATS resumes and LinkedIn profiles recruiters notice.",
  },
  {
    icon: "/icons/o3.svg",
    heading: "Portfolio Projects",
    subheading:
      "Short, verified projects to build your credibility — and your hiring power.",
  },
];
const Offering = () => {
  return (
    <SectionSlider
      title="From Gaps to Growth Real-World Launch with Career Reinvention Program™"
      description={
        <>
          “YPD goes beyond conventional training, it empowers professionals with
          personalized progressive trainings to tackle the real world needs.
          <br className="hidden md:block" />
          Build your portfolio on the go, here&apos;s how your learning becomes
          hiring power”
        </>
      }
      cardWidth={400}
      gap={20}
    >
      {offerings.map((item, index) => (
        <OfferingCard
          key={index}
          image={item.icon}
          heading={item.heading}
          subheading={item.subheading}
        />
      ))}
    </SectionSlider>
  );
};

export default Offering;
