import CvpHero from "@/components/cvp/CvpHero";
import CvpLiteSteps from "@/components/cvp/CvpLiteSteps";
import CvpSeperate from "@/components/cvp/CvpSeperate";
import GetStartedModalTrigger from "@/components/mentor-connect/GetStartedModalTrigger";
import Faq from "@/components/other/Faq";
import { ArrowRight } from "lucide-react";

const mentorSteps = [
  {
    id: 1,
    title: "Welcome & Orientation",
    description: [
      "Join Youth Pulse Digital’s Mentor Connect program",
      "Understand the vision: AI + Human mentorship, not traditional EdTech",
    ],
    icon: "/careerverse/s1.svg",
  },
  {
    id: 2,
    title: "Training & Tools",
    description: [
      "Get trained in AI-based mentorship & ethical AI use",
      "Access YPD’s proprietary products, frameworks & resources",
      "Receive device support (laptop/tablet) if required",
    ],
    icon: "/careerverse/s2.svg",
  },
  {
    id: 3,
    title: "Mentorship Delivery",
    description: [
      "Work with students (Grade 5 & above) across streams",
      "Use guided mentorship journeys enriched with AI-driven tools",
      "Focus on career exploration, skill-building & confidence growth",
    ],
    icon: "/careerverse/s3.svg",
  },
  {
    id: 4,
    title: "Engagement & Commitment",
    description: [
      "Work flexibly 12–15 hours per week",
      "Engage students through structured journeys",
      "Operate under NDA for trust & IP protection",
    ],
    icon: "/careerverse/s4.svg",
  },
  {
    id: 5,
    title: "Impact & Growth",
    description: [
      "Earn while delivering measurable student impact",
      "Shape the future of critical thinking, problem solving & innovation",
      "Join a community of educators & industry experts",
    ],
    icon: "/careerverse/s2.svg",
  },
];

const page = () => {
  return (
    <>
      <CvpHero
        title="Welcome Mentors, Teachers & Industry Experts"
        subtitle={
          <>
            <span className="relative inline-block px-1">
              <span className="text-brand-primary relative z-10 font-semibold">
                YPD Mentor Connect
              </span>
              <span className="absolute right-0 bottom-0 left-0 z-0 h-1/3 translate-y-[-10%] rounded-b-xs bg-green-200"></span>
            </span>{" "}
            is built on something unique: a pool of Human Mentors trained to
            work with AI. This isn’t traditional EdTech it&apos;s a new way of
            mentoring students. It blends real-time AI insights with expert
            human mentorship to craft a personalized roadmap for your global
            higher education dreams.
          </>
        }
        features={[
          "Hyper-personalized to each student’s journey",
          "Contextually correct for real-world challenges",
          "Experiential in design, not rote-based",
          "Globally connected, bringing the world into the classroom",
          "Focused on Critical Thinking, Problem Solving & Innovation",
        ]}
        ctaComponent={<GetStartedModalTrigger />}
        secondaryButtonLink="/mentor-connect#works"
        secondaryButtonText="How It Works"
        image="/connect/mentor.jpg"
        imageAlt="mentor connect"
      />
      <CvpLiteSteps
        heading="Inspire and Guide the Next Generation of Learners"
        subheading="Join Youth Pulse Digital as a mentor to provide students with personalized guidance, career insights, and skill-building sessions that shape their future."
        steps={mentorSteps}
        images={{
          first: "/cvplite/cvplite1.png",
          second: "/cvplite/cvplite2.png",
        }}
        path="M 1.7 12 L 1.7 32 Q 1.7 37 6.7 37 L 60 37 Q 65 37 65 42 L 65 65 Q 65 70 60 70 L 7 70 Q 2 70 1.7 75 L 1.7 83"
      />
      <CvpSeperate
        bgImage="/cvplite/cvpbg.svg"
        heading={
          <>
            <span className="font-bold">Join YPD Mentor Connect</span>
          </>
        }
        subheading="If you are a teacher, mentor, or industry expert passionate about guiding students, apply now to be part of a new generation shaping the future of learning with AI-powered mentorship."
        ctaText="Apply Now"
        ctaHref="/mentor-connect"
        ctaIcon={<ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />}
        external={false}
      />
      <Faq />
    </>
  );
};

export default page;
