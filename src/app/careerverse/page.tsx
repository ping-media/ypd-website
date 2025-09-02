import CvpFeedback from "@/components/cvp/CvpFeedback";
import CvpHero from "@/components/cvp/CvpHero";
import CvpImpact from "@/components/cvp/CvpImpact";
import CvpInside from "@/components/cvp/CvpInside";
import CvpLiteWorks from "@/components/cvp/CvpLiteWorks";
import CvpPricing from "@/components/cvp/CvpPricing";
import CvpRealworld from "@/components/cvp/CvpRealworld";
import CvpSecurity from "@/components/cvp/CvpSecurity";
import CvpSeperate from "@/components/cvp/CvpSeperate";
import CvpVideo from "@/components/cvp/CvpVideo";
import WhyCvpLite from "@/components/cvp/WhyCvpLite";
import Faq from "@/components/other/Faq";
// imports for components
import { ArrowRight, HandCoins, BriefcaseBusiness, Dna } from "lucide-react";
import { Lightbulb, Compass, File } from "lucide-react";

const insideData = [
  { icon: BriefcaseBusiness, title: "Simulation of Real Careers" },
  {
    icon: Lightbulb,
    title: "Mentor-style AI guidance (no robotic scores)",
  },
  {
    icon: Lightbulb,
    title: "Workplace challenges & decision scenarios",
  },
  {
    icon: HandCoins,
    title: "Critical thinking, feedback, team dynamics, innovation prompts",
  },
  {
    icon: BriefcaseBusiness,
    title: "Final Role Fit Score + Skill Gaps + Action Plan",
  },
  {
    icon: Compass,
    title: "Fully guided. Just real reflection.",
  },
  {
    icon: File,
    title: "Built-in surprise trigger to assess pressure response.",
  },
  {
    icon: Dna,
    title:
      "Emotional DNA built for Indian students  motivational, not judgmental.",
  },
];

const audience = [
  {
    id: 1,
    title: "Students from Class 9 to UG Final Year",
    description:
      "Whether you're exploring streams or deciding between placements and higher studies — CareerVerse™ meets you where you are, and guides you forward with confidence.",
    icon: "/cvplite/r1.svg",
    image: "/cvplite/cvpworks.png",
  },
  {
    id: 2,
    title: "Anyone confused between multiple career options",
    description:
      "Torn between commerce or coding? Unsure about government vs private? Let our real-world role simulations and report-based suggestions help you choose wisely.",
    icon: "/cvplite/r2.svg",
    image: "/cvplite/uses.png",
  },
  {
    id: 3,
    title: "Curious learners who want real clarity, not hype",
    description:
      "Skip the YouTube noise and vague advice. CareerVerse™ gives you practical, relatable simulations that match your thinking style and future goals.",
    icon: "/cvplite/r3.svg",
    image: "/cvplite/cvpworks.png",
  },
  {
    id: 4,
    title: "Parents seeking structured career testing that feels real",
    description:
      "No more guesswork or hearsay. See your child walk through actual job scenarios — and get a full report to make decisions together.",
    icon: "/cvplite/r4.svg",
    image: "/cvplite/uses.png",
  },
];

const useCases = [
  {
    id: 1,
    title: "Role Reality Feel the Job Before You Choose It",
    quote: `A Class 11 Humanities student curious about Journalism enters a simulation as a regional news reporter in Kerala covering a flood rescue story — understanding ground pressure, ethical dilemmas, and communication skills needed.`,
    description:
      "CareerVerse™ lets students simulate what a day, a month, or a journey feels like in real roles — from Design Architect to Wildlife Conservationist to Blockchain Analyst. It adapts the tasks, pressure, and soft skills to the student’s profile.",
    icon: "/cvplite/r1.svg",
    image: "/cvplite/uses.png",
  },
  {
    id: 2,
    title: "Stream Fit Reimagined Test Your Stream, Not Just Your Grades",
    quote: `A Science student simulates a day as a Food Technologist and as a Public Health Officer, realizing they enjoy field-based work but not research, prompting a switch to Allied Health Management.`,
    description:
      "Think Science is your stream, but hate labs? CareerVerse™ shows you how your current stream fits into 10+ roles — and if a switch or bridge path is better. It’s not about marks — it’s about mindset, interests, and practical fit.",
    icon: "/cvplite/r2.svg",
    image: "/cvplite/cvpworks.png",
  },
  {
    id: 3,
    title: "Cross-Stream Career Mapping Your Stream Doesn’t Limit You",
    quote: `A Commerce student simulates “UX Designer” vs “Product Marketer” paths. The simulation shows what entry from a Commerce background would feel like vs a Design background — allowing real decisions with no guesswork.`,
    description:
      "Unlike static career maps, CareerVerse™ shows how different streams lead to the same career — with different skills. Explore roles like Game Developer, Business Analyst, or Social Entrepreneur from your stream’s angle.",
    icon: "/cvplite/r3.svg",
    image: "/cvplite/uses.png",
  },
  {
    id: 4,
    title: "Emerging Roles, Real Work Go Beyond Outdated Job Lists",
    quote: `A B.Sc. graduate confused about career direction simulates the life of a “Carbon Credit Strategist” — working with farmers and industries — and finds a new career direction that aligns with interest in sustainability.`,
    description:
      "CareerVerse™ simulates fast-growing careers that textbooks don’t cover — like AI Ethics Researcher, Climate Risk Analyst, or Urban Mobility Planner. You don’t just read about these roles — you experience their world.",
    icon: "/cvplite/r4.svg",
    image: "/cvplite/cvpworks.png",
  },
];
const highlight = (content: string) => (
  <span className="rounded bg-[#ebf3eb] px-1">{content}</span>
);
const ReviewsData = [
  {
    id: 1,
    name: "Aarav Joshi",
    education: "Class 11 Science Student",
    text: (
      <>
        CareerVerse let me experience a day as a Data Scientist{" "}
        {highlight(
          "The role simulation, manager tasks, and real-world challenges ",
        )}{" "}
        felt so real that I knew exactly what skills I need to work on.
      </>
    ),
    image: "/cvplite/feedback.png",
  },
  {
    id: 2,
    name: "Ishita Gupta",
    education: "B.Com Undergraduate",
    text: (
      <>
        No generic advice — everything in CareerVerse was personalized.From my
        Role Fit Score to the Learning Plan,
        {highlight(" I felt the program was designed only for me.")}.
      </>
    ),
    image: "/cvplite/feedback1.png",
  },
  {
    id: 4,
    name: "Simran Kaur",
    education: "Tier 2 City Student",
    text: (
      <>
        &quot;The surprise challenge in my simulation made me realize how I
        react under pressure. By the end,
        {highlight(" I was more confident about my decision-making")}
        and career direction.&quot;
      </>
    ),
    image: "/cvplite/feedback2.png",
  },
  {
    id: 5,
    name: "Rohan Verma",
    education: "B.Tech Undergraduate",
    text: (
      <>
        &quot;I locked my role as a UX Designer, but
        {highlight("with CareerVerse i also tried alternate careers.")}
        That flexibility gave me clarity and options for the future.&quot;
      </>
    ),
    image: "/cvplite/feedback2.png",
  },
  {
    id: 6,
    name: "Nidhi Singh",
    education: "Class 10 Student",
    text: (
      <>
        &quot;CareerVerse didn’t just stop at today’s roles.
        {highlight(" It showed me how AI and technology")}
        might change my chosen career — and how I can prepare right now.&quot;
      </>
    ),
    image: "/cvplite/feedback2.png",
  },
];
const careerversefaq = [
  {
    question: "What is CareerVerse™?",
    answer:
      "CareerVerse™ is an AI-powered career simulation experience that helps students step into the shoes of real job roles. Instead of watching videos or guessing from Google searches, learners actually go through realistic, decision-based simulations. It helps them explore, reflect, and match their personality, aptitude, and thinking style with a real-world career.",
  },
  {
    question: "How can CareerVerse™ help me understand my future role?",
    answer:
      "Most students in India choose careers based on marks or family advice. CareerVerse™ breaks that cycle. It lets you experience day-in-the-life challenges, handle workplace decisions, and understand if you’re naturally inclined toward a specific career. At the end, you get a detailed report with insights, role-fit analysis, and alternate pathways.",
  },
  {
    question: "Is CareerVerse™ only for high scorers or toppers?",
    answer:
      "Not at all. It’s built for every student — from average to advanced — who wants to make informed decisions. You don’t need 95% marks to use this. In fact, many students discover non-mainstream roles that match their natural skills better than the usual IIT/NEET routes.",
  },
  {
    question:
      "What’s the difference between Free and Premium in CareerVerse™?",
    answer:
      "The Free version lets you try out a limited simulation with a few prompts each day. It’s good for exploring. The Premium version (₹1499–2499) gives you the complete experience of a Career Role(s): full-length simulation (~4–5 hours), save progress, downloadable report, certificate, and access to alternate career tracks.",
  },
  {
    question: "What kind of careers can I simulate in CareerVerse™?",
    answer:
      "You can explore any role from tech, design, media, law, psychology, finance, sustainability, and even upcoming areas like AI ethics or climate risk. Each simulation is mapped to real skills, courses, and job trends — and not just 'popular' jobs.",
  },
  {
    question: "Is this like a quiz or test?",
    answer:
      "No, it’s not a test. CareerVerse™ is an interactive journey. You answer questions, make decisions in role-based scenes, and the AI adapts the flow based on your responses. Think of it like role-playing your future job, with expert guidance at every step.",
  },
  {
    question: "Will I get a report at the end?",
    answer:
      "Yes. You’ll receive a career clarity report which includes:\n* Your top matched role (and why)\n* 2–3 alternate options\n* Role-fit insights based on your choices\n* Learning recommendations\n* Certification of completion",
  },
  {
    question: "Will it help if I am already in college?",
    answer:
      "Absolutely. Many UG students still feel confused even in their final year. CareerVerse™ is ideal if you're still figuring out what job suits you best or planning higher studies. It shows what each career feels like before you spend lakhs on a course or training.",
  },
  {
    question: "Can parents also see what the student is doing?",
    answer:
      "Yes. Parents can see your dashboard anytime, and once the simulation ends, the report can be downloaded and shared with parents. We also recommend doing a parent-student joint review session, as it brings clarity to expectations and opens up meaningful conversations.",
  },
  {
    question: "Is this similar to a career counsellor session?",
    answer:
      "CareerVerse™ offers a much deeper, self-paced exploration than a one-time counsellor meeting. Instead of generic advice, you experience realistic role scenarios. It’s like living the job before deciding on it. You can always take your CareerVerse™ report to a counsellor for added discussion.",
  },
  {
    question:
      "Is CareerVerse™ useful for students from small towns or state boards?",
    answer:
      "Yes. In fact, it’s built with Tier 2, 3, and 4 students in mind. The guidance is stream-neutral, board-independent, and designed to bridge the awareness gap. Whether you’re from CBSE, State Boards, or ICSE, CareerVerse™ speaks your language — with clarity, not complexity.",
  },
  {
    question:
      "Will the simulation cover roles that are not engineering or medical?",
    answer:
      "Yes. CareerVerse™ covers real-world roles across streams: arts, commerce, design, law, psychology, sports, fashion, entrepreneurship, media, sustainability, and more. It’s designed to help you go beyond the usual doctor-engineer-CA triangle.",
  },
  {
    question: "How much time will it take to complete a full simulation?",
    answer:
      "The full CareerVerse™ simulation takes around 4–5 hours, which can be completed in parts. Your progress is saved. You can pause and resume at your convenience — perfect for school or college schedules.",
  },
];

const page = () => {
  return (
    <>
      <CvpHero
        title="Test Drive Your Future Career Before You Commit"
        subtitle={
          <>
            <span className="relative inline-block px-1">
              <span className="text-brand-primary relative z-10 font-semibold">
                Career Verse™
              </span>
              <span className="bg-brand-bg absolute inset-0 z-0 scale-y-110 rotate-[-2deg] rounded-sm"></span>
            </span>{" "}
            is a simulation-first, India’s first AI-guided career discovery
            journey for students in{" "}
            <span className="relative inline-block px-1">
              <span className="text-brand-primary relative z-10 font-semibold">
                Grade 9 to UG final year.
              </span>
              <span className="absolute inset-0 z-0 scale-y-110 rotate-[-2deg] rounded-sm bg-green-100"></span>
            </span>
            .
          </>
        }
        description={
          <>
            Walk through real-world career scenarios, make critical decisions,
            reflect on your fit and get a{" "}
            <span className="relative inline-block px-1">
              <span className="text-brand-primary relative z-10 font-semibold">
                personalized Role Fit Report + Learning Plan,
              </span>
              <span className="bg-brand-bg absolute inset-0 z-0 scale-y-110 rotate-[-2deg] rounded-sm"></span>
            </span>
            all in a gamified, emotionally intelligent experience.
          </>
        }
        buttonText="Start Program Now"
        buttonLink="/#"
        secondaryButtonText="See How It Works"
        secondaryButtonLink="/#"
        image="/careerverse/hero.png"
        imageAlt="Student learning"
      />
      <CvpVideo
        heading="Step Inside the Experience of the Career Verse™"
        subheading="Take a quick look at how our AI-driven journey helps you discover your strengths, map career paths, and make smarter choices."
        videoId="ScMzIvxBSi4"
        thumbnail="/video.png"
      />
      <WhyCvpLite
        heading="Why Career Verse™?"
        subheading="Because you shouldn't choose your career based on guesswork or generic quizzes."
        avoidTitle="Most Platforms Do This..."
        experienceTitle="Career Verse™ Does This Instead..."
        avoid={[
          "Give you static personality tests",
          "Show generic career lists",
          "Give aptitude scores",
          "Say “You can be a doctor”",
        ]}
        experience={[
          "Puts you inside real-world career situations",
          "Lets you experience tasks, teams, feedback",
          "Gives you confidence insights & skill gaps",
          "Asks “Can you handle a day in a hospital?”",
        ]}
        ctaText="Try the Career Verse™"
        ctaLink="/#"
      />
      <CvpInside
        heading="What You’ll Experience"
        subheading="Explore immersive career environments where you’ll take on real tasks, face industry scenarios, and uncover what truly excites you."
        features={insideData}
        ctaText="Start Your Journey Today"
        ctaLink="/#"
      />
      <CvpRealworld
        heading="CareerVerse™ Real World Use Cases"
        subheading="Career discovery is no longer about watching videos or taking a quiz — it’s about stepping into the role and living it. These are real use cases of how Indian students use CareerVerse™ to make life-changing career decisions."
        items={useCases}
        quoteOverlay
      />
      <CvpPricing
        heading="Pricing & Access"
        subheading="CareerVerse™ is a premium experience made affordable."
        plans={[
          {
            title: "Basic",
            description: "Perfect to explore and get started",
            price: "Free",
            priceText: "Start My Career Simulation",
            features: [
              "Account Creation",
              "Dashboard View",
              "Profile Setting",
              "Role Selection",
            ],
          },
          {
            title: "Premium Plan",
            description: "Best for Premium Experience",
            price: "₹1,999",
            priceText: "Start My Career Simulation",
            features: [
              "Account Creation",
              "Dashboard View",
              "Profile Setup",
              "Simulate 3 Chosen Roles",
            ],
            highlight: true,
          },
        ]}
        footerText="Institutional Pricing Available. Please"
        footerLink={{ text: "Contact Us", href: "/contact" }}
      />
      <CvpLiteWorks
        heading="Who Can Use This?"
        subheading="Youth Pulse Digital™ believes that career clarity is not just a goal it’s a guided evolution."
        audience={audience}
        ctaText="Start Your Journey Today"
        ctaLink="/#"
        ctaSubtext="Perfect first step before college, entrance exams, or big decisions."
      />
      {/*  */}
      {/* SECTION TO ADD (STILL CURIOUS?) */}
      {/*  */}
      <CvpSecurity />
      <CvpImpact
        heading="Real Impact, Real Results"
        description="CareerVerse™ isn’t about information — it’s about transformation. Built for Indian students to step into the real world of careers before making decisions that shape their future."
        stats={[
          {
            value: "94%",
            description:
              "of students say the simulation gave them clearer direction about which roles match their interests and personality.",
          },
          {
            value: "88%",
            description:
              "reported that the final report helped them have a more focused discussion with parents or mentors.",
          },
          {
            value: "91%",
            description:
              "said they could now explain their career choice with confidence in interviews and college applications.",
          },
        ]}
        image={{
          src: "/cvplite/impact.png",
          alt: "Student and parent smiling",
        }}
        footerLine="Pilot phase Launched in 2024, CareerVerse™ is already being piloted across institutions & individuals in India and growing monthly."
      />
      <CvpFeedback reviews={ReviewsData} />
      <CvpSeperate
        bgImage="/cvplite/cvpbg.svg"
        heading={
          <>
            <span className="font-bold">CareerVerse™</span> → Your Gateway to
            Future-Ready Decision-Making
          </>
        }
        subheading="Because when you know what fits, you grow with purpose."
        ctaText="Start Your Career Journey Today"
        ctaHref="/start"
        ctaIcon={<ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />}
      />
      <Faq faqs={careerversefaq} />
    </>
  );
};

export default page;
