// components/Growth.tsx
import SectionSlider from "@/components/ui/SectionSlider";
import GrowthCard from "./GrowthCard";

const growthData = [
  {
    image: "/growth1.png",
    heading: "Youth-Centered by Design",
    description:
      "We obsess over student clarity, not complexity. Every feature, report, and experience is built around the learner.",
  },
  {
    image: "/growth2.png",
    heading: "Clarity Over Confusion",
    description:
      "YPD doesn’t just guide. It helps students make decisions with data, self-awareness, and direction that sticks.",
  },
  {
    image: "/growth3.png",
    heading: "Employability-Focused",
    description:
      "Our journeys leads to readiness career clarity, real job simulations, learning paths, all aligned with future needs & employer milestones.",
  },
  {
    image: "/growth4.png",
    heading: "Bharat First",
    description:
      "Our ecosystem is built to serve students in Tier 1-4 towns, MSMEs, family systems, and under-resourced schools.",
  },
  {
    image: "/growth5.png",
    heading: "Investor Transparent",
    description:
      "Impact-led, capital-efficient, growth-modelled. Built to scale with clarity — not flash. Focused on value creation over vanity.",
  },
  {
    image: "/growth6.png",
    heading: "Ecosystem",
    description:
      "YPD works with schools, colleges, CSR, trainers, corporates, and gov bodies — as an integrative clarity engine, not a siloed product.",
  },
];

const Growth = () => {
  return (
    <div className="bg-white">
      <SectionSlider
        title="The DNA That Powers YPD"
        description={
          <>
            Every step of our growth is fueled by meaningful touch-points with
            students, parents, mentors, institutes &
            <br className="hidden md:block" />
            businesses All guided by values that serve India’s youth and its
            future economy.
          </>
        }
        cardWidth={370}
        gap={20}
      >
        {growthData.map((item, index) => (
          <GrowthCard
            key={index}
            image={item.image}
            heading={item.heading}
            description={item.description}
          />
        ))}
      </SectionSlider>
    </div>
  );
};

export default Growth;
