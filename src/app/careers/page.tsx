import CareersContact from "@/components/careers/CareersContact";
import CareersFeature from "@/components/careers/CareersFeature";
import CareersGallery from "@/components/careers/CareersGallery";
import CareersSection from "@/components/careers/jobs/CareersSection";
import Hero from "@/components/careers/Hero";
import CvpFeature from "@/components/cvp/CvpFeature";
import {
  BarChart3,
  Brain,
  Briefcase,
  FileText,
  Layers,
  Lightbulb,
  ScanEye,
  Users,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Growth & Learning",
    description: "Constant opportunities to upskill",
  },
  {
    icon: Layers,
    title: "Impactful Work",
    description: "Work on projects that matter",
  },
  {
    icon: BarChart3,
    title: "Collaborative Spirit",
    description: "Be part of a supportive, creative team",
  },
  {
    icon: Brain,
    title: "Youth-First Vision",
    description: "Innovating for the next generation",
  },
];
const careersFeatures = [
  {
    icon: Briefcase,
    title: "Flexible Work Culture",
    description:
      "We value work-life balance. With flexible hours and hybrid options, you'll have the freedom to work where and how you're most productive.",
  },
  {
    icon: Lightbulb,
    title: "Learning & Growth",
    description:
      "Your career development matters. From workshops to online courses and mentorship programs, YPD ensures you're always learning and moving forward.",
  },
  {
    icon: Layers,
    title: "Creative Freedom",
    description:
      "Innovation thrives when ideas flow freely. At YPD, you'll have the space to experiment, share bold ideas, and bring your creativity to life.",
  },
  {
    icon: FileText,
    title: "Fun & Engaging Culture",
    description:
      "Work doesn't have to be all serious. From hackathons and team outings to celebrations and cultural events, there's always something to keep the energy high.",
  },
  {
    icon: Users,
    title: "Impactful Projects",
    description:
      "Be part of initiatives that make a difference. At YPD, you'll work on campaigns and products that resonate with youth and inspire change.",
  },
];
const galleryImages = [
  {
    src: "/careers/1.png",
    alt: "Meeting room",
  },
  {
    src: "/careers/2.png",
    alt: "Multiple monitors",
  },
  {
    src: "/careers/3.png",
    alt: "Project success",
  },
  {
    src: "/careers/4.png",
    alt: "Room presentation",
  },
  {
    src: "/careers/5.png",
    alt: "Project details",
  },
  {
    src: "/careers/6.png",
    alt: "Lounge area",
  },
];
const page = () => {
  return (
    <>
      <Hero
        heading="Build Your Future with YPD"
        subheading="We’re shaping digital experiences that connect with the youth pulse. Join us to create,innovate, and grow."
        imageSrc="/careers/hero.png"
        imageAlt="Youth Pulse Digital"
        ctaLabel="View Open Positions"
        ctaHref="/coming-soon"
        ctaIcon={<ScanEye className="h-5 w-5 sm:h-6 sm:w-6" />}
      />
      <CvpFeature
        heading="Why Join YPD?"
        subheading="We believe in more than just jobs we create opportunities to grow, collaborate, and shape the digital future."
        features={features}
        ctaText="Start Your Journey Now"
        ctaLink="/coming-soon"
      />
      <CareersSection
        heading="Work With Us"
        subheading="Explore exciting opportunities and join our team."
      />
      <CareersFeature
        heading="Perks & Benefits at YPD"
        subheading="We believe great work happens when people feel supported, inspired, and valued."
        features={careersFeatures}
      />
      <CareersGallery
        heading="A Workplace Where Fun Meets Growth"
        subheading="It's a dynamic and engaging environment where creativity thrives, collaboration encouraged and every achievement celebrated."
        images={galleryImages}
      />
      <CareersContact />
    </>
  );
};

export default page;
