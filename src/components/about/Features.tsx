import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface FeatureSectionProps {
  title: string;
  content: string[];
  imageSrc: string;
  reverse?: boolean;
  checklist?: boolean;
}

function FeatureSection({
  title,
  content,
  imageSrc,
  reverse = false,
  checklist = false,
}: FeatureSectionProps) {
  return (
    <div
      className={`flex flex-col lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      } items-center gap-4 sm:gap-10 lg:gap-14`}
    >
      {/* Text Content */}
      <div className="flex flex-1 flex-col gap-4 sm:gap-6 w-full">
        <h3 className="font-red-rose text-lg sm:text-2xl">{title}</h3>
        <ul className="flex flex-col items-start gap-4 text-brand-gray text-base sm:text-lg leading-relaxed">
          {content.map((text, i) =>
            checklist ? (
              <li key={i} className="flex justify-center items-start gap-3">
                <CheckCircle2 className="w-6 h-6 mt-1 flex-shrink-0 text-brand-primary" />
                <span className="text-sm sm:text-lg text-brand-gray">
                  {text}
                </span>
              </li>
            ) : (
              <li
                key={i}
                className="list-disc list-inside text-sm sm:text-lg text-brand-gray"
              >
                {text}
              </li>
            )
          )}
        </ul>
      </div>

      {/* Image */}
      <div
        className="
        relative w-full h-[240px] sm:h-[300px] lg:h-[360px] rounded-2xl overflow-hidden shadow-md lg:flex-1 flex-shrink-0"
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className="p-4 sm:p-10 lg:p-20 bg-white flex justify-center font-lato">
      <div className="max-w-[1440px] w-full flex flex-col gap-4 sm:gap-10 lg:gap-14">
        {/* Heading + Intro */}
        <div className="text-center flex flex-col gap-4 max-w-5xl mx-auto">
          <h2 className="font-red-rose text-2xl sm:text-3xl text-center">
            Youth Pulse Digital™ Your Complete AI-Powered Learning Companion
          </h2>
          <p className="text-base sm:text-lg text-brand-gray max-w-4xl text-center">
            We help students and professionals go from &quot;I&apos;m confused
            about my future&quot; to &quot;I know exactly what to do next&quot;
            through India’s most advanced Self-Serve AI Platform.
          </p>
        </div>

        {/* Section 1 */}
        <FeatureSection
          title="What Makes Us Different:"
          checklist
          imageSrc="/about/info.png"
          content={[
            "24/7 AI Mentors that understand you emotionally and culturally like talking to a friend who gets Indian students",
            "Private Space for your personal learning journey completely confidential and judgement-free",
            "Personalized Learning Paths for CBSE Class 10, NDA entrance, career planning, and more",
            "Conversational AI powered by our proprietary framework not generic chatbots, but mentors trained specifically for Indian learners",
            "Bridges Employability Gaps from Tier-1 metros to Tier-4 cities, we ensure every student gets industry-ready skills and career opportunities regardless of location",
          ]}
        />

        {/* Section 2 */}
        <FeatureSection
          title="How YPD Goes Beyond Traditional EdTech?"
          imageSrc="/about/info.png"
          reverse
          content={[
            "Real-time feedback and career redirection powered by behavioral inputs",
            "AI-Powered Mentor Guides that evolve with your growth",
            "Alternate career pathway mapping using agility & transferable skills",
            "Skill-building nudges, portfolio milestones, and innovation challenges",
            "Support during board prep, entrance readiness, interviews, and transitions",
          ]}
        />
      </div>
    </section>
  );
}
