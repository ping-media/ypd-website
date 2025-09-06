import CrSuite from "@/components/career-reinvention/CrSuite";
import Hero from "@/components/career-reinvention/Hero";
import UserSay from "@/components/careerPath/UserSay";
import CvpFeature from "@/components/cvp/CvpFeature";
import CvpSeperate from "@/components/cvp/CvpSeperate";
import CvpVideo from "@/components/cvp/CvpVideo";
import CvHero from "@/components/other/CvHero";
import Faq from "@/components/other/Faq";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle,
  Compass,
  GraduationCap,
  Handshake,
  Shield,
  Users,
  Zap,
} from "lucide-react";

const reviews = [
  {
    id: 1,
    heading: "I explored 3 careers in one week!",
    text: "CareerVerse™ helped me try out roles I never knew about. I thought I wanted to be an engineer, but now I’m actually planning for Urban Design! It feels real, not like reading a textbook.",
    name: "Shreya Gupta",
    education: "Grade 11, Jaipur",
    image: "/about/c1.png",
  },
  {
    id: 2,
    heading: "Counseling Guru felt like a real mentor.",
    text: "I asked about Mass Communication careers, and it didn’t give generic answers. It explained colleges, entrance exams, role types, even salary range! This is what every student needs.",
    name: "Pranav Raj",
    education: "Grade 12, Bhopal",
    image: "/about/c2.png",
  },
  {
    id: 3,
    heading: "Mission NDA mentor is just next level.",
    text: "I used to struggle with SSB prep. The YPD NDA mentor trained me like an officer — from OLQs to daily tasks. I feel more confident and focused now.",
    name: "Deepak Singh",
    education: "NDA Aspirant, Lucknow",
    image: "/about/c3.png",
  },
  {
    id: 4,
    heading: "I was planning abroad—this made it so easy.",
    text: "Global Navigator showed the safest countries, best colleges, and ROI for my budget. I wish I had this before spending so much on study abroad agents.",
    name: "Aarav Menon",
    education: "UG Student, Kochi",
    image: "/about/c4.png",
  },
  {
    id: 5,
    heading: "Clarity and confidence in stream selection.",
    text: "The Career Vision Program helped my daughter select her stream with confidence. The family guide made it easy for us to support her choice.",
    name: "Anjali Deshmukh",
    education: "Parent, Nagpur",
    image: "/about/c5.png",
  },
  {
    id: 6,
    heading: "Career clarity that’s structured and step-by-step.",
    text: "I never imagined career clarity could be so structured. The step-by-step CVP Advance journey showed me exactly where my strengths fit.",
    name: "Raghav Sharma",
    education: "Class 12 Student, Jaipur",
    image: "/about/c6.png",
  },
  {
    id: 7,
    heading: "Exposure beyond Tier-2 city limitations.",
    text: "As a Tier-2 city parent, I was worried about limited exposure. CVP gave my son clarity on future careers we had never even heard of.",
    name: "Suresh Yadav",
    education: "Parent, Lucknow",
    image: "/about/c1.png",
  },
  {
    id: 8,
    heading: "A career roadmap, not just test scores.",
    text: "The report wasn’t just test scores — it was a roadmap. It showed me my top roles, skills to build, and a 90-day plan.",
    name: "Meera Iyer",
    education: "B.Com Undergraduate, Kochi",
    image: "/about/c2.png",
  },
  {
    id: 9,
    heading: "Balanced interests with realistic pathways.",
    text: "I liked how CVP balanced my child’s interest with realistic pathways. It made career discussions at home stress-free.",
    name: "Rajesh Malhotra",
    education: "Parent, Delhi",
    image: "/about/c3.png",
  },
  {
    id: 10,
    heading: "Prepared for both Indian and global options.",
    text: "The CVP journey prepared me for both Indian and global options. It felt like a mentor guiding me personally.",
    name: "Simran Kaur",
    education: "Class 11 Student, Chandigarh",
    image: "/about/c4.png",
  },
];

const cvFaqs = [
  {
    id: 1,
    question: "What is the Career Vision Program™?",
    answer:
      "It’s YPD’s flagship program for students to identify interests, strengths, and career pathways through personalized & guided assessments for better decisions.",
  },
  {
    id: 2,
    question: "What are the versions – Lite, Advance?",
    answer:
      "Lite: Entry-level clarity for stream/role fit. Advance: Deeper assessments, learning styles, and role matches.",
  },
  {
    id: 3,
    question: "Who should take the Career Vision Program™?",
    answer:
      "Students in Classes 9–12, parents making stream choices, and early graduates seeking clarity on future roles.",
  },
  {
    id: 4,
    question: "What do I get at the end of the program?",
    answer: "A personalized Career Vision Report tailored to your profile.",
  },
  {
    id: 5,
    question: "How is CVP different from regular counseling?",
    answer:
      "Unlike one-time counseling & static assessments, CVP is personalized, structured, adaptive, and avoids generic advice.",
  },
  {
    id: 6,
    question: "Does CVP include stream selection guidance?",
    answer:
      "Yes. CVP Lite and above include stream and role-fit suggestions backed by aptitude and interest mapping.",
  },
  {
    id: 7,
    question: "Can parents also see the report?",
    answer:
      "Yes. Every report is parent-friendly to align family decisions with the student’s interest and aptitude.",
  },
  {
    id: 8,
    question: "How much time does it take?",
    answer:
      "From 1 day (Lite) to 7 days (Advance), depending on the version chosen.",
  },
  {
    id: 9,
    question: "Is CVP useful if I already know my career choice?",
    answer:
      "Yes. It validates your choice, maps your skills to real roles, and highlights gaps to work on.",
  },
  {
    id: 10,
    question: "Is the program India-specific?",
    answer:
      "Yes. CVP maps Indian education streams, but also includes global role pathways where relevant.",
  },
];
const featureData = [
  {
    icon: <BookOpenCheck className="text-brand-primary h-12 w-12" />,
    title: "CVP Lite",
    subtitle: "Grade 7–12 | 1–2 Days",
    features: [
      "Discover natural strengths early",
      "Beginner-level career simulations",
      "Identify learning style & gaps",
      "Journal-based self-reflection tasks",
      "Career Fit Report included",
    ],
    ctaText: "Register Now",
    href: "/cvp-lite",
  },
  {
    icon: <Users className="text-brand-primary h-12 w-12" />,
    title: "CVP Advance",
    subtitle: "Grade 11 – UG | 7 Days",
    features: [
      "Advanced career simulations",
      "Job readiness skill mapping",
      "PG planning cues",
      "Career Action Plan",
      "Industry-fitment & gap analysis",
    ],
    ctaText: "Register Now",
    href: "/cvp-advance",
  },
  {
    icon: <GraduationCap className="text-brand-primary h-12 w-12" />,
    title: "CVP Verse",
    subtitle: "Grade 9 – UG | 4–5 Days",
    features: [
      "Explore Real Roles",
      "Practice Decisions",
      "Test Job Skills",
      "Boost Career Clarity",
    ],
    ctaText: "Explore Now",
    href: "/careerverse",
  },
  {
    icon: <Shield className="text-brand-primary h-12 w-12" />,
    title: "Mission NDA",
    subtitle: "Grade 11–12 | Subscription",
    features: [
      "Written Exam Preparation",
      "Officer-Like Qualities DNA",
      "Real SSB Simulation",
      "Mindset + Response Conditioning",
      "Dynamic Progress-Based Preparation",
    ],
    ctaText: "Subscribe Now",
    href: "/mission-nda",
  },
];
const features = [
  {
    icon: Users,
    title: "Shared Clarity",
    description:
      "Students discover their strengths and inclinations, while parents see structured reports that replace confusion with evidence.",
  },
  {
    icon: CheckCircle,
    title: "Trust in the Process",
    description:
      "Step-by-step assessments, skill maps, and role-fit scores build confidence that choices aren’t random or rushed.",
  },
  {
    icon: Handshake,
    title: "Parent–Student Alignment",
    description:
      "Every report includes a family discussion guide, making difficult conversations about future plans constructive and positive.",
  },
  {
    icon: Compass,
    title: "Future-Ready Confidence",
    description:
      "Families gain peace of mind knowing their child’s path is mapped to real industry roles, not just generic advice.",
  },
];

const page = () => {
  return (
    <>
      <Hero
        heading="Welcome to the Career Vision Program™"
        subheading="Where your true potential meets a future full of possibilities - guided, structured, and built around who you really are."
        imageSrc="/cvhero.png"
        imageAlt="Youth Pulse Digital"
        ctaLabel="Try Career Vision"
        ctaHref="/#"
        ctaIcon={<Zap className="h-5 w-5 sm:h-6 sm:w-6" />}
      />
      <CvpVideo
        heading="Step Inside the Experience of Career Vision Program™"
        subheading="Take a quick look at how our AI-driven journey helps you discover your strengths, map career paths, and make smarter choices."
        videoId="ScMzIvxBSi4"
        thumbnail="/video.png"
      />
      <CrSuite
        heading="Your Complete Career Vision Suite"
        subheading="Sharpen your skills and decision-making through tailored aptitude and competency training designed for high-performance roles."
        features={featureData}
      />
      <CvpFeature
        heading="Why Families Like Career Vision Program™"
        subheading="Choosing a career is never just the student’s journey — families are part of every decision. The Career Vision Program™ bridges the gap between student aspirations and parental expectations with clarity, transparency, and confidence."
        features={features}
        ctaText="Start Your Journey Now"
        ctaLink="/#"
      />
      <CvHero
        title="Youth Pulse Digital™ Ecosystem: Your Partner for Life"
        subtitle={
          <>
            YPD is a living, evolving Career Pathway GPS Platform powered by
            proprietary AI driven Frameworks, enriched by 25+ years of Human
            Mentorship, and guided by a mission to connect students, skills, and
            real-world careers.
          </>
        }
        description="Ideal for Students, Parents & Professionals:"
        features={[
          "Self-Paced Learning",
          "Monitored Growth",
          "Industry-Ready Skills",
          "Career Launch",
          "Lifetime Upskilling",
        ]}
        featuresTwoCols
        buttonText="Register Now"
        buttonLink="/#"
        image="/cv.png"
        imageAlt="career vision"
      />
      <CvpSeperate
        bgImage="/cvplite/cvpbg.svg"
        heading={
          <>
            <span className="font-bold">Ready to Map Your Vision</span>
          </>
        }
        subheading="Let’s start your real journey back to the career you deserve. Powered by Youth Pulse Digital™. Personalized. Practical. Proven."
        ctaText="Start Now"
        ctaHref="/start"
        ctaIcon={<ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />}
      />
      <UserSay
        title="WHAT USERS ACROSS INDIA SAY ABOUT YPD"
        reviews={reviews}
      />
      <Faq faqs={cvFaqs} />
    </>
  );
};

export default page;
