import SectionSlider from "@/components/ui/SectionSlider";
import DecisionCard from "./DecisionCard";
import { UsersRound } from "lucide-react";

const cardData = [
  {
    image: "/decision1.png",
    heading: "Personalized Reports for Parents",
  },
  {
    image: "/decision2.png",
    heading: "Co-Guided Decisions",
  },
  {
    image: "/decision3.png",
    heading: "Why Parents Love YPD",
  },
  {
    image: "/decision4.png",
    heading: "Training for Better Outcomes",
  },
];
const Decision = () => {
  return (
    <>
      <SectionSlider
        title="A Career Decision Is a Family Decision"
        description={
          <>
            YPD is built to support both the learner and the family. Parents are
            not just observers they are guided.
            <br className="hidden md:block" />
            collaborators. Here&apos;s how we help them play a meaningful role.
          </>
        }
        cardWidth={390}
        gap={20}
        buttonIcon={<UsersRound />}
        buttonText="Explore Counseling Guru™"
        buttonHref="/counseling"
      >
        {cardData.map((item, index) => (
          <DecisionCard key={index} image={item.image} heading={item.heading} />
        ))}
      </SectionSlider>
    </>
  );
};

export default Decision;
