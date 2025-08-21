import SectionSlider from "@/components/ui/SectionSlider";
import PathwaysCard from "./PathwaysCard";
import { Zap } from "lucide-react";

const pathwaysData = [
  {
    title: "Student A – Green Architect",
    cvp: "CVP: Advance",
    inclination: "Primary Inclination: Eco builder",
    description:
      "Skill match found in spatial reasoning and sustainable logic. Career aligned through self-guided challenges in design + systems thinking.",
    alternate: "Urban Planning Strategist",
    duration: "21 Days (self-paced)",
  },
  {
    title: "Student B – Financial Data Analyst",
    cvp: "CVP: Challenger",
    inclination: "Primary Inclination: Logical Strategist",
    description:
      "Skill match found in spatial reasoning and sustainable logic. Career aligned through self-guided challenges in design + systems thinking.",
    alternate: "Investment Researcher, Actuarial Analyst",
    duration: "32 Days (adaptive)",
  },
  {
    title: "Student C – AI Ethics Analyst",
    cvp: "CVP: Advance",
    inclination: "Primary Inclination: Ethical Thinker",
    description:
      "Interest in societal impact and tech aligned through values-based logic flow.",
    alternate: "Policy Researcher",
    duration: "18 Days (self-paced)",
  },
  {
    title: "Student A – Green Architect",
    cvp: "CVP: Advance",
    inclination: "Primary Inclination: Eco builder",
    description:
      "Skill match found in spatial reasoning and sustainable logic. Career aligned through self-guided challenges in design + systems thinking.",
    alternate: "Urban Planning Strategist",
    duration: "21 Days (self-paced)",
  },
];

const Pathways = () => {
  return (
    <SectionSlider
      title="Sample Career Pathways."
      description="Explore real-world journeys shaped by unique skills, passions, and goals."
      cardWidth={380}
      gap={20}
      buttonIcon={<Zap />}
      buttonText="Career Readiness Analyst"
      buttonHref="/career"
    >
      {pathwaysData.map((item, index) => (
        <PathwaysCard key={index} {...item} />
      ))}
    </SectionSlider>
  );
};

export default Pathways;
