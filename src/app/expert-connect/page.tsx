import CvpHero from "@/components/cvp/CvpHero";
import CvpLiteSteps from "@/components/cvp/CvpLiteSteps";
import CvpSeperate from "@/components/cvp/CvpSeperate";
import GetStartedModalTrigger from "@/components/expert-connect/GetStartedModalTrigger";
import Faq from "@/components/other/Faq";
import { ArrowRight } from "lucide-react";

const expertSteps = [
  {
    id: 1,
    title: "Welcome Industry Leaders",
    description: [
      "Hear directly from YPD about the vision and purpose of Industry Expert Connect",
      "Understand how your expertise helps bridge the employability gap for students",
      "Learn how to guide students with practical insights and innovation mindset",
    ],
    icon: "/careerverse/s1.svg",
  },
  {
    id: 2,
    title: "Your Role as an Industry Expert",
    description: [
      "Dedicate a few hours per month for live sessions/webinars",
      "Share knowledge, trends, and stories from your industry",
      "Interact with students in a real, relatable, and grounded way",
      "Support learners in building critical thinking, problem solving & innovation skills",
    ],
    icon: "/careerverse/s2.svg",
  },
  {
    id: 3,
    title: "Training & Support from YPD",
    description: [
      "Receive training & orientation in AI-supported delivery and student engagement",
      "Get access to YPD’s digital tools & platforms for seamless session delivery",
      "Guidance in structuring your session for maximum student impact",
      "Fair remuneration for each session delivered",
    ],
    icon: "/careerverse/s3.svg",
  },
  {
    id: 4,
    title: "Flexible Commitment",
    description: [
      "Contribute 2–4 hours per month for structured webinars or guest sessions",
      "Sessions are virtual-first — participate from anywhere",
      "Focus on impact over hours; your lived expertise benefits students most",
    ],
    icon: "/careerverse/s4.svg",
  },
  {
    id: 5,
    title: "Why Join Expert Connect?",
    description: [
      "Make a real difference for aspiring candidates at the grassroots level",
      "Influence the next generation’s career choices with practical insights",
      "Be part of a pioneering education movement blending industry and AI-powered learning",
      "Gain recognition as a thought leader shaping India’s future workforce",
    ],
    icon: "/careerverse/s1.svg",
  },
];

const page = () => {
  return (
    <>
      <CvpHero
        title="Welcome Industry Leaders"
        subtitle={
          <>
            <span className="relative inline-block px-1">
              <span className="text-brand-primary relative z-10 font-semibold">
                YPD Expert Connect
              </span>
              <span className="absolute right-0 bottom-0 left-0 z-0 h-1/3 translate-y-[-10%] rounded-b-xs bg-green-200"></span>
            </span>{" "}
            is built on something unique: a platform where professionals from
            across sectors dedicate time to guide students. This isn’t
            traditional EdTech it’s a new way of connecting the real world with
            learning. Experts conduct live sessions, share practical insights
            beyond textbooks, and help students develop the skills, behaviors,
            and innovation mindset needed to thrive globally.
          </>
        }
        features={[
          "Bring practical insights from industries textbooks and curricula miss",
          "Guide students to develop real-world skills, behaviors, and innovation mindset",
          "Bridge the employability gap for young learners",
          "Connect students directly with industry leaders and thought experts",
          "Conduct live topic sessions & webinars with students (Grade 9 onwards, including UG/PG)",
        ]}
        ctaComponent={<GetStartedModalTrigger />}
        secondaryButtonLink="/expert-connect#works"
        secondaryButtonText="How It Works"
        image="/connect/expert.jpg"
        imageAlt="expert connect"
      />

      <CvpLiteSteps
        heading="Shape the Future by Sharing Your Expertise"
        subheading="Join Youth Pulse Digital to mentor students, conduct live sessions, and provide real-world guidance that equips learners with critical skills and career insights."
        steps={expertSteps}
        images={{
          first: "/cvplite/cvplite1.png",
          second: "/cvplite/cvplite2.png",
        }}
        path="M 1.7 11 L 1.7 37 Q 1.7 40 4.7 40 L 62 40 Q 65 40 65 43 L 65 69 Q 65 72 62 72 L 4.7 72 Q 1.7 72 1.7 75 L 1.7 81"
      />
      <CvpSeperate
        bgImage="/cvplite/cvpbg.svg"
        heading={
          <>
            <span className="font-bold">Join YPD Expert Connect</span>
          </>
        }
        subheading="If you are an Industry Professional passionate about sharing knowledge and shaping the future of young India, apply now to inspire students where it matters most at the start of their journey."
        ctaText="Apply Now"
        ctaHref="/expert-connect#form"
        ctaIcon={<ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />}
        external={false}
      />
      <Faq />
    </>
  );
};

export default page;
