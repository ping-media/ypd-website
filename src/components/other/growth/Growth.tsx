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
