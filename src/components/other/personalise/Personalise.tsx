import SectionSlider from "@/components/ui/SectionSlider";
import PersonaliseCard from "./PersonaliseCard";

const cardData = [
  {
    icon: "/icons/p1.png",
    title: "Ultra-Personalized Pathways",
    description:
      "360° multi-dimensional profiling + real-time adaptive journey ensures no two students follow the same path. Everyone gets their own Career Pathway.",
  },
  {
    icon: "/icons/p2.png",
    title: "Experiential NEP Aligned Learning",
    description:
      "Curated industry scenarios, Innovation Challenges, and simulations mapped to each student’s skill goals. Adaptive and personalized like the B-school case method.",
  },
  {
    icon: "/icons/p3.png",
    title: "Industry-Integrated Readiness",
    description:
      "Role readiness through skill validation, mock interviews, employer dashboards, and direct hiring pipelines.",
  },
  {
    icon: "/icons/p1.png",
    title: "Ultra-Personalized Pathways",
    description:
      "360° multi-dimensional profiling + real-time adaptive journey ensures no two students follow the same path. Everyone gets their own Career Pathway.",
  },
  {
    icon: "/icons/p2.png",
    title: "Experiential NEP Aligned Learning",
    description:
      "Curated industry scenarios, Innovation Challenges, and simulations mapped to each student’s skill goals. Adaptive and personalized like the B-school case method.",
  },
];

const Personalise = () => {
  return (
    <div className="bg-white">
      <SectionSlider
        title="YPD – Personalized. Practical. Powerful."
        description={
          <>
            We don’t believe in one-size-fits-all. We build personalized
            journeys that empower learners, connect them to careers, and align
            <br className="hidden md:block" />
            with India’s future-ready mission—powered by AI, guided by mentors,
            and validated by results.
          </>
        }
        cardWidth={500} // cards fit in 1280px
        gap={20}
        buttonText="Start Your Journey"
        buttonHref="/personalise"
      >
        {cardData.map((item, index) => (
          <PersonaliseCard
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </SectionSlider>
    </div>
  );
};

export default Personalise;
