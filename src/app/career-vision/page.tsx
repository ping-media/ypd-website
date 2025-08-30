import UserSay from "@/components/careerPath/UserSay";
import CvpSeperate from "@/components/cvp/CvpSeperate";
import CvpVideo from "@/components/cvp/CvpVideo";
import Faq from "@/components/other/Faq";
import { ArrowRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    heading: "Finally, real clarity for my son's future.",
    text: "My son was confused between Computer Science and Design. CVP Advance gave us a clear, step-by-step career plan. The AI mentor even showed real job examples. This was better than any counsellor we’ve paid before.",
    name: "R. Iyer",
    education: " Parent, Chennai",
    image: "/about/c1.png",
  },
  {
    id: 2,
    heading: "I explored 3 careers in one week!",
    text: "CareerVerse™ helped me try out roles I never knew about. I thought I wanted to be an engineer, but now I’m actually planning for Urban Design! It feels real, not like reading a textbook.",
    name: "Shreya Gupta",
    education: "Grade 11, Jaipur",
    image: "/about/c2.png",
  },
  {
    id: 3,
    heading: "Mission NDA mentor is just next level.",
    text: "I used to struggle with SSB prep. The YPD NDA mentor trained me like an officer — from OLQs to daily tasks. I feel more confident and focused now.",
    name: "Deepak Singh",
    education: "NDA Aspirant, Lucknow",
    image: "/about/c1.png",
  },
  {
    id: 4,
    heading: "Counseling Guru felt like a real mentor.",
    text: "I asked about Mass Communication careers, and it didn’t give generic answers. It explained colleges, entrance exams, role types, even salary range! This is what every student needs.",
    name: "Pranav Raj",
    education: "Grade 12, Bhopal",
    image: "/about/c1.png",
  },
  {
    id: 5,
    heading: "I was planning abroad—this made it so easy.",
    text: "Global Navigator showed the safest countries, best colleges, and ROI for my budget. I wish I had this before spending so much on study abroad agents.",
    name: "Aarav Menon",
    education: "UG Student, Kochi",
    image: "/about/c1.png",
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

const page = () => {
  return (
    <>
      {/*  */}
      {/* SECTION TO ADD (HERO SECTION) */}
      {/*  */}
      <CvpVideo
        heading="Step Into the Career Reinvention Program™"
        subheading="Take a quick look at how our AI-driven journey helps you discover your strengths, map career paths, and make smarter choices."
        videoId="ScMzIvxBSi4"
        thumbnail="/video.png"
      />
      {/*  */}
      {/* SECTION TO ADD (YOUR BLUEPRINT) */}
      {/*  */}
      {/*  */}
      {/* SECTION TO ADD (WHY YPD STANDS OUT) */}
      {/*  */}
      {/*  */}
      {/* SECTION TO ADD (YPD ECOSYSTEM YOUR PARTNER FOR LIFE) */}
      {/*  */}
      <CvpSeperate
        bgImage="/cvplite/cvpbg.svg"
        heading={
          <>
            <span className="font-bold">Ready to Map Your Vision</span>
          </>
        }
        subheading="Let’s start your real journey back to the career you deserve. Powered by Youth Pulse Digital™. Personalized. Practical. Proven."
        ctaText="Enquire Now"
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
