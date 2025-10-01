import CvpHero from "@/components/cvp/CvpHero";
import CvpLiteSteps from "@/components/cvp/CvpLiteSteps";
import CvpSeperate from "@/components/cvp/CvpSeperate";
import GetStartedModalTrigger from "@/components/institute-connect/GetStartedModalTrigger";
import Faq from "@/components/other/Faq";
import { ArrowRight } from "lucide-react";

const InstituteSteps = [
  {
    id: 1,
    title: "Why Institute Connect?",
    description: [
      "Small and mid-sized institutes face barriers like outdated methods, limited resources, and low exposure to AI.",
      "YPD Institute Connect helps you adopt AI-powered tools, prepare students with future-ready skills, empower teachers, and stand out as an AI-forward institute.",
    ],
    icon: "/careerverse/s1.svg",
  },
  {
    id: 2,
    title: "What YPD Offers Institutes",
    description: [
      "Access AI-driven learning and mentoring tools",
      "Teacher training in AI-based pedagogy and ethical use",
      "Custom Career Vision & Reinvention Programs",
      "Support for real-world, experiential learning",
      "Global opportunities for students to connect with mentors and industry experts",
    ],
    icon: "/careerverse/s2.svg",
  },
  {
    id: 3,
    title: "Who Can Join?",
    description: [
      "Small and mid-sized schools, colleges, and coaching centers",
      "Institutes looking to differentiate themselves from traditional competitors",
      "Leaders who want to embrace AI early and guide their faculty and students with confidence",
    ],
    icon: "/careerverse/s3.svg",
  },
  {
    id: 4,
    title: "Commitment & Model",
    description: [
      "Flexible partnership models tailored to institute needs",
      "Ongoing support from YPD’s academic and technical teams",
      "Clear focus: build future-ready students and AI-ready institutions",
    ],
    icon: "/careerverse/s4.svg",
  },
  {
    id: 5,
    title: "Why Partner with YPD?",
    description: [
      "Be among the early adopters of AI-driven education",
      "Deliver unique, student-centered mentorship journeys no one else offers",
      "Build a reputation for innovation, impact, and employability outcomes",
      "Join a network of forward-looking institutes across India and beyond",
    ],
    icon: "/careerverse/s1.svg",
  },
];

const page = () => {
  return (
    <>
      <CvpHero
        title="Revolutionize Learning with YPD Institute Connect"
        subtitle={
          <>
            <span className="relative inline-block px-1">
              <span className="text-brand-primary relative z-10 font-semibold">
                Youth Pulse Digital
              </span>
              <span className="absolute right-0 bottom-0 left-0 z-0 h-1/3 translate-y-[-10%] rounded-b-xs bg-green-200"></span>
            </span>{" "}
            partners with institutes to bring AI-ready learning to students.
            Adopt AI-powered tools without heavy cost or complexity, prepare
            students for the future of work with critical skills, and empower
            your teachers with AI-enabled mentorship methods. Stand out as an
            AI-forward institute in your region.
          </>
        }
        features={[
          "Adopt AI-powered learning tools without heavy cost or complexity",
          "Prepare your students for critical skills: Problem Solving, Critical Thinking, Innovation",
          "Empower your teachers with AI-enabled mentorship methods",
          "Stand out as an AI-forward institute in your region",
        ]}
        ctaComponent={<GetStartedModalTrigger />}
        secondaryButtonLink="/institute-connect#works"
        secondaryButtonText="How It Works"
        image="/global-navigator/hero.png"
        imageAlt="institute connect"
      />

      <CvpLiteSteps
        heading="Building Future-Ready Institutes with AI and Mentorship"
        subheading="YPD Institute Connect empowers schools and colleges with AI-driven learning tools, teacher training, and industry mentorship to prepare students with critical future skills."
        steps={InstituteSteps}
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
            <span className="font-bold">
              Learn More About Institute Connect
            </span>
          </>
        }
        subheading="Partner with Youth Pulse Digital to bring AI-ready learning to your students, empower teachers with AI-enabled mentorship, and stand out as an AI-forward institute in your region."
        ctaText="Apply Now"
        ctaHref="/institute-connect/#form"
        ctaIcon={<ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />}
      />
      <Faq />
    </>
  );
};

export default page;
